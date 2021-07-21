
// Modules
const { AuthenticationError } = require('apollo-server-express');
const User = require('../../models/Users');

// authentication middleware
const { signToken } = require('../../middleware/authMiddlleware');

const addUser = async ( parent, args ) => {

    try {
        // return token as well
        console.log(args)
        const user = await User.create(args);
        console.log(user)
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

const signIn = async ( parent, args ) => {


    const user = await User.findOne({ username: args.username });
    console.log(user);

    if(!user) throw new AuthenticationError('User Not Found');
    // if the user is found then use the method from the user model
    // to check if the password is correct
    const correctPassword = await user.isCorrectPassword(args.password);

    if(!correctPassword) {
        console.log('incorrect password');
        throw new AuthenticationError('Incorrect Password');
    }
    // sign the jwt to the user
    const token = signToken(user);

    return { token, user };



}

module.exports = {
    addUser,
    signIn
}