const mongoose = require('mongoose');
const { Schema } = mongoose;

const SabritaSchema = new Schema({
    brand: {type: String, require: true},
    name: {type: String, require: true},
    price: {type: Number, require: true},
    content: {type: Number, require: true}
});

module.exports = mongoose.model('sabrita', SabritaSchema);