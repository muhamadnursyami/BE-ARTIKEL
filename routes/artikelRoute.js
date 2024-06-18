const express = require("express");
const route = express.Router();
const {
  createArtikel,
  getAllArtikel,
  getArtikelById,
  editArtikel,
  deleteArtikel,
} = require("../controllers/artikel.controllers");
route.post("/", createArtikel);
route.get("/", getAllArtikel);
route.get("/:id", getArtikelById);
route.put("/:id", editArtikel);
route.delete("/:id", deleteArtikel);

module.exports = route;
