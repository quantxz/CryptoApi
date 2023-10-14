import { Request, Response } from "../../../domain/UseCases/http-UseCases"

import { SensiviteDataDtoBR } from "../../../domain/Entities/data/Sensivite/SensiviteDataDto";
import { privateEncrypt } from "crypto";
import { encryptWithAES } from "../../../domain/UseCases/crypt-UseCase";
import { generateRandomHexKey } from "../../generators/CyptKey-generator";
import { generateRandomIV } from "../../generators/InitialVector-generator";

class sensiviteDataController {
    public async cryptBrUser(req: Request, res: Response) {
        const { ...data }: SensiviteDataDtoBR = req.body;
        const key = generateRandomHexKey();
        const iv = generateRandomIV()
        // encryptWithAES(key, iv, data)
    }
}     