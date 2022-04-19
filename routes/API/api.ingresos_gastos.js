const router = require('express').Router();
const ingresos_gastoModel = require('../../models/ingresos_gastos.Model')


router.get('/', async (req, res) => {   
    try {
        const [result] = await ingresos_gastoModel.getAll();
        res.json(result);
    } catch (error) {// ejecuta esta
        res.json(error);
    }
});
router.post('/registro', async (req, res) => {   
    try {
        const [result] = await ingresos_gastoModel.create(req.body);
        res.json(result)
        console.log(result)
    } catch (error) {
        res.json(error);
    }
    
})
router.put('/:ingreso_gastoId', async (req, res) => {
    console.log(req.body);
    try {
        const [result] = await ingresos_gastoModel.update(req.params.ingreso_gastoId, req.body);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});
router.delete('/:ingreso_gastoId', async (req, res) => {

    try {
        const [result] = await ingresos_gastoModel.deleteById(req.params.ingreso_gastoId);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});

module.exports = router;