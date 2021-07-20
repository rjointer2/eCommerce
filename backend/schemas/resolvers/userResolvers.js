
// Modules
const { AuthenticationError } = require('apollo-server-express');
const User = require('../../models/Users');

const addGuestUser = async ( parent, args ) => {
    
    try {
        const user = User.create(args);

        // authentication middleware to sign the user into their localStorage


        // return token as well
        return {
            _id: user.id,
            username: user.username,
            password: user.password,
            email: user.email,
            cart: user.cart
        }
    } catch(err) {
        if(err) throw new AuthenticationError
    }

}

const addVenderUser = async ( parent, args ) => {

    try {
        const user = User.create(args);
        // authentication middleware to sign the user into their localStorage


        // return token as well
        return {
            _id: user.id,
            username: user.username,
            password: user.password,
            email: user.email,
            products: user.products
        }
    } catch(err) {
        if(err) throw new AuthenticationError
    }

}

module.exports = {
    addGuestUser,
    addVenderUser
}