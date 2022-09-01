var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '2022 Aspire Class T20 Project' });
});

module.exports = router;
