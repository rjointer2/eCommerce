
// modules
const { ApolloError } = require('apollo-server-express');
const { cloudinary } = require('../../configs/cloudinary');
const Product = require('../../models/Products');
const User = require('../../models/Users');


module.exports = {

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
                inTheirCart: args.inTheirCart,
                viewCount: parseInt(args.viewCount)
            });
            console.log(`${args.createdBy} has been uploaded to the database`);
            
            const uploadedResponse = await cloudinary.uploader.upload(args.image, {
                upload_preset: 'eCommerceImages',
                public_id: args.name
            });
            console.log(`${args.createdBy}'s image ${args.name} has been uploaded to the cloud storage`);

            // find the user that created the product
            const user = await User.findOne({ username: args.createdBy });
            // get access to the string object and parse it in a object
            const productsDictionary = JSON.parse(user.products);
            // stringifiy the dictionary
            productsDictionary[product.id] = user.id;
            console.log(productsDictionary);
            user.products = JSON.stringify(productsDictionary);
            // and save the product to the db
            await user.save();

            console.log(`${user.username}'s product has been saved!`)

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