const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/ShirtApp')
.then(() => {
    console.log('Connected to the database');
}).catch((err) => {
    console.log('Error connecting to the database');
});

const shirtSchema = mongoose.Schema([
    {
		name: {
            type: String,
            required: true
        }
    },
    {
		brand: {
            type: String,
            required: true
        }
    },
    {
		price: {
            type: Number,
            required: true,
            min: 0
        }
    },
    {
		color: {
            type: String,
            required: true
        }
    },
    {
		size: [{
            type: String,
            required: true
        }],
    },
    {
		description: {
            type: String,
            required: true,
            maxLength: 150
        }
    },
    {
		condition: {
            type: String,
            enum: ['baru', 'bekas'],
            default: 'baru'
        }             
    },
    {
        stock: {
            type: Number,
            required: true,
            min: 0
        }
    },
    {
		availability: {
			online: {
                type: Boolean,
                required: true
            },

			offline: {
                type: Boolean,
                required: true
            }
		}
    }
]);

const Shirt = mongoose.model('Shirt', shirtSchema);

const champion = new Shirt({ name: 'Athleticwear Shirt', price: 1020})

champion.save().then((result) => {
    console.log('berhasil');
    console.log(result);
}).catch((err) => {
    console.log(err)
});