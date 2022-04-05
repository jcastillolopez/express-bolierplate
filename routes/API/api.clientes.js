const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('API clientes');
});


module.exports = router;