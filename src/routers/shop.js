const express = require('express')
const router = new express.Router()
const path = require('path')

const shopController = require('../controllers/shop')

router.get('/', shopController.getIndex)
router.get('/products', shopController.getIndex)
router.get('/cart', shopController.getCart)
router.get('/orders', shopController.getOrders)
router.get('/checkout', shopController.getCheckout)

module.exports = router