
// constants import as actionTypes
import * as actionTypes from '../constants/cartConstants';

// the action arg is the type given from the action function
// this type of the prop of the action arg
export const cartReducer = (state = { cartItems: [] }, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            // the payload from the dispatch function is a item
            const item = action.payload;
            // we first have to make sure the item doesn't exist in the 
            // cart already
            const dupItem = state.cartItems.find((i) => i.product === item.product);
            // if we find a dup then the item exist we have to return 
            // a new copy of the state 
            if(dupItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(i => i.product )
                }
            };


        default: return state;
    }
}