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
    console.error('error addding one new mobile', error);
  }
}

module.exports = { addOneMobileToDB, fetchAllPhoneData };
