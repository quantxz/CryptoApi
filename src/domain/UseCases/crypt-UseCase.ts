import * as crypto from 'crypto';
import { generateRandomHexKey } from "../../infra/generators/CyptKey-generator"
import { generateRandomIV } from "../../infra/generators/InitialVector-generator"

const AES_ALGORITHM = 'aes-256-cbc';
//criptografar só os valores dos objetos
export const encryptWithAES = (key: string, iv: string, data: string | {}): string => {
    const jsonString = typeof data === 'object' ? JSON.stringify(data) : data.toString();

    const cipher = crypto.createCipheriv(AES_ALGORITHM, Buffer.from(key), Buffer.from(iv, 'hex'));

    const encrypted = Buffer.concat([
        cipher.update(jsonString, 'utf-8'),
        cipher.final(),
    ]);

    return encrypted.toString('hex');
};

export const decryptWithAES = (key: string, iv: string, encryptedData: string): string => {
    const decipher = crypto.createDecipheriv(AES_ALGORITHM, Buffer.from(key), Buffer.from(iv, 'hex'));
    let decrypted = decipher.update(encryptedData, 'hex', 'utf-8');
    decrypted += decipher.final('utf-8');

    // Tentar fazer o parse do resultado como JSON, se falhar, retornar o texto original
    try {
        const parsedData = JSON.parse(decrypted);
        return parsedData;
    } catch {
        return decrypted;
    }
};


const key = generateRandomHexKey()
const iv = generateRandomIV()
console.log(encryptWithAES(key, iv, {a: "dsads", b: "dasdsd", c: "dsajuasjdui"}))
  
console.log(decryptWithAES(key, iv, encryptWithAES(key, iv, {a: "dsads", b: "dasdsd", c: "dsajuasjdui"})))
  


