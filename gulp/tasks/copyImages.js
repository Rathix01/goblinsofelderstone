var gulp         = require('gulp');
var config       = require('../config').markup

function test( data ) {
	console.log('foo', data )
	return gulp.dest(config.dest)
}

gulp.task('copyImages', function() {

  gulp.src('./src/images/**/*')
    .pipe(gulp.dest(config.dest  + '/images'));
  gulp.src('./src/images/favicon.ico')
    .pipe(gulp.dest(config.dest));


});


