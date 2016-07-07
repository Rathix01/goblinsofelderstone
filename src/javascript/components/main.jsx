/**
 * @jsx React.DOM
 */
const React = require( 'react');
const ComponentBase = require( '../mixins/component-base' );
const ParallaxImage = require('./parallax-image');
const Logo = require('./goblins-of-elderstone-logo');
const Video = require('./video');
const BuildingImages = require('./building-images');
const Footer = require('./footer')

module.exports = React.createClass({
  
  mixins: [ ComponentBase ],

  getInitialState() {
    return {};
  },

  render() {
    return (
      <main className='main-container'>
        <ParallaxImage id='ParallaxImage' />
        <Logo id='Logo' />
        <div className='non-parallax-content'>
          <Video id='GoEVideo' videoSrc='https://www.youtube.com/embed/4AIgYaqiXVU?autoplay=1' imgSrc='images/goblin-video-preview.jpg' />
          <BuildingImages id='BuildingImages' />
          <Footer id='Footer' />
        </div>
      </main>
    )
  }
})