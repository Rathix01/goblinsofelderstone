/**
 * @jsx React.DOM
 */
var React = require( 'react')
var ComponentBase = require( '../mixins/component-base' );
var UI  = require('./ui');
var Game = require('./game')

var Main = React.createClass({
  
  mixins: [ ComponentBase ],

  getInitialState: function() {
    return { step : 0 };
  },

  render: function() {
    return (
      <main className='main-game-window'>
        <UI id='MainUI'></UI>
        <Game id='MainGameView'></Game>
      </main>
    )
  }
})


module.exports = Main