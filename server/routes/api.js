const express = require('express');
const router = express.Router();
const googleTrends = require('google-trends-api');
const http = require('http');

/* GET api listing. */
router.get('/:name', (req, res) =>
  googleTrends.interestOverTime({keyword: req.params.name}, function(err, results){
    if(err) console.error('there was an error!', err);
    else {
      var data = JSON.parse(results);
      console.log("hello");
      console.log(req.params.name);
      var sumPercentages = 0;
      var peakDate = '';
      var curr = 0;
      var months = data['default']['timelineData'];
      var withinYear = false;
      var maxminYear = [-1,101];
      var yearAgo = prevYear(months[months.length-1]['formattedTime']);
      console.log("hello2");
      for (var i=0; i<months.length; i++ ) {
        var month = months[i];
        curr = parseInt(month['value']);
        sumPercentages += curr;
        if (curr == 100) {
          peakDate = month['formattedTime'].split(" ");
        }
        if (withinYear){
          maxminYear[0] = Math.max(maxminYear[0],curr);
          maxminYear[1] = Math.min(maxminYear[1],curr);
        } else if (month['formattedTime'] == yearAgo){
          withinYear = true;
        }
      }
      var pyurl = "http://127.0.0.1:5000?name="+req.params.name;

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
          var year_high_price = peak_price*(maxminYear[0]/100);
          var year_low_price = peak_price*(maxminYear[1]/100);
          res.json({name: req.params.name,
            total: normalize(total),
            current_percentage: curr,
            current_price: Math.round(normalize(current_price)*100)/100,  //2 decimal places
            peak_price: Math.round(normalize(peak_price)*100)/100,
            peak_month: peakDate[0],
            peak_year: peakDate[1],
            year_high: Math.round(normalize(year_high_price)*100)/100,
            year_low: Math.round(normalize(year_low_price)*100)/100,
            img_url: img_url
          });
        });
      }).on("error", function(e){
        console.log("Got error: " + e.message);
      });
    }
  })
);

function prevYear(formattedTime){
  var time = formattedTime.split(" ");
  time[1] = parseInt(time[1]) - 1;
  return time[0] + " " + time[1];
}

function normalize(val) {
  return Math.pow(Math.log(val),8)/100000;
}

module.exports = router;
