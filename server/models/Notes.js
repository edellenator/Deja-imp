const { Schema } = require('mongoose')
const dateFormat = require('../utils/dateFormat');

const notesSchema = new Schema( 
    { 
        notesBody: { 
            type: String, 
            required: true,
            maxlength: 280
        }, 

        createdAt: { 
            type: Date, 
            default: Date.now, 
            get: timestamp => dateFormat(timestamp)
        }
    }, 
    {
        toJSON: {
            getters: true
        }
    }
)

module.exports = notesSchema; 
