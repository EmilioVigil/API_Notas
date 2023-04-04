const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const loginRouter = require('express').Router();
const User = require('../models/User');

loginRouter.post('/', async (request, response) => {
    const body = request.body;
    const user = await User.findOne({ userName: body.userName })

    // Comparamos las contraseñas que nos llego del cliente con la que tenemos encriptada en la base de datos
    const passwordCorrect = user === null
        ? false
        : await bcrypt.compare(body.password, user.passwordHash)

    // Si es contraseña o username incorrecto lanzo un error
    if (!(user && passwordCorrect)) {
        return response.status(401).send({
            error: 'invalid username or password'
        })
    }

    // Si la contraseña es correcta, se crea un token con el método jwt.sign.El token contiene el nombre de usuario y la 
    // identificación de usuario en un formulario firmado digitalmente.
    const userForToken = {
        userName: user.userName,
        id: user._id
    }

    // Genero un token para ese usuario
    const token = jwt.sign(userForToken, process.env.SECRET, { expiresIn: '1m' })

    // Respondo al cliente con el usuario con su token 
    response.status(200).send({
        token,
        userName: user.userName,
        name: user.name
    })

})

// AHORA CAMBIAREMOS LA RUTA DE LA CREACION DE NOTAS PARA QUE SOLAMENTE EL USUARIO LOGEADO PUEDA CREAR UNA NOTA

module.exports = loginRouter;