import nodemailer from "nodemailer";

const stockEmail=async(userinfo,productData)=>{
    let transport=nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:465,
        secure:true,
        auth:{
            user:process.env.EMAIL,
            pass:process.env.PASSWORD
        },
    });
    let mailoptions={
        from:process.env.EMAIL,
        to:userinfo.Email,
        subject:`Hello!! ${userinfo.FirstName},We Received new product in stock`,
        html:`<p>Dear</p><p><b>${userinfo.FirstName}</b></p><p>You did know? we received new product in stock.<br><br>
        you received<b> ${productData.ProductName}</b></p>`
    }
    transport.sendMail(mailoptions,function(err,info){
        if(err){
            console.log(err)
        }
        else{
            console.log(info)
        }
    })
}
export default stockEmail