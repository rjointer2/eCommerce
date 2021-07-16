
// Models

// Middleware

// resolvers
const { users } = require('./resolvers/userResolvers');
const { addImage } = require('./resolvers/imageResolvers');

let resolvers = {
    Query: {
        users
    },
    Mutation: {
        addImage
    }
}

module.exports = resolvers