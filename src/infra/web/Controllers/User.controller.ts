import { userDto } from "../../../domain/Entities/User/UserDto";
import { Request, Response } from "../../../domain/Entities/http/http-functions"
import { idGenerator } from "../../generators/id-generator";
import registerUser from "../../../domain/Entities/User/register";

class UserController {
    public async insertUser(req: Request, res: Response) {
        const { Fullname } = req.body;
        const id = idGenerator()

        const userDto: userDto = {
            id: id,
            FullName: Fullname
        }

        const user = await registerUser(userDto)

        return res.status(200).send({
            UsersData: user,
            message: "Atenção não perca e nem repasse este id para ninguem" 
        })
    }
}

export default UserController