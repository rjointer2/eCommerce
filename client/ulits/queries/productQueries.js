
import { gql } from '@apollo/client';

export const PRODUCTS = gql`
    query {
        products {
            _id
            name
            price
            summary
            viewCount
            createdBy
            department
            inTheirCart {
            _id
            }
        }
    }
`;