var Bacon = require('baconjs');
var R = require('ramda');
var StateStore =  require('./state-store');
var Q = require('q');

var update = ( self ) => { 
	StateStore.publish( self.target.id, self.target )
}

function tweenTo( tween, tweenTarget ) {
	return R.merge( tween.to, { onUpdate: update, onUpdateParams: [ "{self}" ] } );
}

function getTweenTarget( tweenProps ) {
	return R.clone( tweenProps );
}

function addTween( timeline, tween ) {
	
	switch( tween.fn ) {
		case "fromTo": 
			var target = getTweenTarget( R.merge( tween.from, { id: tween.target } ) );
			timeline.fromTo( target, tween.time, tween.from, tweenTo( tween, target ), tween.label )

		case "staggerFromTo":
			var targets = tween.target.split(" ").map( ( t ) => getTweenTarget( R.merge( tween.from, { id: t } ) ) )
			timeline.staggerFromTo( targets, tween.time, tween.from, tweenTo( tween, targets ), tween.stagger, tween.label )
	}
}

function toTimeline( tweenData ) {
	var d = Q.defer();
	var tl = new TimelineMax({ paused: true, onComplete: ( args ) => d.resolve() })
	tweenData.tweenProps.forEach( addTween.bind( this, tl ) );
	tl.play();
	return Bacon.fromPromise( d.promise );
}

const getExitTweens = ( template ) => R.filter( ( tween ) => tween.step === template.navState.prev && tween.type === "exit",  template.tweenData );
const getEntryTweens = ( template ) => R.filter( ( tween ) => tween.step === template.navState.step && tween.type === "entry", template.tweenData );
const getAnimations = ( template ) =>  ({ tweenProps: getExitTweens( template ).concat( getEntryTweens( template ) ) })

module.exports = {
	toTimeline: toTimeline,
	getAnimations: getAnimations
}