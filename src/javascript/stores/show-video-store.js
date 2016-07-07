const Bacon = require('baconjs');
const VideoActions = require('../actions/video-actions');

const toDisplayVideo = () => ({ showVideo: true })

VideoActions.actions.GoEVideo.map( toDisplayVideo ).onValue("GoEVideo")