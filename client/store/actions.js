import { UPDATE_CART } from "./constants"


export const updateCart = (data, user) => { return { type: UPDATE_CART, payload: data, user } };


