const create = ({ nombre, apellidos, nie, fecha_nacimiento, email, tlf, tlf_movil, localidad, direccion, cp }) => {
    (borrado !== true? 0:1) 
    return db.query(
        'insert into clientes(nombre, apellidos,nie,fecha_nacimiento, email, tlf,tlf_movil,localidad,direccion,cp ) values(?,?,?,?,?,?,?,?,?,?)', [nombre, apellidos, nie, fecha_nacimiento, email, tlf, tlf_movil, localidad, direccion, cp]
    )
}
const update = (clienteId, { nombre, apellidos, nie, fecha_nacimiento, email, tlf, tlf_movil, localidad, direccion, cp, borrado }) => {
    (borrado !== true ? 0 : 1) 
    console.log( req.body)
    return db.query(
        'UPDATE clientes set nombre = ?, apellidos = ?,nie=?,fecha_nacimiento = ?, email = ?,tlf=?,tlf_movil=?,localidad=?, direccion = ?,cp = ?,borrado =? WHERE id = ?',
        [nombre, apellidos, nie, fecha_nacimiento, email, tlf, tlf_movil, localidad, direccion, cp,borrado, clienteId]
    );
}
const deleteById = (clienteId) => {
    return db.query('delete from clientes where id = ?', [clienteId]);
}
const getById = (clienteId) => {
    return db.query('select * from clientes where id = ?', [clienteId]);
}
const getAll = () => {
    
    return db.query("select * from clientes where borrado =0 order by apellidos asc")
};
const selectCliente = () => {
    return db.query('select Distinct nie,apellidos,nombre,id from inmuebles_control.clientes')
}
module.exports = { create, update, deleteById, getById, getAll, selectCliente};