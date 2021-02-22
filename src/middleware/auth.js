const jwt = require('jsonwebtoken')
const ENV = require('../config')
const User = require('../model/user-model')

const auth = async function(req, res, next){

    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decode = jwt.verify(token, ENV.jwtSecret);
        const user = await User.findOne({_id: decode._id})
        if (!user) {
            throw new Error()
        }
        req.token = token
        req.user = user
        next()
    } catch (e) {
        res.status(401).send({message: 'Unauthorized'})
    }
}

module.exports = auth