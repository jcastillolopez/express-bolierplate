const router = require('express').Router();
const usuarioModel = require('../../models/usuario.model');
const bcrypt = require('bcryptjs');

router.get('/', async (req, res) => {

    try {
        const [result] = await usuarioModel.getAll();

        res.json(result);
    } catch (error) {
        res.json(error);
    }
});
router.get('/:usuarioId', async (req, res) => {
    console.log('getid')
    console.log(req.body)
    try {
        console.log(req.body)
        const [result] = await usuarioModel.getById(req.params.usuarioId);
        console.log('salida')
        console.log(result)
        res.json(result)
    } catch (error) {
        res.json(error);

    }
});

/*router.get('/:administradorId', async (req, res) => {
    console.log(req.value)
    try {
        const [result] = await usuarioModel.getByCreator();
        console.log(getByCreator())
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});*/

router.post('/registro', async (req, res) => {

    try {
        req.body.borrado = req.body.borrado ? 1 : 0

        const [result] = await usuarioModel.create(req.body);
        res.json(result)
    } catch (error) {
        res.json(error);
    }
})
router.put('/modificar/:usuarioId', async (req, res) => {

    try {
        const [result] = await usuarioModel.update(req.params.usuarioId, req.body);

        if (result.length === 0) {
            return res.json({ exito: false, data: [], mensaje: "el usuario no se ha actualizado" })
        }
        else {
            return res.json({ exito: true, data: [], mensage: 'el usuario ha sido actualizado' });
        }

    } catch (error) {
        res.json(error);
    }
});


router.delete('/:usuarioId', async (req, res) => {
    try {
        const [result] = await usuarioModel.deleteById(req.params.usuarioId);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});


router.post('/login', async (req, res) => {

    try {
        const [result] = await usuarioModel.selectLogin(req.body.email);

        if (result.length === 0) {
            return res.json({ exito: false, data: [], mensaje: "el usuario no existe" })
        }

        if (result[0].password !== req.body.password) {
            return res.json({ exito: false, data: [], mensaje: "las contraseñas no coinciden" })
        }
        else {
            return res.json({ exito: true, data: result[0] });
        }
    } catch (error) {
        res.json(error);
    }

});


module.exports = router