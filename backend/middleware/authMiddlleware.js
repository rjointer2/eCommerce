
// json web token here

const jwt = require('jsonwebtoken');
require('dotenv').config();

// set token secret and expiration date
const secret = process.env.SECRET;
const expiration = '2h';

module.exports = {
    //funtion for our authenticated routes
    authenticationMiddleware: function ({req, res}) {
        return {
            // set header with jwt
            authenticate: function({ username, email, _id }) {
                console.log( `Sending ${username} headers for authenicating`);
                // this will be encoded in the jwt send in the header and query
                const payload = { username, email, _id };
                // header with the jwt, use this to verify the user
                req.header.authorization = jwt.sign({ data: payload}, secret, {expiresIn: expiration});
                // return the token to the sign in resolver
                return jwt.sign({ data: payload}, secret, {expiresIn: expiration})
            },
            // get jwt from header
            verify: function() {
                // if the header is falsy then return a object with user and let
                // the me query error this auth error
                if(!req.header.authorization) return { user: null };
                // decode the token for verification
                const token = req.header.authorization.split(' ').pop().trim();
                const { data } = jwt.verify(token, secret, { maxAge: expiration });
                console.log(`${data.username} has been verified!`);
                // now return the username to the me resolver so it can 
                // aggregate and return the user to be queried
                return { user: data.username, token }
            },
            destoryToken: function() {
                console.log('Sign Out Successful and tokens destoryed')
                req.header.authorization = null;
            }
        }
    }
}

