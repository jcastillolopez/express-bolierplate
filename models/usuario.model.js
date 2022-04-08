const getAll = () => {
    return db.query('select usuarios.*, roles.rol from inmuebles_control.usuarios,inmuebles_control.roles where usuarios.rol_id = roles.id ')
};

const create = ({ username, email, password }) => {
    return db.query(
        'insert into usuarios(username,email,password) values(?,?,?)',[username,email,password]
    )
}
const update = (usuarioId,{  username, email, password }) => {
    return db.query(
        'UPDATE usuarios set username = ?, email = ? ,  password = ?  WHERE id = ?',
        [ username, email, password, usuarioId]
    );
}
const deleteById = (usuarioId) => {
    return db.query('delete from usuarios where id = ?', [usuarioId]);
}
const getById = (usuarioId) => {
    return db.query('select usuarios.*, roles.rol from inmuebles_control.usuarios,inmuebles_control.roles where usuarios.rol_id = roles.id and usuarios.id=?', [usuarioId]);
}
module.exports = {getAll, create, update,deleteById,getById };
