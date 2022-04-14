const create = ({ nombre, apellidos, email, nie,tlf,tlf_movil,localidad,direccion,cp }) => {
    return db.query(
        'insert into proveedores(nombre, apellidos, email, nie,tlf,tlf_movil,localidad,direccion,cp  ) values(?,?,?,?,?,?,?,?,?)',[nombre, apellidos, email, nie,tlf,tlf_movil,localidad,direccion,cp ]
    )  
}
const update = (proveedorId, { nombre, apellidos, email, nie, tlf, tlf_movil, localidad, direccion, cp,borrado }) => {
    (borrado !== true? 0:1)
    return db.query(        
        'UPDATE proveedores set nombre = ?, apellidos = ?,nie=?, email = ?,tlf=?,tlf_movil=?,localidad=?, direccion = ?,cp = ?,borrado =? WHERE id = ?',
        [nombre, apellidos, email, nie,tlf,tlf_movil,localidad,direccion,cp ,borrado, proveedorId]
    );
}
const deleteById = (proveedorId) => {
    return db.query('delete from proveedores where id = ?', [proveedorId]);
}
const getById = (proveedorId) => {
    return db.query('select * from proveedores where id = ?', [proveedorId]);
}
const getAll = () => {
    return db.query('select * from proveedores where borrado =0 order by apellidos asc')
};
module.exports = { create, update,deleteById,getById,getAll };