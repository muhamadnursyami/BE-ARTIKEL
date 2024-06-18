const Artikel = require("../models/artikel");
module.exports = {
  createArtikel: async (req, res) => {
    const data = req.body;
    try {
      await Artikel.create(data);
      res.json({
        message: `Berhasil membuat data artikel`,
      });
    } catch (error) {
      res.status(500).json({
        message: `Gagal membuat data Artikel ${error}`,
      });
    }
  },

  getAllArtikel: async (req, res) => {
    try {
      const allArtikel = await Artikel.find();
      res.json({
        message: "Berhasil mendapatkan data",
        allArtikel,
      });
    } catch (error) {
      res.status(500).json({
        message: `Gagal mendapatkan data ${error}`,
      });
    }
  },

  getArtikelById: async (req, res) => {
    const { id } = req.params;
    try {
      const artikelById = await Artikel.findById(id);

      res.json({
        message: "berhasil mendapatkan data ById",
        artikelById,
      });
    } catch (error) {
      res.status(500).json({
        message: `Gagal mendapatkan data ById ${error}`,
      });
    }
  },
  editArtikel: async (req, res) => {
    const { id } = req.params;
    const newdata = req.body;
    try {
      const updateData = await Artikel.findByIdAndUpdate(id, newdata, {
        new: true,
      });

      res.json({
        message: "berhasil update data artikel ",
        updateData,
      });
    } catch (error) {
      res.status(500).json({
        message: `Gagal mengedit artikel ${error}`,
      });
    }
  },
  deleteArtikel: async (req, res) => {
    const { id } = req.params;
    try {
      const deleteDataArtikel = await Artikel.findByIdAndDelete(id);

      res.json({
        message: "Berhasil menghapus data",
        deleteDataArtikel,
      });
    } catch (error) {
      res.status(500).json({
        message: `Gagal menghapus data ${error}`,
      });
    }
  },
};
