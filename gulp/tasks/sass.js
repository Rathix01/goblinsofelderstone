// var gulp         = require('gulp');
// var sass         = require('gulp-sass');
// var concat       = require('gulp-concat');
// var autoprefixer = require('gulp-autoprefixer');
// var handleErrors = require('../util/handleErrors');
// var config       = require('../config').sass;

// gulp.task('sass', function () {
//   return gulp.src(config.src)
//     .pipe(sass({
//       sourceComments: 'map'
//     }))
//     .on('error', handleErrors)
//     .pipe(autoprefixer({
//       browsers: ['last 2 versions'],
//       cascade: false
//     }))
//     .pipe(concat('app.css'))
//     .on('error', handleErrors)
//     .pipe(gulp.dest(config.dest));
// });
