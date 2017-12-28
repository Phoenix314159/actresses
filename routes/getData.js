const {getData, getPictures} = require('../controllers/getDataController')

module.exports = app => {
  app.get('/api/get_actresses_data', getData)
  app.get('/api/get_pictures', getPictures)
}
