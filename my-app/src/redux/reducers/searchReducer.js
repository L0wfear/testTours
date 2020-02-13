import {SET_ITEMS, TOGGLE_IS_FETCHING} from '../actions/actions';
import { directionsAPI } from '../../api/api';

const initialState = {
    items: [],
    isFetching: false
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ITEMS:
            return {...state, items: action.payload.items }
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: !state.isFetching }
        default:
            return {...state};
    }
}

const setItems = (payload) => ({type: SET_ITEMS, payload}); 
const toggleIsFetching = () => ({type: TOGGLE_IS_FETCHING}); 

export const getItems = (cityID, countryID, dateFrom, dateTo) => {
    return (dispatch) => {
         dispatch(toggleIsFetching());
         return directionsAPI.getItems(cityID, countryID, dateFrom, dateTo)
            .then(response => {  
                dispatch(setItems(response.data));
                dispatch(toggleIsFetching());
            })
    }
}

export default searchReducer;