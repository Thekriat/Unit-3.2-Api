const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const playerRoutes = require('./routes/playerRoutes');


const app = express();

mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the MongoDB database.');
  })
  .catch(err => {
    console.error('Error connecting to the database', err);
  });

app.use(bodyParser.json());

app.use('/api/players', playerRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
