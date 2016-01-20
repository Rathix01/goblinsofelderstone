// dependencies
const GameDataStore = require('./game-data-store')

//functions
const toGameDataReadyMessage = ( gameData ) => gameData !== null ? { value: "Game Data Ready", type: "standard" }
															  : new Bacon.Error("Game Data is null.");

const toGameFailMessage = ( error ) => ({ value: "Error: Game did not load", type: "error" })

//streams
const gameDataReady = GameDataStore.gameData.flatMap( toGameDataReadyMessage )

const gameDataSuccess = gameDataReady.skipErrors();
const gameDataFailure = gameDataReady.errors().mapError( toGameFailMessage );

//exports
module.exports = {
	success: gameDataSuccess,
	failure: gameDataFailure
}