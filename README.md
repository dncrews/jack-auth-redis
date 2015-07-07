# jack-auth-redis
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]

This Jack-Stack Plugin Configures express-session to use a redisstore instead of the memory store.
If not configured, it fails to do so and `console.warn`s you.


## Configuration
You can either use `node-config` and set your variables with:

```js
{
  db: {
    redis: {
      host: 'url',
      port: 6379
    }
  }
}
```

Or you can configure this plugin directly:
```js
jack.add(require('jack-auth-redis').configure(
  host: 'url',
  port: 6379
}));
```

[npm-image]: https://img.shields.io/npm/v/jack-auth-redis.svg
[npm-url]: https://www.npmjs.org/package/jack-auth-redis
[downloads-image]: https://img.shields.io/npm/dm/jack-auth-redis.svg
[downloads-url]: https://www.npmjs.org/package/jack-auth-redis
