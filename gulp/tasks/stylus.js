// include the required packages. 
var gulp = require('gulp');
var stylus = require('gulp-stylus');
var jeet = require( "jeet" );
var concat       = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var handleErrors = require('../util/handleErrors');
var config       = require('../config').styl;
 
// include, if you want to work with sourcemaps 
//var sourcemaps = require('gulp-sourcemaps');
 
// Get one .styl file and render 
gulp.task('styl', [], function () {
  gulp.src(config.src)
    .pipe(stylus({ use:[jeet()] }))
    //.pipe(stylus())
    .on('error', handleErrors)
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(concat('app.css'))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dest));
});
 
// // Options 
// // Options compress 
// gulp.task('compress', function () {
//   gulp.src('./css/compressed.styl')
//     .pipe(stylus({
//       compress: true
//     }))
//     .pipe(gulp.dest('./css/build'));
// });
 
 
// // Set linenos 
// gulp.task('linenos', function () {
//   gulp.src('./css/linenos.styl')
//     .pipe(stylus({linenos: true}))
//     .pipe(gulp.dest('./css/build'));
// });
 
// // Inline sourcemaps 
// gulp.task('sourcemaps-inline', function () {
//   gulp.src('./css/sourcemaps-inline.styl')
//     .pipe(sourcemaps.init())
//     .pipe(stylus())
//     .pipe(sourcemaps.write())
//     .pipe(gulp.dest('./css/build'));
// });
 
// // External sourcemaps 
// gulp.task('sourcemaps-external', function () {
//   gulp.src('./css/sourcemaps-external.styl')
//     .pipe(sourcemaps.init())
//     .pipe(stylus())
//     .pipe(sourcemaps.write('.'))
//     .pipe(gulp.dest('./css/build'));
// });
 
// // Default gulp task to run 
// gulp.task('default', ['one', 'compress', 'linenos', 'sourcemaps-inline', 'sourcemaps-external']);