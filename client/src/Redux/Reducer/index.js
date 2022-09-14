const initialState = {
    countries: [],
    allCountries: [],
    activities: [],
    countryId: {}
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_COUNTRIES':
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload
            };

        case 'GET_COUNTRY_NAME':
            const country = [];
            if (!action.payload.name) {
                return "This Country doesn't exist"
            } else {
                country.push(action.payload)
            }
            return {
                ...state,
                countries: country
            };

        case 'GET_COUNTRY_ID':
            return {
                ...state,
                countryId: action.payload
            };

        case 'GET_ACTIVITY':
            return {
                ...state,
                activities: action.payload
            };

        case 'POST_ACTIVITY':
            return {
                ...state,
                activities: [...state.activities, action.payload]
            };

        case 'FILTER_ACTIVITY':
            
            const allCountriesAct = state.allCountries
            const activitiesFilter = action === 'All' ?
            allCountriesAct : allCountriesAct.filter(e => 
                e.activities && e.activities.map(e => e.name).includes(action.payload))

            return{
                ...state,
                countries: activitiesFilter
            }     

        case 'FILTER_BY_CONTINENT':
            const allCountries = state.allCountries
            const statusFiltered = action.payload === 'All' ?
                allCountries :
                allCountries.filter(c => c.continent === action.payload)
            return {
                ...state,
                countries: statusFiltered
            };

        case 'ORDER_BY_NAME':
            let countriesByName = action.payload === 'A to Z' ?
                state.countries.sort((a, b) => {
                    if (a.name > b.name) return 1;
                    if (a.name < b.name) return -1;
                    return 0;
                }) :
                state.countries.sort((a, b) => {
                    if (a.name < b.name) return 1;
                    if (a.name > b.name) return -1;
                    return 0;
                })
            return {
                ...state,
                countries: countriesByName
            };

        case 'ORDER_BY_POPULATION':
            let countriesByPopulation = action.payload === 'Upward'
                ? state.countries.sort((a, b) => a.population - b.population)
                : state.countries.sort((a, b) => b.population - a.population)
            return {
                ...state,
                countries: countriesByPopulation
            };

        default:
            return state;
    }
};

export default rootReducer;