const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('index Api routes inmobliaria');
});


router.use('/clientes', require('./api.clientes'));
router.use('/inmuebles', require('./api.inmuebles'));
router.use('/usuarios', require('./api.usuarios'));
router.use('/tipos', require('./Tipos/tipos.index'));
router.use('/contratos', require('./api.contratos'));
router.use('/intervinientes', require('./api.intervinientes'));
router.use('/ingresos', require('./api.ingresos_gastos'));
router.use('/administradores', require('./api.administradores'));



module.exports = router;