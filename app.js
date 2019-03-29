const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello my world api');
});

app.listen(port, () => {
  console.log(`Listen to port...${port}`);
});
