const router = require('express').Router();
const intervinientesModel = require('../../models/intervinientes.Model')


router.get('/', async (req, res) => {
    try {
        const [result] = await intervinientesModel.getAll();
        res.json(result);
    } catch (error) {// ejecuta esta
        res.json(error);
    }
});
router.post('/registro', async (req, res) => {
    try {
        req.body.borrado = req.body.borrado? 1 : 0
        const [result] = await intervinientesModel.create(req.body);
        res.json(result)
    } catch (error) {
        res.json(error);
    }
})
router.put('/:intervinienteId', async (req, res) => {
    try {
        req.body.borrado = req.body.borrado? 1 : 0
        const [result] = await intervinientesModel.update(req.params.intervinienteId, req.body);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});
router.delete('/:intervinienteId', async (req, res) => {

    try {
        const [result] = await intervinientesModel.deleteById(req.params.intervinienteId);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});
router.get('/:contrato_id', async (req, res) => {

    try {
        const [result] = await intervinientesModel.getByContrato(req.params.contrato_id);
        console.log(result)
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});
router.get('/registro/:interviniente_id', async (req, res) => {  
    try {
        const [result] = await intervinientesModel.getByInterviniente(req.params.interviniente_id);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});
module.exports = router;