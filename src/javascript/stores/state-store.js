var Bacon = require('baconjs');
var R = require('ramda');

var incomingState = new Bacon.Bus();
var applicationInitState = { };

var createHandler = R.curry( function( dataStreams, key ) {
	dataStreams[key].onValue( publish( key ) );
} );

function setAutoForwarding( dataStreams ) {
	R.forEach( createHandler( dataStreams ), R.keys( dataStreams ) )
}

var publish = R.curry( function( key, state ) {
	var stateObj = {};
	stateObj[ key ] = state;
	incomingState.push( stateObj );
} )


function setState( existing, newState ) {
	return R.merge( existing, newState );
}

function init() {
	publish( applicationInitState );
}

var currentState = incomingState.scan( applicationInitState, setState );
currentState.onValue( function(val) {
  window.currentState = val;
} );

var publicFunctions =  {
	publish: publish,
	currentState: currentState,
};


module.exports = publicFunctions;

init(); //effectively starts the application.