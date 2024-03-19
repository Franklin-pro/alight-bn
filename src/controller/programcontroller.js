import PROGRAM from "../model/program";
import USER from "../model/user";
import errormessage from "../utils/errormessage";
import programEmail from "../utils/programemail";
import successmessage from "../utils/successmessage";


class ProgramController{
    static async PostProgram(req,res){
        try {
            const program=await PROGRAM.create(req.body)
            if(!program){
                return errormessage(res,401,`Program not Posted`)
            }
            else{
                const programs=await USER.find()
                programs.map((pro)=>{
                programEmail(pro,program)
                })
                return successmessage(res,201,`Program successfuly Posted`,program)
            } 
        } catch (error) {
           return errormessage(res,500,error)
        }

    }

    static async GetAllProgram(req,res){
        try {
            const program=await PROGRAM.find()
            if(!program){
                return errormessage(res,401,`Programs not found`)
            }
            else{
                return successmessage(res,201,`All Programs ${program.length} successfuly retrieved`,program)
            }
        } catch (error) {
            return errormessage(res,500,error)
        }

    }

    static async DeleteAllPorgram(req,res){
        try {
            const program=await PROGRAM.deleteMany()
            if(!program){
                return errormessage(res,401,`Programs not deleted`)
            }
            else{
                return successmessage(res,201,`Programs successfuly deleted`)
            }
        } catch (error) {
            return errormessage(res,500,error)
        }

    }

    static async GetOneProgram(req,res){
        const id=req.params.id
        try {
            if(id.length !==24 || id.length <24){
                return errormessage(res,401,`invalid id`)
            }
            const program=await PROGRAM.findById(id)
            if(!program){
                return errormessage(res,401,`Program with id ${id} not found`)
            }
            else{
                return successmessage(res,201,`Program successfuly retrieved`,program)
            }
        } catch (error) {
            return errormessage(res,500,error)
        }

    }

    static async DeleteOneProgram(req,res){
        const id=req.params.id
        try {
            if(id.length !==24 || id.length <24){
                return errormessage(res,401,`invalid id`)
            }
            const program=await PROGRAM.findByIdAndDelete(id)
            if(!program){
                return errormessage(res,401,`Program with id ${id} not deleted`)
            }
            else{
                return successmessage(res,201,`Program successfuly deleted`)
            }
        } catch (error) {
            return errormessage(res,500,error)
        }

    }

    static async UpdateProgram(req,res){
        const id=req.params.id
        try {
            if(id.length !==24 || id.length <24){
                return errormessage(res,401,`invalid id`)
            }
            const program=await PROGRAM.findByIdAndUpdate(id,req.body,{new:true})
            if(!program){
                return errormessage(res,401,`Program with id ${id} not updated`)
            }
            else{
                return successmessage(res,401,`Program successfuly updated`,program)
            }
        } catch (error) {
            return errormessage(res,500,error)
        }

    }
}
export default ProgramController