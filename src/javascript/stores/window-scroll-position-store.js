const Bacon = require('baconjs');
const ScrollElementStore = require('./scroll-element-store');

const pushScrollEvent = () => scrollEvents.push( {} )
const toScrollPosition = ( template ) => ({ position: template.scrollElement.scrollTop });

const scrollEvents = new Bacon.Bus();
const scrollin = Bacon.combineTemplate({
	scrollElement: ScrollElementStore.scrollElement,
	scrollEvent: scrollEvents
})

const scrollPosition = scrollin.map( toScrollPosition ).toEventStream()
window.onscroll = pushScrollEvent

module.exports = {
	scrollPosition: scrollPosition
}