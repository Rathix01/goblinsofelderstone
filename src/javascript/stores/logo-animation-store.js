const Bacon = require('baconjs')
const AnimationStore = require('./animation-store');
const ImageLoaderStore = require('./image-loader-store')

const toEntryTweens = () => ({
	tweenProps: [{
		time: 0.7,
		fn: "fromTo",
		label: "LogoArrive", 
		target: "LogoAnimation",
		from: { opacity: 0, y: -300 },
		to: { opacity: 1, y: 0, ease: Back.easeOut }
	},
	{
		time: 0.6,
		fn: "fromTo",
		label: "LogoArrive", 
		target: "ComingSoonAnimation",
		from: { opacity: 1, scale: 0 },
		to: { opacity: 1, scale: 1, ease: Back.easeOut, delay: 0.4 }
	}]
})

ImageLoaderStore.imagesReady.map( toEntryTweens ).onValue( AnimationStore.toTimeline )