
// resolvers
const { addUser, sign, me, updateVendorStatus } = require('./resolvers/userResolvers');
const { addProduct, products, addProductToCart, removeProductFromCart, resetCart } = require('./resolvers/productResolvers');

let resolvers = {
    Query: {
        me,
        products
    },
    Mutation: {
        removeProductFromCart,
        updateVendorStatus,
        addProductToCart,
        addProduct,
        resetCart,
        addUser,
        sign
    }
}

module.exports = resolvers