const router = require('express').Router();
const inmueblesModel = require('../../models/inmueble.model')

router.get('/', async (req, res) => {
    try {
        const [result] = await inmueblesModel.getAll();
        res.json(result);
    } catch (error) {// ejecuta esta
        res.json(error);
    }
 });
router.post('/registro',async (req, res) => {
    console.log(req.body);
    try {
        const [result] = await inmueblesModel.create(req.body);
        res.json(result)
    } catch (error) {
        res.json(error);
    }
})
router.put('/:inmuebleId', async (req, res) => {
      try {
        const [result] = await inmueblesModel.update(req.params.inmuebleId, req.body);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});
router.delete('/:inmuebleId', async (req, res) => {
    try {
        const [result] = await inmueblesModel.deleteById(req.params.inmuebleId);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});
router.get('/:inmuebleId', async (req, res) => {
    try {
        const [result] = await inmueblesModel.getById(req.params.inmuebleId);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});
module.exports = router;