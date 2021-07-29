
import { gql } from '@apollo/client';

export const ADD_PRODUCT = gql`
	mutation addProduct( $name: String!, $price: String!, $department: String!, $summary: String!, $createdBy: String!, $image: String!, $viewCount: String! $amount: String! ) {
		addProduct( name: $name, price: $price, department: $department, summary: $summary, createdBy: $createdBy, image: $image, viewCount: $viewCount, amount: $amount ) {
			name
			price
			department
			createdBy
			summary
			viewCount
		}  
	}
`;

export const ADD_PRODUCT_TO_CART = gql`
	mutation addProductToCart ( $userId: String!, $productId: String! ) {
		addProductToCart (userId: $userId, productId: $productId) {
			cart {
				_id
				name
				summary
				department
				createdBy
				image
			}
		}
	}
`;

export const REMOVE_PRODUCT_FROM_CART = gql`
	mutation removeProductFromCart($userId: String!, $productId: String!) {
		removeProductFromCart(userId: $userId, productId: $productId) {
			cart {
				_id
				name
				summary
				department
				createdBy
				image
			}
		}
	}
`;

export const RESET_CART = gql`
	mutation resetCart( $userId: String! ) {
		resetCart( userId: $userId ) {
		_id
		}
	}
`;