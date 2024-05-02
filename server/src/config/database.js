const mongoose = require("mongoose");
mongoose.Promise = Promise;

// require('dotenv').config();
// mongoose connection
const connectDB = async () => {
    try {
        const DB = process.env.MONGOURI
        // const DB = process.env.MONGOCONNECTION
        mongoose.connect(DB, {
            autoIndex: true,
        })
        console.log("MongoDB Connected Successfully")
    }

    catch (err) {
        console.log("Error in connecting mongoose Db :", err)
    }
}
 
module.exports = connectDB;