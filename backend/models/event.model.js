const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const eventSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true , default: Date.now },
    location: { type: String, required: true, default: 'Karachi' },
    createdBy: { type: ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Event', eventSchema);