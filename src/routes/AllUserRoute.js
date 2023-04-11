const route = require('express').Router()
const User = require('../models/User')

route.get('/', async (req, res) => {
    const data = req.query;

    const allUser = await User.find({
        userName: data.username
    }).populate('notes')
    res.send(allUser)
})



module.exports = route;