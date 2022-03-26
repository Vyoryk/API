const sabritaModel = require("../models/sabrita.model");
const sabritaController = {};

sabritaController.getSabritas = async (req, res) => {
    const sabritas = await sabritaModel.find();
    res.json(sabritas);
};

sabritaController.addSabrita = async (req, res) => {
    const sabrita = new sabritaModel(req.body);
    await sabrita.save();
    res.json({
        'status': 'Sabrita guardada correctamente'
    });
};

sabritaController.deleteSabrita = async (req, res) => {
    await sabritaModel.findByIdAndDelete(req.params.id);
    res.json({status: "Sabrita eliminada"});
}

sabritaController.putSabrita = async (req,res) =>{
    const {id} = req.params;
    const sabrita = {
        brand: req.body.brand,
        name: req.body.name,
        price: req.body.price,
        content: req.body.content
    };
    await sabritaModel.findByIdAndUpdate(id, {$set:sabrita}, {new:true});
    res.json({status: 'Sabrita actualizada'});
};

module.exports = sabritaController;
