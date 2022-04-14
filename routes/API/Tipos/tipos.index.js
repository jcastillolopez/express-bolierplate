const router = require('express').Router();


router.get('/', (req, res) => {
    res.send('index Api tipos');
});

router.use('/interviniente', require('./tipo.intervinientes'));
router.use('/contrato', require('./tipo.contratos'));
router.use('/rol', require('./tipo.roles'));
router.use('/periodo', require('./tipo.periodos'));


module.exports = router;