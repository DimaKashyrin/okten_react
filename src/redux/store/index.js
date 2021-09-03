import {createStore,applyMiddleware} from 'redux';
import {reducer} from "../reducers/movies_reducer";
import ReduxThank from 'redux-thunk'

const store = createStore(reducer,applyMiddleware(ReduxThank));
export {store}

