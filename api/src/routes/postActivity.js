const { Router } = require('express');
const { postActivity } = require('../Controllers/postActivity')
const router = Router();

router.post('/', postActivity)

module.exports = router;