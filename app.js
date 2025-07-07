import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

import './src/database/index.js';

import homeRoutes from './src/routes/homeRoutes.js';
import userRoutes from './src/routes/userRoutes.js';
import tokenRoutes from './src/routes/tokenRoutes.js';
import categoriaRoutes from './src/routes/categoriasRoutes.js'

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/user/', userRoutes)
    this.app.use('/token/', tokenRoutes)
    this.app.use('/categorias/', categoriaRoutes)
  }
}

export default new App().app;
