/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rol', {
    idRol: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nombreRol: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'rol'
  });
};
