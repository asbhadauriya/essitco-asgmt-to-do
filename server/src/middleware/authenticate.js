require("dotenv").config();
const jwt = require("jsonwebtoken");

const key = process.env.JWTKEY;

// console.log("test",test)

module.exports = function (req, res, next) {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader) throw "authorization missing";
    // const splitHeader = authHeader.split("Bearer ")[1];

    jwt.verify(authHeader, key);
    const decodedToken = jwt.decode(authHeader, key);
    req.user = decodedToken;
    if (!decodedToken) throw "not having token please login";
    next();
    // if(!decodedToken) throw "not having token please login"
  } catch (err) {
    return res.status(401).json({ error: err });
  }
};
