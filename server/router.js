const router = require('express').Router();
const { getPhoneData, addPhoneData, updatePhoneData } = require('./controller/phoneControllers');

router.get('/', getPhoneData);
router.post('/mobile/create', addPhoneData);
router.put('/mobile/update/:id', updatePhoneData);
// router.delete('/mobile/update/:id', updatePhoneData);

module.exports = router;