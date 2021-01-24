const express = require('express')
const router = new express.Router()

router.get('/',(req, res, next ) => {
    res.send("<h1>Market</h1>")
})

module.exports = router