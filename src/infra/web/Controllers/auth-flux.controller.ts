import { userDto } from "../../../domain/Entities/User/UserDto";
import { Request, Response, nextFunction } from "../../../domain/UseCases/http-UseCases";
import findOneUser from "../../../domain/UseCases/user-Usecases/findOneUser-UseCase";

class authFluxController {
    public async publicLogin(req: Request, res: Response, next: nextFunction): Promise<any> {
        try {
            const apiPublicKey: Exclude<any, null | undefined> = req.query.ApiPublicKeyLogin
            const user = await findOneUser(apiPublicKey)
            if(user) { 
                next() 
            } 
            
            return user
            
        } catch(error) { new Error }
    };
    
    public async privateLoginUrlKeyAutentication(req: Request, res: Response, next: nextFunction): Promise<any> {
            try {
                const apiPrivateKey: Exclude<any, null | undefined> = req.query.ApiPrivateKeyLogin

                const user = await findOneUser(privateKey)
                if (user) {
                     next()
                }
    
                return user
    
            } catch(error) { new Error }
        }
    

    public async privateLogin(req: Request, res: Response, next: nextFunction): Promise<any> {
        try {
            const apiPrivateKey: Exclude<any, null | undefined> = req.query.ApiPrivateKeyLogin
            const { Password } = req.body;
            const data = {
                privateKey: apiPrivateKey,
                Password: Password
            } as userDto

            const user = await findOneUser(data)
            next()

            return user

        } catch(error) { new Error }
    }
}

export default authFluxController
