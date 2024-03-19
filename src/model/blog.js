import mongoose from "mongoose";

const BlogSchema=new mongoose.Schema({
    BlogTitle:{
        type:String,
        required:true
    },
    BlogSummary:{
        type:String,
        required:true
    },
    BlogDiscription:{
        type:String,
        required:true
    },
    BlogImage:{
        type:Array,
        required:true
    },
    PostedDate:{
        type:Date,
        default:Date.now()
    },
    Comment:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"COMMENT"
    }],
    Likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"USER"
    }],
    DisLikes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"USER"
    }]

})
BlogSchema.pre(/^find/,function(next){
    this.populate({
        path:"Comment",
        select:"Comment PostedDate"
    })
    next()
})
const BLOG=mongoose.model("BLOG",BlogSchema)
export default BLOG