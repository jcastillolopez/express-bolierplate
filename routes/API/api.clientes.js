const router = require('express').Router();
const clienteModel = require('../../models/cliente.Model');



router.get('/', async (req, res) => {
    try {
        const [result] = await clienteModel.getAll();
        res.json(result);
    } catch (error) {// ejecuta esta
        res.json(error);
    }
});
router.get('/select', async (req, res) => {
   
    try {
        const [result] = await clienteModel.selectCliente();
        res.json(result); 
        console.log(result)
    } catch (error) {// ejecuta esta
        res.json(error);
    }
});

router.post('/registro', async (req, res) => {
    console.log(req.body);
    try {
        const [result] = await clienteModel.create(req.body);
        res.json(result)
    } catch (error) {
        res.json(error);
    }
});
router.put('/:clienteId', async (req, res) => {
    console.log (req.body)
      try {
        const [result] = await clienteModel.update(req.params.clienteId, req.body);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});
router.delete('/:clienteId', async (req, res) => {
    try {
        const [result] = await clienteModel.deleteById(req.params.clienteId);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});
router.get('/:clienteId', async (req, res) => {
    try {
        const [result] = await clienteModel.getById(req.params.clienteId);
        
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});
module.exports = router;