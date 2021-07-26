
// resolvers
const { addUser, signIn, me } = require('./resolvers/userResolvers');
const { addProduct, products, addProductToCart, removeProductFromCart } = require('./resolvers/productResolvers');

let resolvers = {
    Query: {
        me,
        products
    },
    Mutation: {
        removeProductFromCart,
        addProductToCart,
        addProduct,
        addUser,
        signIn
    }
}

module.exports = resolvers