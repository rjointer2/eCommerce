
import { gql } from '@apollo/client';

export const ADD_PRODUCT = gql`
	mutation addProduct( $name: String!, $price: String!, $department: String!, $summary: String!, $createdBy: String!, $image: String!  ) {
		addProduct( name: $name, price: $price, department: $department, summary: $summary, createdBy: $createdBy, image: $image ) {
			name
			price
			department
			createdBy
			summary
		}  
	}
`;