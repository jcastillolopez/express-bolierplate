const getAll = () => {
    return db.query('select usuarios.*, roles.rol from inmuebles_control.usuarios,inmuebles_control.roles where usuarios.rol_id = roles.id ')
}
const getById = (usuarioId) => {
    return db.query('select usuarios.*, roles.rol from inmuebles_control.usuarios,inmuebles_control.roles where usuarios.rol_id = roles.id and usuarios.id =?', [usuarioId]);
}

const getByCreator = (administradorId) => {
    return db.query('select usuarios.*, roles.rol from inmuebles_control.usuarios,inmuebles_control.roles where usuarios.rol_id = roles.id and usuarios.administrador_id = ?', [administradorId])
}

const create = ({ username, email, password, borrado, rol_id, administrador_id }) => {
    return db.query(
        'insert into usuarios(username,email,password,borrado,rol_id,administrador_id) values(?,?,?,?,?,?)', [username, email, password, borrado, rol_id, administrador_id]
    )
}
const update = (usuarioId, { username, email, password, borrado, rol_id, administrador_id }) => {
    (borrado !== true ? 0 : 1)
    return db.query(
        'UPDATE inmuebles_control.usuarios set  username =?, email=?, password=?,borrado=?, rol_id=?, administrador_id =? WHERE id = ?',
        [username, email, password, borrado, rol_id, administrador_id, usuarioId,]
    )
}
const deleteById = (usuarioId) => {
    return db.query('delete from usuarios where id = ?', [usuarioId]);
}

const selectLogin = (pemail) => {
    return db.query('select * from inmuebles_control.usuarios where borrado = 0 and email = ? ', [pemail]);
}
module.exports = { getByCreator, create, update, deleteById, getById, selectLogin, getAll };
