
const _PORT = process.env.PORT || 3001

const express = require('express')
const next = require('next');
const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev });
const handle = app.getRequestHandler();

console.log(dev)

app.prepare().then(() => {
    const server = express();

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
