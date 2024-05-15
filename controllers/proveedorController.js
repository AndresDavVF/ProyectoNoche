// Exportamos nuestro modelo
const Proveedor = require("../models/Proveedor");

// funcion agregar Proveedor

exports.agregarProveedor = async (req, res) => {
  try {
    let proveedores = new Proveedor(req.body);
    await proveedores.save();
    res.send(proveedores);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al agregar el Proveedor");
  }
};

exports.mostrarProveedores = async (req, res) => {
  try {
    const proveedores = await Proveedor.find(req.body);
    res.json({proveedores});
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al buscar el Proveedor");
  }
};

// mostar un Proveedor

exports.mostrarUnProveedor = async (req, res) => {
  try {
    let proveedores = await Proveedor.findById(req.params.id);
    if (!proveedores) {
      res.status(404).json({ msg: "No se encuentra el Proveedor con ese ID" });
    }
    res.send(proveedores);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al buscar el Proveedor");
  }
};


// Actualizar Proveedor

exports.modificarProveedor = async(req,res)=>{
    try {
        let proveedor = await Proveedor.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!proveedor){
            return res.status(404).send('Proveedor no encontrado');
        }
        res.json(proveedor)
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al buscar el Proveedor");        
    }
}


// Eliminar Cliente

exports.eliminarProveedor = async(req,res) => {
    try {
        let proveedores = await Proveedor.findById(req.params.id);
        if (!proveedores) {
            res.status(404).json({ msg: "No se encuentra el Proveedor con ese ID" });
            return
          }
          await Proveedor.findOneAndDelete({_id:req.params.id})
          res.json({msg:"El Proveedor Fue eliminado"})
    } catch (error) {
        console.log(error);
    res.status(500).send("Hubo un error al Eliminar el Proveedor");
    }
}
