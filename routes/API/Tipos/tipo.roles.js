const router = require('express').Router();
const RolModel = require('../../../models/Tipos/tipos.Rol.Model');



router.get('/', async (req, res) => {      
    try {
        const [result] = await RolModel.getAll();
        res.json(result);
    } catch (error) {
        res.json(error);
    }
 });
router.get('/select', async (req, res) => {      
   try {
        const [result] = await RolModel.selectRol();
        res.json(result); 
        console.log(result)
    } catch (error) {
        res.json(error);
    }
});
router.post('/registro', async (req, res) => {
    try {
        req.body.borrado = req.body.borrado? 1 : 0   
        const [result] = await RolModel.create(req.body);
        res.json(result)
    } catch (error) {
        res.json(error);
    }
});
router.put('/:RolesId', async (req, res) => {
    try {
        req.body.borrado = req.body.borrado? 1 : 0
        const [result] = await RolModel.update(req.params.RolesId, req.body);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});
router.delete('/:RolesId', async (req, res) => {
    try {
        const [result] = await RolModel.deleteById(req.params.RolesId);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});
router.get('/:RolesId', async (req, res) => {
    try {
        const [result] = await RolModel.getById(req.params.RolesId);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});

module.exports = router;