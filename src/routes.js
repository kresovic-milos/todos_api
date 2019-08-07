var express = require('express');
var router = express.Router();
var projectsApi = require('./api/projects/controller');

router.use('/projects', projectsApi);

module.exports = router;
