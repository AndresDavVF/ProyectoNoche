const express =require("express");
const ConectarBD = require("./config/db");
const cors = require("cors");


const app = express();

const PORT = process.env.PORT || 5000;

ConectarBD();

app.use(cors());
app.use(express.json({extenden : true}));

app.use('/api/usuarios',require("./routes/usuarios"));
app.use('/api/auth',require("./routes/auth"));
app.use('/api/clientes', require("./routes/clientes"));
app.use('/api/productos', require("./routes/productos"));
//configuracion del servidor

app.listen(PORT, ()=>{
    console.log("El Servidor Esta Conectado");
});

