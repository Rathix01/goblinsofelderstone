var Bacon = require('baconjs');
var ActionManager = require( './action-manager' );

var models = {

}

var actions = {
	Start: new Bacon.Bus(),
	Next: new Bacon.Bus(),
	Prev: new Bacon.Bus()
}

ActionManager.register( models );
ActionManager.register( actions );

module.exports = {
	models: models,
	actions: actions
}