const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//Async/await prevent generateToken from firing before bcrypt resolves
async function passwordAuth(password1, password2) {
  if (await bcrypt.compare(password1, password2)) {
    return true;
  }
  //What exit message should i use?
  return false;
};

function generateToken(user) {
  return jwt.sign({ id: user._id }, process.env.SECRET, { expiresIn: 86400 });
};

module.exports = { passwordAuth, generateToken }