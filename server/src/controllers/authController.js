const model = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const key = process.env.JWTKEY;
const Helper = require("../helper/index");
const { UserHelper } = Helper.module;

class authController {
  async signUp(req, res) {
    try {
      await UserHelper.userCheck(req.body.email);
      const password = await UserHelper.encryptPassword(req.body.password);
      const data = await model.create({ ...req.body, password });
      return res.json({ data, status: true });
    } catch (error) {
      console.log(error.message);
      res.status(500).send(error);
    }
  }

  async forgotPassword(req, res) {
    try {
      console.log("inside forget");
      if (!req.body.password) throw "only password will change";
      const password = await UserHelper.encryptPassword(req.body.password);
      await UserHelper.updateData(req.params.email, password);
      res.send({ message: "Password Updated Successfully" });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;

      if (!email || !password)
        throw { message: "Email/UserName & password required" };
      const user = await model.findOne({ email: email.toLowerCase() });
      if (!user || !(await bcrypt.compare(password, user.password))) {
        throw { message: "Invalid Login Credentials", status: false };
      }
      const accessToken = jwt.sign(
        { email: user.email, id: user._id, email: user.email },
        key,
        { expiresIn: "1h" }
      );
      const refreshToken = jwt.sign(
        { email: user.email, id: user._id, email: user.email },
        key,
        { expiresIn: "30d" }
      );
     
      return res.send({
        email: user.email,
        token: accessToken,
        refreshToken: refreshToken,
      });
    } catch (error) {
      return res.status(401).json({ error, status: false });
    }
  }
}

module.exports = new authController();
