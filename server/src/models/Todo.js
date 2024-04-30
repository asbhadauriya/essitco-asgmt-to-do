const mongoose = require('mongoose')

const Todo = new mongoose.Schema({
  title: { type: String, required: [true, "Todo title is Required"] },
  description: { type: String },
  status:{type:Boolean,default:false},
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Todo', Todo)  