import mongoose from "mongoose";

const UserSchema  = mongoose.Schema({
    name:{
        type: String,
        required: true
    } ,
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
    ,
    class: {
        type: String,
        required: true
    },
    topics: {
        type: Array,
        required: true
    }
    
}, {
    timestamps: true
});

const User = mongoose.model('User', UserSchema);
export default User;