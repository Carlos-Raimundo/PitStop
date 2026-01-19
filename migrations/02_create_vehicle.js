"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Vehicles", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      marca: {
        type: Sequelize.STRING,
        allowNull: false
      },
      modelo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ano: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      vin: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      clienteId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Clientes",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        allowNull: true
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
    await queryInterface.dropTable("Vehicles");
  }
};
