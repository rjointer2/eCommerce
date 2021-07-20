
// Models

// Middleware

// resolvers
const { addGuestUser, addVenderUser } = require('./resolvers/userResolvers');
const { addProduct } = require('./resolvers/productResolvers');

let resolvers = {
    Query: {
        addGuestUser
    },
    Mutation: {
        addProduct,
        addGuestUser,
        addVenderUser
    }
}

module.exports = resolvers