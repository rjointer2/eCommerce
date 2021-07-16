
import { gql } from '@apollo/client';

export const UPLOAD_IMAGE = gql`
	mutation addImage($image: String!, $fileName: String!) {
		addImage(image: $image, fileName: $fileName) {
			image
			fileName
		}
	}
`;