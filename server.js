
// port 
const _PORT = process.env.PORT || 3001

// modules
const express = require('express');
const next = require('next');
const { ApolloServer } = require('apollo-server-express');

// environment 
const dev = process.env.NODE_ENV !== 'production'


const app = next({ dev });
const handle = app.getRequestHandler();

// TypeDefs
const typeDefs = require('./backend/_schemas/typeDefs');
// Resolvers 
const resolvers = require('./backend/_schemas/rootResolver');
// Authentication Middleware
const authenticationMiddleware = require('./backend/_middleware/authMiddlleware');


// apollo server that will typeDefs, resolvers, and schema, and any other middleware
const apolloServer = new ApolloServer({
    // Type Definitions Here
    typeDefs,
    // Resolvers Here
    resolvers,
    // Middleware Here
    context: authenticationMiddleware
})

// cloudinary configs
const { cloudinary } = require('./backend/configs/cloudinary')

app.prepare().then(() => {

    const server = express();
    // we have to pass server as a property to the app key
    apolloServer.applyMiddleware({ app: server })

    server.get('*', (req, res) => {
        return handle(req, res)
    });

    server.listen(3001, err => {
        if(err) throw err
        console.log('listening for request')
    })

}).catch(err => {
    console.log(err);
    process.exit(1);
})  
