const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/ShirtApp')
.then(() => {
    console.log('Connected to the database');
}).catch((err) => {
    console.log('Error connecting to the database');
});

const shirtSchema = mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    }
});

const Shirt = mongoose.model('Shirt', shirtSchema);

const champion = new Shirt({ name: 'Athleticwear Shirt', price: 1020})

champion.save().then((result) => {
    console.log('berhasil');
    console.log(result);
}).catch((err) => {
    console.log(err)
});