import mongoose from "mongoose"

const UserinfoSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const UserinfoModel = mongoose.model("User info",UserinfoSchema)

export default UserinfoModel