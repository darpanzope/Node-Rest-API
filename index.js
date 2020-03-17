/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const models = require('./models');

const cats = require('./routes/cats');
const owners = require('./routes/owners');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/cats', cats);
app.use('/owners', owners);

models.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection successful');
  })
  .catch((error) => {
    console.log('Error creating connection:', error);
  });

app.listen(3000);
