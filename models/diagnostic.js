"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Diagnostic extends Model {
    static associate(models) {
      Diagnostic.belongsTo(models.Vehicle, {
        foreignKey: "vehicleId",
        as: "vehicle"
      });

      Diagnostic.belongsTo(models.OBDCode, {
        foreignKey: "codeId",
        as: "code"
      });
    }
  }

  Diagnostic.init(
    {
      vehicleId: DataTypes.INTEGER,
      codeId: DataTypes.INTEGER,
      data: DataTypes.DATEONLY,
      status: DataTypes.ENUM("pendente", "resolvido"),
      observacoes: DataTypes.TEXT
    },
    {
      sequelize,
      modelName: "Diagnostic",
      tableName: "Diagnostics"
    }
  );

  return Diagnostic;
};
