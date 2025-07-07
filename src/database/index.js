import Sequelize from 'sequelize';
import databaseConfig from '../config/database.js';

import User from '../models/User.js'; // seu model
import Categoria from '../models/Categorias.js';

const models = [User, Categoria]; // adicionar mais aqui depois

const connection = new Sequelize(databaseConfig);

// Inicializa todos os models
models.forEach((model) => model.init(connection));

// Se usar associações depois:
// models.forEach((model) => {
//   if (model.associate) model.associate(connection.models);
// });

export default connection
