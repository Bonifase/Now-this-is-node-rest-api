const express = require('express');
const mongoose = require('mongoose');
const Item = require('./models/itemModel');

const app = express();
const shoppingsRouter = express.Router();
const db = mongoose.connect('mongodb://localhost/shoopingAPI');
const port = process.env.PORT || 3000;


shoppingsRouter.route('/shoppings')
.get((req, res) => {

  Item.find((error, shoppings) => {
      if(error){
          return res.send(error);
      }
      return res.json(shoppings);
  });
  });

app.use('/api', shoppingsRouter);

app.get('/', (req, res) => {
  res.send('Hello my world api')
});

app.listen(port, () => {
  console.log(`Listen to port...${port}`);
});
