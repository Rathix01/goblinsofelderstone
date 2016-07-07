const Bacon = require('baconjs');
const R = require('ramda');
const StateStore =  require('./state-store');
const Q = require('q');

const update = ( self ) => StateStore.publish( self.target.id, self.target );
const tweenTo = ( tween, tweenTarget ) => R.merge( tween.to, { onUpdate: update, onUpdateParams: [ "{self}" ] } );
const getTweenTarget = ( tweenProps ) => R.clone( tweenProps );

const addTween = ( timeline, tween ) => {
	
	switch( tween.fn ) {
		case "fromTo": 
			var target = getTweenTarget( R.merge( tween.from, { id: tween.target } ) );
			timeline.fromTo( target, tween.time, tween.from, tweenTo( tween, target ), tween.label )

		case "staggerFromTo":
			var targets = tween.target.split(" ").map( ( t ) => getTweenTarget( R.merge( tween.from, { id: t } ) ) )
			timeline.staggerFromTo( targets, tween.time, tween.from, tweenTo( tween, targets ), tween.stagger, tween.label )
	}
}

const toTimeline = ( tweenData ) => {
	var d = Q.defer();
	var tl = new TimelineMax({ paused: true, onComplete: ( args ) => d.resolve() })
	tweenData.tweenProps.forEach( addTween.bind( this, tl ) );
	tl.play();
	return Bacon.fromPromise( d.promise );
}

module.exports = {
	toTimeline: toTimeline
}