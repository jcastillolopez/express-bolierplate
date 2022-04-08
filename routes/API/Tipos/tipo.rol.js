const router = require('express').Router();
const RolModel = require('../../../models/tipos/rol.Model');



router.get('/', async (req, res) => {
    
    try {
        const [result] = await RolModel.getAll();
        res.json(result);
    } catch (error) {// ejecuta esta
        res.json(error);
    }
 });

router.post('/registro', async (req, res) => {
    console.log(req.body);
    try {
        const [result] = await RolModel.create(req.body);
        res.json(result)
    } catch (error) {
        res.json(error);
    }
});
router.put('/:tiposId', async (req, res) => {
      try {
        const [result] = await RolModel.update(req.params.clienteId, req.body);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});
router.delete('/:tiposId', async (req, res) => {
    try {
        const [result] = await RolModel.deleteById(req.params.clienteId);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});
router.get('/:tiposId', async (req, res) => {
    try {
        const [result] = await RolModel.getById(req.params.clienteId);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});

module.exports = router;