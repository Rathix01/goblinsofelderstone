var gulp    = require('gulp');
var config  = require('../config').production;
var size    = require('gulp-filesize');
var uglify = require('gulp-uglify');

var uglifyOptions = {
  //Docs: https://www.npmjs.com/package/gulp-uglify & https://github.com/mishoo/UglifyJS2
  preserveComments: "some",
  compress: {
    keep_fargs: true //Otherwise curried functions may break due to unused arguments being removed
  }
};

gulp.task('uglifyJs', function() {
  return gulp.src(config.jsSrc)
    .pipe(uglify(uglifyOptions))
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});