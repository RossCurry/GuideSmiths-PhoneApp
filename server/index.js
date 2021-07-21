/* eslint-disable no-undef */
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const router = require('./router');
const cors = require('cors')

app.use(cors({
  origin: 'https://guidesmith-client.herokuapp.com',
  methods: ['GET', 'PUT', 'DELETE', 'POST'],
  credentials: true,
}));

app.use(express.json());
app.use(router);

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at ${process.env.SV_URL} at PORT ${port}🚀`)
})
