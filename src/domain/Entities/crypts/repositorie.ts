export interface CryptRepositorie {
    insertCrypt(crypt: string, cryptKey: string, userId: string, cryptId: string): Promise<Exclude<any, null>>
    findFirst(cryptId: string): Promise<Exclude<any, null>>
    findOne(cryptId: string): Promise<Exclude<any, null>>
    updateCrypt(cryptId: string, crypt: string): Promise<Exclude<any, null>>
    updateMany(cryptId: string, crypt: string): Promise<Exclude<any, null>>
    insertCrypt(crypt: string, cryptKey: string, userId: string, cryptId: string): Promise<Exclude<any, null>>
}