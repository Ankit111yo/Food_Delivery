const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const resRoutes = require('./Routes/restaurant');
const adminRoutes = require('./Routes/admin');
const cors= require('cors');
const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

 app.use('/api', resRoutes);
 app.use('/admin',adminRoutes);


mongoose.connect('"enter your own mongoUri"',
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(client => {
    console.log('Connected');
    app.listen(port, () => {
        console.log(`Server running in ${port}`);
    });
}).catch(err => {
    console.log(err);
})
