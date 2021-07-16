
const { model, Schema } = require('mongoose');

const Product = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        img: {
            data: Buffer,
            contentType: String
        }
    }
)
