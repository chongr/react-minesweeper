var React = require('react');
var ReactDOM = require('react-dom');
var Game = require("./game");

var ReactMinesweeper = React.createClass(
  {
    render: function () {
      return (
      <div>
        <Game></Game>
      </div>
    );
    }
  }
);




document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<ReactMinesweeper/>, document.getElementById('main'));
});
