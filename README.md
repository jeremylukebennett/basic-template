# basic-template

This will get you a basic, operating project and file structure with Grunt, Browserify, SASS etc all running properly

• Create new project folder
• In your project folder, create folders for ‘lib’, ‘dist’, ‘js’ and ‘scss’
• Also create these files: index.html, .gitignore
• Inside the ‘dist’ folder, create a ‘css’ folder. In the ‘css’ folder create a ‘main.css’ file
• Inside the ‘js’ folder create a ‘main.js’ file
• Inside the ‘scss’ folder create a ‘style.scss’ file
• Inside the ‘lib’ folder, create a ‘Gruntfile.js’
• Put this code into the Gruntfile:

module.exports = function (grunt) {
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
    watch: { //automatically watch for changes
      javascripts: {
        files: ['../js/**/*.js'],
        tasks: ['jshint', 'browserify']
      },
      sass: {
        files: ['../scss/**/*.scss'],
        tasks: ['sass']
      },

      browserify: {
        files: ['../js/**/*.js'],
        tasks: ['browserify']
      }

    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'sass', 'browserify', 'watch']);
};

• Then, in terminal, navigate to the ‘lib’ folder and run ‘npm init’. Just hit enter for all of the options it asks about. This will create a ‘package.json’ file in your ‘lib’ folder.
• When that’s done you should have a ‘package.json’ file inside ‘lib’. In that file, copy and paste this code:

{
  "name": "modules",
  "version": "0.1.0",
  "devDependencies": {
    "bootstrap": "^4.1.3",
    "browserify": "^16.2.3",
    "grunt": "^0.4.5",
    "grunt-browserify": "^5.3.0",
    "grunt-contrib-jshint": "^0.11.3",
    "grunt-contrib-nodeunit": "~0.4.1",
    "grunt-contrib-sass": "^1.0.0",
    "grunt-contrib-uglify": "~0.5.0",
    "grunt-contrib-watch": "^0.6.1",
    "jshint": "^2.9.6",
    "jshint-stylish": "^2.2.1",
    "matchdep": "^0.3.0"
  },
  "dependencies": {
    "grunt-sass": "^3.0.2",
    "jquery": "^3.3.1"
  }
}
• Still inside ‘lib’, run ‘npm install’
• Next, in ‘lib’, copy and paste these commands:

npm install grunt --save-dev
npm install jshint --save-dev
npm install grunt-contrib-jshint --save-dev
npm install jshint-stylish --save-dev
npm install grunt-contrib-watch --save-dev
npm install grunt-contrib-sass --save-dev
npm install matchdep --save-dev
npm install browserify --save-dev
npm install grunt-browserify --save-dev
npm install bootstrap --save-dev
npm install grunt-sass
npm install jquery 

• In your ‘.gitignore’ file, paste in this code: lib/node_modules
• In your ‘index.html’ file, create the basic structures. change the javascript <script> tag src attribute to: <script src="dist/app.js"></script>
• Change the css <link> tag attributes to this:     <link rel="stylesheet" type="text/css" media="screen" href="dist/css/main.css" />

