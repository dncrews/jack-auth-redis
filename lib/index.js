
var Plugin = require('jack-stack').Plugin;

module.exports = new Plugin({
  name: 'auth/redis',
  basePath: __dirname,
  dependencies: [ 'session' ],
});
