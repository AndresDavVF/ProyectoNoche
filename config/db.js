const mongoose = require("mongoose");
require("dotenv").config({path:".env"});


const ConectarBD = async()=>{
    mongoose
    .connect(process.env.MONGO_URL)
    .then(()=> console.log('Estamos Conectados con Mongo'))
    .catch((err)=>console.error(err));

    
}
module.exports = ConectarBD;