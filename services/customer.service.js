const boom = require('@hapi/boom');
const {models} = require('../libs/sequelize');

class CustomersService {

  constructor(){}

  async create(data) {
    const rta = await models.Customer.create(data, {
      include: ['user']
    });
    return rta;
  }

  async find() {
    const rta = await models.Customer.findAll({
      include: ['user']
    });
    return rta;
  }

  async findOne(id) {
    const rta = await models.Customer.findByPk(id);
    if(!rta){
      throw boom.notFound('product not found');
    }
    return rta;
  }

  async update(id, changes) {
    const customer = await this.findOne(id);
    const rta = customer.update(changes);
    return rta;
  }

  async delete(id) {
    const customer = await this.findOne(id);
    const rta = await customer.destroy();
    return rta;
  }
}

module.exports = CustomersService;
