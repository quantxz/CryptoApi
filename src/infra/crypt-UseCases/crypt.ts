import * as crypto from "crypto";

const AES_ALGORITHM = 'aes-256-cbc';


const encryptWithAES = (key: string, iv: string, data: string): string => {
    const cipher = crypto.createCipheriv(AES_ALGORITHM, Buffer.from(key), Buffer.from(iv, 'hex'));
    let encrypted = cipher.update(data, 'utf-8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
};
  

const decryptWithAES = (key: string, iv: string, encryptedData: string): string => {
    const decipher = crypto.createDecipheriv(AES_ALGORITHM, Buffer.from(key), Buffer.from(iv, 'hex'));
    let decrypted = decipher.update(encryptedData, 'hex', 'utf-8');
    decrypted += decipher.final('utf-8');
    return decrypted;
};

