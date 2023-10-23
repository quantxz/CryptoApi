import { userDto } from "../../../domain/Entities/User/UserDto";
import { Request, Response } from "../../../domain/UseCases/http-UseCases"
import { idGenerator } from "../../generators/id-generator";
import registerUser from "../../../domain/UseCases/user-Usecases/registerUser-UseCase"
import { EmailRepo } from "../../../domain/Repositories/nodemailer-emails-repositorie";
import { nodemailerInstance } from "../../../domain/Entities/nodemailer/nodemailer-instance";
import { privateKeyGenerator } from "../../generators/privateKey-generator";
import { renderHtml } from "../../../domain/UseCases/messageRender-UseCase";
import { dataFormatada } from "../../../domain/Entities/data/date";

const emailSenderService = new EmailRepo(nodemailerInstance)

class UsersController {
    public async insertUser(req: Request, res: Response) {
        try {
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
        message: `Ola ${firstName[0]}, um email com sua chave publica e sua chave privada de acesso á API, foi enviado para o seu email,acesse o link abaixo para entender como se usa e quando se deve usar chaves <link vai vir aqui>`,
        "dadosDeRetorno": {
            "keys": keys,
            "userData": user
        },
        "dadosImportantes": {
            "status": 200,
            "descricao": "Sucesso",
            "dataCriacao": dataFormatada,
            "autor": "Anderson",
            "formato": "JSON",
            "links": {
                "self": "http://localhost:3001/"
            },
            "paginação": {
                "paginaAtual": 1,
                "totalPaginas": 1
            },
            "autenticacao": {
                "tipo": "none"
            },
            "autorizacao": {
                "papeis": ["none"],
                "regras": ["Leitura"]
            },
            "rateLimiting": {
                "limitePorMinuto": 100,
                "limitePorHora": 1000
            },
            "versaoAPI": "1.0",
            "documentacao": "http://localhost:3001/docs"
        }
    })
        } catch(error) { 
            return res.status(401).send({
                message: "error",
                "dadosDeRetorno": {
                    "error": error
                },
                "dadosImportantes": {
                    "status": 401,
                    "descricao": "Falha, o email ja esta sendo utilizado, tente colocar um novo, se isso não der certo, tente novamente mais tarde",
                    "dataCriacao": dataFormatada,
                    "autor": "Anderson",
                    "formato": "JSON",
                    "links": {
                        "self": "http://localhost:3001/"
                    },
                    "paginação": {
                        "paginaAtual": 1,
                        "totalPaginas": 1
                    },
                    "autenticacao": {
                        "tipo": "none"
                    },
                    "autorizacao": {
                        "papeis": ["none"],
                        "regras": ["Leitura"]
                    },
                    "rateLimiting": {
                        "limitePorMinuto": 100,
                        "limitePorHora": 1000
                    },
                    "versaoAPI": "1.0",
                    "documentacao": "http://localhost:3001/docs"
                }
            })
         }
    }    
}

export default UsersController