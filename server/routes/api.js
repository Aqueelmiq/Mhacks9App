const express = require('express');
const router = express.Router();
const googleTrends = require('google-trends-api');
const http = require('http');

/* GET api listing. */
router.get('/:key', (req, res) =>
  googleTrends.interestOverTime({keyword: req.params.key}, function(err, results){
    if(err) console.error('there was an error!', err);
    else {
      var data = JSON.parse(results);
      var sumPercentages = 0;
      var peakDate = '';
      var curr = 0;
      var months = data['default']['timelineData'];
      for (var i=0; i<months.length; i++ ) {
        var month = months[i];
        curr = parseInt(month['value']);
        sumPercentages += curr;
        if (curr == 100) {
          peakDate = month['formattedTime'].split(" ");
        }
      }
      var pyurl = "http://127.0.0.1:5000?name="+req.params.key;

      http.get(pyurl, function(resp){
        var ret = "";
        resp.on('data', function(chunk){
          ret += chunk;
        });
        resp.on('end', function() {
          var parsed = JSON.parse(ret);
          var img_url = parsed['img_url'];
          var total = parsed['total'];
          var peak_price = total*(100/sumPercentages);
          var current_price = peak_price*(curr/100);
          res.json({name: req.params.key,
            total: total,
            current_percentage: curr,
            current_price: Math.round(current_price),
            peak_price: Math.round(peak_price),
            peak_month: peakDate[0],
            peak_year: peakDate[1],
            img_url: img_url
          });
        });
      }).on("error", function(e){
        console.log("Got error: " + e.message);
      });
    }
  })
);

module.exports = router;
