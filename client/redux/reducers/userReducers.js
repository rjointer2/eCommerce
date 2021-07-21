
// get all the constant to dynamically specify the type the 
// dispatch function have when dipatchment is invoked
import * as constantTypes from '../constants/userConstants';

// this specifier / reducer will specific how the global state arg 
// shall be held as. This will a object that holds the data of the user
export const userRequestDetailsReducer = ( state = { userSigneddIn: {}}, dispatchment ) => {

    // depending on the dispatchment's type will state and 
    // loading status and payload of the object we return

}