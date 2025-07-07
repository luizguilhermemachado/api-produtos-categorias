'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('categorias', {
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
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    }
  });
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('categorias');
}
