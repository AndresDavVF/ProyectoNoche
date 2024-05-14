const Usuario = require("../models/Usuario");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

exports.crearusuario = async (req, res) => {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  const { email, password } = req.body;

  try {
    // verificar usuario registrado sea unico
    let usuario = await Usuario.findOne({ email });
    if (usuario) {
      return res.status(400).json({ msg: " el Usuario ya Existe" });
    }
    // cear Nuevo usuario
    usuario = new Usuario(req.body);
    usuario.password = await bcryptjs.hash(password, 8);
    // Guardamos Usuario
    await usuario.save();

    const payload = {
      usuario: { id: usuario.id },
    };
    jwt.sign(
      payload,
      process.env.SECRETA,
      {
        expiresIn: 3600, // 1 HORA
      },
      (error, token) => {
        if (error) throw error;
        // mensaje confirmacion
        res.json({ token });
      }
    );
  } catch (error) {
    console.log("Hubo un error");
    console.log(error);
    res.status(400).send("Hubo un error");
  }
};
