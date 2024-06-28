const Pesan = require("../models/pesan");
module.exports = {
  createPesan: async (req, res) => {
    const data = req.body;
    try {
      await Pesan.create(data);
      res.json({
        message: `Berhasil mengirim pesan`,
      });
    } catch (error) {
      res.status(500).json({
        message: `Gagal membuat mengirim pesan ${error}`,
      });
    }
  },

  getAllPesan: async (req, res) => {
    try {
      const allPesan = await Pesan.find();
      res.json({
        message: "Berhasil mendapatkan data pesan",
        allPesan,
      });
    } catch (error) {
      res.status(500).json({
        message: `Gagal mendapatkan data ${error}`,
      });
    }
  },

  deletePesanByID: async (req, res) => {
    const { id } = req.params;
    try {
      const deletePesan = await Pesan.findByIdAndDelete(id);

      res.json({
        message: "Berhasil Menghapus Pesan",
        deletePesan,
      });
    } catch (error) {
      res.status(500).json({
        message: `Gagal menghapus pesan ${error}`,
      });
    }
  },
};
