

import { 
    // Creates a Redux store that holds the state tree. 
    // only way to change the data in the store is to call dispatch()
    createStore, 
    // combine all reducers to export one root reducer
    combineReducers, 
    // allows to apply 3rd party middleware, such as react-thunk
    applyMiddleware
} from 'redux';

// middleware package using to handle async tasks
import thunk from 'redux-thunk';

// dev tools that will used on chrome extenisons
import { composeWithDevTools } from 'redux-devtools-extension';

// all our client middleware will be here but one will be used;
const clientMiddleware = [thunk];

// reducers



// combine all reducers to export one root reducer
const rootReducer = combineReducers({
    
})

// redux store
export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...clientMiddleware))
);

