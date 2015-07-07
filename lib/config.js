
var config = require('config');

var data = {};

if (config.has('db.redis')) {
  var redis = config.get('db.redis');

  data.host = redis.host || redis.url;
  data.port = redis.port;
}

module.exports = data;
