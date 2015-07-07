/**
 * Intializer function
 */
var jack = require('jack-stack')
  , redis = require('connect-redis')
  , session = require('express-session');


module.exports = function() {
  var config = this.config;
  var RedisStore = redis(session)
    , store;

  if (config.host && config.port) {
    store = new RedisStore({
      host: config.host,
      port: config.port,
    });
  } else {
    console.warn(
      'You are still using the memory store, this is generally a bad idea,\n' +
      'and you should be using redis locally and in production. To\n' +
      'make the switch to redis, simply add db.redis.url and db.redis.port\n' +
      'in accordance with the documentation.'
    );
    store = new session.MemoryStore();
  }

  jack.useBefore('session', 'session:redis', function() {
    jack.configure('session', function(config) {
      config.store = store;
    });
  });
};
