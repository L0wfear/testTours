const router = require('express').Router();
const fetch = require('node-fetch');
const redis = require('redis');
const REDIS_PORT = process.env.PORT || 6379;
const client = redis.createClient(REDIS_PORT);


router.route('/filter').get(async (req, res, next) => {
    try {
        console.log('Fetching directions...');
        const response = await fetch(`https://api2.mouzenidis.com/search/filter/directions`);
        const data = await response.json();
        client.setex('directions', 3600, JSON.stringify(data));
        res.status(200).send(data);
  
      } catch (err) {
        console.error(err);
        res.status(500);
      }
});

router.route('/search').get(async (req, res, next) => {

  const {city, country, dateFrom, dateTo} = req.query;

  try {
      console.log('Searching...');
      const response = await fetch(`https://api2.mouzenidis.com/search?departureCities[0]=${city}&countries[0]=${country}&dateFrom=${dateFrom}&dateTo=${dateTo}&nights[0]=6&nights[1]=7&nights[2]=8&nights[3]=9&nights[4]=10`);
      const data = await response.json();
      res.status(200).send(data);

    } catch (err) {
      console.error(err);
      res.status(500);
    }
});

module.exports = router;