const create = ({ alias, refcatastral,localidad,direccion,cp }) => {
    return db.query(
        'insert into inmuebles( alias, refcatastral,  localidad,direccion,cp) values(?,?,?,?,?)',[ alias, refcatastral,localidad,direccion,cp]
    )  
}
const update = (inmuebleId,{ alias, refcatastral,localidad,direccion,cp,usuario_id }) => {
    return db.query(
        'UPDATE inmuebles set alias = ?, refcatastral = ? ,  localidad = ? ,direccion = ? ,cp = ?,usuario_id = ?  WHERE id = ?',
        [ alias, refcatastral, localidad,direccion,cp ,usuario_id, inmuebleId]
    );
}
const deleteById = (inmuebleId) => {
    return db.query('delete from inmuebles where id = ?', [inmuebleId]);
}
const getById = (inmuebleId) => {
    return db.query('select * from inmuebles where id = ?', [inmuebleId]);
}
const getAll = () => {
    return db.query('select * from inmuebles')
};
const selectInmueble = () => {
    return db.query('select Distinct alias,refcatastral,id from inmuebles_control.inmuebles')
}
const getByUsuario = (usuarioId) => {
    return db.query('select * from inmuebles where usuario_id = ?', [usuarioId]);
}
module.exports = { create, update,deleteById,getById,getAll,getByUsuario,selectInmueble};