import { Schema, model, models } from 'mongoose'

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exits!'],
        required: [ true, 'Email is required!'],
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        // match: [/^(?=.{4,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"],
        match: [/^(?=.{4,40}$)/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"],
    },
    image: {
        type: String,
    },
    role: {
        type: String,
        required: [ true, 'Role is required!'],
    }
},{ timestamps: true })
const UserMongo = models.UserMongo || model('UserMongo', UserSchema)

export default UserMongo