import nodemailer from "nodemailer";

const blogEmail=async(userinfo,blogData)=>{
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
        subject:`Hello!! ${userinfo.FirstName},We Received new blog`,
        html:`<p>Dear</p><p><b>${userinfo.FirstName}</b></p><p> You did know? Alight apply new blog<br><br>
        you received<b> ${blogData.ProgramName} new blog</b></p>`
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
export default blogEmail