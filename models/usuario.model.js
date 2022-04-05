const create = ({ nombre, username, email, password }) => {
    return db.query(
        'insert into usuarios(nombre,username,email,password) values(?,?,?,?)',[nombre,username,email,password]
    )
}
module.exports = { create}