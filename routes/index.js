const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('coucou', {sayHello: 'Hello buddy !'});
});

module.exports = router;
