import Sequelize from 'sequelize';
import databaseConfig from '../config/database.js';

import User from '../models/User.js'; // seu model
import Categoria from '../models/Categorias.js';
import Produto from '../models/Produtos.js';

const models = [User, Categoria, Produto]; // adicionar mais aqui depois

const connection = new Sequelize(databaseConfig);

// Inicializa todos os models
models.forEach((model) => model.init(connection));

models.forEach((model) => {
  if (typeof model.associate === 'function') {
    model.associate(connection.models);
  }
});


export default connection
