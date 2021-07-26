
// modules
const { ApolloError } = require('apollo-server-express');

// Models
const Product = require('../../models/Products');
const User = require('../../models/Users');


module.exports = {

    addProductToCart: async (_parent, args) => {
        try {
            const user = await User.findById(args.userId);
            console.log(user)
            // get the user's prop inTheirCart and set as dictionary
            const dictionary = JSON.parse(user.cart);
            dictionary[args.productId] = args.userId;
            // string the dictionary and save it to the db
            user.cart = JSON.stringify(dictionary);
            await user.save();

            return {
                _id: user.id,
                username: user.username,
                email: user.email,
                cart: (() => {
                    const array = [];
                    // make a array of key
                    const userCart = JSON.parse(user.cart)
                    const keys = Object.keys(userCart);
                    console.log(keys)
                    // techincally speaking we can use the then method
                        // rather than the entire query but graphql return the document model
                    for(let i = 0; i < keys.length; i++) {
                        array.push(Product.findById(keys[i]))
                    }
                    return array
                })()
            };
        } catch(err) {
            console.log(err)
        }
    },

    products: async () => {
        try {
            console.log('test')
            return Product.find().then(products => products.map(product => {
                return {
                    _id: product.id,
                    name: product.name,
                    price: JSON.stringify(product.price),
                    summary: product.summary,
                    createdBy: product.createdBy,
                    department: product.department,
                    viewCount: product.viewCount,
                    image: product.image
                }
            }))
        } catch(err) {
            console.log(err)
            throw err
        }
    },

    addProduct: async function( _parent, args) {
        try {
            const product = await Product.create({
                name: args.name,
                price: parseInt(args.price),
                department: args.department,
                summary: args.summary,
                createdBy: args.createdBy,
                inTheirCart: "[]",
                viewCount: parseInt(args.viewCount),
                image: args.image
            });
            console.log(`${args.createdBy} has been uploaded to the database`);

            return {
                name: product.name,
                price: JSON.stringify(product.price),
                department: product.department,
                summary: product.summary,
                createdBy: product.createdBy,
                viewCount: JSON.stringify(product.viewCount),
                inTheirCart: "[]"
            }
        } catch (err) {
            console.log(err)
            throw ApolloError
        }
    },

    // remove from cart 
    removeFromCart: async function( _parent, args ) {
        // args.userId
        // args.productId
        
        try {
            // we want to find the user and return the user for the query
            const user = await User.findById(args.userId);
            // We want to use Product model to find by id of the 
            return {
                _id: user.id,
                username: user.username,
                cart: (() => {
                    const cart = JSON.parse(user.cart);
                    delete cart[args.productId];
                    
                })()
            }
            // product in their cart prop of the user 
            // and then delete it
        } catch(err) {

        }

    }
}