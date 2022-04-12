const create = ({ nombre, apellidos,nie,fecha_nacimiento, email, tlf,tlfmovil,localidad,direccion,cp }) => {
    return db.query(
        'insert into clientes(nombre, apellidos,nie,fecha_nacimiento, email, tlf,tlf_movil,localidad,direccion,cp ) values(?,?,?,?,?,?,?,?,?,?)',[nombre, apellidos,nie,fecha_nacimiento, email, tlf,tlfmovil,localidad,direccion,cp ]
    )  
}
const update = (clienteId,{ nombre, apellidos,nie,fecha_nacimiento, email, tlf,tlfmovil,localidad,direccion,cp }) => {
    return db.query(
        'UPDATE clientes set nombre = ?, apellidos = ?,nie=?,fecha_nacimiento = ?, email = ?,tlf=?,tlf_movil=?,localidad=?, direccion = ?,cp = ? WHERE id = ?',
        [ nombre, apellidos,nie,fecha_nacimiento, email, tlf,tlfmovil,localidad,direccion,cp, clienteId]
    );
}
const deleteById = (clienteId) => {
    return db.query('delete from clientes where id = ?', [clienteId]);
}
const getById = (clienteId) => {
    return db.query('select * from clientes where id = ?', [clienteId]);
}
const getAll = () => {
    return db.query('select * from clientes where borrado = 0 order by apellidos asc')
};

module.exports = { create, update,deleteById,getById,getAll};