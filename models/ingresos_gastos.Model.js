const create = ({concepto,tipo_concepto_id,fecha_concepto,ingreso,gasto,iva_porcentaje ,proveedores_id,inmuebles_id,fecha_factura,numero_factura,usuario_id,borrado }) => {
    return db.query(
        'insert into gastos_ingresos(concepto,tipo_concepto_id,fecha_concepto,ingreso,gasto,iva_porcentaje ,proveedores_id,inmuebles_id,fecha_factura,numero_factura,usuario_id,borrado ) values(?,?,?,?,?,?,?,?,?,?,?,?)', [concepto,tipo_concepto_id,fecha_concepto,ingreso,gasto,iva_porcentaje ,proveedores_id,inmuebles_id,fecha_factura,numero_factura,usuario_id,borrado]
    )
}
const update = ({ concepto,fecha_concepto,ingreso,gasto, iva_porcentaje,proveedores_id,inmuebles_id,fecha_factura,numero_factura,usuario_id,borrado}, ingreso_gastoId) => {
    return db.query(
        'update gastos_ingresos set concepto = ? ,fecha_concepto = ? ,ingreso id = ?,gasto id = ?,iva_porcentaje = ?, proveedores_id  = ?,inmuebles_id  = ?,fecha_factura = ?,numero_factura  = ?, usuario_id  = ? , borrado = ? where id = ?', [concepto,fecha_concepto,ingreso,gasto, iva_porcentaje,proveedores_id,inmuebles_id,fecha_factura,numero_factura,usuario_id,borrado,ingreso_gastoId ]
    )
}
const deleteById = (ingreso_gastoId) => {
    return db.query('delete from gastos_ingresos where id = ?', [ingreso_gastoId]);
}

const getAll = () => {
    return db.query('select * from gastos_ingresos where borrado = 0 ')
};

module.exports = { create, update, deleteById, getAll };