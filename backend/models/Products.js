
const { model, Schema } = require('mongoose');

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        department: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        summary: {
            type: String,
            required: true,
        },
        createdBy: {
            type: String,
            required: true,
        },
        inTheirCart: {
            type: String,
            ref: 'User'
        },
        viewCount: {
            type: Number, 
        }
    }
)

const Products = model('Products', productSchema);

module.exports = Products;