"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    static associate(models) {
      Cliente.hasMany(models.Vehicle, {
        foreignKey: "clienteId",
        as: "vehicles"
      });
    }

    async validPassword(password) {
      return bcrypt.compare(password, this.password);
    }
  }

  Cliente.init(
    {
      nome: DataTypes.STRING,
      telefone: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      password: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Cliente",
      tableName: "Clientes",
      hooks: {
        beforeCreate: async (cliente) => {
          if (cliente.password) {
            cliente.password = await bcrypt.hash(cliente.password, 10);
          }
        }
      }
    }
  );

  return Cliente;
};
