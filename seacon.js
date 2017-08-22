var page = require('webpage').create();
page.open('http://seaconlogistics.com/', function() {
  page.render('seacon.png');
  phantom.exit();
});