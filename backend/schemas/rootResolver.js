
// Models

// Middleware

// resolvers
const { addUser } = require('./resolvers/userResolvers');
const { addProduct } = require('./resolvers/productResolvers');

let resolvers = {
    Query: {

    },
    Mutation: {
        addProduct,
        addUser
    }
}

module.exports = resolvers