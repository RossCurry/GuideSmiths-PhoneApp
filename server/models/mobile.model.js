const { sequelize } = require('./index');
const { Mobile } = require('./Schemas/mobile.schema');

const addOneMobileToDB = async (mobileData) => {
  await Mobile.sync({alter: true});
  const returnData = await Mobile.create(mobileData);
  console.log('returnData', returnData);
  return returnData;
}

module.exports = { addOneMobileToDB };