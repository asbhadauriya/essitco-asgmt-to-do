const authRouter = require('express').Router();
const authController = require('../controllers/authController');
const Controller = require('../controllers/index')
// const {UserController} = Controller.module
const { validateSignup, handleValidationErrors } = require('../middleware/expressvalidator');
// const authMiddleware = require('../middleware/authenticate');
// const role = require('../middleware/role')

authRouter.post('/signUp', validateSignup, handleValidationErrors, authController.signUp)
// authRouter.get('/getUser', UserController.getUser);
// authRouter.get('/getAllUsers', UserController.getAllUsers),
// authRouter.post('/login', UserController.login);
// authRouter.put('/updateUser/:id',validateSignup[0],validateSignup[1],validateSignup[2],validateSignup[3], handleValidationErrors, UserController.updateUser);
// authRouter.delete('/removeUser/:id', UserController.removeUser);
// authRouter.put('/forgotPassword/:email', validateSignup[4], validateSignup[5], handleValidationErrors, UserController.forgotPassword);
// authRouter.get('/profile', authMiddleware, UserController.profile);

 
// authRouter.post('/changePassword',validateSignup[5],validateSignup[6],handleValidationErrors,UserController.updatePassword); 

// authRouter.get('/myCourses',authMiddleware,UserController.myCourses);


// authRouter.get('/test',UserController.test)
module.exports = authRouter;   