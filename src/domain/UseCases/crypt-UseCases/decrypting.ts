import * as crypto from 'crypto';

const AES_ALGORITHM = 'aes-256-cbc';

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