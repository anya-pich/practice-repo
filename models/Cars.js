const mongoose = require('mongoose');

const CarsSchema = new mongooseSchema({
    make: String,
    model: String,
    year: Number,
})

const Cars = mongoose.model('cars', CarsSchema);

module.exports = Cars;