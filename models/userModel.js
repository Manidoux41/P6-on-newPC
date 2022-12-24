import mongoose from 'mongoose';
import pkg from 'validator';
import bcrypt from 'bcrypt';

const {isEmail} = pkg;

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        validate: [isEmail],
        lowercase: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        minLength: 6
    }
})

// Pré Hook - Before save in Mongo

UserSchema.pre('save', async function (next) {
    const user = this;

    const hash = await bcrypt.hash(user.password, 10)
    user.password = hash;
    next();
})

// Add method for checking password

UserSchema.methods.isValidPassword = async function (password) {
    const user = this;

    const isSame = await bcrypt.compare(password, user.password)
    return isSame; // Return true or false
}

const UserModel = mongoose.model('User', UserSchema);

export default UserModel