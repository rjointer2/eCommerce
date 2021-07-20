
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
