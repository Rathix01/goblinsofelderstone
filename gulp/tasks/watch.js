var gulp   = require('gulp');
var config = require('../config');

gulp.task('watch', ['setWatch'], function() {

  gulp.watch(config.styl.src     , ['styl', 'markup']);
  gulp.watch(config.markup.watch , ['markup']);
  gulp.watch('./src/javascript/**/*', [ 'browserify' ] );

  gulp.watch('./src/javascript/system/actions/**/*', 	[ 'actionsUpdate' ] )
  gulp.watch('./src/javascript/system/components/**/*', [ 'componentsUpdate' ] )
  gulp.watch('./src/javascript/system/constants/**/*',  [ 'constantsUpdate' ] )
  gulp.watch('./src/javascript/system/mixins/**/*', 	[ 'mixinsUpdate' ] )
  gulp.watch('./src/javascript/system/modules/**/*', 	[ 'modulesUpdate' ] )
  gulp.watch('./src/javascript/system/stores/**/*', 	[ 'storesUpdate' ] )
  gulp.watch('./src/javascript/system/support/**/*', 	[ 'supportUpdate' ] )

});