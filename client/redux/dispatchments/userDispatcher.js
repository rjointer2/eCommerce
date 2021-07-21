
// all constants for user
import * as constants from '../constants/userConstants';

// this dispatchment function will take the user's form data and 
// return a function with a dispatch function as a arg to specfic 
// how the store will change

const getUserDetailsRequest = ( formData ) => async ( dispatch ) => {

    try {
        // when the switch statement's case requesting the user's data
        // use the useMutation hook sign in and return the useQuery's data
        dispatch({ type: constants.GET_USER_DETAILS_REQUEST });

        

    } catch(err) {

    }

}