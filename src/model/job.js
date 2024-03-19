import mongoose from "mongoose";

const jobSchema=new  mongoose.Schema({
    jobTitle:{
        type:String,
        required:true,
    },
    jobOrganisation:{
        type:String,
        required:true
        
    },
    jobPosition:{
        type:String,
        required:true
    },
    jobAllInfo:{
        type:String,
        required:true
    },
    jobpicture:{
        type:String,
        required:true
    },
    jobLocation:{
        type:String,
        required:true
    },
    jobCriteria:{
        type:String,
        required:true
    },
    deadLine:{
        type:Date,
        required:true
    },

    publisherDate:{
        type:Date,
        default: new Date(Date.now())
    },
    jobapply:[
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "ApplyJob",
        }
      ],
  
})
jobSchema.pre(/^find/,function(next){
    this.populate({
        path:"jobapply"
    })
    next()
})
const job=mongoose.model("job",jobSchema)
export default job
