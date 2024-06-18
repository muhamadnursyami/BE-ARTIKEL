const express = require("express");
const route = express.Router();
const {
  getAllAdmin,
  createAdmin,
  getAdminById,
  deleteAdmin,
  editAdmin,
} = require("../controllers/admin.controllers");
route.post("/", createAdmin);
route.get("/", getAllAdmin);
route.get("/:id", getAdminById);
route.put("/:id", editAdmin);
route.delete("/:id", deleteAdmin);

module.exports = route;
