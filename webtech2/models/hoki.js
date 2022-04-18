const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let HokiSchema = new Schema({
    title: { type: String, required: true },
    organizer: { type: String, required: true },
    date: { type: String, required: true },
    price: { type: Number, required: true, max: 1000000 },
    sitting: { type: Number, required: true, max: 1000000 },
});

module.exports = mongoose.model('foci', HokiSchema);