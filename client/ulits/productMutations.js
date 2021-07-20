
import { gql } from '@apollo/client';

export const ADD_PRODUCT = gql`
	mutation addProduct( $name: String!, $price: String!, $department: String!, $summary: String!, $createdBy: String!, $image: String!, $viewCount: String!, $inTheirCart: String!  ) {
		addProduct( name: $name, price: $price, department: $department, summary: $summary, createdBy: $createdBy, image: $image, viewCount: $viewCount, inTheirCart: $inTheirCart ) {
			name
			price
			department
			createdBy
			summary
			viewCount
		}  
	}
`;