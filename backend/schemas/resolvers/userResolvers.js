
// Modules
const { AuthenticationError } = require('apollo-server-express');

// Models
const User = require('../../models/Users');
const Products = require('../../models/Products');


module.exports = {

    me: async ( _parent, _args, context ) => {
        const username = context.verify().user;
        console.log(username)
        // if the context's auth middleware was used that located that user
        if( username ) {
            const user = await User.findOne({ username: username });
            return {
                _id: user.id,
                username: user.username,
                email: user.email,
                cart: (async () => {
                    // empty array we will return to query
                    const array = [];
                    const parsedCart = JSON.parse(user.cart)
                    // make a array of keys
                    const keys = Object.keys(parsedCart);
                    // for each key find the product assiocated with the key
                    for(let i = 0; i < keys.length; i++) {
                        array.push(await Products.findById(keys[i]));
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
    
    sign: async ( _parent, args, context ) => {
        console.log(args.type)
        if(args.type === "sign_in") {
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
        if(args.type === 'sign_out') {
            context.destoryToken();
        }
    },

    updateVendorStatus: async ( _parent, args ) => {
        console.log('test')
        const user = await User.findById(args.userId);
        user.isVendor = !user.isVendor
        await user.save()
        return user
    }
    
}