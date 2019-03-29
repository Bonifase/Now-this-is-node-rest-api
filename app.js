const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Item = require('./models/itemModel');

const app = express();
const shoppingsRouter = express.Router();
const db = mongoose.connect('mongodb://localhost/shoopingAPI');
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

shoppingsRouter.route('/shoppings')
.post((req, res) => {
  const item = new Item(req.body);
  console.log(item);
  return res.status(201).json(item)
})
.get((req, res) => {
  const query = {};
  if(req.query.category){
    query.category = req.query.category
  };
  Item.find(query, (error, shoppings) => {
      if(error){
          return res.send(error);
      }
      return res.json(shoppings);
  });
  });
shoppingsRouter.route('/shoppings/:itemId')
.get((req, res) => {
  
  Item.findById(req.params.itemId, (error, item) => {
      if(error){
          return res.send(error);
      }
      return res.json(item);
  });
  });

app.use('/api', shoppingsRouter);

app.get('/', (req, res) => {
  res.send('Hello my world api')
});

app.listen(port, () => {
  console.log(`Listen to port...${port}`);
});
