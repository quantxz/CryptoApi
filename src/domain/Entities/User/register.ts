import { userDto } from "./UserDto"
import UserRepo from "../../Repositories/Prisma.users.repositorie"
const registerUser = async (data: userDto) => {
    const userRepo = new UserRepo
    const user = await userRepo.insertUser(data.id, data.FullName)

    return user
}

export default registerUser