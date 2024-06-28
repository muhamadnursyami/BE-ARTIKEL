const express = require("express");
const route = express.Router();
const artikelRoute = require("./artikelRoute");
const adminRoute = require("./adminRoute");
const authRoute = require("./authRoute");
const pesanRoute = require("./pesanRoute");
route.get("/", (req, res) => {
  res.json("Selamat Datang di Server Reginaaaa");
});

route.use("/artikel", artikelRoute);
route.use("/admin", adminRoute);
route.use("/auth", authRoute);
route.use("/pesan", pesanRoute);

module.exports = route;
