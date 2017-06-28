/**
 * Created by dhkim on 2017-05-12.
 */
const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db.sqlite',
  logging: false
}) ;

const User = sequelize.define('User', {
  name: {
    type:Sequelize.STRING, // create varchar 255
    unique: true
  }
});

module.exports = {Sequelize, sequelize, User}