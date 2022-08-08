const { Schema, model } = require('mongoose')

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        }, 

        SKU: {
            type: String,
            required: true,
        }, 
        stock: {
            type: Number, 
            required: true
        }, 

        description: {
            type: String,
            required: true,
        }, 
        
        color: { 
            type: String,
            required: true,
        }, 
        vendor: {
            type: Schema.Types.ObjectId,
            ref: 'Vendor'
        }
        
    }
)

const Product = model('Product', productSchema)

module.exports = Product; 
