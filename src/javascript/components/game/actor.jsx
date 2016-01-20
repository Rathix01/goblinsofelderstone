/**
 * @jsx React.DOM
 */
var React = require('react')
var R = require('ramda')
var ComponentBase = require('../../mixins/component-base');
var AnimationContainer = require('../animation-container');
var ActionManager = require('../../actions/action-manager');

var Actor = React.createClass({
  
  mixins: [ ComponentBase ],

  getInitialState: function() {
    return { position: { x: 0, y: 0 }, selected: false };
  },

  select: function( e ) {
    ActionManager.actionBus.push( R.merge( this.state, { actionKey: "Actor", selected: true  }));
    e.stopPropagation();
  },

  isSelected: function() {
    return this.state.selected ? "selected" : "";
  },

  render: function() {
    // TODO - Move the body parts into a "skeleton component"
    // This allows us to add life bars, icons, and so on at this level.
    return (
      <div className={ 'actor ' + this.isSelected() } onClick={ this.select }>
        <AnimationContainer id={ this.props.id + "Animation" }>
          <div className='shadow'></div>
          <div className='head'>
            <div className='face'></div>
          </div>
          <div className='body'></div>
          <div className='shoulder left-shoulder'>
            <div className='elbow left-elbow'>
              <div className='item'></div>
            </div>      
          </div>
          <div className='shoulder right-shoulder'>
            <div className='elbow right-elbow'>
              <div className='item sword'></div>
            </div>
          </div>    
          <div className='hip left-hip'>
            <div className='knee left-knee'></div>
          </div>    
          <div className='hip right-hip'>
            <div className='knee right-knee'></div>
          </div>
        </AnimationContainer>
      </div>
    )
  }
})

module.exports = Actor