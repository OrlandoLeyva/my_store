const faker = require('faker');
const boom = require('@hapi/boom');
const {models} = require('../libs/sequelize');

class WishesService {

  constructor(){}

  async create(data) {
    const rta = await models.Wish.create(data);
    return rta;
  }

  async find() {
    const rta = await models.Wish.findAll({
      include: ['product']
    });
    return rta;
  }

  async findOne(id) {
    const rta = await models.Wish.findByPk(id);
    if(!rta){
      throw boom.notFound('wish not found');
    }
    return rta;
  }

  async update(id, changes) {
    const wish = await this.findOne(id);
    const rta = product.update(changes);
    return rta;
  }

  async delete(id) {
    const wish = await this.findOne(id);
    const rta = await product.destroy();
    return rta;
  }
}

module.exports = WishesService;
