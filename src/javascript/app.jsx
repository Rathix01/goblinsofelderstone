/**
 * @jsx React.DOM
 */


var React        			= require('react');
var StateStore   			= require('./stores/state-store');
var MainStore 			= require('./stores/main-store');
var Main 				= require('./components/main');

// bridge between greensock and react.
require('./lib/gsap-react-plugin')

function redraw( state ) {

  React.render(
    <Main></Main>,
    document.getElementById('game')
  )
}

StateStore.currentState.onValue( function( nextState ) {
  redraw(nextState)
} );
