const App = require('./App')
const mongoose = require('mongoose');

require('dotenv').config()
const DATABASE_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3001

mongoose.connect(DATABASE_URL)
    .then(() => {
        App.listen(PORT, () => {
            console.log(`DATA BASE CONNECTED AND SERVER RUN ON PORT ${PORT}`)
        })
    }).catch(err => {
        console.log('ERROR EN LA CONEXION: ' + err.message)
    })

