const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('dino', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    altura: {
      type: DataTypes.STRING,
      allowNull: false
    },
    largo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    peso: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dieta: {
        type: DataTypes.STRING,
        allowNull: false
    },
    patas: {
        type: DataTypes.STRING,
        allowNull: false
    },
    peligro:{
        type: DataTypes.STRING,
        allowNull: false
    },
    imagen:{
      type: DataTypes.TEXT,
    }
  });
};
