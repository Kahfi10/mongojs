const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Shoes_db')
.then(() => {
    console.log('Connected to the database');
}).catch((err) => {
    console.log('Error connecting to the database');
});

const shoesSchema = new mongoose.Schema({
    name: String,
    size: Number,
    price: Number,
    condition: String,
    score: Number
});

const Shoes = mongoose.model('Shoes', shoesSchema);

const shoes = new Shoes({
    name: 'Nike Dunk',
    size: 8,
    price: 100,
    condition: 'New',
    score: 5
});

shoes.save()

console.log(shoes);
