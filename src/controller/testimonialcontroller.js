import TESTIMONIAL from "../model/testimonial";
import USER from "../model/user";
import errormessage from "../utils/errormessage";
import successmessage from "../utils/successmessage";
import testimonialEmail from "../utils/testimonialemail";


class TestimonialController{
    static async PostTestimonial(req,res){
        try {
            const testimonial=await TESTIMONIAL.create(req.body)
            if(!testimonial){
                return errormessage(res,401,`Testimonial  not Posted`)
            }
            else{
                const test=await USER.find()
                test.map((tests)=>{
                    testimonialEmail(tests,testimonial)
                })
                return successmessage(res,201,`Testimonial successfuly Posted`,testimonial)
            }
        } catch (error) {
            return errormessage(res,500,error)
        }

    }

    static async GetAllTestimonial(req,res){
        try {
            const testimonial=await TESTIMONIAL.find()
            if(!testimonial){
                return errormessage(res,401,`Testimonial not found`)
            }
            else{
                return successmessage(res,201,`Testimonial ${testimonial.length} successfuly retrieved`,testimonial)
            }
        } catch (error) {
           return errormessage(res,500,error) 
        }

    }
    
    static async DeleteAllTestimonial(req,res){
        try {
            const testimonial=await TESTIMONIAL.deleteMany()
            if(!testimonial){
                return errormessage(res,401,`Testimonial not deleted`)
            }
            else{
                return successmessage(res,201,`Testimonial successfuly deleted`)
            } 
        } catch (error) {
           return errormessage(res,500,error) 
        }

    }

    static async GetOneTestimonial(req,res){
        const id=req.params.id
        try {
            if(id.length !==24 || id.length <24){
                return errormessage(res,401,`invalid id`)
            }
            const testimonial=await TESTIMONIAL.findById(id)
            if(!testimonial){
                return errormessage(res,401,`Testimonial with id ${id} not found`)
            }
            else{
                return successmessage(res,200,`Testimonial successfuly retrieved`,testimonial)
            }
        } catch (error) {
            return errormessage(res,500,error)
        }

    }

    static async DeleteOneTestimonial(req,res){
        const id=req.params.id
        try {
            if(id.length !==24 || id.length <24){
                return errormessage(res,401,`invalid id`)
            }
            const testimonial=await TESTIMONIAL.findByIdAndDelete(id)
            if(!testimonial){
                return errormessage(res,401,`Testimonial with id ${id} not deleted`)
            }
            else{
                return successmessage(res,201,`Testimonial successfuly deleted`)
            }
        } catch (error) {
            return errormessage(res,500,error)
        }

    }

    static async UpdateTestimonial(req,res){
        const id=req.params.id
        try {
            if(id.length !==24 || id.length <24){
                return errormessage(res,401,`invalid id`)
            }
            const testimonial=await TESTIMONIAL.findByIdAndUpdate(id,req.body,{new:true})
            if(!testimonial){
                return errormessage(res,401,`Testimonial with id ${id} not updated`)
            }
            else{
                return successmessage(res,201,`Testimonial successfuly updated`,testimonial)
            }
        } catch (error) {
            return errormessage(res,500,error)
        }

    }
}

export default TestimonialController