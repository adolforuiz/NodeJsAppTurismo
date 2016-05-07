var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
var env       = process.env.NODE_ENV || "development";
var config    = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
var sequelize = new Sequelize(config.database, config.username, config.password, config);
var turismo        = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    turismo[model.name] = model;
  });

Object.keys(turismo).forEach(function(modelName) {
  if ("associate" in turismo[modelName]) {
    turismo[modelName].associate(turismo);
  }
});

turismo.sequelize = sequelize;
turismo.Sequelize = Sequelize;

module.exports = turismo;