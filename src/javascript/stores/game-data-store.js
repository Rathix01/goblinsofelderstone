// dependencies
const Firebase = require("firebase");
const Bacon = require("baconjs")
const ServerData = new Firebase('https://tcoenradi.firebaseio.com/');
const gameData = new Bacon.Bus();

// functions
const getValue = ( data ) => data.val();
const pushToGameData = ( data ) => { gameData.push( getValue( data ) ) };

// server stream
ServerData.on( "value", pushToGameData );

// useful functions during early development

// Reset
// ServerData.set([])

// ServerData.set({ panels: [{ name: "Panel 1", id: 1, actors: [ 1 ] }, 
// 							{ name: "Panel 2", id: 2, actors: [ 1, 2 ] }, 
// 							{ name: "Panel 3", id: 3, actors: [ 1, 2, 3 ] }], 

// 							actors: [{ name: "The Hero", 	 id: 1, position: { x: 100, y: 400 } }, 
// 									 { name: "The Sidekick", id: 2, position: { x: 200, y: 500 } },
// 									 { name: "The Lady", 	 id: 3, position: { x: 300, y: 600 } }],
// 				})

//gameData.log("Game data");

// exports
module.exports = {
	gameData: gameData
}