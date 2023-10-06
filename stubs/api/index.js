const router = require('express').Router();

router.get('/attendance/users', (req, res) => {
  res.send(require('../json/users/success.json'));
});

module.exports = router;
