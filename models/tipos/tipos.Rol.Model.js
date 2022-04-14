const create = ({rol }) => {
    return db.query(
        'insert into roles(rol,borrado,usuario_id) values(?,?.?)',[rol]
    )  
}
const update = (rolid,{ rol,borrado,usuario_id }) => {
    return db.query(
        'UPDATE roles set  rol = ? ,borrado = ?,usuario_id WHERE id = ?',
        [rol,borrado,usuario_id , rolid]
    );
}
const deleteById = (rolid) => {
    return db.query('delete from roles where id = ?', [rolid]);
}
const getById = (rolid) => {
    return db.query('select * from roles where id = ?', [rolid]);
}
const getAll = () => {
    return db.query('select * from roles')
};
const select = () => {
    return db.query('select Distinct rol,id from inmuebles_control.roles')
}
module.exports = { create, update,deleteById,getById,getAll, select};