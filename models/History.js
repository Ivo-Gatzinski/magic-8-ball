const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our User model
class History extends Model {}

History.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answer: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "user",
          key: "id",
        },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "history",
  }
);

module.exports = History;