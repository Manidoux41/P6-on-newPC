import mongoose from 'mongoose';

const SauceSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    manufacturer: ,
    description: {
        type: String,
        required: true
    },
    mainPepper: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    heat: {
        type: Number,
        required: true
    },
    likes: {
        type: Number,
        required: true
    },
    dislikes: {
        type: Number,
        required: true
    },
    usersLiked: {
        type: String 
    },
    userDisliked:{
        type: String
    }
});

const SauceModel = mongoose.model('Sauce', UserSchema);

export default SauceModel;