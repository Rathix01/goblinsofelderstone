var Bacon = require( 'baconjs' );
var R = require('ramda');

var actionBus = new Bacon.Bus();
var actionHandlers = {};

var register = function( newHandlers ) {
  actionHandlers = R.merge( actionHandlers, newHandlers );
}

var publish = function ( actionValues ) {
  if( actionHandlers[ actionValues.actionKey ] == undefined)
    throw 'ActionManager cannot publish action: "' + actionValues.actionKey + '" - no handler registered for this actionKey.';

  actionHandlers[ actionValues.actionKey ].push( actionValues );
}

actionBus.onValue( publish );

module.exports = {
  actions: actionHandlers,
  actionBus: actionBus,
  register: register,
};