
var express = require('express');

var app = express();
app.use('/images', express.static('images'))
app.use('/build', express.static('build'));

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/index.html');
})
app.listen(4567, function(err) {
  if(err) {
    console.log(err);
    return;
  }

  console.log('running in http://localhost:4567');
});
