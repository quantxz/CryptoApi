import { Request as ExpressRequest, Response as ExpressResponse, NextFunction } from "express"; // Renomeando para evitar conflitos de nome

interface Request extends ExpressRequest {}

interface Response extends ExpressResponse {}

interface nextFunction extends NextFunction {}

export { Request, Response, nextFunction }