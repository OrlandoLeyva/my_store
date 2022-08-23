const boom = require('@hapi/boom');

const {models} = require('../libs/sequelize');

const pool = require('../libs/postgres.pool');

class UserService {
  constructor() {}

  async create(data) {
    const rta = await models.User.create(data);
    return rta;
  }

  async find() {
    const rta = await models.User.findAll({
      include: ['customer']
    });
    return rta;
  }

  async findOne(id) {
    const rta = await models.User.findByPk(id);
    if(!rta){
      throw boom.notFound('user not found');
    }

    return rta;
  }

  async update(id, changes) {
    console.log(changes);
    const user = await this.findOne(id);
    const rta = await user.update(changes);
    return rta;
  }

  async delete(id) {
    const user = await this.findOne(id);
    const rta = await user.destroy();
  }
}

module.exports = UserService;
