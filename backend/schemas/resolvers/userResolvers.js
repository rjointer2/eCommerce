
// Modules
const { AuthenticationError } = require('apollo-server-express');
const User = require('../../models/Users');

// authentication middleware
const { signToken } = require('../../middleware/authMiddlleware');


module.exports = {

    me: async ( _parent, _args, context ) => {

        const username = context.verify().user;
        console.log(username)
        // if the context's auth middleware was used that located that user
        if( username ) {
            console.log('test')
            const user = await User.findOne({ username: username });
            console.log(user)
            return {
                _id: user.id,
                username: user.username
            }
        }
    
        throw new AuthenticationError('Authentican Error! You must be logged in!');
    },
    
    addUser: async ( parent, args ) => {
    
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
    
    },
    
    signIn: async ( _parent, args, context ) => {
    
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
        const token = context.authenticate(user);
    
        return { token, user };
    
    }
    
}