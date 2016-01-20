const Bacon = require('baconjs')
const R = require('ramda');
const AnimationStore = require('./animation-store');
const ActorEventsStore = require('./actor-events-store');
const PanelEventsStore = require('./panel-events-store');
const StateStore = require('./state-store');

const toNextPosition = ( template ) => {
	return {
		time: 1,
		fn: "fromTo",
		label: "MoveActor", 
		target: "Actor" + template.actor.id + "Animation",
		from: { x: template.actor.position.x, y: template.actor.position.y },
		to: { x: template.nextPosition.lastMouseClick.x, y: template.nextPosition.lastMouseClick.y }
	}
}

const toSelectedNextPositionTemplate = ( actor, nextPosition ) => ({ actor: actor, nextPosition: nextPosition })
const toTweenProps = ( template ) => ({ tweenProps: [ toNextPosition( template ) ] });
const toTemplate = ( moveAnim, template ) => template;
const toActorWithNewPosition = ( template ) => R.merge( template.actor, { position: template.nextPosition.lastMouseClick } )
const publishToActorState = ( nextActorState ) => StateStore.publish( "Actor" + nextActorState.id, nextActorState );

const selectedNextPositionTemplate = Bacon.when([ ActorEventsStore.selectedActor.toProperty(), PanelEventsStore.clickPosition ], toSelectedNextPositionTemplate)

const moveAnimation = selectedNextPositionTemplate.map( toTweenProps );
const moveAnimationComplete = moveAnimation.flatMap( AnimationStore.toTimeline )

moveAnimationComplete.onValue(()=>({}))

const updateTemplate = Bacon.when([ moveAnimationComplete, selectedNextPositionTemplate.toProperty() ], toTemplate )


const nextActorState = updateTemplate.map( toActorWithNewPosition )
nextActorState.log('next actor state')

module.exports = {
	moveComplete: moveAnimationComplete,
	nextActorState: nextActorState
}