var Bacon = require('baconjs');
var ActionManager = require( './action-manager' );

var models = {
	Actor: new Bacon.Bus()
}

var actions = {

}

ActionManager.register( models );
ActionManager.register( actions );

module.exports = {
	models: models,
	actions: actions
}