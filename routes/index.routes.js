const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('index routes inmobliliaria');
});

router.use('/api', require('./API/index.api.routes'));


module.exports = router;
