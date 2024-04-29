const mongoose = require('mongoose')

const User = new mongoose.Schema({
  firstName: { type: String, required: [true, "User Name is Required"] },
  lastName: { type: String, required: [true, "User Last Name is Required"] },
  email: { type: String, unique: true, required: [true, "User email is Required"],lowercase: true },
  password: { type: String, required: [true, "User password is Required"] },
  created_on: { type: Date, default: Date.now }  
}); 

module.exports = mongoose.model('User', User)  