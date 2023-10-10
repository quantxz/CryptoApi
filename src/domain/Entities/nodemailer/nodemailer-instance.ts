import nodemailer from "nodemailer"


export const nodemailerInstance = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,  
    auth: {
        user: process.env.USER,
        pass: process.env.PASS
    }
});