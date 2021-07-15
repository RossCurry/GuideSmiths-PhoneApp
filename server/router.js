const router = require('express').Router();
const { getPhoneData } = require('./controller/phoneControllers');

router.get('/', getPhoneData);

module.exports = router;