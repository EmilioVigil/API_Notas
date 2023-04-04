const createNoteRoute = require('express').Router();
const User = require('../models/User');
const Note = require('../models/Notas');
const authMiddleware = require('../middleware/AuthUser')

createNoteRoute.post('/', authMiddleware, async (req, res) => {
    try {
        const body = req.body;
        // Recupero los datos del usuario 
        const user = await User.findById(req.user.id)

        // Creo la nueva nota y le mando el id del usuario que la creo
        const newNote = new Note({
            title: body.title,
            content: body.content,
            important: body.important === undefined ? false : body.important,
            createDate: new Date(),
            user: user._id
        })

        await newNote.save();

        // Agregamos el id de la nueva nota al usuario que la creo
        user.notes.push(newNote._id);
        await user.save();

        res.status(200).send(newNote)

    } catch (err) {
        res.send({ 'error': err.message })
    }
})


module.exports = createNoteRoute;

