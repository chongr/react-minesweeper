var React = require('react');
var ReactDOM = require('react-dom');
var ReactBoard = require('./board');
var Minesweeper = require('../gameLogic/components');

var Game = React.createClass(
  {
    getInitialState: function () {
      return {board: new Minesweeper.Board(9, 9)};
    },

    updateGame: function () {

    },

    render: function () {
      return (
        <ReactBoard gameBoard={this.state.board} updateGameFunc={this.updateGame}>
        </ReactBoard>
      );
    }

  }
);

module.exports = Game;
