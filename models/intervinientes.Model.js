const create = ({contrato_id,cliente_id,propiedad_cantidad,tipo_interviniente_id, usuario_id,borrado }) => {
    return db.query(
        'insert into tbi_intervinientes(contrato_id,cliente_id,propiedad_cantidad,tipo_interviniente_id, usuario_id,borrado ) values(?,?,?,?,?,?)', [contrato_id,cliente_id,propiedad_cantidad,tipo_interviniente_id, usuario_id,borrado ]
    )
}
const update = ({ contrato_id,cliente_id,propiedad_cantidad,tipo_interviniente_id, usuario_id,borrado }, tbi_intervinienteId) => {
    return db.query(
        'update tbi_intervinientes set contrato_id = ? ,cliente_id = ? ,propiedad_cantidad  = ?,tipo_interviniente_id = ?, usuario_id  = ? , borrado = ? where id = ?', [contrato_id,cliente_id,propiedad_cantidad,tipo_interviniente_id, usuario_id,borrado,tbi_intervinienteId ]
    )
}
const deleteById = (tbi_intervinienteId) => {
    return db.query('delete from tbi_intervinientes where id = ?', [tbi_intervinienteId]);
}
const getByContrato = (contratoId) => {
    return db.query('select i.*,ti.tipo_interviniente,c.nie,c.nombre,c.apellidos from inmuebles_control.tbi_intervinientes as i left join inmuebles_control.tipos_intervinientes as ti on ti.id = i.tipo_interviniente_id left  join inmuebles_control.clientes as c on c.id = i.cliente_id where i.contrato_id = ? order by i.tipo_interviniente_id', [contratoId]);
}
const getByInterviniente = (intervinienteId) => {
    return db.query('select i.*,ti.tipo_interviniente,c.nie,c.nombre,c.apellidos from inmuebles_control.tbi_intervinientes as i left join inmuebles_control.tipos_intervinientes as ti on ti.id = i.tipo_interviniente_id left  join inmuebles_control.clientes as c on c.id = i.cliente_id where i.id = ? order by i.tipo_interviniente_id', [intervinienteId]);
}
const getAll = () => {
    return db.query('select * from tbi_intervinientes where borrado = 0 ')
};
const selectInterviniente = () => {
    return db.query('select Distinct nie,apellidos,nombre,id from inmuebles_control.clientes')
}
module.exports = { create, update, deleteById, getByContrato, getAll, selectInterviniente,getByInterviniente};