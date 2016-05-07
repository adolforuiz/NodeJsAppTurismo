/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hotellugar', {
    idHotelLugar: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    idHotel: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'hotel',
        key: 'idHotel'
      }
    },
    idLugar: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'lugar',
        key: 'idLugar'
      }
    }
  }, {
    tableName: 'hotellugar'
  });
};
