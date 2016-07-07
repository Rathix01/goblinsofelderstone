/**
 * @jsx React.DOM
 */
const React = require( 'react')
const ComponentBase = require( '../mixins/component-base' );
const AnimationContainer = require('./animation-container')

module.exports = React.createClass({
  
  mixins: [ ComponentBase ],

  getInitialState() {
    return {};
  },

  render() {
    return (
      <div className='building-images'>
        <img src='images/building-voodoo-hut.jpg' />
        <img src='images/building-temple.jpg' />
        <img src='images/building-brewery.jpg' />
      </div>
    )
  }
})