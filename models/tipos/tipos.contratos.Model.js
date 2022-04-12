const create = ({ Tipo_contrato,Tipo_interviniente}) => {
    return db.query(
        'insert into tipos_contratos(Tipo_contrato,Tipo_interviniente ) values(?,',[ Tipo_contrato,Tipo_interviniente]
    )  
}
const update = (Tipos_contratosId)=>{ 
    return db.query(
        'update tipos_contratos set Tipo_contrato=?, Tipo_interviniente =? where id =?',[ Tipo_contrato,Tipo_interviniente,Tipos_contratosId]
    )  
}
const deleteById = (Tipos_contratosId) => {
    return db.query('delete from tipos_contratos where id = ?', [Tipos_contratosId]);
}
const getById = (Tipos_contratosId) => {
    return db.query('select * from tipos_contratos where id = ?', [Tipos_contratosId]);
}
const getAll = () => {
    return db.query('select * from tipos_contratos')
};
module.exports = { create, update,deleteById,getById,getAll};