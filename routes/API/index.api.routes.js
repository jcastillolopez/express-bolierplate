const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('index Api routes inmobliaria');
});
router.use('/clientes', require('./api.clientes'));
router.use('/inmuebles', require('./api.inmuebles'));
router.use('/proveedores', require('./api.proveedores'));
router.use('/usuarios', require('./api.usuarios'));
router.use('/tipos', require('./Tipos/tipos.index'));
router.use('/contratos', require('./Contratos/index.contratos'));
module.exports = router;