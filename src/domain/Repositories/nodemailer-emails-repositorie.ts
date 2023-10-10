import { emailRepositorie } from "../Entities/nodemailer/email-repositorie";


//conta criada no zohomail.com
export class EmailRepo implements emailRepositorie {
    private readonly email: any
    //sempre que o email EmailRepo for instanciado é nescessario instanciar o emailService dele com o nodemailerInstance da entidade nodemailer-instance 
    constructor(emailService: any) {
        this.email = emailService
    }

    async sendEmail(userEmail: string): Promise<any>{
        
        try {
            await this.email.sendMail({
                //de
                from: "Anderson Silva <anderson.backdev@zohomail.com>",
                //para
                to: userEmail,
                //assunto do email
                subject: "teste de emailRepo",
                //texo do email (tambem da pra mandar um html no email, pique um readme.md, usando no lugar de text um html)
                text: "ola mundo"
            })
            console.log("email enviado com sucesso")

        } catch(error) {
            console.debug(error)
        }
    }
}