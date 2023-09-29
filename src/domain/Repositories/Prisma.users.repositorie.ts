import { PrismaClient, Users } from "@prisma/client";

class UserRepositorie {
    readonly prisma = new PrismaClient();

    public async findMany() {
        const users = await this.prisma.users.findMany();
        
        return users;
    }

    public async findFirst(id?: string , FullName?: string) {
        if(id) {
            const user = await this.prisma.users.findFirst({
                where: {
                    id: id
                }
            });

            return user
        } else if (FullName) {
            const user = await this.prisma.users.findFirst({
                where: {
                    fullName: FullName
                }
            });

            return user
        } else {
            return Error;
        }
    }

    public async findOne(id: string) {
        if(id) {
            const user = await this.prisma.users.findUnique({
                where: {
                    id: id
                }
            });

            return user
        } else {
            return Error;
        }
    }

    public async updateName(id: string, FullName: string) {

        const user = await this.prisma.users.update({
            data: {
                fullName: FullName
            },
            where: {
                id: id
            }
        });

        return user

    }

    public async Insert(id: string, FullName: string) {
        const user = await this.prisma.users.create({
            data: {
                id: id,
                fullName: FullName
            }
        })

        return user;
    }
}

export default UserRepositorie