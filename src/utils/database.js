const Sequelize = require('sequelize')
const constants = require('./constants')

const sequelize = new Sequelize(
    constants.database, 
    constants.user, 
    constants.password, 
    {
        dialect: 'mysql',
        host: constants.host
    })
module.exports = sequelize