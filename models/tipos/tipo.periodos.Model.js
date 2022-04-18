const create = ({tipo_periodo,borrado,usuario_id }) => {
    return db.query(
        'insert into tipos_periodos(tipo_periodo,borrado,usuario_id ) values(?,?,?)',[ tipo_periodo,,borrado,usuario_id ]
    )  
}
const update = ({ tipo_periodo,borrado,usuario_id  }, tipo_periodoId) => {
    return db.query(
        'UPDATE tipos_periodos set tipo_periodo = ?,borrado= ? ,usuario_id = ?  WHERE id = ?',
        [tipo_periodo,,borrado,usuario_id,tipo_periodoId]
    );
}
const deleteById = (tipo_periodoId) => {
    return db.query('delete from tipos_periodos where id = ?', [tipo_periodoId]);
}
const getById = (tipo_periodoId) => {
    return db.query('select * from tipos_periodos where id = ?', [tipo_periodoId]);
}
const getAll = () => {
    return db.query('select * from tipos_periodos')
};
const selectPeriodo = () => {
    return db.query('select Distinct tipo_periodo,id from inmuebles_control.tipos_periodos')
}
module.exports = { create, update,deleteById,getById,getAll, selectPeriodo};