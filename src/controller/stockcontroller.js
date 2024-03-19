import STOCK from "../model/stock";
import errormessage from "../utils/errormessage";
import successmessage from "../utils/successmessage";
import USER from "../model/user";
import stockEmail from "../utils/stockemail";

class StockController{
    static async ImportProduct(req,res){
    const{ProductName,ProductPrice,Qauntity,ProductExpires}=req.body
    try {
        const ExistingStock=await STOCK.findOne({ProductName})
        if(ExistingStock){
            ExistingStock.Qauntity += Qauntity;
            await ExistingStock.save();
            return successmessage(res,201,`Product successfuly Posted`,ExistingStock)
        }
        else{
            const NewStock=await STOCK.create({ProductName,ProductPrice,Qauntity,ProductExpires})
            const user=await USER.find()
            user.map((users)=>{
                stockEmail(users,NewStock)
            })
            return successmessage(res,201,`Product successfuly Posted`,NewStock)
        }
    } catch (error) {
        return errormessage(res,500,error)
    }

    }
    
    static async ExportProduct(req,res){
        const{ProductName,ReqName,ReqPhone,ReqEmail,ReqLocation,ReqQauntity}=req.body
        try {
            const ExistingStock=await STOCK.findOne({ProductName})
            if(ExistingStock){
                if(ExistingStock.Qauntity >= ReqQauntity){
                    ExistingStock.Qauntity -=ReqQauntity
                    ExistingStock.ExportHistory.push({
                        ProductName,
                        ReqName,
                        ReqPhone,
                        ReqEmail,
                        ReqLocation,
                        ReqQauntity,
                        ReqTime:Date.now(),
                    })
                    await ExistingStock.save()
                    return successmessage(res,401,`product successfuly Exported`,ExistingStock.ExportHistory)
                }
                else{
                    return errormessage(res,401,`we don't have enough stock`)
                }
            }
            else{
                return errormessage(res,401,`product not found`)
            }
        } catch (error) {
            return errormessage(res,500,error)
        }

    }

    static async GetAllStock(req,res){
        const product=await STOCK.find()
        try {
            if(!product){
                return errormessage(res,401,`Product not found`)
            }
            else{
                return successmessage(res,201,`Product ${product.length} successfuly retrieved`,product)
            }
        } catch (error) {
            return errormessage(res,500,error)
        }

    }

    static async DeleteAllStock(req,res){
        const product=await STOCK.deleteMany()
        try {
            if(!product){
                return errormessage(res,401,`Product not deleted`)
            }
            else{
                return successmessage(res,201,`Product successfuly deleted`)
            }
        } catch (error) {
            return errormessage(res,500,error)
        }

    }

    static async GetOneProduct(req,res){
        const id=req.params.id
        try {
            if(id.length !==24 || id.length <24){
                return errormessage(res,401,`invalid id`)
            }
            const product=await STOCK.findById(id)
            if(!product){
                return errormessage(res,401,`Product with id ${id} not found`)
            }
            else{
                return successmessage(res,201,`Product successfuly retrieved`,product)
            }
        } catch (error) {
            return errormessage(res,500,error)
        }

    }

    static async DeleteOneProduct(req,res){
        const id=req.params.id
        try {
            if(id.length !==24 || id.length <24){
                return errormessage(res,401,`invalid id`)
            }
            const product=await STOCK.findByIdAndDelete(id)
            if(!product){
                return errormessage(res,401,`Product with id ${id} not deleted`)
            }
            else{
                return successmessage(res,201,`Product successfuly deleted`)
            }
        } catch (error) {
            return errormessage(res,500,error)
        }

    }

    static async UpdateProduct(req,res){
        const id=req.params.id
        try {
            if(id.length !==24 || id.length <24){
                return errormessage(res,401,`invalid id`)
            }
            const product=await STOCK.findByIdAndUpdate(id,req.body,{new:true})
            if(!product){
                return errormessage(res,401,`Product with id ${id} not found`)
            }
            else{
                return successmessage(res,201,`Product successfuly updated`,product)
            }
        } catch (error) {
            return errormessage(res,500,error)
        }

    }
}

export default StockController