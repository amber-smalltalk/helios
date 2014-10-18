define([
	'amber/helpers', // pre-fetch, dep of amber/deploy
	'amber/deploy', // pre-fetch, dep of amber/lang
	'amber/lang',
    'codemirror3/lib/codemirror',
    'codemirror3/mode/smalltalk/smalltalk',
    'codemirror3/addon/hint/show-hint',
    'css!codemirror3/theme/ambiance',
    'css!codemirror3/lib/codemirror',
    'css!codemirror3/addon/hint/show-hint',
    'jquery-ui',
    'amber_core/Examples',
    'amber_core/Benchfib',
    'bootstrap2.3.2/js/bootstrap',
    'amber_lib/showdown/compressed/showdown',
    './all',
    'css!./resources/helios',
	'css!./resources/helios-niflheim',
    'css!./resources/niflheim'
], function (amber) { return amber; });
