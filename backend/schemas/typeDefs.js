
// grab the module to create type definitions
const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type GuestUser {
        _id: ID!
        name: String!
        email: String!
        username: String!
        password: String!
        cart: [Product]!
    }

    type VendorUser {
        _id: ID!
        name: String!
        email: String!
        username: String!
        password: String!
        product: [Product]!
    }

    type Product {
        name: String!
        price: String!
        department: String!
        summary: String!
        image: String!
        createdBy: String!

    }

    type Query {
        users: [User]
    }

    type Mutation {
        addProduct(name: String!, price: String!, department: String!, summary: String!, createdBy: String!, image: String!): Product
        addGuestUser(name: String!, email: String!, password: String!, username: String!, cart: String!): GuestUser 
        addVenderUser(name: String!, email: String!, password: String!, username: String!, products: String!): VendorUser 
    }

`;

module.exports = typeDefs;