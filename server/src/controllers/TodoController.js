const Todo = require('../models/Todo');
require('dotenv').config();
const key = process.env.JWTKEY;
const Helper = require('../helper/index');
const { OTPHelper,UserHelper } = Helper.module


class todoController {

  async getAllTodo(req, res) {
    try {
        const todos = await Todo.find({ user: req.user.id });
        return res.json(todos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
  }
  async createTodo(req, res) {
    const todo = new Todo({
        user: req.user.id,
        title: req.body.title,
        description: req.body.description,
        completed: false
    });

    try {
        const newTodo = await todo.save();
        res.status(201).json(newTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }

  }

  


  

 






}


module.exports = new todoController();