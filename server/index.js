/* eslint-disable no-undef */
require('dotenv').config();
const express = require('express');
const app = express();
// const port = process.env.SV_PORT;
const router = require('./router');
const cors = require('cors')

app.use(cors({
  // origin: 'https://guidesmith-client.herokuapp.com/'
  origin: "*",
  methods: ['GET', 'PUT', 'DELETE', 'POST'],
  credentials: true,
  // preflightContinue: true,
}));
app.use(express.json());
app.use(router);

app.listen(() => {
  console.log(`Example app listening at ${process.env.SV_URL}🚀`)
})
