import { userDto } from "../../../domain/Entities/User/UserDto";
import { Request, Response } from "../../../domain/UseCases/http-UseCases"
import { idGenerator } from "../../generators/id-generator";
import registerUser from "../../../domain/UseCases/user-Usecases/registerUser-UseCase"
import { EmailRepo } from "../../../domain/Repositories/nodemailer-emails-repositorie";
import { nodemailerInstance } from "../../../domain/Entities/nodemailer/nodemailer-instance";
import { privateKeyGenerator } from "../../generators/privateKey-generator";
import { renderHtml } from "../../../domain/UseCases/messageRender-UseCase";

const emailSenderService = new EmailRepo(nodemailerInstance)

class UsersController {
    public async insertUser(req: Request, res: Response) {
        const { fullName, email, password } = req.body;
        const publicKey = idGenerator()
        const privateKey = privateKeyGenerator()

        const userDto: userDto = {
            id: publicKey,
            fullName: fullName,
            email: email,
            password: password,
            privateKey: privateKey
        }

        const keys = {
            publicKey: publicKey, 
            privateKey: privateKey
        }

        const user = await registerUser(userDto)
        let firstName = fullName.split(" ")
        const htmlBody = renderHtml(firstName, publicKey, privateKey)
        
        await emailSenderService.sendEmail(email, keys, htmlBody)
        
        return res.status(200).send({
            UsersData: user,
            message: `Ola ${firstName[0]}, um email com sua chave publica e sua chave privada de acesso á API, foi enviado para o seu email,acesse o link abaixo para entender como se usa e quando se deve usar chaves <link vai vir aqui>` 
        })
    }    
}

export default UsersController