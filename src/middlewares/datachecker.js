import errormessage from "../utils/errormessage";
import USER from "../model/user";

class DataChecker{
    static async UserRegisterEmpty(req,res,next){
        const{FirstName,LastName,UserName,Email,Password}=req.body
        if(FirstName==""){
            return errormessage(res,401,`write FirstName correctly`);
        }
        else if(LastName==""){
            return errormessage(res,401,`write LastName correctly`);
        }
        else if(UserName==""){
            return errormessage(res,401,`write UserName correctly`);
        }
        else if(Email==""){
            return errormessage(res,401,`write Email correctly`);
        }
        else if(Password==""){
            return errormessage(res,401,`write Password correctly`);
        }
        else{
            next()
        }
    }
    static async EmailExisting(req,res,next){
        const{Email}=req.body
        const user=await USER.findOne({Email})
        if(user){
            return errormessage(res,401,`user already exist`)
        }
        else{
            next()
        }
    }
}
export default DataChecker