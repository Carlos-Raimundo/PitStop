"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class OBDCode extends Model {
    static associate(models) {
      OBDCode.hasMany(models.Diagnostic, {
        foreignKey: "codeId",
        as: "diagnostics"
      });
    }
  }

  OBDCode.init(
    {
      codigo: DataTypes.STRING,
      descricao: DataTypes.TEXT,
      severidade: DataTypes.ENUM("baixa", "media", "alta"),
      solucao: DataTypes.TEXT
    },
    {
      sequelize,
      modelName: "OBDCode",
      tableName: "OBDCodes"
    }
  );

  return OBDCode;
};
