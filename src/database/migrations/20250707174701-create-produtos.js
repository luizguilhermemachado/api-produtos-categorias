'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('produtos', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    descricao: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    preco: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    categoria_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'categorias',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  });
}

export async function down(queryInterface) {
  await queryInterface.dropTable('produtos');
}
