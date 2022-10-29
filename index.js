const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectDb = require("./src/utils/db");
const indexRoutes = require("./src/api/index/index.routes");
const infoRoutes = require("./src/api/info/infoMovies.routes");
const moviesRoutes = require("./src/api/movies/movie.routes");
const usersRoutes = require("./src/api/user/user.routes");
connectDb();

const PORT = process.env.PORT;
const server = express();

server.use(cors());

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use("/", indexRoutes);
server.use("/info", infoRoutes);
server.use("/users", usersRoutes);
server.use("/movies", moviesRoutes);

server.use((error, req, res, next) => {
  return res
    .status(error.status || 500)
    .json(error.message || "Unexpected error");
});

server.listen(PORT, () => {
  console.log(`El servidor se ha iniciado en http://localhost:${PORT}`);
});
