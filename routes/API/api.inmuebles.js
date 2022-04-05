const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('API Inmuebles');
});


module.exports = router;