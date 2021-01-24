const express = require('express')
var bodyParser = require('body-parser')

const adminRoutes = require('./routers/admin')
const shopRoutes = require('./routers/shop')

const port = 3000

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(adminRoutes)
app.use(shopRoutes)

app.use((req, res, next)=> {
    res.status(404).send('<h1>404</h1>')
})

app.listen(port, ()=>{
    console.log("Server is up on port " + port)
})