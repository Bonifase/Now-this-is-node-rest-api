const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const db = mongoose.connect('mongodb://localhost/shoopingAPI', { useNewUrlParser: true });
const port = process.env.PORT || 3000;
const Item = require('./models/itemModel');
const shoppingRouter = require('./routes/routes')(Item);


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.use('/api', shoppingRouter);

app.get('/', (req, res) => {
  res.send('Hello my world api')
});

app.listen(port, () => {
  console.log(`Listen to port...${port}`);
});
