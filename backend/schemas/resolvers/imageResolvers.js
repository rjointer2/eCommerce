
// modules
const { cloudinary } = require('../../configs/cloudinary');

const uploadImageResponse = async (parent, { file }) => {

    try {
        // the string base64 image
        const fileString = file;
        const uploadedResponse = await cloudinary.uploader.upload(fileString, {
            upload_preset: 'dev_setup'
        })
        console.log(uploadImageResponse)
        return {
            message: 'upload completed'
        }

    } catch (err) {
        throw new Error(' Something went wrong with the response, check the following... ');
        console.log(err)
    }

}

module.exports = {

}