const phoneData = require('./mockPhoneData.json');
const { addOneMobileToDB } = require('../models/mobile.model');

const getPhoneData = (req, res) => {
    // res.send('Hello World! using controller')
    res.send(phoneData);
}

const addPhoneData = async (req, res) => {
  const { body } = req;
  const returnData = await addOneMobileToDB(body);
  console.log('returnData Controller', returnData);
  res.send({message: "success"})
}


module.exports = { getPhoneData, addPhoneData };