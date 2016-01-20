var dest = './build';
var src  = './src';

module.exports = {
  browserSync: {
    server: {
      baseDir: [dest, src]
    },
    files: [
      dest + '/**',
      '!' + dest + '/**.map'
    ]
  },
  sass: {
    src: src + '/sass/**/*.scss',
    dest: dest
  },
  styl: {
    src: src + '/styl/**/*.styl',
    dest: dest
  },
  production: {
    cssSrc: dest + '/*.css',
    jsSrc: dest + '/*.js',
    dest: dest
  },
  markup: {
    src: src + '/htdocs/*.html',
    watch: src + '/htdocs/**',
    dest: dest,
    swig_options: {
      defaults: {
        cache: false
      },
      json_path: src + '/data'
    }
  },
  core: {
    src: {
      components: '../front-end-core/components/**/*.jsx',
      support:    '../front-end-core/support/**/*.js',
      constants:  '../front-end-core/constants/**/*.js',
      mixins:     '../front-end-core/mixins/**/*.js',
      stores:     '../front-end-core/stores/**/*.js',
      actions:    '../front-end-core/actions/**/*.js',
      modules:    '../front-end-core/modules/**/*',
    },
    dest: {
      components: src + '/javascript/system/components/',
      support: src + '/javascript/system/support/',
      constants: src + '/javascript/system/constants/',
      mixins: src + '/javascript/system/mixins/',
      stores: src + '/javascript/system/stores/',
      actions: src + '/javascript/system/actions/',
      modules: src + '/javascript/system/modules/',
      system: src + 'javascript/system'
    },
    modules: {
      login: { name: "login", location: "/login" }
    }
  },
  jsx: {
    src: src + '/javascript/**/*.jsx'
  },
  browserify: {
    debug: true,
    extensions: ['.jsx'],
    bundleConfigs: [{
      entries: src + '/javascript/app.jsx',
      dest: dest + '/',
      outputName: 'app.js'
    }]
  }
};