import mongoose from "mongoose";

const ApplyJobSchema=new mongoose.Schema({
    FirstName:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    },
    Email:{
     type:String,
    required:true
     },
     NationalId:{
        type:Number,
        required:true
     },
     PhoneNumber:{
        type:String,
       required:true
    },
     Country:{
      type:String,
        required:true
     },
     DateBirth:{
        type:String,
        required:true
     },
     Location:{
         type:String,
        required:true
     },
     EducationStatus:{
         type:String,
        required:true
     },
    Sex:{
        type:String,
        enum:["male","female"],
        default:"male"
     },
    CurrentPosition:{
         type:String,
         required:true
     },
     Matialstatus:{
         type:String,
         enum:["married","single"],
         default:"married"
     
     },
     UploadCV:{
         type:String,
         required:true
     },   
    jobs:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"job"
    },
})
ApplyJobSchema.pre(/^find/, function(next){
    this.populate({
        path:"jobs",
    })
    next()
});

const ApplyJob=mongoose.model("ApplyJob",ApplyJobSchema)
export default ApplyJob