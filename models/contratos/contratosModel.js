const create = ({ inmuebles_id,fecha_compra_venta,valor_compra,usuario_id}) => {
    return db.query(
        'insert into tbi_contratos(inmuebles_id,fecha_compra_venta,valor_compra,usuario_id ) values(?,?,?,?)',[ inmuebles_id,fecha_compra_venta,valor_compra,usuario_id]
    )  
}
const update = ({ inmuebles_id,fecha_compra_venta,valor_compra,usuario_id},tbi_contratoId) => {
    return db.query(
        'update tbi_contratos set inmuebles_id =?,fecha_compra_venta =?,valor_compra =?,usuario_id =? where id =?',[ inmuebles_id,fecha_compra_venta,valor_compra,usuario_id,tbi_contratoId]
    )  
}
const deleteById = (tbi_contratoId) => {
    return db.query('delete from tbi_contratos where id = ?', [tbi_contratoId]);
}
const getById = (tbi_contratoId) => {
    return db.query('select * from tbi_contratos where id = ?', [tbi_contratoId]);
}
const getAll = () => {
    return db.query('select * from tbi_contratos')
};
module.exports = { create, update,deleteById,getById,getAll};