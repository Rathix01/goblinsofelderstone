const UIActions = require('../actions/ui-actions');

//functions
const toStartClickMessage = ( state ) => ({ value: "Start Clicked" });

// streams
const start = UIActions.actions.Start
const startMessage = start.map( toStartClickMessage );

module.exports = {
	start: start,
	startMessage: startMessage
}