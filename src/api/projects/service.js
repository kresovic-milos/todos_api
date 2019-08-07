const dal = require('./dal');

const getAll = async id => dal.getAll();
const getProject = async id => dal.getProject(id);
const postProject = async project => dal.postProject(project);
const putProject = async project => dal.putProjet(project);

module.exports = {
  getAll,
  getProject,
  postProject,
  putProject
};
