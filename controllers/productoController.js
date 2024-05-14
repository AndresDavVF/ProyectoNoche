// Exportamos nuestro modelo
const Producto = require("../models/Producto");

// funcion agregar Clientes

exports.agregarProducto = async (req, res) => {
  try {
    let productos = new Producto(req.body);
    await productos.save();
    res.send(productos);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al agregar el Producto");
  }
};

exports.mostrarProductos = async (req, res) => {
  try {
    const productos = await Producto.find(req.body);
    res.json(productos);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al buscar el Producto");
  }
};

// mostar un cliente

exports.mostrarUnProducto = async (req, res) => {
  try {
    let productos = await Producto.findById(req.params.id);
    if (!productos) {
      res.status(404).json({ msg: "No se encuentra el Producto con ese ID" });
    }
    res.send(productos);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al buscar el Producto");
  }
};


// Actualizar Cliente

exports.modificarProducto = async(req,res)=>{
    try {
        let productos = await Producto.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!productos){
            return res.status(404).send('Producto no encontrado');
        }
        res.json(productos)
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al buscar el Producto");        
    }
}


// Eliminar Cliente

exports.eliminarProductos = async(req,res) => {
    try {
        let productos = await Producto.findById(req.params.id);
        if (!productos) {
            res.status(404).json({ msg: "No se encuentra el Producto con ese ID" });
            return
          }
          await Producto.findOneAndDelete({_id:req.params.id})
          res.json({msg:"El Producto Fue eliminado"})
    } catch (error) {
        console.log(error);
    res.status(500).send("Hubo un error al Eliminar el Producto");
    }
}

