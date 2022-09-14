const { Activity } = require('../db');

const getActivities = async (req, res) => {
    try {
        const activities = await Activity.findAll()
        if (activities) {
            activities.filter(e => e.mane)
            res.json(activities)
        } else {
            res.status(404).send("Activity not found")
        }
    } catch (error) {
        res.status(404).json(error)
    }
}
module.exports = { getActivities }