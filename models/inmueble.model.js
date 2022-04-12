const create = ({ alias, refcatastral,  localidad,direccion,cp }) => {
    return db.query(
        'insert into inmuebles( alias, refcatastral,  localidad,direccion,cp,usuario_id  ) values(?,?,?,?,?,?)',[ alias, refcatastral,  localidad,direccion,cp,  usuario_id]
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
module.exports = { create, update,deleteById,getById,getAll };