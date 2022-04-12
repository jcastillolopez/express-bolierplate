const router = require('express').Router();


router.get('/', (req, res) => {
    res.send('index contratos tipos');
});

router.use('/contratos', require('./contratos'));

module.exports = router;