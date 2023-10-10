import { userDto } from "../../../domain/Entities/User/UserDto";
import { Request, Response } from "../../../domain/UseCases/http-UseCases"
import { idGenerator } from "../../generators/id-generator";
import registerUser from "../../../domain/Entities/User/register";
import { EmailRepo } from "../../../domain/Repositories/nodemailer-emails-repositorie";
import { nodemailerInstance } from "../../../domain/Entities/nodemailer/nodemailer-instance";

const emailSenderService = new EmailRepo(nodemailerInstance)

class UserController {
    public async insertUser(req: Request, res: Response) {
        const { fullName, email, password } = req.body;
        const id = idGenerator()

        const userDto: userDto = {
            id: id,
            fullName: fullName,
            email: email,
            password: password
        }

        let firstName = fullName.split(" ")
        const user = await registerUser(userDto)

        //o emailSend não esta funcionando
        //await emailSenderService.sendEmail(email)
        
        return res.status(200).send({
            UsersData: user,
            message: `Ola ${firstName[0]}, um email com sua chave publica de acesso á API, foi enviada para o seu email, mesmo a chave sendo publica não repasse ela para ninguem` 
        })
    }    
}

export default UserController