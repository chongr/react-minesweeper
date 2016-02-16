var React = require('react');
var ReactDOM = require('react-dom');
var Minesweeper = require('../gameLogic/components');
var ReactTile = require('./tile');

var ReactBoard = React.createClass(
  {
    render: function () {
      var that = this;
      return (
      <div>
        {
          this.props.gameBoard.grid.map(function(el, idxRow) {
            return (<div key={idxRow}>
              {
                el.map(function (tile, idxCol){
                  return (<ReactTile key={idxCol} row={idxRow}
                          gameBoard={that.props.gameBoard}></ReactTile>);
                })
              }
            </div>);
          })
        }
      </div>
    );
    }
  }
);


module.exports = ReactBoard;
