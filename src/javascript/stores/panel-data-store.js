 // dependencies
const Bacon = require('baconjs');
const R = require('ramda')
const GameDataStore = require('./game-data-store');
const GameDataStatusStore = require('./game-data-status-store');
const UIStore = require('./ui-store');
const UIActions = require('../actions/ui-actions');
const StateStore = require('./state-store');

// functions
const toPanelById = R.curry( ( id, panel ) => id === panel.id );
const toCurrentPanel = ( template ) => R.filter( toPanelById( template.nextPanel.id ), template.gameData.panels ).shift()
const toPanelLoadedMessage = ( panel ) => ({ value: "Loaded: " + panel.name, type: "standard" })
const getNextPanel = ( ex, next ) => next.update.setTo !== undefined 
										? { id: next.update.setTo }
										: { id: ex.id + next.update.updateBy }

const mergePrevious = ( ex, next ) => R.merge( next, { prev: ex.id } )
const toNextPanel = ( ex, next ) => {
	var nextPanel = getNextPanel( ex, next );
	return ( nextPanel.id > 0 && nextPanel.id <= next.gameData.panels.length ) 
		? mergePrevious( ex, nextPanel ) 
		: mergePrevious( ex, ex );
}

const toValidNextPanel = ( next ) => next.id !== next.prev ? next : new Bacon.Error("Update is invalid, new value is outside the range.");

// streams
window.forcePanelUpdate = new Bacon.Bus(); // from console: forcePanelUpdate.push({ setTo: 1 })
const initPanel = Bacon.once( { setTo: 1 } )
const nextUpdate = UIActions.actions.Next.map( { updateBy: 1 } )
const prevUpdate = UIActions.actions.Prev.map( { updateBy: -1 } )
const panelUpdates = initPanel.merge(nextUpdate).merge(prevUpdate).merge(forcePanelUpdate)

const validPanelUpdates = Bacon.combineTemplate({
	update: panelUpdates,
	gameData: GameDataStore.gameData,
	start: UIStore.start
})

const nextPanel = validPanelUpdates.scan( { id: 0 }, toNextPanel ).changes();
const validNextPanel = nextPanel.flatMap( toValidNextPanel )

const panelTemplate = Bacon.combineTemplate({
	nextPanel: validNextPanel.skipErrors(),
	gameData: GameDataStore.gameData
})

const currentPanel = panelTemplate.map( toCurrentPanel )
const panelLoadedMessage = currentPanel.changes().map( toPanelLoadedMessage )

// developer feedback
validNextPanel.onError(e => console.log(e));

// exports
module.exports = {
	currentPanel: currentPanel,
	panelLoadedMessage: panelLoadedMessage
}