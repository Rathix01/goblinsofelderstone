const Bacon = require('baconjs')

// this is not a great way of doing it but the below stopped working
// reliably so this will have to do for now.
var isFirefox = typeof InstallTrigger !== 'undefined';
var isIE = false || !!document.documentMode;
var isEdge = !isIE && !!window.StyleMedia;

//http://stackoverflow.com/questions/8149155/animate-scrolltop-not-working-in-firefox
function getScrollTopElement() {
    if ( document.compatMode !== 'CSS1Compat' ) return document.querySelector('body');
    var html = document.documentElement;
    var body = document.body;
    var startingY = window.pageYOffset || body.scrollTop || html.scrollTop;
    var newY = startingY + 1;
    window.scrollTo(0, newY);
    var element = ( html.scrollTop === newY || isFirefox || isIE || isEdge ) ? 'html' : 'body';
    window.scrollTo(0, startingY);
    return document.querySelector( element );
}

module.exports = {
	scrollElement: getScrollTopElement()
}