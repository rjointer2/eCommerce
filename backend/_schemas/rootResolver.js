
// Models

// Middleware

// resolvers
const { users } = require('./resolvers/userResolvers')

let resolvers = {
    Query: {
        users
    }
}

module.exports = resolvers