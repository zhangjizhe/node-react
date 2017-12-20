var express = require('express');

var port = 8080;

var app = express();

var router =express.Router();


app.use(router);

var appData = require('./data.json')
var goods=appData.goods
var seller=appData.seller
var ratings=appData.ratings

var apiRoutes=express.Router()

router.get('/',function (req,res,next) {
  res.json({
    errno:0,
    data:appData
  })
})

apiRoutes.get('/api/seller',function (req, res) {
  res.json({
    errno:0,
    data:seller
  })
});

apiRoutes.get('/api/goods',function (req, res) {
  res.json({
    errno:0,
    data:goods
  })
});

apiRoutes.get('/api/ratings',function (req, res) {
  res.json({
    errno:0,
    data:ratings
  })
});
app.use('',apiRoutes);

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:' + port + '\n');
})