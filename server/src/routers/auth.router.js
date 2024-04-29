const authRouter = require('express').Router();
const authController = require('../controllers/authController');
const Controller = require('../controllers/index')
// const {UserController} = Controller.module
const { validateSignup, handleValidationErrors } = require('../middleware/expressvalidator');
// const authMiddleware = require('../middleware/authenticate');
// const role = require('../middleware/role')

authRouter.post('/signUp', validateSignup, handleValidationErrors, authController.signUp)

authRouter.post('/login', authController.login);

module.exports = authRouter;   