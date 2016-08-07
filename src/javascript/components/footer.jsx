/**
 * @jsx React.DOM
 */
const React = require( 'react')
const ComponentBase = require( '../mixins/component-base' );
const AnimationContainer = require('./animation-container');
const SocialMediaIcons = require('./social-media-icons');

module.exports = React.createClass({
  
  mixins: [ ComponentBase ],

  getInitialState() {
    return {};
  },

  getCurrentYear() {
    return new Date().getFullYear();
  },

  render() {
    return (
      <div className='footer'>
        <a href="http://www.lostgoblin.com"><img src='images/LG_Logo.png' className='lost-goblin-logo' /></a>
        <SocialMediaIcons id='SocialMediaIcons' />
        <div className='disclaimer'>
          { String.fromCharCode(169) } { this.getCurrentYear() } Goblins of Elderstone | All Rights Reserved
        </div>
      </div>
    )
  }
})