/**
 * @jsx React.DOM
 */
var React = require( 'react')
var ComponentBase = require( '../../mixins/component-base' );
var ButtonInput = require('./button-input');

var UI = React.createClass({
  
  mixins: [ ComponentBase ],

  getInitialState: function() {
    return {};
  },

  render: function() {
    return (
      <div className='button-strip'>
        <div className='buttons'>
          <ButtonInput id='Start'>Start</ButtonInput>
          <ButtonInput id='Next'>Next</ButtonInput>
          <ButtonInput id='Prev'>Prev</ButtonInput>
        </div>
      </div>
    )
  }
})


module.exports = UI