const router = require('express').Router();
const usuarioModel = require('../../models/usuario.model');
const bcrypt = require('bcryptjs');


router.get('/', async (req, res) => {
    try {
        const [result] = await usuarioModel.getAll();
        res.json(result);
    } catch (error) {// ejecuta esta
        res.json(error);
    }
});


router.post('/registro', async (req, res) => {
    try {
        const [result] = await usuarioModel.create(req.body);
        console.log(result);
        res.json(result)
    } catch (error) {
        res.json(error);
    }
})
router.put('/:usuarioId', async (req, res) => {
    try {
        const [result] = await usuarioModel.update(req.params.usuarioId, req.body);
        res.json(result);
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
router.get('/:usuarioId', async (req, res) => {
    try {
        const [result] = await usuarioModel.getById(req.params.usuarioId);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});



module.exports = router;