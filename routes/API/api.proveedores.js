const router = require('express').Router();
const proveedorModel = require('../../models/proveedor.model')

router.get('/', async (req, res) => {
    try {
        const [result] = await proveedorModel.getAll();
        res.json(result);
    } catch (error) {// ejecuta esta
        res.json(error);
    }
});
router.post('/registro', async (req, res) => {
    console.log(req.body);
    try {
        const [result] = await proveedorModel.create(req.body);
        res.json(result)
    } catch (error) {
        res.json(error);
    }
})
router.put('/:proveedorId', async (req, res) => {
    try {
        const [result] = await proveedorModel.update(req.params.proveedorId, req.body);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});
router.delete('/:proveedorId', async (req, res) => {
    try {
        const [result] = await proveedorModel.deleteById(req.params.proveedorId);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});
router.get('/:proveedorId', async (req, res) => {
    try {
        const [result] = await proveedorModel.getById(req.params.proveedorId);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});
module.exports = router;