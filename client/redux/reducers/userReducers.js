
// get all the constant to dynamically specify the type the 
// dispatch function have when dipatchment is invoked
import * as constants from '../constants/userConstants';

// this specifier / reducer will specific how the global state arg 
// shall be held as. This will a object that holds the data of the user
export const userRequestDetailsReducer = ( state = { userObject: {}}, dispatchment ) => {

    // depending on the dispatchment's type will state and 
    // loading status and payload of the object we return
    switch(dispatchment.type) {
        case constants.GET_USER_DETAILS_REQUEST:
        return {
            loading: true,
            userObject: {}
        }
        case constants.GET_USER_DETAILS_SUCCESS:
        return {
            laoding: false,
            userObject: dispatchment.payload
        }
        case constants.GET_USER_DETAILS_FAILURE:
        return {
            laoding: false,
            error: dispatchment.payload
        }
        default: return state;
    }

}