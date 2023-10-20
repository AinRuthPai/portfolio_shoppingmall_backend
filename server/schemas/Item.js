const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    id: {
        type: Number,
    },
    title: {
        type: String,
    },
    brand: {
        type: String,
    },
    price: {
        type: Number,
    },
    img: {
        type: Array,
    },
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
