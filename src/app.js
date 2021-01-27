const express = require('express')
var bodyParser = require('body-parser')
const path = require('path')

const adminData = require('./routers/admin')
const shopRoutes = require('./routers/shop')

const port = 3000

const app = express()

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, './', "views"))

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '../public')))

app.use('/admin', adminData.routes)
app.use(shopRoutes)

app.use((req, res, next)=> {
    res.status(404).sendFile(path.join(__dirname, './', 'views', '404.html'))
})

app.listen(port, ()=>{
    console.log("Server is up on port " + port)
})