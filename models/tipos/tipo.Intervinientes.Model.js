const create = ({contrato_id,cliente_id,propiedad_cantidad,tipo_interviniente_id,usuario_id,borrado }) => {
    return db.query(
        'insert into tipos_intervinientes(contrato_id,cliente_id,propiedad_cantidad,tipo_interviniente_id,usuario_id,borrado) values(?,?,?,?.?,?)',[ contrato_id,cliente_id,propiedad_cantidad,tipo_interviniente_id,usuario_id,borrado]
    )  
}
const update = ({ tipo_contrato_id, cliente_id, propiedad_cantidad, tipo_interviniente_id, usuario_id, borrado },tipo_intervinienteId) => {
    return db.query(
        'UPDATE tipos_intervinientes set  tipo_contrato_id = ?,cliente_id= ? ,propiedad_cantidad= ? ,tipo_interviniente = ?,usuario_id= ? ,borrado= ? WHERE id = ?',
        [tipo_contrato_id,cliente_id,propiedad_cantidad,tipo_interviniente,usuario_id,borrado, tipo_intervinienteId]
    );
}
const deleteById = (tipo_intervinienteId) => {
    return db.query('delete from tipos_intervinientes where id = ?', [tipo_intervinienteId]);
}
const getById = (tipo_intervinienteId) => {
    return db.query('select * from tipos_intervinientes where id = ?', [tipo_intervinienteId]);
}
const getAll = () => {
    return db.query('select * from tipos_intervinientes')
};
const select = () => {
    return db.query('select Distinct tipo_interviniente,id from inmuebles_control.tipos_intervinientes')
}
module.exports = { create, update, deleteById, getById, getAll, select };