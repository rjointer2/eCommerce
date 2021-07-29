
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
        },
        viewCount: {
            type: String, 
        },
        image: {
            type: String,
            required: true,
        },
        amount: {
            type: String,
            required: true,
        }
    }
)

const Products = model('Products', productSchema);

module.exports = Products;