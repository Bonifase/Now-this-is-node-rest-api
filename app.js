var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

app.get('/', (req, res)=>{
   res.send("Hello world");
});

app.listen(port, () => {
    console.log("Listen to port..." + port)
});