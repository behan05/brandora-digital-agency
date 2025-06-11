
const router = require('express').Router();
const { hireme } = require('../controllers/hireController');

router.post('/hireme', hireme);
module.exports = router;