import mongoose from "mongoose";


const userschema=new mongoose.Schema({
    FirstName:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    },
    UserName:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    RetypePassword:{
        type:String
    },
    Role:{
        type:String,
        enum:["admin","user"],
        default:"user"
    },
    CreatedDate:{
        type:Date,
        default:Date.now()
    }
})
const USER=mongoose.model("USER",userschema)
export default USER
