const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('API proveedores');
});


module.exports = router;