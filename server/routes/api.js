const express = require('express');
const router = express.Router();
const googleTrends = require('google-trends-api');

/* GET api listing. */
router.get('/:key', (req, res) =>
  googleTrends.interestOverTime({keyword: req.params.key}, function(err, results){
    if(err) console.error('there was an error!', err);
    else {
      let data = JSON.parse(results);
      res.json({name: req.params.key, trends: data});
    }
  })
);

module.exports = router;
