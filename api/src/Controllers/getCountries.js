const { Country, Activity } = require('../db');
const { Op } = require('sequelize')

const getCountries = async (req, res) => {
    try {
        const { name } = req.query;
        if (name) {
            const country = await Country.findOne({
                where: {
                    name: { [Op.iLike]: '%' + name + '%' }
                },
                include: {
                    model: Activity,
                    atributes: ['name', 'difficulty', 'duration', 'season'],
                    through: { atributes: [] },
                },
            })
            if (!country) {
                res.status(404).json('Country not found')
            } else {
                res.json(country)
                console.log(country)
            }
        } else {
            const countries = await Country.findAll({
                include: {
                    model: Activity,
                    atributes: ['name', 'difficulty', 'duration', 'season'],
                    through: { atributes: [] },
                },
            })
            if (countries) {
                res.json(countries)
            } else {
                res.status(404).json('Country not found')
            }
        }
    } catch (error) {
        res.status(404).json(error)
    }
}

const getCountry = async (req, res) => {
    const { id } = req.params;
    try {
        if (id) {
            const country = await Country.findOne({
                where: {
                    id: { [Op.iLike]: `%${id}%` }
                },
                include: {
                    model: Activity,
                    atributes: ['name', 'difficulty', 'duration', 'season'],
                    through: { atributes: [] },
                },
            })
            if (!country) {
                return res.status(404).json('Country not found')
            } else {
                return res.json(country)
            }
        } else {
            return res.status(404).json('Country not found')
        }
    } catch (error) {
        res.status(404).send(error)
    }
}
module.exports = { getCountries, getCountry }