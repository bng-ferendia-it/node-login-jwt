const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')

router.get('/user',auth,(req, res) => {
    if(req.user.role === 'role_user' || req.user.role === 'role_admin'){
        res.send(`Hello ${req.user.name}`)
    }else {
        res.status(401).send({message: 'Unauthorized'})
    }
})

module.exports = router