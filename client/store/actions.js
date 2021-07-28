import { ADD_TO_CART, REMOVE_FROM_CART, RESET_CART } from "./constants"


export const addProductToCartClient = (data, user) => { return { type: ADD_TO_CART, payload: data, user } };
export const removeFromCartClient = () => { return { type: REMOVE_FROM_CART } };
export const resetCartClient = () => { return { type: RESET_CART} };

