const router = require('express').Router();
const { getPhoneData, addPhoneData } = require('./controller/phoneControllers');

router.get('/', getPhoneData);
router.post('/mobile/create', addPhoneData);

module.exports = router;