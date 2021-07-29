
import { useReducer } from "react";

// reducers function 
import reducer from "./reducer";

// initial state
const intitialState = {
    cart: [],
    user: null
};


const useGlobalState = () => {
    const [ state, dispatch ] = useReducer( reducer, intitialState );
    // return the dispatcher to specific how the state should change
    return { state, dispatch }
}

export default useGlobalState;