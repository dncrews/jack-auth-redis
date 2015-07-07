# olympus-auth-redisstore
This Olympus Plugin Configures express-session to use a redisstore instead of the memory store.
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
olympus.use(require('olympus-auth-redisstore').configure({
  host: 'url',
  port: 6379
}));
```
