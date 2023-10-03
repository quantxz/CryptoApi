import { userDto } from "../../../domain/Entities/DTO/UserDto";
import { Request, Response } from "../../../domain/Entities/http-functions";
import { idGenerator } from "../../../infra/generators/id-generator";
import registerUser from "../../../infra/User-UseCases/register";

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