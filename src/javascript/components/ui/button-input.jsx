/**
 * @jsx React.DOM
 */

var React = require('react');
var ComponentBase = require('../../mixins/component-base');
var R = require('ramda');

var ButtonInput = React.createClass({

	mixins: [ ComponentBase ],

  getDefaultProps: function() {
    return {}
  },

	getInitialState: function() {
	    return { clicks: 0 }
	},

 	handleClick: function( e ) {
 		this.setState( { clicks: ( this.state.clicks + 1 ) }, this.publishState );
 	},

 	getButtonClassName: function() {
 		return this.props.className === undefined ? "" : this.props.className
 	},

 	render: function() {
 		return <button className={ this.getButtonClassName() + " btn" } onClick={ this.handleClick }>{ this.props.children }</button>
 	}
});

 module.exports = ButtonInput;