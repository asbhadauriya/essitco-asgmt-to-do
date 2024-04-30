const todoRouter = require('express').Router();
const authController = require('../controllers/authController');
const Controller = require('../controllers/index')
const {todoController} = Controller.module
const authMiddleware = require('../middleware/authenticate');

todoRouter.post('/create',authMiddleware, todoController.createTodo)
todoRouter.get('/get-all',authMiddleware, todoController.getAllTodo)
router.put('/todoLists/:id', todoListController.updateTodoList);
router.delete('/todoLists/:id', todoListController.deleteTodoList);
module.exports = todoRouter;   