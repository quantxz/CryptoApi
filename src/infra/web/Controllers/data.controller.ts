import { Request, Response } from "../../../domain/UseCases/http-UseCases"
import { SensiviteDataDtoBR } from "../../../domain/Entities/data/Sensivite/SensiviteDataDto";
import { encryptWithAES } from "../../../domain/UseCases/crypt-UseCases/encrypting"
import { generateRandomHexKey } from "../../generators/CyptKey-generator";
import { generateRandomIV } from "../../generators/InitialVector-generator";
import { cryptDto } from "../../../domain/Entities/crypts/cryptDto";
import { cryptIdGenerator } from "../../generators/id-generator";
import { dataFormatada } from "../../../domain/Entities/data/date"
import encryptBrData from "../../../domain/UseCases/crypt-UseCases/insertCryptBr";

class sensiviteDataController {

    public async cryptBrUser(req: Request, res: Response) {
        try {
            const { ...data }: SensiviteDataDtoBR = req.body;
            const id: Exclude<any, null | undefined> = req.query.ApiPublicKeyLogin
            const key: string         = generateRandomHexKey();
            const iv: string          = generateRandomIV()
            const cryptedData: string = encryptWithAES(key, iv, data)
            const cryptid: string     = cryptIdGenerator()
    
            const cryptDTO: cryptDto = {
                crypt: cryptedData,
                cryptKey: key,
                userId: id,
                cryptId: cryptid
            }

            const cryptData = await encryptBrData(cryptDTO)
    
            return res.status(200).json({
                "message": "A chave para recuperar os dados que você criptografou é a seguinte: ",
                "key": cryptid,
                "dadosDeRetorno": {
                    cryptData,
                    cryptDTO
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
                        "tipo": "Public key autentication",
                        "key": id
                    },
                    "autorizacao": {
                        "papeis": ["Admin", "Usuário"],
                        "regras": ["Leitura"]
                    },
                    "rateLimiting": {
                        "limitePorMinuto": 100,
                        "limitePorHora": 1000
                    },
                    "versaoAPI": "1.0",
                    "documentacao": "http://localhost:3001/docs"
                }
            }
            )
 
        } catch(error) { 
            return res.status(401).send({
                message: "error",
                "dadosDeRetorno": {
                    "error": error
                },
                "dadosImportantes": {
                    "status": 401,
                    "descricao": "Falha",
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
    };

    }
}     

export default sensiviteDataController;