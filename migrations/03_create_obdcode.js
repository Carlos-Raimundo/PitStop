"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("OBDCodes", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      codigo: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      descricao: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      severidade: {
        type: Sequelize.ENUM("baixa", "media", "alta"),
        allowNull: false
      },
      solucao: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("OBDCodes");
  }
};
