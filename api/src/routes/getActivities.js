const router = require('express').Router()
const {getActivities} = require('../Controllers/getActivities')

router.get('/all', getActivities)

module.exports = router;