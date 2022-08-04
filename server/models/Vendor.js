const { Schema, model } = require('mongoose');
const contactSchema = require('./Contact');

const vendorSchema = new Schema(
    {
        vendorName: { 
            type: String,
            required: true
        }, 
        phoneNumber: { 
            type: String, 
            required: true,
            minLength: 10,
            maxLength:13

        }, 
        street: { 
            type: String,
            required: true
        }, 
        city: { 
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        zip: { 
            type: Number,
            required: true, 
            minLength: 5,
            maxLength: 9
        },
        products: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Product'
            }
        ],
        notes: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Note'
            }
        ],
        contact: [contactSchema]
    }   
)

const Vendor = model('Vendor', vendorSchema)

module.exports = Vendor; 