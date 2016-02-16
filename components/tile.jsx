var React = require('react');
var ReactDOM = require('react-dom');
var Minesweeper = require('../gameLogic/components');

var ReactTile = React.createClass(
  {
    render: function () {
      var row = this.props.row;
      var col = this.props.key;
      var currTile = this.props.gameBoard[row][col];
      if (currTile.explored && !currTile.bombed) {
        return <div>{currTile.adjacentBombCount()}</div>;
      } else if (currTile.flagged) {
        return <div>F</div>;
      } else {
        return <div class="blank"></div>;
      }
    }
  }
);

module.exports = ReactTile;
