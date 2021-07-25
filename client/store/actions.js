import { ADD_TO_CART, REMOVE_FROM_CART, RESET_CART } from "./constants"


export const addToCart = (data) => { return { type: ADD_TO_CART, payload: data } };
export const removeFromCart = () => { return { type: REMOVE_FROM_CART } };
export const resetCart = () => { return { type: RESET_CART} };