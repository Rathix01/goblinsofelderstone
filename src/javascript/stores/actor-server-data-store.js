// dependencies
const Bacon = require('baconjs');
const R = require('ramda')
const GameDataStore = require('./game-data-store');
const PanelDataStore = require('./panel-data-store')
const PanelTimelineStore = require('./panel-timeline-store')
const StateStore = require('./state-store')

// functions
const toPanelActors = R.curry( ( template, actor ) => R.contains( actor.id, template.currentPanel.actors ) )
const toCurrentActors = ( template ) => ({ actors: R.filter( toPanelActors( template ), template.actors ) });
const toTemplate = ( actors, currentPanel ) => ({ actors: actors, currentPanel: currentPanel });
const publishActorState = ( actor ) => StateStore.publish( "Actor" + actor.id, actor );
const publishActorAnimationState = ( actor ) => StateStore.publish( "Actor" + actor.id + "Animation", actor.position )

// streams
const loadedActors = GameDataStore.gameData.map( R.prop("actors") );
const currentPanel = PanelDataStore.currentPanel;

const serverActorTemplate = Bacon.when([
	loadedActors.toProperty(), 
	currentPanel.toProperty(), 
	PanelTimelineStore.exitAnimationComplete ], toTemplate);

const activeActors = serverActorTemplate.map( toCurrentActors )
const eachActor = activeActors.map(R.prop("actors")).flatMap(Bacon.fromArray)

// state assignment.
eachActor.onValue( publishActorState )
eachActor.onValue( publishActorAnimationState )
activeActors.onValue(StateStore.publish("ActiveActors"));

// exports
module.exports = {
	actors: activeActors
}