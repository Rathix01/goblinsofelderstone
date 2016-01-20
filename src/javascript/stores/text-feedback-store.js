// dependencies
const Bacon = require('baconjs');
const StateStore = require('./state-store')
const R = require('ramda')
const UIStore = require('./ui-store');
const GameDataStatus = require('./game-data-status-store');
const PanelDataStore = require('./panel-data-store')


// functions
const concatToFeedback = ( ex, next ) => ({ feedback: ex.feedback.concat( { value: next.value } ) });
const addNewFeedback = ( ex, next ) => R.merge( ex, concatToFeedback( ex, next ) )

//streams
const incomingFeedback = UIStore.startMessage.merge( GameDataStatus.success )
								 	  		 .merge( GameDataStatus.failure )
								 	  		 .merge( PanelDataStore.panelLoadedMessage )

const allFeedback = incomingFeedback.scan( { feedback:[] }, addNewFeedback ).changes();

// state assignments
allFeedback.onValue( StateStore.publish("MainTextFeedback") );

// exports
module.exports = {
	feedback: allFeedback
}