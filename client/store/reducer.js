
// all the actions
import * as actionTypes from './constants'

// this reducer takes a state and action with the type and payload props
const reducer = ( state = { cart: [], user: null }, action ) => {
    
    // once the action function is passed in the reducer, we can specify
    // how the store's return the state
    switch( action.type ) {

        case actionTypes.UPDATE_CART:

            return {
                cart: action.payload, user: action.user, status: action.status
            }

        default: return state
    }
}

export default reducer;