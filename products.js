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

const products = mongoose.model('products', shirtSchema);

// const product = new products ({
//     "name": "Celana Chino",
// 		"brand": "Levi's",
// 		"price": 900000,
// 		"color": "krem",
// 		"size": ["28", "30", "32", "34", "36"],
// 		"description": "Celana chino dengan warna yang cerah dan desain yang simpel, terbuat dari bahan katun yang nyaman dipakai.",
// 		"condition": "baru",
// 		"stock": 15,
// 		"availability": {
// 			"online": true,
// 			"offline": false
//         }
// });

// product.save().then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err)
// })

products.findOneAndUpdate({name: 'Celana Chino'}, {
    "name": "Celana Chino",
		"brand": "Levi's",
		"price": 1900000,
		"color": "abu abu",
		"size": ["28", "30", "32", "34", "36"],
		"description": "Celana chino dengan warna yang cerah dan desain yang simpel, terbuat dari bahan katun yang nyaman dipakai.",
		"condition": "baru",
		"stock": -15,
		"availability": {
			"online": true,
			"offline": false
        }
}, {new: true, runValidators: true}).then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
});
