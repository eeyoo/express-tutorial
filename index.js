var express = require('express')
var path = require('path')
var app = express()
var bodyParser = require('body-parser')
var multer = require('multer')

app.set('views', path.join(__dirname + '/public'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

//app.set('view engine', 'jade')
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer(),function () {
  console.log('for parsing multipart/form-data');
}); // for parsing multipart/form-data

app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/node_modules/vue/dist'))
app.use(express.static(__dirname + '/node_modules/jquery/dist'))

app.get('/', function (req, res, next) {
  res.render('index.html');
  next();
})

app.get('/code', function (req, res, next) {
  //res.send('Hello World');
  res.render('code.html');
  next();
})

app.get('/business', function (req, res, next) {
  //res.send('Hello World');
  res.render('business.html');
  next();
})

app.get('/download', function (req, res, next) {
  //res.send('Hello World');
  res.render('download.html');
  next();
})

app.get('/about', function (req, res, next) {
  //res.send('Hello World');
  res.render('about.html');
  next();
})

app.get('/search', function (req, res) {
  res.send('search get view '+req.param());
})

app.post('/search', function (req, res) {
  //console.log(req.body);
  res.json(req.body);
})

app.post('/point/save', function (req, res) {
  //console.log(JSON.stringify(req.body));
  res.json(req.body);
})

// app.use('/', function (req, res) {
//   res.send('hi awesome!');
// })

app.listen(3000, function () {
  console.log('ok let\'s go port on %d \/\/%s.', 3000, 'localhost');
})