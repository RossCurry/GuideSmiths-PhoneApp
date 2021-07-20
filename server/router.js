const router = require('express').Router();
const { addPhoneData, updatePhoneData, deletePhoneData } = require('./controller/phoneControllers');
// const { getPhoneData, addPhoneData, updatePhoneData, deletePhoneData } = require('./controller/phoneControllers');
const { mockData } = require('./mockData/seedData.json');

// router.get('/', getPhoneData);
router.get('/', sendMockData);
router.post('/mobile/create', addPhoneData);
router.put('/mobile/update/:id', updatePhoneData);
router.delete('/mobile/delete/:id', deletePhoneData);

const sendMockData = (req, res, next) => {
  res.send(mockData);
  next();
}


module.exports = router;