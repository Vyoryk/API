const express = require('express');
const router = express.Router();

//Controlador
const sabritaController = require('../controllers/sabritas.controller');

router.get('/', sabritaController.getSabritas);
router.post('/', sabritaController.addSabrita);
// router.put('/', );
// router.delete('/:id', );

module.exports = router;