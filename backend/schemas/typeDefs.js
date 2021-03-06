
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
        resetCart( userId: String! ): User
        removeProductFromCart( userId: String!, productId: String! ): User
        addProductToCart( userId: String!, productId: String! ): User
        addProduct( name: String!, price: String!, department: String!, summary: String!, createdBy: String!, image: String!, viewCount: String!, amount: String! ): Product
        addUser( email: String!, password: String!, username: String!, cart: String!, products: String!, isVendor: Boolean! ): User 
        sign( username: String!, password: String!, type: String! ): Auth
        updateVendorStatus( userId: String! ): User
    }

`;

module.exports = typeDefs;