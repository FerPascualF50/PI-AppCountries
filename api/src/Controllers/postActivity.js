const { Country, Activity } = require('../db');
const { Op } = require('sequelize')

const postActivity = async (req, res) => {
    try {
        const { name, difficulty, duration, season, countries } = req.body
        if (name && difficulty && duration && season && countries) {
            const [activity] = await Activity.findOrCreate({
                where: {
                    name: name,
                    difficulty: difficulty,
                    duration: duration,
                    season: season,
                },
            });
            countries.forEach(async (countryId) => {
                const nation = await Country.findOne({
                    where: { id: countryId }
                });
                await nation.addActivity(activity);
            });
            return res.send('Activity created');
        } else {
            return res.status(422).json('Activity not created');
        }
    } catch (error) {
        return res.status(500).send(error)
    }

}

module.exports = { postActivity }