
// Models

// Middleware

// resolvers
const { addUser, signIn, me } = require('./resolvers/userResolvers');
const { addProduct } = require('./resolvers/productResolvers');

let resolvers = {
    Query: {
        me
    },
    Mutation: {
        addProduct,
        addUser,
        signIn
    }
}

module.exports = resolvers