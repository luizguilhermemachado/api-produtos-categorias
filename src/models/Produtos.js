import Sequelize, { Model } from 'sequelize';


export default class Produto extends Model {
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
        preco: {
          type: Sequelize.FLOAT,
          defaultValue: '',
          validate: {
            min: {
              args: [0.01], // maior que 0
              msg: 'O preço deve ser maior que zero',
            },
          },
        },
        categoria_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'produtos',
      }
    );

    return this;
  }
  static associate(models){
    this.belongsTo(models.Categoria, {foreignKey: 'categoria_id'})
  }
}
