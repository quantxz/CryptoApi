import { PrismaClient } from "@prisma/client";
import { CryptRepositorie } from "../Entities/crypts/repositorie";

class CryptRepo implements CryptRepositorie {
    private readonly prisma = new PrismaClient();

    public async findMany() {
        const crypt = await this.prisma.crypts.findMany();
    
        return crypt;
    };

    public async findFirst(cryptId: string) {
            const cryptToFind = await this.prisma.crypts.findFirst({
                where: {
                    cryptId
                }
            });

            return cryptToFind;
    };
    
    public async findOne(cryptId: string) {
        const cryptToFind = await this.prisma.crypts.findUnique({
            where: {
                cryptId
            }
        });

        return cryptToFind;
    };

    public async updateCrypt(cryptId: string, crypt: string) {
        const cryptToUpdate = await this.prisma.crypts.update({
            where: {
                cryptId
            },
            data: {
                crypt
            }
        })
    };

    public async updateMany(cryptId: string, crypt: string) {
        const crypts = await this.prisma.crypts.updateMany({
            where: {
                cryptId
            },
            data: {
                crypt
            }
        })
    };

    public async insertCrypt(crypt: string, cryptKey: string, userId: string, cryptId: string) {
        const cryptToInsert = await this.prisma.crypts.create({
            data: {
                crypt,
                cryptKey,
                userId,
                cryptId
            }
        });

        return cryptToInsert;
    };

}

export default CryptRepo;