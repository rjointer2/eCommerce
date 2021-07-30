
import { gql } from '@apollo/client';

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

export const SIGN = gql`
    mutation sign( $username: String!, $password: String!, $type: String! ) {
        sign( username: $username, password: $password, type: $type ) {
            token 
            user {
                username
                email
                isVendor
            }
        }
    }
`;

export const UPDATE_VENDOR_STATUS = gql`
    mutation updateVendorStatus( $userId: String! ) {
        updateVendorStatus( userId: $userId ) {
            isVendor
            username
            _id
        }
    }
`;