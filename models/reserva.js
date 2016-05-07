/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reserva', {
    idReserva: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fecha: {
      type: DataTypes.STRING,
      allowNull: false
    },
    idUsuario: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'idUsuario'
      }
    },
    idHotel: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'hotel',
        key: 'idHotel'
      }
    }
  }, {
    tableName: 'reserva'
  });
};
