const jwt = require('jsonwebtoken')
require("dotenv").config()

const checkToken = (req, res, next) => {

    try {
        let token = req.headers.authorization.split(" ")[1]
        jwt.verify(token, process.env.SECRET_KEY)
        next()
    }
    catch (err) {
        res.send({ message: "Auth failed" })
    }

}


module.exports = checkToken;