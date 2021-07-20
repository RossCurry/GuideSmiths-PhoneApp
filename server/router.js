const router = require('express').Router();
const { getPhoneData, addPhoneData, updatePhoneData, deletePhoneData } = require('./controller/phoneControllers');


router.get('/', getPhoneData);
router.post('/mobile/create', addPhoneData);
router.put('/mobile/update/:id', updatePhoneData);
router.delete('/mobile/delete/:id', deletePhoneData);



module.exports = router;