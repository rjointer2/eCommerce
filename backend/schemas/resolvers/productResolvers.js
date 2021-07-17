
// modules 
const { cloudinary } = require('../../configs/cloudinary');
const Products = require('../../models/Products');

const addProduct = async ( parent, args ) => {

    // create a new Product from the object mutation 
    const product = await Products.create({
        name: args.name,
        price: args.price,
        department: args.department,
        summary: args.summary,
        createdBy: args.createdBy
    });
    // add the image to the cloudinary API and use the arg's name prop to
    // assicote the image with the product
    try {
        //console.log(args)
        // the string base64 image
        const fileString = args.image;
        const uploadedResponse = await cloudinary.uploader.upload(fileString, {
            upload_preset: 'eCommerceImages',
            public_id: args.name
        })
        //console.log(uploadedResponse)
        return {
            name: product.name,
            price: product.price,
            department: product.department,
            summary: product.summary,
            createdBy: product.createdBy
        }
    } catch (err) {
        console.log(err)
        throw err
    }

}

module.exports = {
    addProduct
}