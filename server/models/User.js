const { Schema, model } = require('mongoose')
const bcrypt = require ('bcrypt')

const userSchema = new Schema(
    {
        username: {
            type: String, 
            required: true, 
            unique: true, 
            trim: true
        }, 
        email: { 
            type: String, 
            required: true, 
            unique: true, 
            match: [/.+@.+\..+/, 'Must match an email address!']
        }, 

        password: { 
            type: String,
            required: true, 
            minLength: 8
        }
    }
)

userSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
  };

const User = model('User', userSchema)

module.exports = User; 