var React = require('react');
var R = require('ramda');

// generic
var ComponentBase = require('../mixins/component-base');

var AnimationContainer = React.createClass({

  mixins: [ ComponentBase ],

  getDefaultProps: function() {
      return {
          animationOn: true
      }
  },

  getPropStyles: function() {
    return this.props.style !== undefined ? this.props.style : {};
  },

  getStyles: function() {
    return R.merge( this.getPropStyles(), this.getAnimationCSS() )
  },

  getInitialState: function() {
      var initialOpacity = this.props.animationOn ? 0 : 1;
      return { x: 0, y: 0, opacity: initialOpacity, scale: 1, borderRadius: 0, rotateX: 0, rotateY: 0, rotateZ: 0 };
  },

  getAnimationCSS: function() {
    return { "transform": "translate3d(  " + this.state.x + "px," + this.state.y + "px, 0px) scale(" + this.state.scale + ") rotateX(" + this.state.rotateX + "deg) rotateZ(" + this.state.rotateZ + "deg) rotateY(" + this.state.rotateY + "deg)", 
             "-webkit-transform": "translate3d(  " + this.state.x + "px," + this.state.y + "px, 0px) scale(" + this.state.scale + ") rotateX(" + this.state.rotateX + "deg) rotateZ(" + this.state.rotateZ + "deg) rotateY(" + this.state.rotateY + "deg)",
             opacity: this.state.opacity }
  },

  render: function() {
    return ( <div className={ this.props.className + " animation-container" } style={ this.getStyles() }>
          { this.props.children }
        </div>  )
  }
});

module.exports = AnimationContainer;
