'use strict';

const app = require('../app.js');

const success = (data) => {
  app.game = data.game;
  console.log('success');
};

const updateSuccess = (data) => {
  app.game = data.game;
  console.log(data);
};


const fail = (error) => {
  console.error(error);
};

const getGamesuccess = (data) => {
  app.game = data.game;
  console.log(data);
  $('.numGames_display').text(data.games.length + ' games played Bro');
  console.log("get game success is ", data);
};

const createGameSuccess = (data) => {
  app.game = data.game;
  console.log("create game data is ", data);
  console.log("create game app.game is ", app.game);
  $('#game_board').show();
};


module.exports = {
  success,
  createGameSuccess,
  updateSuccess,
  fail,
  getGamesuccess,
};
