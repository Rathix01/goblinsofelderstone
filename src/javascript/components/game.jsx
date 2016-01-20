/**
 * @jsx React.DOM
 */
var React                 = require( 'react')
var ComponentBase         = require( '../mixins/component-base' );
var GamePanel = require('./game/game-panel');
var Actors = require('./game/actors');

var GameView = React.createClass({
  
  mixins: [ ComponentBase ],

  getInitialState: function() {
    return {};
  },

  render: function() {
    return (
      <div className='main-game-view'>
        <GamePanel id='GamePanel'>
          <Actors id='ActiveActors'></Actors>
        </GamePanel>
      </div>
    )
  }
})


module.exports = GameView