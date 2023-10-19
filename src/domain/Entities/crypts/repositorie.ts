export interface CryptRepositorie {
    insertCrypt(crypt: string, cryptKey: string, userId: string, cryptId: string): Exclude<any, null>,
    findOne(cryptId: string): Exclude<any, null>
}