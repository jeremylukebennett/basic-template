module.exports = function(grunt) {

    grunt.initConfig({
      browserify: {
        js: {
            src: ['../js/main.js'],
            dest: '../dist/app.js'
        },
        options: {
            browserifyOptions: {
                paths: ["./node_modules"]
              }
        }
      },
      jshint: {
        options: {
          predef: ["document", "console", "Chart"],
          esnext: true,
          globalstrict: true,
          globals: {},
          browserify: true
        },
        files: ['../js/**/*.js']
      },
      sass: {
        dist: {
          files: {
            '../dist/css/main.css': '../scss/styles.scss'
          }
        }
      },
      watch: {
        options: {
          livereload: true,
        },
        javascripts: {
          files: ['./js/**/*.js'],
          tasks: ['jshint', 'browserify']
        },
        sass: {
          files: ['./sass/**/*.sass'],
          tasks: ['sass']
        },
        hbs: {
          files: ['./templates/**/*.hbs'],
          tasks: ['browserify']
        }
      }
    });
  
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  
    grunt.registerTask('default', ['jshint', 'sass', 'browserify', 'watch']);
  };