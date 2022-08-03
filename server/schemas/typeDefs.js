const { gql } = require('apollo-server-express');

const typeDefs = gql`
    input VendorInput {
        vendor: String!
        contactId: ID
        phone: Int
        street: String
        city: String
        state: String
        zip: Int
    }

    input ProductInput {
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
        name: String
        SKU: String
        vendor: [Vendor]
        stock: Int
        description: String
        color: String
    }

    type Vendor {
        _id: ID
        vendor: String
        contact: [Contact]
        phone: Int
        street: String
        city: String
        state: String
        zip: Int
        products: [Product]
        notes: [Note]
    }

    type Contact {
        _id: ID
        name: String
        title: String
        email: String
    }

    type Note {
        _id: ID
        noteBody: String
        createdAt: String
    }

    type Query {
        me: Auth
        users: [User]
        vendor(_id: ID!): Vendor
        vendors: [Vendor]
        product(_id: ID!): Product
        products: [Product]
    }

    type Mutations {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addVendor(input: VendorInput!): Vendor
        addProduct(input: ProductInput!): Product
        deleteProduct(_id: ID!): Product
        deleteUser(_id: ID!): User
        updateStock(_id: ID!, stock: Int!): Product
        updateVendor(_id: ID!, input: VendorInput!): Vendor
}`

module.exports = typeDefs;