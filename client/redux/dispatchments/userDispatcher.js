
// all constants for user
import * as constants from '../constants/userConstants';

// this dispatchment function will take the user's form data and 
// return a function with a dispatch function as a arg to specfic 
// how the store will change

export const getUserDetails = ( status ) => async ( dispatch ) => {

    if( status ) {
        dispatch({ type: constants.GET_USER_DETAILS_REQUEST });
    }

    if( typeof(status) === 'object' ) {
        dispatch({ 
            type: constants.GET_USER_DETAILS_SUCCESS,
            payload: status
        })
    }

    if( !status ) {
        dispatch({
            type: constants.GET_USER_DETAILS_FAILURE,
            payload: status
        })
    }

}