import { createServer } from "http";
import App from "./app/app";

const app = new App().server;

const server = createServer(app)

server.listen(3001, () => {
    console.log("servidor rodando na porta 3001")
})