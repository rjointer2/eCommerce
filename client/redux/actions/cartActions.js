
import { useMutation } from '@apollo/client';
import { ADD_PRODUCT_TO_CART } from '../../ulits/mutations/productMutations';
import * as cartTypes from '../constants/cartConstants';

export const addToCart = (productId) => (dispatch) => {
    dispatch({
        type: cartTypes.ADD_TO_CART,
        payload: productId
    });

}