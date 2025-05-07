import mongoose, { Schema } from "mongoose";
import dotenv from "dotenv"
dotenv.config();

const MONGO_URL = process.env.MONGO_URL

if (!MONGO_URL) {
    throw new Error("MongoDB connection string not provided.")
}

mongoose.connect(MONGO_URL)
    .then(() => console.log("Connected to the db."))
    .catch((err: string) => console.log("Mongodb connection error: " + err))

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    firstname: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastname: { 
        type: String, 
        required: true,
        trim: true,
        maxLength: 50 
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    }
})

export const UserModel = mongoose.model("users", UserSchema);

const AccountSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
    balance: { type: Number, required: true }
});

export const AccountModel = mongoose.model("accounts", AccountSchema);

