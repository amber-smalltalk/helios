define([
	'amber/helpers', // pre-fetch, dep of amber/deploy
	'amber/deploy', // pre-fetch, dep of amber/lang
	'amber/lang',
    'codemirror/lib/codemirror',
    'codemirror/mode/smalltalk/smalltalk',
    'codemirror/addon/hint/show-hint',
    'css!codemirror/theme/ambiance',
    'css!codemirror/lib/codemirror',
    'css!codemirror/addon/hint/show-hint',
    'typeahead',
    'jquery-ui',
    'bootstrap/dist/js/bootstrap',
    'css!bootstrap/dist/css/bootstrap',
    './showdown',
    './all',
    'css!./resources/helios',
    'css!./resources/helios-niflheim',
    'css!./resources/niflheim'
], function (amber) { return amber; });
