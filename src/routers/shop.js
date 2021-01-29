const express = require('express')
const router = new express.Router()
const path = require('path')

const adminData = require('./admin')

const rootDir = require('../utils/path')
const { toUpperCase } = require('../utils/path')


router.get('/',(req, res, next ) => {
    const products = adminData.products
    res.render('shop', 
    {prods: products, 
    pageTitle: "e-Shop", 
    path: "/", 
    hasProducts: products.length > 0, 
    activeShop: true,
    productCSS : true})
})

module.exports = router