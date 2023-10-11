import nodemailer from "nodemailer"
import dotenv from 'dotenv';
dotenv.config();  

export const nodemailerInstance = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,  
    auth: {
        user: process.env.USER,
        pass: process.env.PASS
    }
});