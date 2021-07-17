const { Mobile } = require('./Schemas/mobile.schema');

const fetchAllPhoneData = async () => {
  try {
   const allMobileData = await Mobile.findAll();
   return allMobileData;
 } catch (error) {
   console.error('error fetching data', error);
 }
}

const addOneMobileToDB = async (mobileData) => {
  try {
    await Mobile.sync({alter: true});
    const returnData = await Mobile.create(mobileData);
    return returnData;
  } catch (error) {
    console.error('error adding one new mobile', error);
  }
}

const updatePhoneinDatabase = async (id, body) => {
  try {
    await Mobile.sync({alter: true});
    const returnData = await Mobile.update(body, {where: {id}});
    return returnData;
  } catch (error) {
    console.error(`error updating mobile with id: ${id}`, error);
  }
}

module.exports = { addOneMobileToDB, fetchAllPhoneData, updatePhoneinDatabase };
