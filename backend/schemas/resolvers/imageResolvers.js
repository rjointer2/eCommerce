
// modules
const { cloudinary } = require('../../configs/cloudinary');

const addImage = async (parent, args) => {

    try {
        console.log(args)
        // the string base64 image
        const fileString = args.image;
        const uploadedResponse = await cloudinary.uploader.upload(fileString, {
            upload_preset: 'eCommerceImages',
            public_id: args.fileName
        })
        console.log(uploadedResponse)
        return {
            file: "test"
        }
    } catch (err) {
        console.log(err)
        throw err
    }

}

module.exports = {
    addImage
}