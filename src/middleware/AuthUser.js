const jwt = require('jsonwebtoken');
const User = require('../models/User')

async function authMiddleware(req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.SECRET);

        if (!token || !decodedToken.id) {
            return response.status(401).send({ error: 'token missing or invalid' })
        }
        const user = await User.findById(decodedToken.id);
        req.user = user;
        next();
    } catch (e) {
        res.status(401).send({ message: 'Autenticación fallida.' });
    }
}



module.exports = authMiddleware;