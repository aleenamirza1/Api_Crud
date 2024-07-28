const mongoose = require('mongoose');

const ProdSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Quantity: {
        type: Number,
        required: true,
    },
    Category:{
        type: String,
        required: true,
    },
    Rating: {
        type: Number,
        required: true,
    },
    ProdImage: {
        type: String,
    },
})

module.exports = mongoose.model("products", ProdSchema);