/* eslint-disable no-undef */
const Sequelize = require('sequelize');
let sequelize;

if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect:  'postgres',
    protocol: 'postgres',
    use_env_variable: "DATABASE_URL"
  })
  
} else {
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
