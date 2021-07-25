
// Models

// Middleware

// resolvers
const { addUser, signIn, me } = require('./resolvers/userResolvers');
const { addProduct, products, addProductToCart } = require('./resolvers/productResolvers');

let resolvers = {
    Query: {
        me,
        products
    },
    Mutation: {
        addProductToCart,
        addProduct,
        addUser,
        signIn
    }
}

module.exports = resolvers