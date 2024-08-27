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

Shoes.insertMany([
   {
    "name": "Asics Gel Kayano",
    "size": 9,
    "price": 120,
    "condition": "Good",
    "score": 7
   },
   {
   "name": "Asics Gel Flux",
    "size": 10,
    "price": 1240,
    "condition": "Good",
    "score": 6
   },
   {
   "name": "Asics Gel Kayano 14",
    "size": 9,
    "price": 1203,
    "condition": "Good",
    "score": 9
   },
   {
   "name": "Air Jordan 1",
    "size": 9,
    "price": 1203,
    "condition": "Good",
    "score": 7
   },
]).then((result) =>{
    console.log('berhasil')
    console.log(result)
}).catch((err) => {
    console.log(err)
});
