import { userDto } from "../../Entities/User/UserDto"
import UserRepo from "../../Repositories/Prisma-users-repositorie"
const registerUser = async (data: userDto) => {
    const userRepo = new UserRepo
    const user = await userRepo.insertUser(data.id, data.fullName, data.email, data.password, data.privateKey)

    return user
}

export default registerUser