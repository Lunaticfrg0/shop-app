const express = require('express')
var bodyParser = require('body-parser')
const path = require('path')
const expressHbs = require('express-handlebars')

const adminData = require('./routers/admin')
const shopRoutes = require('./routers/shop')

const port = 3000

const app = express()

app.engine('hbs', expressHbs({layoutsDir: path.join(__dirname, './', "views/layouts"), defaultLayout: 'main-layout', extname: "hbs"}))
app.set('view engine', 'hbs')
// app.set('view engine', 'pug')
app.set('views', path.join(__dirname, './', "views"))

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '../public')))

app.use('/admin', adminData.routes)
app.use(shopRoutes)

app.use((req, res, next)=> {
    res.status(404).render('404',{pageTitle: "Page not found"})
})

app.listen(port, ()=>{
    console.log("Server is up on port " + port)
})