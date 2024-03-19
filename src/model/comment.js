import mongoose from "mongoose";

const commentSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"USER"
    },
    Comment:{
        type:String,
        required:true
    },
    PostedDate:{
        type:Date,
        default:Date.now()
    }
})
commentSchema.pre(/^find/,function(next){
    this.populate({
        path:"user",
        select:"FirstName LastName Email"
    })
    next()
})
const COMMENT=mongoose.model("COMMENT",commentSchema)
export default COMMENT
