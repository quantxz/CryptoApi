import { Request as ExpressRequest, Response as ExpressResponse } from "express"; // Renomeando para evitar conflitos de nome

interface Request extends ExpressRequest {
}

interface Response extends ExpressResponse {
}

export { Request, Response }