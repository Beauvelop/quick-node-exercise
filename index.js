const express = require('express');
const bodyParser = require('body-parser');

const mealsCtrl = require('./node_controllers/mealsCtrl');

let app = express();

app.use(bodyParser.json())

var qlog = function(req, res, next) {
  console.log("req.path", req.path);
  console.log("req.body", req.body);
  console.log("req.params.id", req.params.id);
  console.log("req.query", req.query);
  next();
}

app.get('/meals/', qlog, mealsCtrl.selectByProperty);
app.get('/meals', qlog, mealsCtrl.index);
app.get('/meals/:id', qlog, mealsCtrl.select);

app.post('/meals', qlog, mealsCtrl.create);
app.put('/meals/:id', qlog, mealsCtrl.update);
app.delete('/meals/:id', qlog, mealsCtrl.destroy);

const PORT = 3000;
app.listen(PORT, function() {
  console.log("Listening on ", PORT);
})
