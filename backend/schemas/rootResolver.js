
// Models

// Middleware

// resolvers
const { addUser, signIn, me } = require('./resolvers/userResolvers');
const { addProduct, products } = require('./resolvers/productResolvers');

let resolvers = {
    Query: {
        me,
        products
    },
    Mutation: {
        addProduct,
        addUser,
        signIn
    }
}

module.exports = resolvers