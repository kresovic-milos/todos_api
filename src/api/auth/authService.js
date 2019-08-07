const authDal = require('./authDal');
const  bcrypt  =  require('bcrypt');

const saveUser = async (user) => {
  const password = await bcrypt.hash(user.password, 10);
  
  await authDal.saveUser({...user, password: password });
}

const login = async (user) => authDal.login(user);


module.exports = {
  saveUser,
  login
};