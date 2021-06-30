let express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cors());

let books = [
  {
    name: 'AngularJS'
  },
  {
    name: 'EmberJS'
  },
  {
    name: 'ReactJS'
  }
];

app.get('/books', function (req, res) {
  res.send(books);
});

app.post('/books', function (req, res) {
  books.push({
      name: req.body.name
  });
  res.send(200);
});

let server = app.listen(3001, function () {
  console.log('backend started');
});