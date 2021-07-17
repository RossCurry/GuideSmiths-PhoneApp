const { Mobile } = require('./Schemas/mobile.schema');

const fetchAllPhoneData = async () => {
 const allMobileData = await Mobile.findAll();
 return allMobileData;
}

const addOneMobileToDB = async (mobileData) => {
  await Mobile.sync({alter: true});
  const returnData = await Mobile.create(mobileData);
  return returnData;
}

module.exports = { addOneMobileToDB, fetchAllPhoneData };
