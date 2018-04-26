// SERVER-SIDE JAVASCRIPT
var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static('vendor'));

app.get('/', function (req, res) {
  res.sendFile('/views/index.html' , { root : __dirname});
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Adam's portfolio listening at http://localhost:3000/");
});
