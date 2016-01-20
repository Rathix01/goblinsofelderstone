/**
 * @jsx React.DOM
 */
var React = require( 'react')
var ComponentBase = require( '../mixins/component-base' );
var ButtonStrip = require('./ui/button-strip');
var TextFeedback = require('./ui/text-feedback');

var UI = React.createClass({
  
  mixins: [ ComponentBase ],

  getInitialState: function() {
    return {};
  },

  render: function() {
    return (
      <div className='ui'>
        <ButtonStrip id='MainButtonStrip'></ButtonStrip>
        <TextFeedback id='MainTextFeedback'></TextFeedback>
      </div>
    )
  }
})


module.exports = UI