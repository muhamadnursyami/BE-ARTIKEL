const mongoose = require("mongoose");

const pesanSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

module.exports = mongoose.model("Pesan", pesanSchema);
