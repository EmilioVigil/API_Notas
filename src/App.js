// Enrutamiento y middleware
const express = require('express');
const morgan = require('morgan');
const app = express();

// IMPORT RUTES
const RouteNotes = require('./routes/AllNoteRoute');
const RouteUsers = require('./routes/AllUserRoute')
const RouteUserCreate = require('./routes/CreateUserRoute');
const RouteNoteCreate = require('./routes/CreateNoteRoute');
const RouteLogin = require('./routes/LoginRoute');
const RouteUpdateNote = require('./routes/PutNoteRoute');
const RouteDeleteNote = require('./routes/DeleteNoteRoute');
// MIDDLEWARE
app.use(morgan('dev'));
app.use(express.json());

// RUTES
app.use('/notes', RouteNotes);
app.use('/users', RouteUsers);
app.use('/create/users', RouteUserCreate);
app.use('/create/note', RouteNoteCreate);

// LOGIN
app.use('/login', RouteLogin);

// UPDATE NOTE
app.use('/notes/update/', RouteUpdateNote);

// Delete Note
app.use('/notes/delete/', RouteDeleteNote);


module.exports = app;

