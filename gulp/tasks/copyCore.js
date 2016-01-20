var gulp         = require('gulp');
var config       = require('../config').core

gulp.task('copyComponents', function() {
  return gulp.src(config.src.components)
    		 .pipe(gulp.dest(config.dest.components))
});

gulp.task('copySupport', function() {
  return gulp.src(config.src.support)
    		 .pipe(gulp.dest(config.dest.support))
});

gulp.task('copyConstants', function() {
  return gulp.src(config.src.constants)
      .pipe(gulp.dest(config.dest.constants))
});

gulp.task('copyMixins', function() {
  return gulp.src(config.src.mixins)
    		 .pipe(gulp.dest(config.dest.mixins))
});

gulp.task('copyStores', function() {
  return gulp.src(config.src.stores)
    		 .pipe(gulp.dest(config.dest.stores))
});

gulp.task('copyActions', function() {
  return gulp.src(config.src.actions)
    		 .pipe(gulp.dest(config.dest.actions))
});

gulp.task('copyModules', function() {
  return gulp.src(config.src.modules)
         .pipe(gulp.dest(config.dest.modules))
});