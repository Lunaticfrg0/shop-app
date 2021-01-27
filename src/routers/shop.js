const express = require('express')
const router = new express.Router()
const path = require('path')

const adminData = require('./admin')

const rootDir = require('../utils/path')


router.get('/',(req, res, next ) => {
    const products = adminData.products
    res.render('shop', {prods: products, docTitle: 'E-Shop'})
})

module.exports = router