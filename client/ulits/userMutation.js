
import { gql } from '@apollo/client';

export const ADD_USER = gql`
    addUser( $email: String!, $password: String!, $username: String!, $cart: String!, $products: String!, $isVendor: Boolean! ) {
        addUser( email: $email, password: $password, username: $username, cart: $cart, products: $products, isVendor: $isVendor ) {
            name
            email
            password
            username
            cart
            product
            isVendor
        }
    }
`;
