// Enrutamiento y middleware
const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors')

// IMPORT RUTES
const RouteUsers = require('./routes/AllUserRoute')
const RouteUserCreate = require('./routes/CreateUserRoute');
const RouteNoteCreate = require('./routes/CreateNoteRoute');
const RouteLogin = require('./routes/LoginRoute');
const RouteUpdateNote = require('./routes/PutNoteRoute');
const RouteDeleteNote = require('./routes/DeleteNoteRoute');
// MIDDLEWARE
app.use(morgan('dev'));
app.use(express.json());

app.use(cors({
    origin: "*",
}))



// RUTES
app.use('/users/note', RouteUsers);
app.use('/create/users', RouteUserCreate);
app.use('/create/note', RouteNoteCreate);

// LOGIN
app.use('/login', RouteLogin);

// UPDATE NOTE
app.use('/notes/update/', RouteUpdateNote);

// Delete Note
app.use('/notes/delete/', RouteDeleteNote);


module.exports = app;

