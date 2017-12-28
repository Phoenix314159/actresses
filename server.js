const express = require('express'),
  path = require('path'),
  {port, dbConnection} = require('./config/dev'),
  bodyParser = require('body-parser'),
  massive = require('massive'),
  app = express();

(async () => { app.set('db', await massive(dbConnection)) })()

app.use(bodyParser.json())
require('./middleware/dbRoutes')(app)
require('./routes/getData')(app)

//<-----production ----->
// app.use(express.static(path.join(__dirname, '/build')))
// app.get('*', (req, res) => {
//   res.sendFile((path.join(__dirname, '/build/index.html')))
// })
//<--------------------->

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})