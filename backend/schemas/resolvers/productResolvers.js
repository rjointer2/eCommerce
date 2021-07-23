
// modules
const { ApolloError } = require('apollo-server-express');
const { cloudinary } = require('../../configs/cloudinary');
const Product = require('../../models/Products');


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
            console.log(args)
            const product = await Product.create({
                name: args.name,
                price: parseInt(args.price),
                department: args.department,
                summary: args.summary,
                createdBy: args.createdBy,
                inTheirCart: args.inTheirCart,
                viewCount: parseInt(args.viewCount)
            });
            console.log(args)
            const uploadedResponse = await cloudinary.uploader.upload(args.image, {
                upload_preset: 'eCommerceImages',
                public_id: args.name
            })
            console.log(uploadedResponse)
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