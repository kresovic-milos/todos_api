const authDal = require('./authDal');
const bcrypt = require('bcrypt');

const saveUser = async user => {
  if (user.password.length > 7) {
    const password = await bcrypt.hash(user.password, 10);
    await authDal.saveUser({ ...user, password: password });
  }
  throw new Error('Password should containt at least 7 characters!');
};

const login = async user => authDal.login(user);

module.exports = {
  saveUser,
  login
};
