const express = require ("express");
const router = express.Router();
const { check }=require("express-validator");
const usuariosController = require("../controllers/usuariosController");

// creamos un usuario -- api/usuarios

router.post(
    "/",[
        check("nombre", "El Nombre debe ser Obligatorios").not().isEmpty(),
        check("email", "agregar un Email Valido").isEmail(),
        check("password","El password debe tener minimo 8 carcteres").isLength({min:8,}),
    ],
    usuariosController.crearusuario
);
module.exports = router;
