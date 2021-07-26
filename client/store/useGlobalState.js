
import { useReducer } from "react";

// reducer function 
import reducer from "./reducer";

// initial state
const intitialState = {
    cart: []
};


const useGlobalState = () => {

    const [ state, dispatch ] = useReducer( reducer, intitialState );

    // return the dispatcher to specific how the state should change
    return { state, dispatch }

}

export default useGlobalState;