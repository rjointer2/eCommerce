
// Models

// Middleware

// resolvers
const { addGuestUser, addVendorUser } = require('./resolvers/userResolvers');
const { addProduct } = require('./resolvers/productResolvers');

let resolvers = {
    Query: {
        addGuestUser
    },
    Mutation: {
        addProduct,
        addGuestUser,
        addVendorUser
    }
}

module.exports = resolvers