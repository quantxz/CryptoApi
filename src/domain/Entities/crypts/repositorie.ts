import { ExcludeTypes } from "../types/Exclude-default-types"

export interface CryptRepositorie {
    insertCrypt(crypt: string, cryptKey: string, userId: string, cryptId: string): Promise<Exclude<any, ExcludeTypes>>
    findFirst(cryptId: string): Promise<Exclude<any, ExcludeTypes>>
    findOne(cryptId: string): Promise<Exclude<any, ExcludeTypes>>
    updateCrypt(cryptId: string, crypt: string): Promise<Exclude<any, ExcludeTypes>>
    updateMany(cryptId: string, crypt: string): Promise<Exclude<any, ExcludeTypes>>
    insertCrypt(crypt: string, cryptKey: string, userId: string, cryptId: string): Promise<Exclude<any, ExcludeTypes>>
}