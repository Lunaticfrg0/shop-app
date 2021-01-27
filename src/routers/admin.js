const express = require('express')
const router = new express.Router()
const path = require('path')

const rootDir = require('../utils/path')

const products = []

router.get('/add-product',(req, res, next ) => {
    res.render('add-product', {pageTitle: "Add Product", path : "/admin/add-product"})
})
router.post('/add-product',(req, res, next ) => {
    products.push({title: req.body.title})
    res.redirect('/')
})

exports.routes = router
exports.products = products