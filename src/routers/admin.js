const express = require('express')
const router = new express.Router()
const path = require('path')

const productsController = require('../controllers/products')

const products = []

router.get('/add-product', productsController.getAddProduct)
router.post('/add-product', productsController.postAddProduct)

module.exports = router