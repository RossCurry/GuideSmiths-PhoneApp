const { addOneMobileToDB, fetchAllPhoneData, updatePhoneinDatabase, deletePhoneinDatabase } = require('../models/mobile.model');

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

const updatePhoneData = async (req, res) => {
  try {
    const { body } = req;
    const { id } = req.params;
    const returnData = await updatePhoneinDatabase(id, body);
    res.send({message: "data updated", returnData}).status(201);
  } catch (error) {
    res.send({message: "error updating phone data", error}).status(500)
  }
}

const deletePhoneData = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMobile = await deletePhoneinDatabase(id);
    if (deletedMobile) res.send({message: "mobile deleted", deletedMobile}).status(201);
    else throw new Error("phone does not exist on database");
  } catch (error) {
    res.send({message: "error deleting phone data", error}).status(500);
  }
}

module.exports = { getPhoneData, addPhoneData, updatePhoneData, deletePhoneData };
