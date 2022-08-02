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
        }
        
    }
)

const Product = model('Product', productSchema)

module.exports = Product; 
