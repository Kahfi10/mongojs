const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/ShirtApp')
.then(() => {
    console.log('Connected to the database');
}).catch((err) => {
    console.log('Error connecting to the database');
});

const personSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
})

personSchema.pre('save', async function() {
    this.firstName = 'angel'
    this.lastName = 'luna'
    console.log('persiapan menyimpan data')
})

personSchema.post('save', async function() {
    console.log('data telah di simpan')
})

personSchema.virtual('fullname').get(function() {
    return `${this.firstName} ${this.lastName}`;
})

const Person = mongoose.model('Person', personSchema);

const person = new Person({
    firstName: 'Ashabul',
    lastName: 'Kahfi'
})

console.log(person)

person.save().then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
})