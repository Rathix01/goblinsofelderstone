const Bacon = require('baconjs')
const Q = require('q');

const imagesVisibleOnInit = [ "images/GoE_Background.jpg", 
							  "images/GoE_Logo.png", 
							  "images/Coming-Soon.png", 
							  "images/goblin-video-preview.jpg" ];

const toPromise = ( imgUrl ) => {
	const d = Q.defer();
	const img = new Image()
	img.src = imgUrl
	img.onload = () => d.resolve(img);
	return d.promise;
}

const toPromises = ( imageUrls ) =>  imageUrls.map( toPromise )
const toAllLoaded = ( imagePromises ) => Bacon.fromPromise( Q.all( imagePromises ) );

const imagesReady = Bacon.once( imagesVisibleOnInit ).map( toPromises ).flatMap( toAllLoaded )

module.exports = {
	imagesReady: imagesReady
}