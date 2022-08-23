const faker = require('faker');
const boom = require('@hapi/boom');
const {models} = require('../libs/sequelize');
const {Op} = require('sequelize')

class ProductsService {

  constructor(){}

  async create(data) {
    const rta = await models.Product.create(data);
    return rta;
  }

  async find(queries) {
    const options = {
      include: ['category'],
      where: {}
    }

    const {offset, limit, price_min, price_max} = queries;

    if(offset && limit){
      options.offset = offset,
      options.limit = limit
    }

    if(price_min && price_max){
      options.where.price = {
        [Op.gte]: price_min,
        [Op.lte]: price_max
      };
    }

    const rta = await models.Product.findAll(options);
    return rta;
  }

  async findOne(id) {
    const rta = await models.Product.findByPk(id);
    if(!rta){
      throw boom.notFound('product not found');
    }
    return rta;
  }

  async update(id, changes) {
    const product = await this.findOne(id);
    const rta = product.update(changes);
    return rta;
  }

  async delete(id) {
    const product = await this.findOne(id);
    const rta = await product.destroy();
    return rta;
  }
}

module.exports = ProductsService;
