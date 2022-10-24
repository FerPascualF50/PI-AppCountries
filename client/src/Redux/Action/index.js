import axios from 'axios'

export const getAllCountries = () => (dispatch) => {
    return axios.get('/countries')
        .then((info) => dispatch({ type: 'GET_ALL_COUNTRIES', payload: info.data }))
        .catch((error) => console.log(error))
};

export const getCountryByName = (name) => (dispatch) => {
    return axios.get(`/countries?name=${name}`)
        .then((info) => { return dispatch({ type: 'GET_COUNTRY_NAME', payload: info.data }) })
        .catch((error) => console.log(error))
};


export const getCountryById = (id) => async (dispatch) => {
    return axios.get(`/countries/${id}`)
        .then(info => dispatch({ type: 'GET_COUNTRY_ID', payload: info.data }))
        .catch(error => dispatch({ type: 'GET_COUNTRY_ID', payload: { error } }))
}


export const getActivity = () => (dispatch) => {
    return axios.get(`/activity/all`)
        .then((info) => dispatch({ type: 'GET_ACTIVITY', payload: info.data }))
        .catch((error) => console.log(error))
};

export function postActivity(body) {
    return async function (dispatch) {
        try {
            var activity = await axios.post(`/activity`, body);
            return dispatch({
                type: 'POST_ACTIVITY',
                payload: activity.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function filterActivity(activity) {
    return {
        type: 'FILTER_ACTIVITY',
        payload: activity
    }
}

export function filterByContinent(payload) {
    return {
        type: 'FILTER_BY_CONTINENT',
        payload
    }
}

export function orderByName(payload) {
    return {
        type: 'ORDER_BY_NAME',
        payload
    }
}

export function orderByPopulation(payload) {
    return {
        type: 'ORDER_BY_POPULATION',
        payload
    }
}