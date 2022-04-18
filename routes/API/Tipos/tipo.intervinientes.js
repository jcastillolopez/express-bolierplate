const router = require('express').Router();
const tipoIntervinienteModel = require('../../../models/Tipos/tipo.Intervinientes.Model');

router.get('/', async (req, res) => {
    try {
        const [result] = await tipoIntervinienteModel.getAll();
        res.json(result);
    } catch (error) {// ejecuta esta
        res.json(error);
    }
});
 
router.get('/select', async (req, res) => {
   
    try {
        const [result] = await tipoIntervinienteModel.selectTipoInterviniente();
        res.json(result); 
        console.log(result)
    } catch (error) {// ejecuta esta
        res.json(error);
    }
});

router.post('/registro',async (req, res) => {
    console.log(req.body);
    try {
        const [result] = await tipoIntervinienteModel.create(req.body);
        res.json(result)
    } catch (error) {
        res.json(error);
    }
})
router.put('/:tipo_intervinienteId', async (req, res) => {
      try {
        const [result] = await tipoIntervinienteModel.update(req.params.tipo_intervinienteId, req.body);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});
router.delete('/:tipo_intervinienteId', async (req, res) => {
    try {
        const [result] = await tipoIntervinienteModel.deleteById(req.params.tipo_intervinienteId);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});
router.get('/:tipo_intervinienteId', async (req, res) => {
    try {
        const [result] = await tipoIntervinienteModel.getById(req.params.tipo_intervinienteId);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});
module.exports = router;