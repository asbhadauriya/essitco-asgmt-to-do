const bcrypt = require("bcrypt");
const model = require("../models/Todo");

class TodoHelper {
  async todoCheck(title) {
    const emailExist = await model.findOne({ title: title });
    if (emailExist)
      throw { message: "Todo already exists with given title", status: false };
  }
}

module.exports = new TodoHelper();
