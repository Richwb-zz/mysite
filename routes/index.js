const express = require('express');
const router = express.Router();
const checkForm  = require("../formsubmit.js");

/* GET home page. */
router.post('/comment', function(req, res, next) {
  result = checkForm(req.body);
  res.json(result);
});


module.exports = router;