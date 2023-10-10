import { PrismaClient, Users } from "@prisma/client";
import { UserRepositorie } from "../Entities/User/Repositorie";

class UserRepo implements UserRepositorie {
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
                    fullUserName: FullName
                }
            });

            return user
        } else {
            return JSON.stringify({
                message: "é nescessario passar um id ou nome"
            });
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
            return JSON.stringify({
                message: "é nescessario passar um id ou nome"
            });
        }
    }

    public async updateName(id: string, FullName: string) {

        const user = await this.prisma.users.update({
            data: {
                fullUserName: FullName
            },
            where: {
                id: id
            }
        });

        return user

    }

    
    public async insertUser(id: string, fullName: string, email: string, password: string) {
        const user = await this.prisma.users.create({
            data: {
                id: id,
                fullUserName: fullName,
                email: email,
                password: password
            }
        })

        return user;
    }
}

export default UserRepo