const redis = require('redis');
const REDIS_PORT = process.env.PORT || 6379;
const client = redis.createClient(REDIS_PORT);

const cache = (req, res, next) => {
    
    client.get('directions', (err, data) => {
      if (err) throw err;
  
      if (data !== null && req.path === '/filter') {
        res.send(JSON.parse(data));
      } else {
        next();
      }
    });
}

module.exports = cache;