const mongoose = require("mongoose");

const pesanSchema = new mongoose.Schema({
  name: String,
  email: String,
  pesan: String,
});

module.exports = mongoose.model("Pesan", pesanSchema);
