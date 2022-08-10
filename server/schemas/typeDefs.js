const { gql } = require("apollo-server-express");

const typeDefs = gql`
  input VendorInput {
    vendorName: String
    street: String
    city: String
    state: String
    zip: Int
  }

  input ContactInput {
    contactName: String
    title: String
    email: String
    phoneNumber: String
  }

  input ProductInput {
    vendorId: ID
    name: String
    SKU: String
    stock: Int
    description: String
    color: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Product {
    _id: ID
    vendorId: ID
    name: String
    SKU: String
    vendor: Vendor
    stock: Int
    description: String
    color: String
  }

  type Vendor {
    _id: ID
    vendorName: String
    contact: [Contact]
    street: String
    city: String
    state: String
    zip: Int
    products: [Product]
    notes: [Note]
  }

  type Note {
    _id: ID
    notesBody: String
    createdAt: String
  }

  type Contact {
    _id: ID
    contactName: String
    title: String
    email: String
    phoneNumber: String
  }

  type Query {
    me: User
    user(_id: ID!): User
    users: [User]
    vendor(_id: ID!): Vendor
    vendors: [Vendor]
    product(_id: ID!): Product
    products: [Product]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addVendor(
      input: VendorInput
      contactName: String
      title: String
      email: String
      phoneNumber: String
    ): Vendor
    updateVendor(_id: ID!, input: VendorInput!): Vendor
    deleteVendor(_id: ID!): Vendor
    addContact(vendorId: ID!, input: ContactInput!): Vendor
    addNote(vendorId: ID!, notesBody: String!): Vendor
    deleteNote(vendorId: ID!, _id: ID!): Vendor
    deleteContact(vendorId: ID!, email: String!): Vendor
    addProduct(input: ProductInput): Product
    deleteProduct(_id: ID!): Product
    deleteUser(_id: ID!): User
    updateStock(_id: ID!, stock: Int!): Product
    updateProduct(_id: ID!, input: ProductInput): Product
  }
`;

module.exports = typeDefs;
