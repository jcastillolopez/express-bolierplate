const create = ({rol ,borrado,usuario_id}) => {
    return db.query(
        'insert into roles(rol,borrado,usuario_id) values(?,?,?)',[rol ,borrado,usuario_id]
    )  
}
const update = (rolId,{ rol,borrado,usuario_id }) => {
    return db.query(
        'UPDATE roles set  rol = ? ,borrado = ?,usuario_id=? WHERE id = ?',
        [rol,borrado,usuario_id , rolId]
    );
}
const deleteById = (rolId) => {
    return db.query('delete from roles where id = ?', [rolId]);
}
const getById = (rolId) => {
    return db.query('select * from roles where id = ?', [rolId]);
}
const getAll = () => {
    return db.query('select * from roles')
};
const selectRol = () => {
    return db.query('select Distinct rol, id from inmuebles_control.roles')
};

module.exports = { create, update,deleteById,getById,getAll,selectRol};