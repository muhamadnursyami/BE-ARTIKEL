const mongoose = require("mongoose");

const artikelSchema = new mongoose.Schema({
  title: String,
  penulis: String,
  tahun: String,
  img: String,
  content: { type: [String] },
});

module.exports = mongoose.model("Artikel", artikelSchema);
