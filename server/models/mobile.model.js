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
    if (returnData === 1) return await queryById(id);
  } catch (error) {
    console.error(`error updating mobile with id: ${id}`, error);
  }
}

const deletePhoneinDatabase = async (id) => {
  try {
    const phoneToDelete = await queryById(id);
    if (phoneToDelete) {
      const returnData = await Mobile.destroy({where: {id}});
      if (returnData === 1) return phoneToDelete.dataValues;
    } else {
      throw new Error ({message: "phone does not exist on database"})
    }
  } catch (error) {
    console.error(`error deleting mobile with id: ${id}`, error);
  }
}

const queryById = async (id) => {
  try {
    return await  Mobile.findByPk(id);
  } catch (error) {
    console.error(`error finding mobile with id: ${id}`, error);
  }
}


module.exports = { addOneMobileToDB, fetchAllPhoneData, updatePhoneinDatabase, deletePhoneinDatabase };
