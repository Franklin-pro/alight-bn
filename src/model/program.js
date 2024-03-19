import mongoose from "mongoose";

const programschema=new mongoose.Schema({
    ProgramName:{
        type:String,
        required:true
    },
    ProgramTitle:{
        type:String,
        required:true
    },
    ProgramSummaryDiscription:{
        type:String,
        required:true
    },
    ProgramDiscription:{
        type:String,
        required:true
    },
    ProgramImage:{
        type:Array,
        required:true
    },
    CreatedDate:{
        type:Date,
        default:Date.now()
    }
})
const PROGRAM=mongoose.model("PROGRAM",programschema)
export default PROGRAM