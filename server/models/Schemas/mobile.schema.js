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
},{
  returning: true
}
);

module.exports = { Mobile };
