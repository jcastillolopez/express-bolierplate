const create = ({ nombre, apellidos, nie, fecha_nacimiento, email, tlf, tlf_movil, localidad, direccion, cp }) => {
    return db.query(
        'insert into administradores(nombre, apellidos,nie,fecha_nacimiento, email, tlf,tlf_movil,localidad,direccion,cp ) values(?,?,?,?,?,?,?,?,?,?)', [nombre, apellidos, nie, fecha_nacimiento, email, tlf, tlf_movil, localidad, direccion, cp]
    )
}
const update = (administradorId, { nombre, apellidos, nie, fecha_nacimiento, email, tlf, tlf_movil, localidad, direccion, cp, borrado }) => {
    (borrado !== true? 0:1) 
    return db.query(
        'UPDATE administradores set nombre = ?, apellidos = ?,nie=?,fecha_nacimiento = ?, email = ?,tlf=?,tlf_movil=?,localidad=?, direccion = ?,cp = ?,borrado =? WHERE id = ?',
        [nombre, apellidos, nie, fecha_nacimiento, email, tlf, tlf_movil, localidad, direccion, cp,borrado, administradorId]
    );
}
const deleteById = (administradorId) => {
    return db.query('delete from administradores where id = ?', [administradorId]);
}
const getById = (administradorId) => {
    return db.query('select * from administradores where id = ?', [administradorId]);
}
const getAll = () => {
    
    return db.query("select * from administradores where borrado =0 order by apellidos asc")
};
const selectAdministrador = () => {
    return db.query('select Distinct nie,apellidos,nombre,id from inmuebles_control.administradores')
}
module.exports = { create, update, deleteById, getById, getAll, selectAdministrador};