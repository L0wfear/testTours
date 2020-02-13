import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import filterReducer from './reducers/filterReducer';
import searchReducer from './reducers/searchReducer';

const reducers = combineReducers({
    directions: filterReducer,
    items: searchReducer,
    form: formReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;