const { User, Product, Vendor } = require('../models/');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if(context.user) {
                const userData = User.findOne({ _id: context.user._id })
                  .select('-__v -password');

                  return userData;
            }
            throw new AuthenticationError('Not logged in');
        },
        users: async (parent, args, context) => {
          if(context.user) {
            return User.find()
              .select('-__v -password');
          }
            throw new AuthenticationError('Not logged in');
        },
        user: async (parent, { _id }, context) => {
          if(context.user) {
            return User.findById(_id)
              .select('-__v -password');
          }
            throw new AuthenticationError('Not logged in');
        },
        vendor: async (parent, { _id }, context) => {
          if(context.user) {
            return Vendor.findById(_id)
              .select('-__v')
              .populate('products')
              .populate('notes');
          }
            throw new AuthenticationError('Not logged in');
        },
        vendors: async (parent, args, context) => {
          if(context.user) {
            return Vendor.find()
              .select('-__v')
              .populate('products')
              .populate('notes');
          }
            throw new AuthenticationError('Not logged in');
        },
        product: async (parent, { _id }, context) => {
          if(context.user) {
            return Product.findById(_id)
              .select('-__v')
              .populate('vendor')
          }
            throw new AuthenticationError('Not logged in');
        },
        products: async (parent, args, context) => {
          if(context.user) {
            return Product.find()
              .select('-__v')
              .populate('vendor');
            }
            throw new AuthenticationError('Not logged in');
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        deleteUser: async (parent, { _id }, context) => {
          if(context.user) {
          return User.findByIdAndDelete({ _id: _id }, { new: true });
        }
        throw new AuthenticationError('Not logged in');
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            console.log(user)
          
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
          
            const correctPw = await user.isCorrectPassword(password);
          
            if (!correctPw) {
              throw new AuthenticationError('Incorrect pw');
            }
          
            const token = signToken(user);
            return { token, user };
          },
          addVendor: async (parent, { input, ...args}, context) => {
            if(context.user) {
              const vendor = await Vendor.create(input);
              if(args) {
                return Vendor.findByIdAndUpdate({ _id: vendor._id },
                  {$addToSet: { contact: args } },
                  { new: true, runValidators: true })
                    .select('-__v')
                    .populate('products')
                    .populate('notes');
              }
              return vendor;
            }
              throw new AuthenticationError('Not logged in');
          },
          addContact: async (parent, { vendorId, input }, context) => {
            if(context.user) {
              return Vendor.findByIdAndUpdate({ _id: vendorId },
                  {$addToSet: { contact: input } },
                  { new: true, runValidators: true })
                    .select('-__v')
                    .populate('products')
                    .populate('notes');
            }
            throw new AuthenticationError('Not logged in');
          },
          updateVendor: async (parent, { _id, input }, context) => {
            if(context.user) {
              return Vendor.findByIdAndUpdate({ _id: _id }, input,
                  { new: true, runValidators: true })
                    .select('-__v')
                    .populate('products')
                    .populate('notes');
            }
            throw new AuthenticationError('Not logged in');
          },
          deleteVendor: async (parent, { _id }, context) => {
            if(context.user) {
              const vendor = await Vendor.findByIdAndDelete({ _id: _id },
                  { new: true })
                    .select('-__v')
                    .populate('products')
                    .populate('notes');

              return vendor;
            }
            throw new AuthenticationError('Not logged in');
            
          },
          deleteContact: async (parent, { vendorId, email }, context) => {
            if(context.user) {
              return Vendor.findByIdAndUpdate({ _id: vendorId },
                  {$pull: { contact: { email: email } } },
                  { new: true })
                    .select('-__v')
                    .populate('products')
                    .populate('notes');
            }
            throw new AuthenticationError('Not logged in');
          },
          addNote: async (parent, { vendorId, noteBody }, context) => {
            if(context.user) {
              return Vendor.findByIdAndUpdate({ _id: vendorId },
                {$addToSet: { notes: noteBody } },
                { new: true, runValidators: true })
                  .select('-__v')
                  .populate('products')
                  .populate('notes');
            }
            throw new AuthenticationError('Not logged in');
          },
          deleteNote: async (parent, { vendorId, _id }, context) => {
            if(context.user) {
              return Vendor.findByIdAndUpdate({ _id: vendorId },
                {$pull: { notes: { _id: _id } } },
                { new: true })
                  .select('-__v')
                  .populate('products')
                  .populate('notes');
            }
            throw new AuthenticationError('Not logged in');
          },
          addProduct: async (parent, { input }, context) => {
            if(context.user) {
              const product = await Product.create(input);

              const vendor = await Vendor.findByIdAndUpdate({ _id: input.vendorId },
                { $addToSet: { products: product } },
                { new: true, runValidators: true }
                );

              return Product.findByIdAndUpdate(
                { _id: product._id },
                { vendor: vendor },
                { new: true, runValidators: true }
              )
              .select('-__v')
              .populate('vendor');
            }
            throw new AuthenticationError('Not logged in');
          },
          updateStock: async (parent, { _id, stock }, context) => {
            if(context.user) {
              return Product.findByIdAndUpdate({ _id: _id },
                  { stock: stock }, { new: true, runValidators: true })
                  .select('-__v')
                  .populate('vendor');
            }
            throw new AuthenticationError('Not logged in');
          },
          updateProduct: async (parent, { _id, input }, context) => {
            if(context.user) {
              return Product.findByIdAndUpdate({ _id: _id },
                input, { new: true, runValidators: true })
                .select('-__v')
                .populate('vendor');
            }
            throw new AuthenticationError('Not logged in');
          },
          deleteProduct: async (parent, { _id }, context) => {
            if(context.user) {
              const product = await Product.findOneAndDelete({ _id: _id }, { new: true });

              const vendor = await Vendor.findByIdAndUpdate(
                { _id: product.vendor },
                { $pull: { products: _id } },
                { new: true, runValidators: true }
              );
              
              return product
            }
            throw new AuthenticationError('Not logged in');
          }
    }
}

module.exports = resolvers;