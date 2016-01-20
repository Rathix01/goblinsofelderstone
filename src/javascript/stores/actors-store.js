const Bacon = require('baconjs')
const R = require('ramda');
const ActorEventsStore = require('./actor-events-store');
const ActorServerDataStore = require('./actor-server-data-store')
const PanelEventsStore = require('./panel-events-store');
const PanelDataStore = require('./panel-data-store');

//functions

const toUpdatedActor = ( selected, clickPosition ) => R.merge( selected, clickPosition )

const updateSelected = R.curry( ( template, actor ) => actor.id === template.selected.id ? template.selected : actor  )
const getActors = ( ex, template ) => template.currentPanel.id === ex.panelId ? template.actors : ex;
const toUpdatedActors = ( ex, template ) => ({ panelId: template.currentPanel.id, actors: R.map( updateSelected( template ), getActors( ex, template ) ) })

// streams
const updatedActor = Bacon.when([
	ActorEventsStore.selectedActor.toProperty(), 
	PanelEventsStore.clickPosition
], toUpdatedActor )

const selected = ActorEventsStore.selectedActor.merge( updatedActor );

const actorsTemplate = Bacon.combineTemplate({
	selected: selected,
	actors: ActorServerDataStore.actors.map(R.prop("actors")),
	currentPanel: PanelDataStore.currentPanel
})

const actors = actorsTemplate.scan( [], toUpdatedActors );

module.exports = {
	actor: selected,
	actors: actors
}