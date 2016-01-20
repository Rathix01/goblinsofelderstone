var gulp = require('gulp');
var runSequence = require('run-sequence');
var config = require('../config')

gulp.task('build', function(callback) {
  runSequence(
      [ 'browserify' ],
      [ 'copyStaticJs'],
      [ 'styl', 'markup' ],
      callback
    );
});

gulp.task('system-build', function(callback) {
  runSequence(
  		[ 'tidyUp' ],
  		[ 'copySupport', 'copyMixins', 'copyConstants', 'copyStores', 'copyActions', 'copyImages', 'copyStaticDocuments'  ],
  		[ 'copyComponents' ],
  		[ 'copyModules' ],
      [ 'browserify' ],
      [ 'styl', 'markup' ],
      callback
    );
});

gulp.task('production-build', function(callback) {
    runSequence('system-build', 'minifyCss', 'uglifyJs', callback);
});
