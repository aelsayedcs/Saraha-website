import { Schema, model } from "mongoose";

const userSchema = new Schema({

    firstName: String,
    lastName: String,
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase:true
    },
    password: {
        type: String,
        required: true
    },

    confirmEmail: {
        type: Boolean,
        default: false
    },
    gender: {
        type: String,
        default: "Male",
        enum: ['Male', 'Female']
    },
    phone: String,
    age: Number,
    profileImage: String,
    coverImages: [String],

}, { timestamps: true })

const userModel=model("User",userSchema);

export default userModel;