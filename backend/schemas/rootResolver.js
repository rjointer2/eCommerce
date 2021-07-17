
// Models

// Middleware

// resolvers
const { users } = require('./resolvers/userResolvers');
const { addImage } = require('./resolvers/imageResolvers');
const { addProduct } = require('./resolvers/productResolvers');


let resolvers = {
    Query: {
        users
    },
    Mutation: {
        addImage,
        addProduct
    }
}

module.exports = resolvers