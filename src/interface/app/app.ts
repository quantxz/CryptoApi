import express from 'express';
import cors from 'cors'
// import routes from './interface/Routes';

class App {
    public server: express.Application;

    constructor() {
        this.server = express();
        this.middleware();
    }

    private middleware() {
        this.server.use(express.json())
        this.server.use(cors())
    }

}

export default App