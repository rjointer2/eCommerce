
// grab the module to create type definitions
const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID!
        email: String!
        username: String!
        password: String!
        cart: [Product]
        products: [Product]
        isVendor: Boolean!
    }

    type Product {
        _id: ID!
        name: String!
        price: String!
        department: String!
        summary: String!
        image: String!
        createdBy: String!
        viewCount: String!
        inTheirCart: User
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        products: [Product]
    }

    type Mutation {
        addProductToCart( userId: String!, productId: String! ): User
        addProduct( name: String!, price: String!, department: String!, summary: String!, createdBy: String!, image: String!, viewCount: String!, inTheirCart: String! ): Product
        addUser( email: String!, password: String!, username: String!, cart: String!, products: String!, isVendor: Boolean! ): User 
        signIn( username: String!, password: String! ): Auth
    }

`;

module.exports = typeDefs;