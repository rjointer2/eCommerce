
// the types and if the type match the action's arg then return the 
// state to the type's case
import * as actionTypes from './constants'

// this reducer takes a state and action with the type and payload props
const reducer = ( state = { cart: [], user: null }, action ) => {
    
    // once the action function is passed in the reducer, we can specify
    // how the store's return the state
    switch( action.type ) {

        case actionTypes.UPDATE_CART:

            return {
                ...state,
                cart: action.payload, user: action.user
            }

        default: return state
    }
}

export default reducer;