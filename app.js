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
    'jquery-ui',
    'amber_core/Examples',
    'amber_core/Benchfib',
    'bootstrap2.3.2/js/bootstrap',
    './showdown',
    './all',
    'css!./resources/helios',
	'css!./resources/helios-niflheim',
    'css!./resources/niflheim'
], function (amber) { return amber; });
