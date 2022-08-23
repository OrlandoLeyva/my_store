const boom = require('@hapi/boom');
const {models} = require('../libs/sequelize');
const ProductsService = require('../services/product.service');
const WishesService = require('./wish.service');

const productsService = new ProductsService();
const wishesService = new WishesService();

class OrdersService {

  constructor(){}

  // async validateProducts(productsId){

  // }

  async create(data) {
    const {wishes} = data;

    for (const wish of wishes) {
      try {
        await productsService.findOne(wish.productId);
      } catch (error) {
        throw boom.notFound(`Product ${id} not found`)
      }
    }

    const rta = await models.Order.create({customerId: data.customerId});

    for (const wish  of wishes) {
      const newWish = {
        orderId: rta.id,
        productId: wish.productId,
        amount: wish.amount
      }
      await wishesService.create(newWish);
    }

    return rta;
  }

  async find() {
    const rta = await models.Order.findAll({
      include: [{
        association: 'customer',
        include: ['user']
      },'items']
    });
    return rta;
  }

  async findOne(id) {
    const rta = await models.Order.findByPk(id, {include: [{
      association: 'customer',
      include: ['user']
    },'items']});

    if(!rta){
      throw boom.notFound('order not found');
    }
    return rta;
  }

  async update(id, changes) {
    const order = await this.findOne(id);
    const rta = order.update(changes);
    return rta;
  }

  async delete(id) {
    const order = await this.findOne(id);
    const rta = await order.destroy();
    return rta;
  }
}

module.exports = OrdersService;
