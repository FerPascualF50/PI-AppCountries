const { Router } = require('express');
const { getCountry } = require('../Controllers/getCountries')
const router = Router();

router.get('/:id', getCountry)

module.exports = router;