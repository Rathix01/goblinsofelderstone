/**
 * @jsx React.DOM
 */
var React = require( 'react')
var ComponentBase = require( '../../mixins/component-base' );
var UI = React.createClass({
  
  mixins: [ ComponentBase ],

  getInitialState: function() {
    return {};
  },

  render: function() {
    return (
      <div className='text-line'>
        { this.state.text || this.props.children }
      </div>
    )
  }
})


module.exports = UI