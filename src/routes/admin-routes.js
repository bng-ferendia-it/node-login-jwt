const express = require('express')
const auth = require('../middleware/auth')
const router = express.Router()


router.get('/admin',auth,(req, res) => {
    if(req.user.role === 'role_admin'){
        res.send(`Hello ${req.user.name}`)
    }else {
        res.status(401).send({message: 'Unauthorized'})
    }
})

module.exports = router