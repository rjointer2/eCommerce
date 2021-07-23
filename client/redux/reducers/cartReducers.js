
import * as cartTypes from '../constants/cartConstants'

export const cartReducer = (state = {cart: []}, action) => {

    console.log(action.payload)

    switch(action.type) {
        case cartTypes.ADD_TO_CART: 

            state.cart.push(action.payload);
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }


        default: return state
    }

}