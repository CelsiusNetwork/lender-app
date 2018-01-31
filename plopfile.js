var serviceGen = require('./plops/service/serviceGen')
var screenGen = require('./plops/screen/screenGen')

module.exports = function (plop) {
  plop.setGenerator('Service', serviceGen)
  plop.setGenerator('Screen', screenGen)
}
