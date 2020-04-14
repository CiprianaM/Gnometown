'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require ('cors');

const router = require('./router.js');

app.use(bodyParser.json());
app.use(cors());
app.use(router);

const port = 3005;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});