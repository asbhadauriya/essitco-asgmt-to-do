const mongoose = require('mongoose')

const Todo = new mongoose.Schema({
  title: { type: String, required: [true, "Todo title is Required"] },
  description: { type: String },
  completed:{type:Boolean,default:false}
}); 

module.exports = mongoose.model('Todo', Todo)  