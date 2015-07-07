
var Plugin = require('jack-stack').Plugin;

module.exports = new Plugin({
  name: 'redisStore',
  basePath: __dirname,
  dependencies: [ 'session' ],
});
