const mongoose = require('mongoose');

var mongoURL = 'mongodb+srv://ravsyadav:R7a4v3i4462@cluster0.elrw4.mongodb.net/mern-pizza'

mongoose.connect(mongoURL, {useUnifiedTopology:true , useNewUrlParser:true})

var db = mongoose.connection
db.on('connected', ()=> {
    console.log('MongoDB connection successfull');
})

db.on('error', ()=>{
    console.log('MongoDB connection failed');
})

module.exports = mongoose

