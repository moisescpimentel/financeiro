import express from "express";
import routes from "./routes"
import "./locator";

class App{
    constructor(){
        this.server = express();
        this.middlewares();
        this.routes();
        this.error();
    }

    middlewares(){
        this.server.use(express.json());
    }

    routes(){
        this.server.use(routes)
    }

    error(){
        this.server.use((
            error,
            request,
            response,
            next,
          ) => {
            return response.status(500).json({
              status: 'error',
              message: error.message,
            });
          })
    }

}

export default new App().server