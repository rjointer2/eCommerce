
require('dotenv').config();

// port 
const _PORT = process.env.PORT || 3001

// modules
const next = require('next');
const express = require('express');
const mongoose = require('mongoose')
const { ApolloServer } = require('apollo-server-express');

// environment 
const dev = process.env.NODE_ENV !== 'production'


const app = next({ dev });
const handle = app.getRequestHandler();

// TypeDefs
const typeDefs = require('./backend/schemas/typeDefs');
// Resolvers 
const resolvers = require('./backend/schemas/rootResolver');
// Authentication Middleware
const { authenticationMiddleware } = require('./backend/middleware/authMiddlleware');


// apollo server that will typeDefs, resolvers, and schema, and any other middleware
const apolloServer = new ApolloServer({
    // Type Definitions Here
    typeDefs,
    // Resolvers Here
    resolvers,
    // Middleware Here
    context: authenticationMiddleware
})


app.prepare().then(() => {

    mongoose.connect(`mongodb+srv://${process.env.UN}:${process.env.PW}@ecommercedb.bpvyj.mongodb.net/${process.env.DB}?retryWrites=true&w=majority` || 'http://localhost:3001', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }, () => {

        const server = express();
        // we have to pass server as a property to the app key
        apolloServer.applyMiddleware({ app: server });

        server.get('*', (req, res) => {
            return handle(req, res)
        });

        server.listen(3001, err => {
            if(err) throw err
            console.log('listening for request')
        })
    })

}).catch(err => {
    console.log(err);
    process.exit(1);
})  
