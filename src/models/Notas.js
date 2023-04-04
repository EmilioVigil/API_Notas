// Agregamos un esquema a mi modelo de base de datos

const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        minLength: 5,
        required: true
    },
    important: Boolean,
    createDate: {
        type: Date,
        default: Date.now
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})



const Note = mongoose.model('Note', noteSchema)

module.exports = Note



/*
Tipos de datos:
String
Number
Date
Buffer
Boolean
Mixed
ObjectId
Array

Opciones de validación:
required
minlength
maxlength
min
max
enum
match
validate
Opciones de configuración:
default
select
validateBeforeSave
index
unique
sparse
lowercase
uppercase
trim
set
get

Subdocumentos:
nested
ref
populate
Otros:
type
alias
autopopulate
childSchemas
discriminatorKey
id
_id
minimize
read
toJSON
toObject
versionKey
*/