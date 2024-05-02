const bcrypt = require('bcrypt');
const model = require('../models/User');

class UserHelper {

  async encryptPassword(userPassword) {
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(userPassword, salt);
    return password;

  }

  async updateData(email, password) {
    await model.findOneAndUpdate(
      { email: email },
      { password: password },
      { new: true }
    ); 
  }

  async userCheck(email) {
    const emailExist = await model.findOne({ email: email })
    if (emailExist) throw { message: "Email already exists", status: false };
  }

  async checkRequest(decodedToken,responses){
    if (!decodedToken.id || !responses || !Array.isArray(responses)) {
      return res.status(400).json({ msg: 'Invalid request body' });
  }
  }
}

module.exports = new UserHelper()