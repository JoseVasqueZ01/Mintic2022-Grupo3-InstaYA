const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://instaya:instaya@cluster0.jkzmlso.mongodb.net/?retryWrites=true&w=majority");

const objetobd = mongoose.connection

objetobd.on('connected',()=>{console.log('Conexion correcta a MongoDB')})
objetobd.on('error',()=>{console.log('Error en la conxion a MongoDB')})

module.exports = mongoose