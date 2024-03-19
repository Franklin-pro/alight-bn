import BLOG from "../model/blog";
import COMMENT from "../model/comment";
import errormessage from "../utils/errormessage";
import successmessage from "../utils/successmessage";

class CommentController{
    static async CreateComment(req,res){
        const blogid=req.params.id;
        req.body.user=req.user._id
        try {
            if(blogid.length !== 24 || blogid.length <24){
                return errormessage(res,401,`invalid id`)
            }
            const comments=await COMMENT.create(req.body)
            const blog=await BLOG.findByIdAndUpdate({_id:blogid},{$push:{Comment:comments}},{new:true})
            if(!blog){
                return errormessage(res,401,`Comment not posted`)
            }
            else{
                return successmessage(res,200,`Comment successfuly created`,blog)
            }
        } catch (error) {
            return errormessage(res,500,error)
        }

    }

    static async getcomment(req,res){
        const comments = await COMMENT.find()
        try {
            if(!comments){
                return errormessage(res,401,`comment not found`)
            }else{
                return successmessage(res,201,`comment ${comments.length} successfuly retrived`,comments)
            }
        } catch (error) {
            return errormessage(res,500,error)
        }

    }

    static async deleteAllComment(req,res){
        const comment=await COMMENT.deleteMany()
        try {
            if(!comment){
                return errormessage(res,401,`comment not deleted`)
            }
            else{
                return successmessage(res,200,`comments successfuly deleted`)
            }
        } catch (error) {
            return errormessage(res,500,error)
        }
    }

    static async getOneComment(req,res){
        const commentid=req.params.id
        try {
            if(commentid.length !==24 || commentid.length <24){
                return errormessage(res,401,`invalid id`)
            }
            const comment=await COMMENT.findById(commentid)
            if(!comment){
                return errormessage(res,401,`comment with id ${commentid} not found`)
            }
            else{
                return successmessage(res,200,`comment successfuly retrieved`,comment)
            }
        } catch (error) {
            return errormessage(res,500,error)
        }
    }

    static async deleteOneComment(req,res){
        const commentid=req.params.id
        try {
            if(commentid.length !==24 || commentid.length <24){
                return errormessage(res,401,`invalid id`)
            }
            const comment=await COMMENT.findByIdAndDelete(commentid)
            if(!comment){
                return errormessage(res,401,`comment with id ${commentid} not found`)
            }
            else{
                return successmessage(res,200,`comment successfuly deleted`)
            }
        } catch (error) {
            return errormessage(res,500,error)
        }
    }
    static async updateComment(req,res){
        const commentid=req.params.id
        try {
            if(commentid.length !==24 || commentid <24){
                return errormessage(res,401,`invalid id`)
            }
            const comment=await COMMENT.findByIdAndUpdate(commentid,req.body,{new:true})
            if(!comment){
                return errormessage(res,401,`comment with id ${commentid} not found`)
            }
            else{
                return successmessage(res,200,`comment successfuly updated`,comment)
            }
        } catch (error) {
            return errormessage(res,500,error)
        }
    }
}
export default CommentController