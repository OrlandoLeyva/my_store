const boom = require('@hapi/boom');
const pool = require('../libs/postgres.pool');
const {models} = require('../libs/sequelize');

class CategoryService {

  constructor(){
      this.pool = pool;
      this.pool.on('error', (error)=>console.log(error))
  }
  async create(data) {
    const rta = await models.Category.create(data);
    return rta;
  }

  async find() {
    const rta = await models.Category.findAll({
      include: ['products']
    });
    return rta;
  }

  async findOne(id) {
    const rta = await models.Category.findByPk(id);
    if(!rta){
      throw boom.notFound('category not found');
    }
    return rta;
  }

  async update(id, changes) {
    const category = await this.findOne(id);
    const rta = await category.update(changes);
    return rta;
  }

  async delete(id) {
    const category = await this.findOne(id);
    const rta = await category.destroy();
    return rta;
  }

}

module.exports = CategoryService;
