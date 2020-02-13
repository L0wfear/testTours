import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000/directions'
});

export const directionsAPI = {
    getDirections() {
        return instance.get(`/filter`)
            .then(response => response)
            .catch(err => err)
    },

    getItems(cityID, countryID, dateFrom, dateTo) {
        return instance.get(`/search?city=${cityID}&country=${countryID}&dateFrom=${dateFrom}&dateTo=${dateTo}`)
            .then(response => response.data)
            .catch(err => err)
    }
}