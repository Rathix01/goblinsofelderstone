var Bacon = require('baconjs');
var ActionManager = require( './action-manager' );

var actions = {
  GoEVideo: new Bacon.Bus()
}


ActionManager.register( actions );

module.exports = {
  actions: actions
};