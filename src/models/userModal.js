import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, "Please provide a password"]
    },
    role: {
        type: String,
        enum: ["Super Admin", "Admin", "User"],
        default: "User"
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;