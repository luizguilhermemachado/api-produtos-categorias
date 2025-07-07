import Sequelize, { Model } from 'sequelize';


export default class Categoria extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Campo nome precisa ter entre 3 e 255 caracteres',
            },
          },
        },
        descricao: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
           len: {
            args: [3, 255],
            msg: 'Campo descrição precisa ter entre 3 e 255 caracteres'
           }
          },
        },
      },
      {
        sequelize,
        tableName: 'categorias',
      }
    );

    return this;
  }
}
