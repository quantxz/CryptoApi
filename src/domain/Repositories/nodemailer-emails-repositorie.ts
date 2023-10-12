import { emailRepositorie } from "../Entities/nodemailer/email-repositorie";
import { nodemailerInstance } from "../Entities/nodemailer/nodemailer-instance";
import dotenv from 'dotenv';
dotenv.config();  

//conta criada no zohomail.com
export class EmailRepo implements emailRepositorie {
    private readonly email: any
    //sempre que o email EmailRepo for instanciado é nescessario instanciar o emailService dele com o nodemailerInstance da entidade nodemailer-instance 
    constructor(emailService: any) {
        this.email = emailService
    }

    async sendEmail(userEmail: string, {...keys}, htmlBody: any): Promise<any>{
        
        try {
            await this.email.sendMail({
                //de
                from: `Anderson Silva <${process.env.USER}>`,
                //para
                to: userEmail,
                //assunto do email
                subject: "Chaves de Acesso A crypt API",
                //texo do email (tambem da pra mandar um html no email, pique um readme.md, usando no lugar de text um html)
                html: htmlBody
            })
            console.log("email enviado com sucesso")

        } catch(error) {
            console.debug(error)
        }
    }
}