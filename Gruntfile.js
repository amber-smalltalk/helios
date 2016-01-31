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

module.exports = function (grunt) {
    var helpers = require('amber-dev').helpers;

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-execute');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('amber-dev');

    // Default task.
    grunt.registerTask('default', ['amdconfig:helios', 'less', 'amberc:all']);
    grunt.registerTask('test', ['amdconfig:helios', 'requirejs:test_runner', 'execute:test_runner', 'clean:test_runner']);
    grunt.registerTask('devel', ['amdconfig:helios']);

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
        less: {
            development: {
                files: {
                    'resources/helios.css': 'resources/helios.less'
                }
            }
        },

        amberc: {
            options: {
                amber_dir: findAmberPath(['../..', 'bower_components/amber']),
                configFile: "config.js"
            },
            all: {
                output_dir: 'src',
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
                    'src/Helios-Browser-Tests.st', 'src/Helios-Workspace-Tests.st', 'src/Helios-SUnit-Tests.st'
                ],
                libraries: ['amber_core/SUnit', 'amber/web/Web'],
                amd_namespace: 'helios',
                jsGlobals: ['navigator']
            }
        },
        requirejs: {
            options: {
                useStrict: true
            },
            test_runner: {
                options: {
                    mainConfigFile: "config.js",
                    rawText: {
                        "app": "(" + function () {
                            define(["amber/deploy", "helios/all", "amber_devkit/NodeTestRunner"], function (amber) {
                                amber.initialize();
                                amber.globals.NodeTestRunner._main();
                            });
                        } + "());"
                    },
                    paths: {"amber_devkit": helpers.libPath},
                    pragmas: {
                        excludeIdeData: true
                    },
                    include: ['config-node', 'app'],
                    insertRequire: ['app'],
                    optimize: "none",
                    wrap: helpers.nodeWrapperWithShebang,
                    out: "test_runner.js"
                }
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
        },

        watch: {
            less: {
                files: ['resources/*.less'],
                tasks: ['less'],
                options: {
                    spawn: false
                }
            }
        }
    });

};
