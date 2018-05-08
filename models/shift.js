const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const ShiftSchema = mongoose.Schema({

    venue: {
        type: String,
        required: true

    },
     date: {
        type: Date,
         required: true
    },
    time: {
        type: String,
        required: true
    },
    dj: {
        type: String
    },
    pending: {
        type: Boolean
    },
    hasDJ: {
        type: Boolean
    }
});

ShiftSchema.index({ 'venue': 1, 'date': 1 }, { unique: true });

const Shift = module.exports = mongoose.model('Shift', ShiftSchema);



module.exports.addShift = function(newShift, callback){
    newShift.save(callback);
    ShiftSchema.in
};

module.exports.getShiftbyId = function(id, callback){
    Shift.findById(id, callback);
};

module.exports.FindShiftByIdAndDelete = function (id, callback) {
    Shift.findOneAndDelete(id,callback);
};

module.exports.FindVenueByIdAndUpdate = function (id, callback) {
    User.findOneAndUpdate(id, callback)
};

