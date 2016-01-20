/**
 * @jsx React.DOM
 */
var React                 = require('react')
var ComponentBase         = require('../../mixins/component-base');
var AnimationContainer    = require('../animation-container')
var Actor = require('./actor')

var Actors = React.createClass({
  
  mixins: [ ComponentBase ],

  getInitialState: function() {
    return { actors: [] };
  },

  toActor: function( actor ) {
    return <Actor id={ "Actor" + actor.id }></Actor>
  },

  render: function() {
    //console.log( "actors.jsx", this.state, this.props.id )
    return (
      <div className='actors'>
        { this.state.actors.map( this.toActor ) }
      </div>
    )
  }
})

module.exports = Actors