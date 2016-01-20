var gulp = require('gulp');
var webserver = require('gulp-webserver');
var config      = require('../config');

gulp.task('webserver', function() {
  gulp.src( config.production.dest )
    .pipe(webserver({
      root: config.production.dest,
      port: 8001,
      fallback: "/index.html",
      livereload: {enable: true, port: 9002 },
      open: { browser: "Google Chrome" },
      //proxies: { source: '/api', target: 'http://localhost:3006/' }
    }));
});