const create = ({tipo_contrato }) => {
    return db.query(
        'insert into tipos_contratos(tipo_contrato,borrado,usuario_id) values(?,?,?)',[ tipo_contrato]
    )  
}
const update = (tipo_contratoId,{ tipo_contrato,borrado,usuario_id }) => {
    return db.query(
        'UPDATE tipos_contratos set  tipo_contrato = ?,borrado = ?,usuario_id = ? WHERE id = ?',
        [ tipo_contrato,borrado,usuario_id , tipo_contratoId]
    );
}
const deleteById = (tipo_contratoId) => {
    return db.query('delete from tipos_contratos where id = ?', [tipo_contratoId]);
}
const getById = (tipo_contratoId) => {
    return db.query('select * from tipos_contratos where id = ?', [tipo_contratoId]);
}
const getAll = () => {
    return db.query('select * from tipos_contratos')
};
const select = () => {
    return db.query('select Distinct tipo_contrato,id from inmuebles_control.tipos_contratos')
}
module.exports = { create, update,deleteById,getById,getAll, select};