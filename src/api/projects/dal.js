const db = require('../../db');
const uuidv1 = require('uuid/v1');

const getAll = async () => db.get('projects');

const getProject = async id => {
  if (
    await db
      .get('projects')
      .find({ id })
      .value()
  ) {
    return await db.get('projects').find({ id });
  }
  throw new Error('No project found!');
};
const postProject = async project => {
  if (project.title && project.title.lenght > 1) {
    return db
      .get('projects')
      .push({ id: uuidv1(), title: project.title })
      .last()
      .write();
  }
  throw new Error('title should not be empty!');
};

const putProjet = async project => {
  if (
    await db
      .get('projects')
      .find({ id: project.id })
      .value()
  ) {
    return await db
      .get('projects')
      .find({ id: project.id })
      .assign({ title: project.title })
      .write();
  }

  throw new Error('Project does not exist!');
};

const deleteProject = async id => {
  if (
    await db
      .get('projects')
      .find({ id })
      .value()
  ) {
    return await db
      .get('projects')
      .remove({ id })
      .write();
  }

  throw new Error('Project does not exist!');
};

module.exports = {
  getAll,
  getProject,
  postProject,
  putProjet,
  deleteProject
};
