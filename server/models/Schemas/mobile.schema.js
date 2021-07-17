const Sequelize = require('sequelize');
const { sequelize } = require('../index');

const Mobile = sequelize.define('mobile', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
      type: Sequelize.STRING
    },
  manufacturer: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  }, 
  color: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.INTEGER
  },
  imageFileName: {
    type: Sequelize.STRING
  },
  screen: {
    type: Sequelize.STRING
  },
  processor: {
    type: Sequelize.STRING
  },
  ram: {
    type: Sequelize.INTEGER
  }
});

module.exports = { Mobile };

// // force: true will drop the table if it already exists
// Mobile.sync({force: true}).then(() => {
//   // Table created
//   return Mobile.create({
//     firstName: 'John',
//     lastName: 'Hancock'
//   });
// });