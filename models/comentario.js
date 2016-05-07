/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comentario', {
    idComentario: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    comentario: {
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
    }
  }, {
    tableName: 'comentario'
  });
};
