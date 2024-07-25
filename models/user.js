const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SALT_ROUNDS = 6;
const bcrypt = require('bcrypt');


const userSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        minLength: 3,
        required: true
    }, 
    }, {
        timestamps: true,
        toJSON: {
            transform: function(doc, ret) {
              delete ret.password;
              return ret;
            }
        }
    });
// toJSON-transform func -> ret: The plain object representation which has been converted
// doc: The mongoose document which is being converted

// Mongoose pre-save hook, that will hash the password anytime the password has changed
userSchema.pre('save', async function(next) {
    // 'this' is the user doc
    if (!this.isModified('password')) return next();
    // update the password with the computed hash
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    return next();
    });    

module.exports = mongoose.model('User', userSchema);

// trim: This transform causes Mongoose to trim spaces before and after the string
// | lowercase: to convert the string to lowercase 
// before saving.

// Keeping the User model lean is always a good practice. However, it's especially important with JWT-based authentication because the user document will be the data payload included in the JWT and you don't want the JWT to be bigger than it has to be