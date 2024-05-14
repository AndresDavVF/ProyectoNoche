const Usuario = require("../models/Usuario");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

exports.autenticarusuario= async(req,res)=>{
    const errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({errores: errores.array()});
    }

    const { email,password }  = req.body;

    try {
        // verificar usuario 
        let usuario = await Usuario.findOne({ email });
        if(!usuario){
            return res.status(400).json({msg:" el Usuario no esta Registrado"});           
        }
        //verificamos la contraseña
        const passCorrecto = await bcryptjs.compare(password,usuario.password);
        if(!passCorrecto){
            return res.status(400).json({msg:" la contraseña es incorrecta"});
        }
        // Si todo Ok se firma token
        const payload={
            usuario:{id: usuario.id},
        };
        jwt.sign(
        payload,
        process.env.SECRETA,
        {
            expiresIn:43200, // 1 HORA
        },
        (error,token)=>{
            if(error) throw error;
            // mensaje confirmacion
            res.json({token});
        }
        )
    } catch (error) {
        console.log("Hubo un error");
        console.log(error);
        res.status(400).send("Hubo un error");       
    }
};

exports.usuarioAutenticado = async ( req,res)=>{
    try {
        const usuario = await Usuario.findById(req.usuario.id);
        res.json({usuario});
    } catch (error) {
        res.status(400).json({msg:"hubo un error"});
    }
    
    
}