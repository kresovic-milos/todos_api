const dal = require('./dal');

const getAll = async id => dal.getAll();
const getProject = async id => dal.getProject(id);
const postProject = async project => dal.postProject(project);
const putProject = async project => dal.putProjet(project);
const deleteProject = async id => dal.deleteProject(id);

module.exports = {
  getAll,
  getProject,
  postProject,
  putProject,
  deleteProject
};
