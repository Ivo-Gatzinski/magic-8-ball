const User = require('./User');
const History = require('./History');
// Define sequelize associations in this file.
User.hasMany(History, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
  });
  
History.belongsTo(User, {
    foreignKey: "user_id",
  });
module.exports = { User ,History};
