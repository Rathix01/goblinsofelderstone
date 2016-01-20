var gulp         = require('gulp');
var config       = require('../config').core

gulp.task('actionsUpdate', function() {
	gulp.src("src/javascript/system/actions/**/*")
      .pipe(gulp.dest("../front-end-core/actions/"))
});

gulp.task('componentsUpdate', function() {
	gulp.src("src/javascript/system/components/**/*")
      .pipe(gulp.dest("../front-end-core/components/"))
});

gulp.task('constantsUpdate', function() {
    gulp.src("src/javascript/system/constants/**/*")
        .pipe(gulp.dest("../front-end-core/constants/"))
});

gulp.task('mixinsUpdate', function() {
	gulp.src("src/javascript/system/mixins/**/*")
      .pipe(gulp.dest("../front-end-core/mixins/"))
});

gulp.task('modulesUpdate', function() {
	gulp.src("src/javascript/system/modules/**/*")
      .pipe(gulp.dest("../front-end-core/modules/"))
});

gulp.task('storesUpdate', function() {
	gulp.src("src/javascript/system/stores/**/*")
      .pipe(gulp.dest("../front-end-core/stores/"))
});

gulp.task('supportUpdate', function() {  // changed from systemUpdate
	gulp.src("src/javascript/system/support/**/*")
      .pipe(gulp.dest("../front-end-core/support/"))
});