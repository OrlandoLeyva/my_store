const express = require('express');

const WishesService = require('./../services/wish.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createWishSchema, updateWishSchema, getWishSchema } = require('./../schemas/wish.schema');

const router = express.Router();
const service = new WishesService();

router.get('/', async (req, res, next) => {
  try {
    const wishes = await service.find();
    res.json(wishes);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getWishSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const wish = await service.findOne(id);
      res.json(wish);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createWishSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newWish = await service.create(body);
      res.status(201).json(newWish);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getWishSchema, 'params'),
  validatorHandler(updateWishSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const wish = await service.update(id, body);
      res.json(wish);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getWishSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
