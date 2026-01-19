"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Vehicle extends Model {
    static associate(models) {
      Vehicle.belongsTo(models.Cliente, {
        foreignKey: "clienteId",
        as: "cliente"
      });

      Vehicle.hasMany(models.Diagnostic, {
        foreignKey: "vehicleId",
        as: "diagnostics"
      });
    }
  }

  Vehicle.init(
    {
      marca: DataTypes.STRING,
      modelo: DataTypes.STRING,
      ano: DataTypes.INTEGER,
      vin: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Vehicle",
      tableName: "Vehicles"
    }
  );

  return Vehicle;
};
