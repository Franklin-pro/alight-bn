import nodemailer from "nodemailer";

const programEmail=async(userinfo,programData)=>{
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
        subject:`Hello!! ${userinfo.FirstName},We Received new program`,
        html:`<p>Dear</p><p><b>${userinfo.FirstName}</b></p><p> You did know? Alight apply new program<br><br>
        you received<b> ${programData.ProgramName} program</b></p>`
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
export default programEmail