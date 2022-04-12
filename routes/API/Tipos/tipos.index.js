const router = require('express').Router();


router.get('/', (req, res) => {
    res.send('index Api tipos');
});


router.use('/contratos', require('./tipos.contratos'));
router.use('/rol', require('./tipo.rol'));

module.exports = router;