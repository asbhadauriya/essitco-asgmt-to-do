const todoRouter = require('express').Router();
const authController = require('../controllers/authController');
const Controller = require('../controllers/index')
const {todoController} = Controller.module
const authMiddleware = require('../middleware/authenticate');

todoRouter.post('/create',authMiddleware, todoController.createTodo)
todoRouter.post('/get-all',authMiddleware, todoController.getAllTodo)

module.exports = todoRouter;   