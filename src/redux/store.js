import { createStore,applyMiddleware,compose } from "redux"; 
import { thunk } from "redux-thunk";
import reducer from "./reducers";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const store = createStore(
    reducer, 
    compose(applyMiddleware(thunk),

    typeof window === 'object' &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? 
    window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)

)


export default store;
