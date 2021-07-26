
// resolvers
const { addUser, signIn, me } = require('./resolvers/userResolvers');
const { addProduct, products, addProductToCart, removeProductFromCart, resetCart } = require('./resolvers/productResolvers');

let resolvers = {
    Query: {
        me,
        products
    },
    Mutation: {
        removeProductFromCart,
        addProductToCart,
        addProduct,
        resetCart,
        addUser,
        signIn
    }
}

module.exports = resolvers