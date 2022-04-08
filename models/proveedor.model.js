const create = ({ nombre, apellidos, email, nie,tlf,tlfmovil,localidad,direccion,cp }) => {
    return db.query(
        'insert into proveedores(nombre, apellidos, email, nie,tlf,tlfmovil,localidad,direccion,cp  ) values(?,?,?,?,?,?,?,?,?)',[nombre, apellidos, email, nie,tlf,tlfmovil,localidad,direccion,cp ]
    )  
}
const update = (proveedorId,{nombre, apellidos, email, nie,tlf,tlfmovil,localidad,direccion,cp  }) => {
    return db.query(
        'UPDATE proveedores set nombre = ?, apellidos = ?,nie=?, email = ?,tlf=?,tlfmovil=?,localidad=?, direccion = ?,cp = ? WHERE id = ?',
        [nombre, apellidos, email, nie,tlf,tlfmovil,localidad,direccion,cp , proveedorId]
    );
}
const deleteById = (proveedorId) => {
    return db.query('delete from proveedores where id = ?', [proveedorId]);
}
const getById = (proveedorId) => {
    return db.query('select * from proveedores where id = ?', [proveedorId]);
}
const getAll = () => {
    return db.query('select * from proveedores')
};
module.exports = { create, update,deleteById,getById,getAll };