const Todo = require("../models/Todo");
require("dotenv").config();
const Helper = require("../helper/index");

const { TodoHelper } = Helper.module;

class todoController {
  async getAllTodo(req, res) {
    try {
      const todos = await Todo.find({ createdBy: req.user.id });
      return res.json(todos);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }   
  }
  async createTodo(req, res) {
    try {
      await TodoHelper.todoCheck(req.body.title);

      const todo = new Todo({
        createdBy: req.user.id,
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        completed: false,
      });
      const newTodo = await todo.save();
      res.status(201).json(newTodo);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  async updateTodo(req, res) {
    try {
      const todoList = await TodoList.findById(req.params.id);

      if (todoList == null) {
        return res.status(404).json({ message: "To Do List not found" });
      }

      if (req.body.title != null) {
        todoList.title = req.body.title;
      }

      if (req.body.description != null) {
        todoList.description = req.body.description;
      }

      if (req.body.completed != null) {
        todoList.completed = req.body.completed;
      }

      const updatedTodoList = await todoList.save();
      res.json(updatedTodoList);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async deleteTodo(req, res) {
    try {
      await TodoList.findByIdAndDelete(req.params.id);
      res.json({ message: "Deleted To Do List" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new todoController();
