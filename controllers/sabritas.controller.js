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

module.exports = sabritaController;
