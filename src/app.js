const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const db = require('./utils/database')

const adminRoutes = require('./routers/admin')
const shopRoutes = require('./routers/shop')

const errorCnontroller = require('./controllers/error')

const port = 3000

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './', "views"))

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '../public')))

app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use(errorCnontroller.get404)

app.listen(port, ()=>{
    console.log("Server is up on port " + port)
})