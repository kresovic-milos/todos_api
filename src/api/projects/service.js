const dal = require('./dal');


const getAll = id => dal.getAll();

module.exports = {
  getAll
};
