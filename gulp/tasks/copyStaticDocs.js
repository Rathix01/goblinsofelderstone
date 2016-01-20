var gulp         = require('gulp');
var config       = require('../config').markup

gulp.task('copyStaticDocuments', function() {
  gulp.src('./src/staticDocuments/**/*')
    .pipe(gulp.dest(config.dest  + '/documents'));
});