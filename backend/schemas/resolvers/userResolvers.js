
// Modules
const { AuthenticationError } = require('apollo-server-express');
const User = require('../../models/Users');
const Products = require('../../models/Products');

// authentication middleware
const { signToken } = require('../../middleware/authMiddlleware');



module.exports = {

    me: async ( _parent, _args, context ) => {

        const username = context.verify().user;
        // if the context's auth middleware was used that located that user
        if( username ) {
            const user = await User.findOne({ username: username });
            console.log(user)
            return {
                _id: user.id,
                username: user.username,
                email: user.email,
                cart: (() => {
                    // empty array we will return to query
                    const array = [];
                    // make a array of keys
                    const keys = Object.keys(user.cart);
                    // for each key find the product assiocated with the key
                    for(let i = 0; i < keys.length; i++) {
                        array.push(Products.findById(keys[i]));
                    }
                    return array;
                })(),
                products: Products.find().then(products => products.filter(product => product.createdBy === user.username)),
                isVendor: user.isVendor,
            }
        }
    
        throw new AuthenticationError('Authentican Error! You must be logged in!');
    },
    
    addUser: async ( parent, args ) => {
    
        try {
            // return token as well
            console.log(args)
            const user = await User.create({
                _id: args.id,
                username: args.username,
                password: args.password,
                email: args.email,
                cart: "",
                products: "",
                isVendor: args.isVendor,
            });
            console.log(user)
            return user;
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
    
        return { token, user};
    
    }
    
}