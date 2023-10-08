import { emailRepositorie } from "../Entities/email.repositorie";
import nodemailer from "nodemailer"

//criar conta no umbler ou em outro host para testar
class EmailRepo implements emailRepositorie {
    private user: string = "canalsemfoco223@gmail.com"
    private pass: string = "senaosabe33"

    createTransport(host: string, port: number | string, auth: {}) {
        let user = this.user
        let pass = this.pass

        try {
            nodemailer.createTransport({
                host, 
                port,
                auth: {user, pass}
            })
        }catch(Error) {
            throw new Error.message(Error)
        }
    }

    sendEmail(userEmail: string) {
        let user = this.user;
        let pass = this.pass;
        
        try {
            nodemailer.sendEmail({
                //de
                from: user,
                //para
                to: userEmail,
                //assunto do email
                subject: "teste de emailRepo",
                //texo do email (tambem da pra mandar um html no email, pique um readme.md, usando no lugar de text um html)
                text: "ola mundo"
            })
        } catch(Error) {
            throw new Error.message(Error)
        }
    }
}

const emailRepos = new EmailRepo

//emailRepos.createTransport("")