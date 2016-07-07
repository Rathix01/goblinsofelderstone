const StateStore = require('./state-store')
const WindowScrollPositionStore = require('./window-scroll-position-store');

const toImagePosition = ( scroll ) => ({ y: Math.round( 0 - ( scroll.position / 3 ) ) });
WindowScrollPositionStore.scrollPosition.map( toImagePosition ).onValue( StateStore.publish("ParallaxImageAnimation") )