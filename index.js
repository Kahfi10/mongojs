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


Shoes.findById('66cd76585c9f40dee96d61f0').then((result) => {
    console.log(result);
}).catch((err) =>{
    console.log(err);
});

Shoes.updateOne({name: 'Asics Gel Kayano'}, {price: 200}).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});

Shoes.updateMany({condition: 'Good'}, {condition: 'Excellent'}).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});

Shoes.findByIdAndUpdate('66cd76585c9f40dee96d61f0', {score: 12}, {new: true}).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});


// Shoes.insertMany([
//    {
//     "name": "Asics Gel Kayano",
//     "size": 9,
//     "price": 120,
//     "condition": "Good",
//     "score": 7
//    },
//    {
//    "name": "Asics Gel Flux",
//     "size": 10,
//     "price": 1240,
//     "condition": "Good",
//     "score": 6
//    },
//    {
//    "name": "Asics Gel Kayano 14",
//     "size": 9,
//     "price": 1203,
//     "condition": "Good",
//     "score": 9
//    },
//    {
//    "name": "Air Jordan 1",
//     "size": 9,
//     "price": 1203,
//     "condition": "Good",
//     "score": 7
//    },
// ]).then((result) =>{
//     console.log('berhasil')
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// });
