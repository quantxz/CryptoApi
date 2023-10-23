import { generateRandomHexKey } from "../../../infra/generators/CyptKey-generator";
import { generateRandomIV } from "../../../infra/generators/InitialVector-generator";
import { cryptIdGenerator } from "../../../infra/generators/id-generator";
import { userDto } from "../../Entities/User/UserDto"
import { cryptDto } from "../../Entities/crypts/cryptDto";
import CryptRepo from "../../Repositories/prisma-crypts-repositorie"
import { encryptWithAES } from "./encrypting";

const encryptBrData = async (data: cryptDto) => {
    try {
        const dataRepo = new CryptRepo

        const user = await dataRepo.insertCrypt(data.crypt, data.cryptKey, data.userId, data.cryptId)
    
        return user

    } catch(error) { console.debug(error) }
}

export default encryptBrData