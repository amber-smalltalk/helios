'use strict';

var fs = require('fs'),
    path = require('path');

function findAmberPath(options) {
    var result;
    options.some(function (x) {
        var candidate = path.join(__dirname, x);
        return fs.existsSync(path.join(candidate, 'support/boot.js')) && (result = candidate);
    });
    return result;
}

module.exports = function(grunt) {
  var path = require('path');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-execute');
  grunt.loadNpmTasks('amber-dev');

  // Default task.
  grunt.registerTask('default', ['amberc:all']);
  grunt.registerTask('test', ['amberc:test_runner', 'execute:test_runner', 'clean:test_runner']);
  grunt.registerTask('devel', ['amdconfig:amber']);

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    // pkg: grunt.file.readJSON(''),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // task configuration
    amberc: {
      options: {
        amber_dir: findAmberPath(['../..', 'bower_components/amber']),
        library_dirs: ['src'],
        closure_jar: ''
      },
      all: {
        output_dir : 'src',
        src: [
          // list all sources in dependency order
          'src/Helios-Core.st', 'src/Helios-Exceptions.st', 'src/Helios-Announcements.st',
          'src/Helios-KeyBindings.st', 'src/Helios-Layout.st', 'src/Helios-Helpers.st',
          'src/Helios-Commands-Core.st',
          'src/Helios-Commands-Tools.st', 'src/Helios-Commands-Browser.st', 'src/Helios-Commands-SUnit.st',
          'src/Helios-References.st', 'src/Helios-Inspector.st', 'src/Helios-Browser.st',
          'src/Helios-Transcript.st', 'src/Helios-Workspace.st', 'src/Helios-Debugger.st',
          'src/Helios-SUnit.st',
          // list all tests in dependency order
          'src/Helios-Workspace-Tests.st', 'src/Helios-SUnit-Tests.st'
        ],
        libraries: ['Web', 'SUnit'],
        amd_namespace: 'helios',
        jsGlobals: ['navigator']
      },
      test_runner: {
        src: ['node_modules/amber-dev/lib/Test.st'],
        libraries: [
          /* add dependencies packages here */
          /* add other code-to-test packages here */
          'SUnit',
          /* add other test packages here */
        ],
        main_class: 'NodeTestRunner',
        output_name: 'test_runner'
      }
    },

    amdconfig: {helios: {dest: 'config.js'}},

    execute: {
      test_runner: {
        src: ['test_runner.js']
      }
    },

    clean: {
      test_runner: ['test_runner.js']
    }
  });

};
