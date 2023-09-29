import { userDto } from "../../domain/Entities/UserDto";
import UserRepositorie from "../../domain/Repositories/Prisma.users.repositorie";

const registerUser = async (data: userDto) => {
    const userRepo = new UserRepositorie
    const user = await userRepo.Insert(data.id, data.FullName)

    return user
}

export default registerUser