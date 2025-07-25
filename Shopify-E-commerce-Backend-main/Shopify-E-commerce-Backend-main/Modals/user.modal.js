import mongoose from 'mongoose'
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

let { Schema, model } = mongoose

let userSchema = new Schema({
    userName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    address: {type: String},
    phone: {type: String}
})

userSchema.pre("save", async function (next) {
    let user = this
    if(!user.isModified("password")){
        next()
    }else{
        let salt = await bcrypt.genSalt(10);
        let hashPass = await bcrypt.hash(user.password, salt);
        user.password = hashPass;
        next()
    }
})

userSchema.methods.comparePassword = async function (password){
    let res = await bcrypt.compare(password, this.password)
    return res
}

userSchema.methods.generateToken = function () {
    let user = this
    let token =  jwt.sign({email:user.email, userName: user.userName}, process.env.SECRET_KEY)
    return token
}


let User = model('User', userSchema)


export default User