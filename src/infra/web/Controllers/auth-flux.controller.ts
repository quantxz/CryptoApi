import { Request, Response, nextFunction } from "../../../domain/UseCases/http-UseCases";

class authFluxController {
    public login(req: Request, res: Response, next: nextFunction): any {
        const apiKey = req.query.ApiKeyValue
        const user = req.query.userName

        next()
    }
}

export default authFluxController