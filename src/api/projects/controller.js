var express = require('express');
var router = express.Router();
const { getAll } = require('./service');

router.get('/', async (req, res, next) => {
  try {
    const allProjects = await getAll();
    res.send(allProjects);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', function(req, res, next) {
  res.send();
});

router.post('/', function(req, res, next) {
  res.send();
});

router.put('/', function(req, res, next) {
  res.send();
});

router.delete('/', function(req, res, next) {
  res.send();
});

module.exports = router;
