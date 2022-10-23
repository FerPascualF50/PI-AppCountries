const router = require('express').Router()
const {delActivity} = require('../Controllers/delActyvity' );

router.delete('/', delActivity);

module.exports = router;
