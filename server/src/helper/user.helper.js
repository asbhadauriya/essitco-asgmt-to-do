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

  async userCheck(email, userName, phoneNumber) {
    console.log("inside usercheck")
    const emailExist = await model.findOne({ email: email })
    if (emailExist) throw { message: "Email already exists", status: false };
    const usernameExist = await model.findOne({ userName: userName })
    if (usernameExist) throw { message: "UserName already exists", status: false };
    const phoneExist = await model.findOne({ phoneNumber: phoneNumber })
    if (phoneExist) throw { message: "phoneNumber already exists", status: false }
  }

  async checkRequest(decodedToken,responses){
    if (!decodedToken.id || !responses || !Array.isArray(responses)) {
      return res.status(400).json({ msg: 'Invalid request body' });
  }
  }
}

module.exports = new UserHelper()