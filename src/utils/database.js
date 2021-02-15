const mysql = require('mysql2')
const constants = require('./constants')

const pool = mysql.createPool({
    host: constants.host,
    user: constants.user,
    database: constants.database,
    password: constants.password
})

module.exports = pool.promise()