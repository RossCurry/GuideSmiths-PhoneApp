const { addOneMobileToDB, fetchAllPhoneData } = require('../models/mobile.model');

const getPhoneData = async (req, res) => {
  try {
      const returnPhoneData = await fetchAllPhoneData();
      res.send(returnPhoneData).status(200);
    } catch (error) {
      res.send({message: "error fetching phone data", error}).status(500)
    }
}

const addPhoneData = async (req, res) => {
  try {
    const { body } = req;
    const returnData = await addOneMobileToDB(body);
    res.send(returnData)
    res.status(200);
  } catch (error) {
    res.send({message: "error saving phone data", error}).status(500)
  }
}

module.exports = { getPhoneData, addPhoneData };
