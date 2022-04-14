const router = require('express').Router();
const  TiposContratoModel = require('../../../models/Tipos/tipo.contratoModel');

router.get('/', async (req, res) => {
    
    try {
        const [result] = await TiposContratoModel.getAll();
        res.json(result);
    } catch (error) {// ejecuta esta
        res.json(error);
    }
});
router.get('/select', async (req, res) => {
   
    try {
        const [result] = await TiposContratoModel.select();
        res.json(result); 
        console.log(result)
    } catch (error) {// ejecuta esta
        res.json(error);
    }
});

router.post('/registro', async (req, res) => {
    console.log(req.body);
    try {
        const [result] = await TiposContratoModel.create(req.body);
        res.json(result)
    } catch (error) {
        res.json(error);
    }
});
router.put('/:tipo_contratoId', async (req, res) => {
      try {
        const [result] = await TiposContratoModel.update(req.params.tipo_contratoId, req.body);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});
router.delete('/:tipo_contratoId', async (req, res) => {
    try {
        const [result] = await TiposContratoModel.deleteById(req.params.tipo_contratoId);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});
router.get('/:tipo_contratoId', async (req, res) => {
    try {
        const [result] = await TiposContratoModel.getById(req.params.tipo_contratoId);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});

module.exports = router;