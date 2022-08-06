const { Schema } = require('mongoose')
const dateFormat = require('../utils/dateFormat');

const notesSchema = new Schema = Schema( 
    { 
        notesBody: { 
            type: String, 
            required: true,
            maxlength: 100
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
