import express from 'express';
import cors from 'cors';
import routes from '../../infra/web/Routes';
import path from "path";
import dotenv from 'dotenv';
dotenv.config();  

class App {
    public server: express.Application;

    constructor() {
        this.server = express();
        this.middleware();
        this.routes();
    }

    private middleware() {
        this.server.use(express.json());
        this.server.use(express.urlencoded({ extended: true }));
        this.server.use(express.static(path.join(__dirname, '..', '..', '..', 'views')));
        this.server.set('views', path.join(path.join(__dirname, '..', '..', '..', 'views')));
        this.server.set('view engine', 'ejs');
        this.server.use(cors());
    }

    private routes() {
        this.server.use(routes)
    }
}

export default App