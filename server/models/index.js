/* eslint-disable no-undef */
const Sequelize = require('sequelize');
let sequelize;

if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(`${process.env.DB_NAME}`, `${process.env.DB_USERNAME}`, `${process.env.DB_PASSWORD}`, {
    host: process.env.DB_HOST,
      dialect: 'postgres',
      ssl: true,
      protocol: "postgres",
      port: 5432,
      dialectOptions: {
          ssl: {
              require: true,
              rejectUnauthorized: false // <<<<<< YOU NEED THIS
          }
      }
  })
} else {
  // USE THIS FOR DEV CONNECTION 
  sequelize = new Sequelize(`${process.env.DB_NAME}`, `${process.env.DB_USERNAME}`, `${process.env.DB_PASSWORD}`, {
    host: localhost,
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  });
}

  
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.💄');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = { sequelize };
