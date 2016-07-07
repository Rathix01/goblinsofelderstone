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
      <div className='social-media-icons'>
        <a className='icon icon-facebook' href='https://www.facebook.com/lostgoblin' target='_blank'>
          <i className='fa fa-facebook'></i>
        </a>
        <a className='icon icon-facebook' href='https://twitter.com/lostgoblin' target='_blank'>
          <i className='fa fa-twitter'></i>
        </a>
        <a className='icon icon-facebook' href='https://www.youtube.com/channel/UC7ZqW4h80IIZmD9lucm2iow' target='_blank'>
          <i className='fa fa-youtube-play'></i>
        </a>
      </div>
    )
  }
})