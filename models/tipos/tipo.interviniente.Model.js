const create = ({ name}) => {
    return db.query(
        'insert into interviniente(name ) values(?,',[ name]
    )  
}
const update = ({ name}) => {
    return db.query(
        'update interviniente set name=?,where id =?',[ name,intervinienteID]
    )  
}
const deleteById = (intervinienteID) => {
    return db.query('delete from interviniente where id = ?', [intervinienteID]);
}
const getById = (intervinienteID) => {
    return db.query('select * from interviniente where id = ?', [intervinienteID]);
}
const getAll = () => {
    return db.query('select * from interviniente')
};
module.exports = { create, update,deleteById,getById,getAll};