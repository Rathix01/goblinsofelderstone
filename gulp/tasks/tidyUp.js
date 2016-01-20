var gulp = require('gulp');
var del = require('del');
var config = require('../config').core

gulp.task('tidyUp', function () {
  del([ config.dest.system + "**/*" ]);
});