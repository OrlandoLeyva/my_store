const express = require('express');

const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const usersRouter = require('./users.router');
const orderRouter = require('./orders.router');
const customersRouter = require('./customers.router');
const ordersRouter = require('./orders.router');
const wishesRouter = require('./wishes.router');

const router = express.Router();

function routerApi(app) {
  app.use('/api/v1', router);
  router.get('/', (req, res)=>{res.send('welcome to my store')})
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
  router.use('/orders', orderRouter);
  router.use('/customers', customersRouter);
  router.use('/orders', ordersRouter);
  router.use('/wishes', wishesRouter);
}

module.exports = routerApi;
