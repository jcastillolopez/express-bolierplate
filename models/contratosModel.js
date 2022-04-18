const create = ({ inmuebles_id, fecha_contrato, valor_contrato, usuario_id }) => {
    return db.query(
        'insert into tbi_contratos(inmuebles_id,fecha_contrato,valor_contrato,usuario_id ) values(?,?,?,?)', [inmuebles_id, fecha_contrato, valor_contrato, usuario_id]
    )
}
const update = ({ inmuebles_id, fecha_contrato, valor_contrato, usuario_id }, tbi_contratoId) => {
    return db.query(
        'update tbi_contratos set inmuebles_id =?,fecha_contrato =?,valor_contrato =?,usuario_id =? where id =?', [inmuebles_id, fecha_contrato, valor_contrato, usuario_id, tbi_contratoId]
    )
}
const deleteById = (tbi_contratoId) => {
    return db.query('delete from tbi_contratos where id = ?', [tbi_contratoId]);
}
const getById = (tbi_contratoId) => {
    return db.query('select c.*,i.alias,tc.tipo_contrato,tp.tipo_periodo from inmuebles_control.tbi_contratos as c left join inmuebles_control.inmuebles as i on i.id = c.inmuebles_id left  join inmuebles_control.tipos_contratos as tc on tc.id = c.tipos_contratos_id left  join inmuebles_control.tipos_periodos as tp on tp.id = c.tipo_periodo_id where c.id = ?  order by i.alias', [tbi_contratoId]);
}
const getAll = () => {
    return db.query('select tbi_contratos.*,tbi_contratos.valor_contrato,inmuebles.alias,tipos_contratos.tipo_contrato from inmuebles_control.tbi_contratos,inmuebles_control.inmuebles,inmuebles_control.tipos_contratos where inmuebles.id = tbi_contratos.inmuebles_id and tipos_contratos.id = tbi_contratos.tipos_contratos_id and tbi_contratos.borrado =0 order by inmuebles.alias asc')
};
module.exports = { create, update, deleteById, getById, getAll };