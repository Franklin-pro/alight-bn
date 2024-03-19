import nodemailer from "nodemailer";

const testimonialEmail=async(userinfo,testimonialData)=>{
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
        subject:`Hello!! ${userinfo.FirstName},Now you Receive new testimonial`,
        html:`<p>Dear</p><p><b>${userinfo.FirstName}</b></p><p> You did know? Alight was apply new testimonial<br><br>
        ${testimonialData.TestimonerImage}<br> ${testimonialData.Testimonials}</p>`
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
export default testimonialEmail