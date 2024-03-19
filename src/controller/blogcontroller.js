import BLOG from "../model/blog";
import errormessage from "../utils/errormessage";
import successmessage from "../utils/successmessage";
import blogEmail from "../utils/blogemail";
import USER from "../model/user";

class BlogController{
    static async CreateBlog(req,res,){
        const blog=await BLOG.create(req.body)
        try {
            if(!blog){
                return errormessage(res,401,`Blogs not posted`)
            }
            else{
                const user=await USER.find()
                user.map((users)=>{
                    blogEmail(users,blog)
                })
                return successmessage(res,201,`Blogs  successfuly posted`,blog)
            }
        } catch (error) {
            return errormessage(res,500,error)
        }

        }
 
    static async GetAllBlog(req,res){
        const blog=await BLOG.find()
        try {
            if(!blog){
                return errormessage(res,401,`Blogs not found`)
            }
            else{
                return successmessage(res,201,`All Blogs ${blog.length} successfuly retrieved`,blog)
            }
        } catch (error) {
            return errormessage(res,500,error)
        }

    }

    static async DeleteAllBLogs(req,res){
        const blog=await BLOG.deleteMany()
        try {
            if(!blog){
                return errormessage(res,401,`Blogs not deleted`)
            }
            else{
                return successmessage(res,201,`All Blogs successfuly deleted`)
            }
        } catch (error) {
            return errormessage(res,500,error)
        }

    }

    static async getOneBlog(req,res){
        const blogid=req.params.id
        try {
            if(blogid.length !== 24 || blogid.length < 24){
                return errormessage(res,401,`invalid id`)
            }
            const blog=await BLOG.findById(blogid)
            if(!blog){
                return errormessage(res,401,`blog with id ${blogid} not found`)
            }
            else{
                return successmessage(res,200,`blog successfuly retrieved`,blog)
            }
        } catch (error) {
            return errormessage(res,500,error)
        }
    }

    static async deleteOneBlog(req,res){
        const blogid=req.params.id
        try {
            if(blogid.length !== 24 || blogid.length < 24){
                return errormessage(res,401,`invalid id`)
            }
            const blog=await BLOG.findByIdAndDelete(blogid)
            if(!blog){
                return errormessage(res,401,`job with id ${blog} not deleted`)
            }
            else{
                return successmessage(res,200,`blog successfuly deleted`)
            }
        } catch (error) {
            return errormessage(res,500,error)
            
        }
    }

    static async updateBlog(req,res){
        const blogid=req.params.id
        try {
            if(blogid.length !== 24 || blogid <24){
                return errormessage(res,401,`invalid id`)
            }
            const blog=await BLOG.findByIdAndUpdate(blogid,req.body,{new:true})
            if(!blog){
                return errormessage(res,401,`blog with that id ${blogid} not found`)
            }
            else{
                return successmessage(res,200,`blog successfuly updated`,blog)
            }
        } catch (error) {
            return errormessage(res,500,error)
        }
    }

    static async Like(req,res){
            const idparams=req.params.id
            try {
                if(idparams.length !== 24 || idparams.length <24){
                    return errormessage(res,401,`invalid id`)
                }
                const blog=await BLOG.findById(idparams)
                if(!blog){
                    return errormessage(res,401,`blog not found`)
                }
                else{
                    const userid=req.user._id
                    if(blog.Likes.includes(userid)){
                        return errormessage(res,401,`you are already like this blog`)
                    }
                    else{
                        if(blog.DisLikes.includes(userid)){
                            blog.DisLikes.pull(userid)
                        }
                        blog.Likes.push(userid)
                        blog.save()
                        return successmessage(res,200,`Like from ${req.user.FirstName}`)
                    }
    
                }
            } catch (error) {
                return errormessage(res,500,error)
            }

    }

    static async DisLike(req,res){
        const idparams=req.params.id
        try {
            if(idparams.length !== 24 || idparams.length <24){
                return errormessage(res,401,`invalid id`)
            }
            const blog=await BLOG.findById(idparams)
            if(!blog){
                return errormessage(res,401,`blog not found`)
            }
            else{
                const userid=req.user._id
                if(blog.DisLikes.includes(userid)){
                    return errormessage(res,401,`you are already dislike this blog`)
                }
                else{
                    if(blog.Likes.includes(userid)){
                        blog.Likes.pull(userid)
                    }
                    blog.DisLikes.push(userid)
                    blog.save()
                    return successmessage(res,200,`Dislike from ${req.user.FirstName}`)
                }
            }
        } catch (error) {
           return errormessage(res,500,error) 
        }

    }
}
export default BlogController