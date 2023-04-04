const route = require('express').Router()
const User = require('../models/User')

route.get('/', async (req, res) => {
    const allUser = await User.find({}).populate('notes')
    res.send(allUser)
})



module.exports = route;