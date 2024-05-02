require('dotenv').config()

const authRouter = require('./auth.router')
const todoRouter = require('./todo.router')

const routerIndex = { authRouter,todoRouter}

module.exports = routerIndex