const db = require('../../db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const SECRET_KEY = 'secretkey23456';
const uuidv1 = require('uuid/v1');

const saveUser = async user => {
  if (user.username.length > 3) {
    return await db
      .get('users')
      .push({ id: uuidv1(), ...user })
      .write();
  }
  throw new Error('Username should containt at least 4 characters!');
};

const login = async user => {
  const u = findById(user.id);
  const result = bcrypt.compareSync(user.password, u.password);
  if (!result) return { errorMessage: 'Wrong password' };
  const accessToken = jwt.sign({ id: user.id }, SECRET_KEY);
  const response = { access_token: accessToken };
  return response;
};

const findById = id =>
  db
    .get('users')
    .find({ id: id })
    .value();

module.exports = {
  saveUser,
  login
};
