const mongoose = require('mongoose');

// Agregamos las notas, dado que los uusarios pueden tener muchas notas creamos el modelo en un array de objetos
const userSchema = new mongoose.Schema({
    userName: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    gmail: { type: String, required: true },
    passwordHash: { type: String },
    notes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Note'
    }]
})

const User = mongoose.model('User', userSchema)


module.exports = User; 