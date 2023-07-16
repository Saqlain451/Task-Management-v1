import {model, Schema} from "mongoose";

const userSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    mail: {
        type: String,
        required: true,
    },
    prof: {
        type: String,
        required: true,
    },
    pass: {
        type: String,
        required: true,
    },
    cPass: {
        type: String,
        required: true,
    },
})

const users = model("user", userSchema);
export default users;