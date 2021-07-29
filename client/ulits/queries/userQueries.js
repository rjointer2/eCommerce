
import { gql } from '@apollo/client';

export const GET_USER = gql`
    {
        me {
            _id
            username
            email
            isVendor
            products {
                _id
                name
                price
                summary
                viewCount
                createdBy
                department
                image
            }
            cart {
                _id
                name
                price
                summary
                viewCount
                createdBy
                department
                image
            }
        }
    }
`;