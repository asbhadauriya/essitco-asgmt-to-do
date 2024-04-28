const mongoose = require("mongoose");
mongoose.Promise = Promise;

// require('dotenv').config();
// mongoose connection
const connectDB = async () => {
    try {
        const DB = `mongodb+srv://akshay:akshay@cluster0.ye6gzxm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
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