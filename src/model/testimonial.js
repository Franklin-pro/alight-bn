import mongoose from "mongoose";

const testimonialschema=new mongoose.Schema({
    TestimonerName:{
        type:String,
        required:true
    },
    TestimonerImage:{
        type:String,
        required:true
    },
    TestimonerPosition:{
        type:String,
        required:true
    },
    Testimonials:{
        type:String,
        required:true
    },
    PostedDate:{
        type:Date,
        default:Date.now()
    }
})
const TESTIMONIAL=mongoose.model("TESTIMONIAL",testimonialschema)
export default TESTIMONIAL