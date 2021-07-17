// const phoneData = require('./mockPhoneData.json');
const { addOneMobileToDB, fetchAllPhoneData } = require('../models/mobile.model');

const getPhoneData = async (req, res) => {
    // res.send('Hello World! using controller')
    const returnPhoneData = await fetchAllPhoneData();
    res.send(returnPhoneData).status(200);
}

const addPhoneData = async (req, res) => {
  const { body } = req;
  const returnData = await addOneMobileToDB(body);
  res.send(returnData)
  res.status(200);
  // res.send({message: "success"})
}

module.exports = { getPhoneData, addPhoneData };
