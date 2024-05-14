// Exportamos nuestro modelo
const Cliente = require("../models/Cliente");

// funcion agregar Clientes

exports.agregarClientes = async (req, res) => {
  try {
    let clientes = new Cliente(req.body);
    await clientes.save();
    res.send(clientes);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al agregar el CLiente");
  }
};

exports.mostrarClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find(req.body);
    res.json({clientes});
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al buscar el CLiente");
  }
};

// mostar un cliente

exports.mostrarUnCliente = async (req, res) => {
  try {
    let clientes = await Cliente.findById(req.params.id);
    if (!clientes) {
      res.status(404).json({ msg: "No se encuentra el cliente con ese ID" });
    }
    res.send(clientes);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al buscar el CLiente");
  }
};


// Actualizar Cliente

exports.modificarCliente = async(req,res)=>{
    try {
        let cliente = await Cliente.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!cliente){
            return res.status(404).send('Cliente no encontrado');
        }
        res.json(cliente)
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al buscar el CLiente");        
    }
}


// Eliminar Cliente

exports.eliminarCLlientes = async(req,res) => {
    try {
        let clientes = await Cliente.findById(req.params.id);
        if (!clientes) {
            res.status(404).json({ msg: "No se encuentra el cliente con ese ID" });
            return
          }
          await Cliente.findOneAndDelete({_id:req.params.id})
          res.json({msg:"El cliente Fue eliminado"})
    } catch (error) {
        console.log(error);
    res.status(500).send("Hubo un error al Eliminar el CLiente");
    }
}
