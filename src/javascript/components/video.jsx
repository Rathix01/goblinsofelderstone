/**
 * @jsx React.DOM
 */

const React = require('react');
const ComponentBase = require('../mixins/component-base');
const ActionManager = require('../actions/action-manager');

module.exports = React.createClass({

  mixins: [ ComponentBase ],

    getInitialState() {
      return { showVideo: false };
  },

  getImageSource() {
    return this.state.imgSrc ? this.state.imgSrc : this.props.imgSrc;
  },

  getVideoFrame() {
    return this.state.showVideo === true 
        ? <iframe width="580" height="326" src={ this.props.videoSrc } frameborder="0" allowfullscreen className='video-iframe'></iframe>
        : <div className='video-play-button'></div>;
  },

  showVideo() {
    this.setState({ showVideo: true }, this.publishState)
  },

  displayImage() {
    return this.state.showVideo === true ? { 'display': 'none' } : { 'display': 'block' }
  },

  render() {
    return (
        <div className='video' onClick={ this.showVideo }>
          <img src={ this.getImageSource() } style={ this.displayImage() } />
          { this.getVideoFrame() }
        </div>
      );
  }
});