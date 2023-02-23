const express = require('express');
const bodyParser = require('body-parser'); 
const app = express();
const connectDb = require('./db.js')
const peopleRoutes = require('./controllers/people.controller')
app.use(bodyParser.json())
app.use('/api/peoples', peopleRoutes)
app.use(errorHandler)
connectDb()
    .then(() => {
        console.log('db connection succeeded.')
        app.listen(3000,
            () => console.log('server started at 3000.'))
    })
    .catch(err => console.log(err))