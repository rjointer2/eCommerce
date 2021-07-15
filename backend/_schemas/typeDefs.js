
// grab the module to create type definitions
const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        users: [User]
    }

    type User {
        _id: ID!
    }

`;

module.exports = typeDefs;