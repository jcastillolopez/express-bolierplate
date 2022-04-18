const router = require('express').Router();
const  TiposConceptoModel = require('../../../models/Tipos/tipo.concepto.Model');

router.get('/', async (req, res) => {
    
    try {
        const [result] = await TiposConceptoModel.getAll();
        res.json(result);
    } catch (error) {// ejecuta esta
        res.json(error);
    }
});
router.get('/select', async (req, res) => {
   
    try {
        const [result] = await TiposConceptoModel.selectTipoConcepto();
        res.json(result); 
        console.log(result)
    } catch (error) {// ejecuta esta
        res.json(error);
    }
});

router.post('/registro', async (req, res) => {
    console.log(req.body);
    try {
        const [result] = await TiposConceptoModel.create(req.body);
        res.json(result)
    } catch (error) {
        res.json(error);
    }
});
router.put('/:tipo_conceptoId', async (req, res) => {
      try {
        const [result] = await TiposConceptoModel.update(req.params.tipo_contratoId, req.body);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});
router.delete('/:tipo_conceptoId', async (req, res) => {
    try {
        const [result] = await TiposConceptoModel.deleteById(req.params.tipo_contratoId);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});
router.get('/:tipo_conceptoId', async (req, res) => {
    try {
        const [result] = await TiposConceptoModel.getById(req.params.tipo_contratoId);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});

module.exports = router;