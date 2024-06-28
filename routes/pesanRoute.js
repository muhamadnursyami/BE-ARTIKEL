const express = require("express");
const route = express.Router();
const {
  createPesan,
  getAllPesan,
  deletePesanByID,
} = require("../controllers/pesan.controllers");
route.post("/", createPesan);
route.get("/", getAllPesan);
route.delete("/:id", deletePesanByID);

module.exports = route;
