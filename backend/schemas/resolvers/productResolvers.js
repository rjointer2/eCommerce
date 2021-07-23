
// modules
const { ApolloError } = require('apollo-server-express');
const { cloudinary } = require('../../configs/cloudinary');
const Product = require('../../models/Products');
const User = require('../../models/Users');


module.exports = {

    addProductToCart: async (_parent, args) => {

        try {
            const user = await User.findById(args.userId);
            // get the user's prop inTheirCart and set as dictionary
            const dictionary = JSON.parse(user.cart);

            dictionary[args.productsId] = args.userId;
            // string the dictionary and save it to the db
            user.cart = JSON.stringify(dictionary);
            
            await user.save();

            return {
                _id: user.id,
                username: user.username,
                email: user.email,
                cart: user.cart
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
                    // inTheirCart should return a user
                    inTheirCart: '',
                    viewCount: product.viewCount
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
                inTheirCart: "{}",
                viewCount: parseInt(args.viewCount)
            });
            console.log(`${args.createdBy} has been uploaded to the database`);
            
            const uploadedResponse = await cloudinary.uploader.upload(args.image, {
                upload_preset: 'eCommerceImages',
                public_id: args.name
            });

            return {
                name: product.name,
                price: JSON.stringify(product.price),
                department: product.department,
                summary: product.summary,
                createdBy: product.createdBy,
                viewCount: JSON.stringify(product.viewCount)
            }
        } catch (err) {
            console.log(err)
            throw ApolloError
        }
    
    }
}