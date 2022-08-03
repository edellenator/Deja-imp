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
            string: String,
            required: true
        }, 
        zip: { 
            type: Number,
            required, 
            minLength: 5,
            maxLength: 9
        },
        contacts: [contactSchema]
    }   
)

const Vendor = model('Vendor', vendorSchema)

module.exports = Vendor; 