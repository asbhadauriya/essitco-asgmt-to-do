const model = require('../models/User');
const otpmodel = require('../models/otpmodel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const key = process.env.JWTKEY;
const Helper = require('../helper/index');
const otpHelper = require('../helper/otp.helper');
const { OTPHelper,UserHelper } = Helper.module


class authController {

  async signUp(req, res) {
    try {
      await UserHelper.userCheck(req.body.email)
      const password = await UserHelper.encryptPassword(req.body.password);
      const data = await model.create({ ...req.body, password });
       return res.json({ data, status: true });
    } catch (error) {
      console.log(error.message)
      res.status(500).send(error);
    }
  }

  async forgotPassword(req, res) {
    try {
      console.log("inside forget");
      if (!req.body.password) throw "only password will change";
      const password = await UserHelper.encryptPassword(req.body.password);
      await UserHelper.updateData(req.params.email, password)
      res.send({ message: "Password Updated Successfully" });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async generateOTP(req, res) {
    try {
      console.log(" inside generation of OTP")
      const check = await OTPHelper.checkEmail(req.body.email)
      if (!check) throw ({ message: 'Unregistered email given' })
      const otp = OTPHelper.genrateRandamNo()
      const encOtp = await OTPHelper.encryptOTP(otp)
      const isEmail = await otpmodel.findOne({ email: req.body.email })
      let user = isEmail
      if (isEmail) {
        await otpmodel.updateOne({ ...req.body, otp: encOtp })
      } else {
        user = await otpmodel.create({ ...req.body, otp: encOtp })
      }
      await OTPHelper.sendOTPOnMobile(otp)
      // await OTPHelper.sendOTPOnEmail(otp)
      let currentTime = new Date();
      currentTime.setMinutes(currentTime.getMinutes() + 1);
      const encData = { email: user.email, exp: currentTime }
      let token = OTPHelper.generateOtpToken(encData)
      res.json({ message: "OTP sent successfully...", status: true, token });
    }
    catch (error) {
      console.log(error)
      res.status(500).json({ error, status: false });
    }
  }


  async otpbyemail(req, res) {
    try {
      const otp = OTPHelper.genrateOTP()
      const encOtp = await OTPHelper.encryptOTP(otp)
      const isEmail = await otpmodel.findOne({ email: req.body.email })
      let user = isEmail
      if (isEmail) {
        await otpmodel.updateOne({ ...req.body, otp: encOtp })
      } else {
        user = await otpmodel.create({ ...req.body, otp: encOtp })
      }
      OTPHelper.sendOTPOnEmail(otp)
      let currentTime = new Date();
      currentTime.setMinutes(currentTime.getMinutes() + 1);
      const encData = { email: user.email, exp: currentTime }
      let token = OTPHelper.generateOtpToken(encData)
      res.json({ message: "OTP sent successfully...", status: true, token });
    }
    catch (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    }
  }

  async verifyOTP(req, res) {
    try {
      const { token, otp } = req.body
      if (!token || !otp) throw { message: 'Token or OTP missing', status: false };

      let decryptedData = OTPHelper.decryptOtpToken(token)
      const { email, exp } = decryptedData

      await otpHelper.validateOtpData(otp, email, exp)
      const currentTime = otpHelper.getCurrentTime()
      const encData = { email: email, exp: currentTime }
      const verifyToken = OTPHelper.verifytoken(encData)
      res.json({ message: 'verified', verifyToken,status:true })
    }
    catch (error) {
      res.status(500).send(error);
    }
  }



 
  async login(req, res) {
    try {
      const { email, password } = req.body

      if (!email || !password)
        throw { message: 'Email/UserName & password required' };
      const user = await model.findOne({ [source]: email });
      if (!user || !(await bcrypt.compare(password, user.password))) {
        throw { message: 'Invalid Login Credentials', status: false };
      }
      const token = jwt.sign({ email: user.email, id: user._id, role: user.role }, key, { expiresIn: '10h' });
      return res.send({ token, status: true,role: user.role });
    } catch (error) {
      res.json({ error, status: false });
    }
  }

  async getUserbyID(req, res) {
    try {
      console.log("inside getuserbyID", req.params)
      const { id } = req.params
      if (!id) throw { message: 'No id given', status: false }
      const userData = await model.findOne({ _id: id }, 'userName email firstName lastName').exec();
      if (!userData) throw { message: 'No user Found', status: false }

      res.json({ userData, status: true });
    } catch (error) {
      res.status(500).send(error);
    }
  }




}


module.exports = new authController();