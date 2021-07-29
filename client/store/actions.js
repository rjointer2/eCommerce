
import { UPDATE_CART } from "./constants"

export const updateCart = (data, user) => { 
    // since we will always return a cart, we need only one action
    return { type: UPDATE_CART, payload: data, user } 
};
