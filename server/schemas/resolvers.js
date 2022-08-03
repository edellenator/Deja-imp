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
        users: async () => {
            return User.find()
              .select('-__v -password');
        },
        vendor: async (parent, { _id }) => {
            return Vendor.findById(_id);
        },
        vendors: async () => {
            return Vendor.find()
              .select('-__v')
              .populate('products')
              .populate('notes');
        },
        product: async (parent, { _id }) => {
            return Product.findById(_id);
        },
        products: async () => {
            return Product.find()
              .select('-__v')
              .populate('vendor');
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
          
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
          
            const correctPw = await user.isCorrectPassword(password);
          
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
          
            const token = signToken(user);
            return { token, user };
          },
          addVendor: async (parent, args) => {
            return Vendor.create(...args);
          },
          addProduct: async (parent, args) => {
            return Product.create(...args);
          },
          deleteProduct: async (parent, { _id }) => {
            return Product.findOneAndDelete({ id: _id });
          }
    }
}