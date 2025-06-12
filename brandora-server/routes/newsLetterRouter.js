const routers = require('express').Router();
const newsletter = require('../controllers/newsLetterController');

routers.post('/newsletter', newsletter);
module.exports = routers;