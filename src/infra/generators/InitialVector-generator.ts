import crypto from "crypto"

export const generateRandomIV = (): string => {
    const ivBuffer = crypto.randomBytes(16); // Gera um IV aleatório de 16 bytes (128 bits)
    return ivBuffer.toString('hex'); // Converte para uma string hexadecimal de 32 caracteres
};