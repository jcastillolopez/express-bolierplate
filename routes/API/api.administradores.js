const router = require('express').Router();
const administradorModel = require('../../models/administradores.Model');
const bcrypt = require('bcryptjs');


router.get('/', async (req, res) => {
    try {
        const [result] = await administradorModel.getAll();
        res.json(result);
    } catch (error) {// ejecuta esta
        res.json(error);
    }
});


router.post('/registro', async (req, res) => {
    try {
        const [result] = await administradorModel.create(req.body);
        if (result[0].email === req.body.email) {
            return res.json({ exito: false, data: [], mensaje: "los datos ya existen" })
           
        } else {
            return res.json({ exito: true, data: result[0] });
        }
    } catch (error) {
        res.json(error);
    }
})
router.put('/:administradorId', async (req, res) => {
    try {
        const [result] = await administradorModel.update(req.params.administradorId, req.body);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});
router.delete('/:administradorId', async (req, res) => {
    try {
        const [result] = await administradorModel.deleteById(req.params.administradorId);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});
router.get('/:administradorId', async (req, res) => {
    try {
        const [result] = await administradorModel.getById(req.params.administradorId);
        res.json(result)
    } catch (error) {
        res.json(error);
    }
});

router.post('/login', async (req, res) => {
    try {
        const [result] = await administradorModel.selectLogin(req.body.email);

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


module.exports = router;