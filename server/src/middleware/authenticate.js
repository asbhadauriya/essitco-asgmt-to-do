require('dotenv').config()

const key = process.env.JWTKEY;

// console.log("test",test)

module.exports = function (req, res, next) {
    try{
    const authHeader = req.headers['authorization'] 
    if (!authHeader) throw'authorization missing'
    // const splitHeader = authHeader.split("Bearer ")
    
    next();
    jwt.verify(token, secretKey, (err, decoded) => {

        if (err) {
          return res.status(401).json({ message: 'Invalid token' });
        }
    req.body.decodedToken = decodedToken

        req.user = decoded.user;
        next();
      });
    // if(!decodedToken) throw "not having token please login"
    }
    catch(err) {
        return res.status(401).json({ error: err });
    }
}