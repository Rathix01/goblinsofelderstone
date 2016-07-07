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
      <div className='logo-area'>
        <AnimationContainer id="LogoAnimation" className='logo'></AnimationContainer>
        <AnimationContainer id="ComingSoonAnimation" className='coming-soon'></AnimationContainer>
      </div>
    )
  }
})