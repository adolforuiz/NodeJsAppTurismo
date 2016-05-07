/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hotel', {
    idHotel: {
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
    },
    precio: {
      type: DataTypes.STRING,
      allowNull: false
    },
    idMunicipio: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'municipio',
        key: 'idMunicipio'
      }
    }
  }, {
    tableName: 'hotel'
  });
};
