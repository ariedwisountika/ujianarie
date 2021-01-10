const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const ListRoutes = require ('./src/routers/List')
const mongoose = require('mongoose')


app.use(bodyParser.json())


mongoose.connect("mongodb+srv://arie:12345@ujian.odzal.mongodb.net/ujian?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> {
    app.listen(9876, () => console.log('Connecting Success to Port 9876'));
})
.catch( error => console.log('Error'))

app.use('/', ListRoutes);


