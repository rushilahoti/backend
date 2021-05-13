const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const userRoute = require('./routes/users');

mongoose.connect('mongodb://localhost:27017/testdb',{useNewUrlParser: true, useUnifiedTopology: true})
    .then(_=>console.log('connect to db'))
    .catch(_=>console.log('error occured'))

const app = express();
app.use('/users',userRoute);
app.use(morgan('dev'));

const PORT = process.env.port || 4000;

app.listen(PORT, _=>{
    console.log('server up n runnin on '+PORT);
})