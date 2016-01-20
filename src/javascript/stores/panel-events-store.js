const Bacon = require('baconjs')
const R = require('ramda')
const PanelActions = require('../actions/panel-actions');

const getX = ( state ) => state.mouse.x - state.panelRect.left;
const getY = ( state ) => state.mouse.y - state.panelRect.top;
const toPanelClickPosition = ( state ) => R.merge( state, { lastMouseClick: { x: getX( state ), y: getY( state ) } } )

const gamePanelClick = PanelActions.actions.GamePanel;
const panelClickPosition = gamePanelClick.map( toPanelClickPosition );

module.exports = {
	clickPosition: panelClickPosition
}