
// Models

// Middleware

// resolvers
const { users } = require('./resolvers/userResolvers');
const { addProduct } = require('./resolvers/productResolvers');

let resolvers = {
    Query: {
        users
    },
    Mutation: {
        addProduct
    }
}

module.exports = resolvers