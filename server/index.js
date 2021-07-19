/* eslint-disable no-undef */
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.SV_PORT;
const router = require('./router');
const cors = require('cors')

app.use(cors({
  origin: 'http://localhost:3001'
}));
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening at ${process.env.SV_URL}:${port}🚀`)
})
