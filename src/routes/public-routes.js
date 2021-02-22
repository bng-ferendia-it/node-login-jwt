const express = require('express')
const router = express.Router()
const User = require('../model/user-model')
const bcrypt = require('bcryptjs')

router.get('/',(req, res) => {
    res.send('Hello World')
})

router.get('/login',async (req, res) => {
    const user = await User.findOne({email: req.body.email});
    if(!user){
        res.status(401).send({message: 'Unauthorized'})
    }
    if(!await bcrypt.compare(req.body.password,user.password)){
        res.status(401).send({message: 'Unauthorized'})
    }
    const token = await user.jwtGen();

    res.send({token: token})
})

router.post('/register',async (req, res) => {

    try{
        const user = new User(req.body)
        user.role = 'role_user'
        await user.save()
        res.send({user})
    }catch (e) {
        res.status(400).send({message: e.message})
    }

})

module.exports = router