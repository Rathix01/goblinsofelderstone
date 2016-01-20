/**
 * @jsx React.DOM
 */
var React                 = require('react')
var ComponentBase         = require('../../mixins/component-base');
var AnimationContainer    = require('../animation-container')

var GamePanel = React.createClass({
  
  mixins: [ ComponentBase ],

  getInitialState: function() {
    return {};
  },

  getPanelRect: function() {
    return this.getDOMNode().getBoundingClientRect()
  },

  handleClick: function( e ) {
    this.setState( { mouse: { x: e.clientX, y: e.clientY }, panelRect: this.getPanelRect() }, this.publishState )
  },

  render: function() {
    return (
      <div className='game-panel' onClick={ this.handleClick }>
        <AnimationContainer id='GamePanelAnimation'>
          { this.props.children }
        </AnimationContainer>
      </div>
    )
  }
})

module.exports = GamePanel