const router = require('express').Router();
const tipoPeriodosModel = require('../../../models/Tipos/tipo.periodos.Model');

router.get('/', async (req, res) => {
    try {
        const [result] = await tipoPeriodosModel.getAll();
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});
 
router.get('/select', async (req, res) => {
   
    try {
        const [result] = await tipoPeriodosModel.select();
        res.json(result); 
        console.log(result)
    } catch (error) {
        res.json(error);
    }
});

router.post('/registro',async (req, res) => {
    console.log(res.body);
    try {
        const [result] = await tipoPeriodosModel.create(req.body);
        res.json(result)
    } catch (error) {
        res.json(error);
    }
})
router.put('/:tipo_PeriodoId', async (req, res) => {
      try {
        const [result] = await tipoPeriodosModel.update(req.params.tipo_PeriodoId, req.body);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});
router.delete('/:tipo_PeriodoId', async (req, res) => {
    try {
        const [result] = await tipoPeriodosModel.deleteById(req.params.tipo_PeriodoId);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});
router.get('/:tipo_PeriodoId', async (req, res) => {
    try {
        const [result] = await tipoPeriodosModel.getById(req.params.tipo_PeriodoId);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});
module.exports = router;