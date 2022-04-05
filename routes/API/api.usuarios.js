const router = require('express').Router();
const usuario = require('../../models/usuario.model');
const bcrypt = require('bcryptjs');

router.get('/', (req, res) => {
    console.log(req.body)
    res.send('API Usuarios');

});


router.post('/registro', async (req, res) => {
    res.json(req.body)
    //const hash = bcrypt.hashSync(req.body.password, 12);
    //req.body.password = hash;
    try {
        const [nuevoUsuario] = await usuario.create(req.body);
        //res.json(nuevoUsuario);
    } catch (error) {
        //res.json(error);
    }
})




module.exports = router;