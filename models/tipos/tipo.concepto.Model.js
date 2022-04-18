const create = ({tipo_concepto }) => {
    return db.query(
        'insert into tipos_conceptos(tipo_concepto,borrado,usuario_id) values(?,?,?)',[ tipo_concepto]
    )  
}
const update = (tipo_conceptoId,{ tipo_concepto,borrado,usuario_id }) => {
    return db.query(
        'UPDATE tipos_conceptos set  tipo_concepto = ?,borrado = ?,usuario_id = ? WHERE id = ?',
        [ tipo_concepto,borrado,usuario_id , tipo_conceptoId]
    );
}
const deleteById = (tipo_conceptoId) => {
    return db.query('delete from tipos_conceptos where id = ?', [tipo_conceptoId]);
}
const getById = (tipo_conceptoId) => {
    return db.query('select * from tipos_conceptos where id = ?', [tipo_conceptoId]);
}
const getAll = () => {
    return db.query('select * from tipos_conceptos')
};
const  selectTipoConcepto = () => {
    return db.query('select Distinct tipo_concepto,id from inmuebles_control.tipos_conceptos')
}
module.exports = { create, update,deleteById,getById,getAll, selectTipoConcepto};