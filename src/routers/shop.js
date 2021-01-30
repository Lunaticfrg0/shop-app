const express = require('express')
const router = new express.Router()
const path = require('path')

const productsController = require('../controllers/products')

router.get('/', productsController.getProducts)

module.exports = router