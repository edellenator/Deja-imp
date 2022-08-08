const { Schema } = require('mongoose')


const contactSchema = new Schema (
    {
        contactName: {
            type: String,
            required: true
        }, 
        title: { 
            type: String,
            required: true
        }, 
        email: { 
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
        }
    }
)


module.exports = contactSchema; 