var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.status(200).send({
    title: 'Not Ready'
  })
});

module.exports = router;
