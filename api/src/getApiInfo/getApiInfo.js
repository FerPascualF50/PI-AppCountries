const axios = require('axios');
const { Country } = require('../db');

const getApiInfo = async () => {
    try {
        const apiUrl = await axios.get('https://restcountries.com/v3/all');
        const apiInfo = await apiUrl.data.map(country => {
            return {
                id: country.cca3,
                name: country.name.common,
                image: country.flags[0],
                continent: country.region,
                capital: country.capital ? country.capital[0] : 'has no Capital',
                area: country.area ? country.area : 'has no Area',
                subregion: country.subregion ? country.subregion : 'has no Subregion',
                population: country.population
            };
        });
        await Country.bulkCreate(apiInfo)
        console.log('api inserted in DataBase correctly')
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    getApiInfo
};