require('dotenv').config()

console.log("inside index",process.env.PORT)
const authRouter = require('./auth.router')
// const otpRouter = require('./otp.router')
// const courseRouter = require('./course.router')
// const billingRouter = require('./billing.router')
// const referalRouter = require('./refferal.router')
// const affiliateRouter = require('./affiliate.router')
// const rewardRouter = require('./reward.router')
// const adminRouter = require('./admin.router')
// const asbRouter = require('./asb.router')
// const questionAnsRouter = require('./que.ans.router')

const routerIndex = { authRouter}

module.exports = routerIndex