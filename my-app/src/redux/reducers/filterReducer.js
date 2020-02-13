import {SET_DATA} from '../actions/actions';
import { directionsAPI } from '../../api/api';

const initialState = {
    departureCities: [],
    countries: [],
    links: []
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return {...state, test: action.payload, departureCities: action.payload.data.dictionaries.departureCities, 
                countries:  action.payload.data.dictionaries.countries, links: action.payload.data.links }
        default:
            return {...state};
    }
}

const setData = (payload) => ({type: SET_DATA, payload}); 

export const getDirections = () => {
    return (dispatch) => {
         return directionsAPI.getDirections()
            .then(response => {  
                dispatch(setData(response.data));
            })
    }
}

export default filterReducer;