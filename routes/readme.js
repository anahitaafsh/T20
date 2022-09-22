var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('readme', {
        title: '2022 Aspire T20 Project',
    });
});

module.exports = router;