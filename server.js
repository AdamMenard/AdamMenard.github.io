// SERVER-SIDE JAVASCRIPT
var express = require('express');
var app = express();

// Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
  res.sendFile('/views/index.html' , { root : __dirname});
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Adam's portfolio listening at http://localhost:3000/");
});
