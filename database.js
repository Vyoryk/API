const mongoose = require('mongoose');
const URL = "mongodb+srv://vyctor:victor123@cluster0.vsvyz.mongodb.net/test";

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('Conexion exitosa a base de datos!'))
.catch(err => console.log('Tienes un error: ' + err));

module.exports = mongoose;