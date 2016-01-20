const Bacon = require('baconjs')
const R = require('ramda')
const ActorActions = require('../actions/actor-actions');
const StateStore = require('./state-store')

const selectActor = ( actor ) => StateStore.publish( "Actor" + actor.id, actor );
const concatSelection = ( ex, next ) => ex.concat( next );
const toPrevSelection = ( actors ) => actors.length > 1 ? actors[ actors.length - 2 ] : new Bacon.Error("No actor to deselect.");
const deselectActor = ( actor ) => StateStore.publish( "Actor" + actor.id, R.merge( actor, { selected: false } ) )

const selectedActor = ActorActions.models.Actor
const selections = selectedActor.scan( [], concatSelection );

selections.flatMap( toPrevSelection ).skipErrors().onValue( deselectActor );
selectedActor.debounce(50).onValue( selectActor )

module.exports = {
	selectedActor: selectedActor
}