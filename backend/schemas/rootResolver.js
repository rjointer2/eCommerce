
// Models

// Middleware

// resolvers
const { addUser, signIn } = require('./resolvers/userResolvers');
const { addProduct } = require('./resolvers/productResolvers');

let resolvers = {
    Query: {

    },
    Mutation: {
        addProduct,
        addUser,
        signIn
    }
}

module.exports = resolvers