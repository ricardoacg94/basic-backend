const express = require("express");
const cors = require("cors");
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    //middlewares
    this.middlewares();
    //rutas app
    this.routes();
  }

  middlewares() {
    //directorio publico
    this.app.use(express.static("public"));

    // lectura y parseo del body

    this.app.use(cors());
  }

  routes() {
    this.app.use("/api/usuarios", require("../routes/user"));
  }

  listen() {
    this.app.listen(this.port);
  }
}

module.exports = Server;
