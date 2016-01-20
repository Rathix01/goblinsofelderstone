const Bacon = require('baconjs');
const R = require('ramda');
const AnimationStore = require('./animation-store');
const AnimationStateStore = require('./animation-state-store')
const PanelDataStore = require('./panel-data-store')
const StateStore = require('./state-store');

//functions
const toPanelStep = ( panel ) => ({ step: panel.id })
const includePrevProp = ( prev, next ) => R.merge( next, { prev: prev.step } )

const getExitTweens = ( template ) => R.filter( ( tween ) => tween.label === "PanelLeave",  template.tweenData );
const getExitAnimations = ( template ) =>  ({ tweenProps: getExitTweens( template ) })

const getEntryTweens = ( template ) => R.filter( ( tween ) => tween.label === "PanelArrive", template.tweenData );
const getEntryAnimations = ( template ) =>  ({ tweenProps: getEntryTweens( template ) })

//streams
const currentPanel = PanelDataStore.currentPanel.toEventStream();
const navState = currentPanel.debounceImmediate(400).map( toPanelStep ).scan( { step: 0 }, includePrevProp )

// animation steps.
const step = Bacon.combineTemplate( {
	tweenData: Bacon.once( AnimationStateStore ),
	navState: navState
} )

// exit animation.
const exitAnimationData = step.map( getExitAnimations )
const exitAnimationComplete = exitAnimationData.flatMap( AnimationStore.toTimeline )

// at the end of the exit animation change the panel.
const currentPanelUpdate = Bacon.when( [ PanelDataStore.currentPanel.toProperty(), exitAnimationComplete ], ( panelData ) => panelData  )
currentPanelUpdate.onValue( StateStore.publish("GamePanel") )

// entry animation
const entryAnimationTemplate = Bacon.when([
	step.map( getEntryAnimations ).toProperty(), exitAnimationComplete
], ( tweenData ) => tweenData )

// all animations complete.
const animationComplete = entryAnimationTemplate.flatMap( AnimationStore.toTimeline )
animationComplete.onValue(() => {})

module.exports = {
	exitAnimationComplete: exitAnimationComplete,
	animationComplete: animationComplete
}