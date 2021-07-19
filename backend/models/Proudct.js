
const { model, Schema } = require('mongoose');

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        department: {
            type: String,
            required: true,
        },
        summary: {
            type: String,
            required: true,
        },
        createdBy: {
            type: String,
            required: true,
        }
    }
)

const Product = model('Product', productSchema);

module.exports = Product;