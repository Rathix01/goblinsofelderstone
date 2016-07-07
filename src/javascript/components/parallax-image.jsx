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
      <div className='parallax-container'>
        <AnimationContainer id='ParallaxImageAnimation' className='parallax-image'>
        </AnimationContainer>
      </div>
    )
  }
})