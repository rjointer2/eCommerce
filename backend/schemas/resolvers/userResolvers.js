
// Modules
const { AuthenticationError } = require('apollo-server-express');
const User = require('../../models/Users');

const addUser = async ( parent, args ) => {

    try {
        // return token as well
        const user = await User.create(args);
        return {
            _id: user.id,
            username: user.username,
            password: user.password,
            email: user.email,
            cart: user.cart,
            products: user.products,
            isVendor: user.isVendor
        }
    } catch(err) {
        if(err) throw err
    }

}

module.exports = {
    addUser
}