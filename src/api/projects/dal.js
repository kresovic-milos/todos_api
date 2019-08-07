const db = require('../../db');

const getAll = async () => db.get('projects');

module.exports = {
  getAll
};
