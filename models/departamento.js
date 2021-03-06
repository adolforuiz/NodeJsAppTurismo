/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('departamento', {
    idDepartamento: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'departamento'
  });
};
