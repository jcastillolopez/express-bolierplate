const create = ({ name}) => {
    return db.query(
        'insert into Roles(name ) values(?,',[ name]
    )  
}
const update = ({ name}) => {
    return db.query(
        'update Roles set name=?,where id =?',[ name,RolesId]
    )  
}
const deleteById = (RolesId) => {
    return db.query('delete from Roles where id = ?', [RolesId]);
}
const getById = (RolesId) => {
    return db.query('select * from Roles where id = ?', [RolesId]);
}
const getAll = () => {
    return db.query('select * from Roles')
};
module.exports = { create, update,deleteById,getById,getAll};