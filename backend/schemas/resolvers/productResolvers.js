
// modules
const { cloudinary } = require('../../configs/cloudinary');
const Product = require('../../models/Proudct')

const addProduct = async (parent, args) => {

    try {
        console.log(args)
        await Product.create({
            name: args.name,
            price: parseInt(args.price),
            department: args.department,
            summary: args.summary,
            createdBy: args.createdBy,
        });
        console.log(args)
        const uploadedResponse = await cloudinary.uploader.upload(args.image, {
            upload_preset: 'eCommerceImages',
            public_id: args.name
        })
        console.log(uploadedResponse)
        return {
            name: args.name,
            price: args.price,
            department: args.department,
            summary: args.summary,
            createdBy: args.createdBy,
        }
    } catch (err) {
        console.log(err)
        throw err
    }

}

module.exports = {
    addProduct
}