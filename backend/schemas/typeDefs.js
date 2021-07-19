
// grab the module to create type definitions
const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        users: [User]
    }

    type User {
        _id: ID!
    }

    type Product {
        name: String!
        price: String!
        department: String!
        summary: String!
        image: String!
        createdBy: String!

    }

    type Mutation {
        addProduct(name: String!, price: String!, department: String!, summary: String!, createdBy: String!, image: String!): Product
    }

`;

module.exports = typeDefs;