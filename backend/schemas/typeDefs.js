
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
        _id: ID!
        name: String!
        price: String!
        department: String!
        createdBy: String!
        image: String!
        summary: String!
    }

    type Image {
        image: String!
        fileName: String!

    }

    type Mutation {
        addProduct( name: String!, price: Int!, department: String!, summary: String!, createdBy: String!, image: String! ): Product
        addImage( image: String!, fileName: String! ): Image
    }

`;

module.exports = typeDefs;