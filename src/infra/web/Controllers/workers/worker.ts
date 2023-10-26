import { nodemailerInstance } from "../../../../domain/Entities/nodemailer/nodemailer-instance"
import { ExcludeTypes } from "../../../../domain/Entities/types/Exclude-default-types"
import { EmailRepo } from "../../../../domain/Repositories/nodemailer-emails-repositorie"
const { Worker, isMainThread, parentPort } = require('worker_threads');
const email = new EmailRepo(nodemailerInstance)

parentPort.on('message', async ({userEmail, htmlBody}: Exclude<any, ExcludeTypes>) => {
    const emailSent = await email.sendEmail(userEmail , htmlBody)
    
    if(emailSent) {
        parentPort.postMessage({
            status: 'done'
        });
    } else {
        parentPort.postMessage({
            status: 'error'
        });
    }


});