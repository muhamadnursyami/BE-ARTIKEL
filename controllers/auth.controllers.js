require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Admin = require("../models/admin");
module.exports = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({
          message: "Tolong isi semua inputan",
        });
      }

      const cekEmailUser = await Admin.findOne({ email: email });
      if (!cekEmailUser) {
        return res.status(400).json({
          message:
            "Akun anda belum terdaftar, silakan buat akun terlebih dahulu",
        });
      }

      const comparePassword = bcrypt.compareSync(
        password,
        cekEmailUser.password
      );

      if (!comparePassword) {
        return res.status(401).json({
          message: "Password Salah",
        });
      }
      const token = jwt.sign({ email: email }, process.env.JWT_KEY);

      return res.status(200).json({
        message: "Berhasil Login!",
        token,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error.message);
    }
  },
  register: async (req, res) => {
    try {
      const { nama, email, password } = req.body;

      const hashPasswordAdmin = await bcrypt.hashSync(password, 12);
      const dataAdmin = await Admin.create({
        nama,
        email,
        password: hashPasswordAdmin,
      });

      res.status(200).json({
        message: "Register Berhasil",
        dataAdmin,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error.message);
    }
  },
};
