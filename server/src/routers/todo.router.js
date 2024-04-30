const todoRouter = require('express').Router();
const authController = require('../controllers/authController');
const Controller = require('../controllers/index')
const {todoController} = Controller.module
const authMiddleware = require('../middleware/authenticate');

todoRouter.post('/create',authMiddleware, todoController.createTodo)
todoRouter.get('/get-all',authMiddleware, todoController.getAllTodo)
todoRouter.put('/todoLists/:id', authMiddleware,todoController.updateTodo);
// router.delete('/todoLists/:id', authMiddleware,todoController.deleteTodoList);
module.exports = todoRouter;   