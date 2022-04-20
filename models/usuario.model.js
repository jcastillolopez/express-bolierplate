const getAll = () => {
    return db.query('select usuarios.*, roles.rol from inmuebles_control.usuarios,inmuebles_control.roles where usuarios.rol_id = roles.id ')
};

const create = ({ username, email, password, Roles_id}) => {
    return db.query(
        'insert into usuarios(username,email,password,Roles_id) values(?,?,?,?)',[username,email,password,Roles_id]
    )
}
const update = (usuarioId,{  username, email, password,Roles_id }) => {
    return db.query(
        'UPDATE usuarios set username = ?, email = ? ,  password = ?, Roles_id =? WHERE id = ?',
        [ username, email, password,Roles_id, usuarioId]
    );
}
const deleteById = (usuarioId) => {
    return db.query('delete from usuarios where id = ?', [usuarioId]);
}
const getById = (usuarioId) => {
    return db.query('select usuarios.*, roles.rol from inmuebles_control.usuarios,inmuebles_control.roles where usuarios.rol_id = roles.id and usuarios.id=?', [usuarioId]);
}
const selectLogin = (pemail) => {
    return db.query('select * from inmuebles_control.usuarios where borrado = 0 and email = ? ',[pemail]);
}
module.exports = {getAll, create, update,deleteById,getById, selectLogin};
