var express = require('express');
var router = express.Router();
const { getAll, getProject, postProject, putProject } = require('./service');

router.get('/', async (req, res, next) => {
  try {
    const allProjects = await getAll();
    res.send(allProjects);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    console.log(req.params.id);
    const project = await getProject(req.params.id);
    res.send(project);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    project = await postProject(req.body);
    console.log(req.body);
    res.send(project);
  } catch (error) {
    next(error);
  }
});

router.put('/', async (req, res, next) => {
  try {
    console.log('req.body', req.body);
    project = await putProject(req.body);
    console.log('project', JSON.stringify(project));
    res.send(project);
  } catch (error) {
    next(error);
  }
});

router.delete('/', function(req, res, next) {
  res.send();
});

module.exports = router;
