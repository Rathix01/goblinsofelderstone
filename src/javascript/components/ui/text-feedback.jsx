/**
 * @jsx React.DOM
 */
var React = require( 'react')
var ComponentBase = require( '../../mixins/component-base' );
var TextLine = require('./text-line');

var TextFeedback = React.createClass({
  
  mixins: [ ComponentBase ],

  getInitialState: function() {
    return { feedback: [] };
  },

  componentDidUpdate: function() {
    this.refs.scrollArea.getDOMNode().scrollTop = 100000;
  },

  toFeedbackRow: function( feedback, i ) {
    return <TextLine key={ i }>{ feedback }</TextLine>
  },

  render: function() {
    return (
      <div className='text-feedback'>
        <div className='scrolling-area' ref='scrollArea'>
          { this.state.feedback.map( this.toFeedbackRow ) }
        </div>
      </div>
    )
  }
})


module.exports = TextFeedback