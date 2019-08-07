var express = require('express');
var router = express.Router();
var projectsApi = require('./api/projects/controller');
var authApi = require('./api/auth/authController');

router.use('/projects', projectsApi);
router.use('/auth', authApi);

module.exports = router;
