
import { gql } from '@apollo/client';

export const GET_CURRENT_USER = gql`
    mutation currentUser( $username: String! ) {
        currentUser( username: $username ) {
            _id
            username
            email
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser( $email: String!, $password: String!, $username: String!, $cart: String!, $products: String!, $isVendor: Boolean! ) {
        addUser( email: $email, password: $password, username: $username, cart: $cart, products: $products, isVendor: $isVendor ) {
            email
            password
            username
            isVendor
        }
    }
`;

export const SIGN_IN = gql`
    mutation signIn( $username: String!, $password: String! ) {
        signIn( username: $username, password: $password ) {
            token 
            user {
                username
                email
                isVendor
            }
        }
    }
`;