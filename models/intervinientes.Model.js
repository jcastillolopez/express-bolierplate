const create = ({contrato_id,cliente_id,propiedad_cantidad,tipo_interviniente_Id, usuario_id,borrado }) => {
    return db.query(
        'insert into tbi_intervinientes(contrato_id,cliente_id,propiedad_cantidad,tipo_interviniente_Id, usuario_id,borrado ) values(?,?,?,?,?,?)', [contrato_id,cliente_id,propiedad_cantidad,tipo_interviniente_Id, usuario_id,borrado ]
    )
}
const update = ({ contrato_id,cliente_id,propiedad_cantidad,tipo_interviniente_id, usuario_id,borrado }, tbi_intervinienteId) => {
    return db.query(
        'update tbi_intervinientes set contrato_id = ? ,cliente_id = ? ,propiedad_cantidad  = ?, usuario_id  = ? , borrado = ? where id = ?', [contrato_id,cliente_id,propiedad_cantidad,tipo_interviniente_id, usuario_id,borrado,tbi_intervinienteId ]
    )
}
const deleteById = (tbi_intervinienteId) => {
    return db.query('delete from tbi_intervinientes where id = ?', [tbi_intervinienteId]);
}
const getById = (tbi_intervinienteId) => {
    return db.query('select * from tbi_intervinientes where id = ?', [tbi_intervinienteId]);
}
const getAll = () => {
    return db.query('select * from tbi_intervinientes where borrado =0 ')
};
module.exports = { create, update, deleteById, getById, getAll };