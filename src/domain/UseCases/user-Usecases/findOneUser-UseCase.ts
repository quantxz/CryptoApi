import { userDto } from "../../Entities/User/UserDto"
import UserRepo from "../../Repositories/Prisma-users-repositorie"

const findOneUser = async (data: userDto) => {
    try {
        const userRepo = new UserRepo
        const user = await userRepo.findOne(data?.id, data?.email, data?.privateKey)
    
        return user
    } catch(Error) {throw new Error}
}

export default findOneUser