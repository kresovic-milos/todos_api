var express = require('express');
var router = express.Router();
const authService = require('./authService');

router.post('/signin', async (req, res, next) => {
    const response = await authService.login(req.body)
    res.send(response);
});

router.post('/signup', async (req, res, next) => {
    await authService.saveUser(req.body);
    res.send();
});

module.exports = router;