const router = require('express').Router();
const contratosModel = require('../../../models/contratos/contratosModel');


router.get('/', async (req, res) => {
    
    try {
        const [result] = await contratosModel.getAll();
        res.json(result);
    } catch (error) {// ejecuta esta
        res.json(error);
    }
 });

router.post('/registro', async (req, res) => {  
    try {
        const [result] = await contratosModel.create(req.body);
        res.json(result)
    } catch (error) {
        res.json(error);
    }
});
router.put('/:contratosId', async (req, res) => {
      try {
        const [result] = await contratosModel.update(req.body,req.params.contratosId);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});
router.delete('/:contratosId', async (req, res) => {
    try {
        const [result] = await CompraventaModel.deleteById(req.params.contratosId);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});
router.get('/:contratosId', async (req, res) => {
    try {
        const [result] = await CompraventaModel.getById(req.params.contratosId);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});

module.exports = router;