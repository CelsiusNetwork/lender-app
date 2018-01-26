var serviceGen = require('./plops/service/serviceGen')

module.exports = function (plop) {
  plop.setGenerator('Service', serviceGen)
}
