const bcrypt = require('bcrypt')
const userRoute = require('express').Router();
const User = require('../models/User');




userRoute.post('/', async (req, res) => {

    // Extramos los datos que nos llega del cliente
    const body = req.body;
    const saltRounds = 10;
    const hash = await bcrypt.hash(req.body.password, saltRounds)

    const user = new User({
        userName: body.userName,
        name: body.name,
        gmail: body.gmail,
        passwordHash: hash
    })

    const saveUser = await user.save();

    res.send(saveUser);
})


module.exports = userRoute;