import * as crypto from 'crypto';

const AES_ALGORITHM = 'aes-256-cbc';

export const encryptWithAES = (key: string, iv: string, data: string | {}): string => {
    const jsonString = typeof data === 'object' ? JSON.stringify(data) : data.toString();

    const cipher = crypto.createCipheriv(AES_ALGORITHM, Buffer.from(key), Buffer.from(iv, 'hex'));

    const encrypted = Buffer.concat([
        cipher.update(jsonString, 'utf-8'),
        cipher.final(),
    ]);

    return encrypted.toString('hex');
};