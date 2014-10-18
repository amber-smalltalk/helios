define("helios/Helios-Announcements", ["amber/boot", "amber_core/Kernel-Objects"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Helios-Announcements');
$core.packages["Helios-Announcements"].transport = {"type":"amd","amdNamespace":"helios"};

$core.addClass('HLAboutToChange', $globals.Object, ['actionBlock'], 'Helios-Announcements');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLAboutToChange.comment="I am announced whenever a change of context is about to be made, and unsaved changes could be lost.\x0a\x0aI am used within `HLModel` to handle such user actions. See `HLModel >> withChangesDo:`.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "actionBlock",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@actionBlock"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "actionBlock\x0a\x09^ actionBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLAboutToChange);

$core.addMethod(
$core.method({
selector: "actionBlock:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@actionBlock"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "actionBlock: aBlock\x0a\x09actionBlock := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLAboutToChange);



$core.addClass('HLAnnouncement', $globals.Object, [], 'Helios-Announcements');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLAnnouncement.comment="I am the root of the announcement class hierarchy used in the Helios UI.";
//>>excludeEnd("ide");

$core.addMethod(
$core.method({
selector: "heliosClass",
protocol: 'helios',
fn: function (){
var self=this;
return "announcement";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "heliosClass\x0a\x09^ 'announcement'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLAnnouncement.klass);


$core.addClass('HLCodeHandled', $globals.HLAnnouncement, ['code'], 'Helios-Announcements');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLCodeHandled.comment="I am the root class of announcements emitted by `HLCodeWidget`s";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "code",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@code"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "code\x0a\x0a\x09^ code",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLCodeHandled);

$core.addMethod(
$core.method({
selector: "code:",
protocol: 'accessing',
fn: function (aModel){
var self=this;
self["@code"]=aModel;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aModel"],
source: "code: aModel\x0a\x0a\x09code := aModel",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLCodeHandled);


$core.addMethod(
$core.method({
selector: "on:",
protocol: 'actions',
fn: function (aCodeModel){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._code_(aCodeModel);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aCodeModel:aCodeModel},$globals.HLCodeHandled.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCodeModel"],
source: "on: aCodeModel\x0a\x0a\x09^ self new \x0a    \x09code: aCodeModel;\x0a        yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["code:", "new", "yourself"]
}),
$globals.HLCodeHandled.klass);


$core.addClass('HLDoItExecuted', $globals.HLCodeHandled, [], 'Helios-Announcements');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLDoItExecuted.comment="I am emitted by a `HLCodeWidget` after a DoIt has been executed.";
//>>excludeEnd("ide");


$core.addClass('HLDebuggerAnnouncement', $globals.HLAnnouncement, ['context'], 'Helios-Announcements');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLDebuggerAnnouncement.comment="I am the root class of debugger announcements, and hold onto the debugged `context`.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "context",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@context"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "context\x0a\x09^ context",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLDebuggerAnnouncement);

$core.addMethod(
$core.method({
selector: "context:",
protocol: 'accessing',
fn: function (aContext){
var self=this;
self["@context"]=aContext;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aContext"],
source: "context: aContext\x0a\x09context := aContext",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLDebuggerAnnouncement);



$core.addClass('HLDebuggerContextSelected', $globals.HLDebuggerAnnouncement, [], 'Helios-Announcements');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLDebuggerContextSelected.comment="I am announced when a new context is selected in a debugger, to update the user interface.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "context",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@context"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "context\x0a\x09^ context",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLDebuggerContextSelected);

$core.addMethod(
$core.method({
selector: "context:",
protocol: 'accessing',
fn: function (aContext){
var self=this;
self["@context"]=aContext;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aContext"],
source: "context: aContext\x0a\x09context := aContext",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLDebuggerContextSelected);



$core.addClass('HLDebuggerProceeded', $globals.HLDebuggerAnnouncement, [], 'Helios-Announcements');


$core.addClass('HLDebuggerStepped', $globals.HLDebuggerAnnouncement, [], 'Helios-Announcements');


$core.addClass('HLDebuggerWhere', $globals.HLDebuggerAnnouncement, [], 'Helios-Announcements');


$core.addClass('HLDiveRequested', $globals.HLAnnouncement, [], 'Helios-Announcements');


$core.addClass('HLEditComment', $globals.HLAnnouncement, [], 'Helios-Announcements');


$core.addClass('HLErrorRaised', $globals.HLAnnouncement, ['error'], 'Helios-Announcements');
$core.addMethod(
$core.method({
selector: "error",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@error"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "error\x0a\x09^ error",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLErrorRaised);

$core.addMethod(
$core.method({
selector: "error:",
protocol: 'accessing',
fn: function (anError){
var self=this;
self["@error"]=anError;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anError"],
source: "error: anError\x0a\x09error := anError",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLErrorRaised);



$core.addClass('HLCompileErrorRaised', $globals.HLErrorRaised, [], 'Helios-Announcements');


$core.addClass('HLParseErrorRaised', $globals.HLErrorRaised, ['line', 'column', 'message'], 'Helios-Announcements');
$core.addMethod(
$core.method({
selector: "column",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@column"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "column\x0a\x09^ column",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLParseErrorRaised);

$core.addMethod(
$core.method({
selector: "column:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
self["@column"]=anInteger;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "column: anInteger\x0a\x09column := anInteger",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLParseErrorRaised);

$core.addMethod(
$core.method({
selector: "line",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@line"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "line\x0a\x09^ line",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLParseErrorRaised);

$core.addMethod(
$core.method({
selector: "line:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
self["@line"]=anInteger;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "line: anInteger\x0a\x09line := anInteger",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLParseErrorRaised);

$core.addMethod(
$core.method({
selector: "message",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@message"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "message\x0a\x09^ message",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLParseErrorRaised);

$core.addMethod(
$core.method({
selector: "message:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@message"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "message: aString\x0a\x09message := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLParseErrorRaised);



$core.addClass('HLUnknownVariableErrorRaised', $globals.HLErrorRaised, [], 'Helios-Announcements');


$core.addClass('HLFocusRequested', $globals.HLAnnouncement, [], 'Helios-Announcements');


$core.addClass('HLClassesFocusRequested', $globals.HLFocusRequested, [], 'Helios-Announcements');


$core.addClass('HLDocumentationFocusRequested', $globals.HLFocusRequested, [], 'Helios-Announcements');


$core.addClass('HLMethodsFocusRequested', $globals.HLFocusRequested, [], 'Helios-Announcements');


$core.addClass('HLPackagesFocusRequested', $globals.HLFocusRequested, [], 'Helios-Announcements');


$core.addClass('HLProtocolsFocusRequested', $globals.HLFocusRequested, [], 'Helios-Announcements');


$core.addClass('HLSourceCodeFocusRequested', $globals.HLFocusRequested, [], 'Helios-Announcements');


$core.addClass('HLInstVarAdded', $globals.HLAnnouncement, ['theClass', 'variableName'], 'Helios-Announcements');
$core.addMethod(
$core.method({
selector: "theClass",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@theClass"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "theClass\x0a\x09^ theClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLInstVarAdded);

$core.addMethod(
$core.method({
selector: "theClass:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
self["@theClass"]=aClass;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "theClass: aClass\x0a\x09theClass := aClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLInstVarAdded);

$core.addMethod(
$core.method({
selector: "variableName",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@variableName"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "variableName\x0a\x09^ variableName",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLInstVarAdded);

$core.addMethod(
$core.method({
selector: "variableName:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@variableName"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "variableName: aString\x0a\x09variableName := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLInstVarAdded);



$core.addClass('HLItemSelected', $globals.HLAnnouncement, ['item'], 'Helios-Announcements');
$core.addMethod(
$core.method({
selector: "item",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@item"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "item\x0a\x09^ item",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLItemSelected);

$core.addMethod(
$core.method({
selector: "item:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@item"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "item: anObject\x0a\x09item := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLItemSelected);


$core.addMethod(
$core.method({
selector: "on:",
protocol: 'instance creation',
fn: function (anItem){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._item_(anItem);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{anItem:anItem},$globals.HLItemSelected.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anItem"],
source: "on: anItem\x0a\x09^ self new\x0a    \x09item: anItem;\x0a        yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["item:", "new", "yourself"]
}),
$globals.HLItemSelected.klass);


$core.addClass('HLClassSelected', $globals.HLItemSelected, [], 'Helios-Announcements');


$core.addClass('HLInstanceVariableSelected', $globals.HLItemSelected, [], 'Helios-Announcements');


$core.addClass('HLMethodSelected', $globals.HLItemSelected, [], 'Helios-Announcements');


$core.addClass('HLPackageSelected', $globals.HLItemSelected, [], 'Helios-Announcements');


$core.addClass('HLProtocolSelected', $globals.HLItemSelected, [], 'Helios-Announcements');


$core.addClass('HLItemUnselected', $globals.HLAnnouncement, ['item'], 'Helios-Announcements');
$core.addMethod(
$core.method({
selector: "item",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@item"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "item\x0a\x09^ item",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLItemUnselected);

$core.addMethod(
$core.method({
selector: "item:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@item"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "item: anObject\x0a\x09item := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLItemUnselected);


$core.addMethod(
$core.method({
selector: "on:",
protocol: 'instance creation',
fn: function (anItem){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._item_(anItem);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{anItem:anItem},$globals.HLItemUnselected.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anItem"],
source: "on: anItem\x0a\x09^ self new\x0a    \x09item: anItem;\x0a        yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["item:", "new", "yourself"]
}),
$globals.HLItemUnselected.klass);


$core.addClass('HLClassUnselected', $globals.HLItemUnselected, [], 'Helios-Announcements');


$core.addClass('HLPackageUnselected', $globals.HLItemUnselected, [], 'Helios-Announcements');


$core.addClass('HLRunTests', $globals.HLAnnouncement, ['testSuiteRunner'], 'Helios-Announcements');
$core.addMethod(
$core.method({
selector: "testSuiteRunner",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@testSuiteRunner"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSuiteRunner\x0a\x09^ testSuiteRunner",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLRunTests);

$core.addMethod(
$core.method({
selector: "testSuiteRunner:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@testSuiteRunner"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "testSuiteRunner: anObject\x0a\x09testSuiteRunner := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLRunTests);


$core.addMethod(
$core.method({
selector: "on:",
protocol: 'instance creation',
fn: function (aTestSuiteRunner){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._testSuiteRunner_(aTestSuiteRunner);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aTestSuiteRunner:aTestSuiteRunner},$globals.HLRunTests.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTestSuiteRunner"],
source: "on: aTestSuiteRunner\x0a\x09^self new\x0a\x09\x09testSuiteRunner: aTestSuiteRunner;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["testSuiteRunner:", "new", "yourself"]
}),
$globals.HLRunTests.klass);


$core.addClass('HLSaveSourceCode', $globals.HLAnnouncement, [], 'Helios-Announcements');


$core.addClass('HLSearchReferences', $globals.HLAnnouncement, ['searchString'], 'Helios-Announcements');
$core.addMethod(
$core.method({
selector: "searchString",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@searchString"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "searchString\x0a\x09^ searchString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLSearchReferences);

$core.addMethod(
$core.method({
selector: "searchString:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@searchString"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "searchString: aString\x0a\x09searchString := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLSearchReferences);



$core.addClass('HLShowCommentToggled', $globals.HLAnnouncement, [], 'Helios-Announcements');


$core.addClass('HLShowInstanceToggled', $globals.HLAnnouncement, [], 'Helios-Announcements');


$core.addClass('HLShowTemplate', $globals.HLAnnouncement, ['template'], 'Helios-Announcements');
$core.addMethod(
$core.method({
selector: "template",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@template"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "template\x0a\x09^ template",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLShowTemplate);

$core.addMethod(
$core.method({
selector: "template:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@template"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "template: aString\x0a\x09template := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLShowTemplate);



$core.addClass('HLSourceCodeSaved', $globals.HLAnnouncement, [], 'Helios-Announcements');


$core.addClass('HLTabLabelChanged', $globals.HLAnnouncement, ['label', 'widget'], 'Helios-Announcements');
$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@label"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ label",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLTabLabelChanged);

$core.addMethod(
$core.method({
selector: "label:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@label"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "label: aString\x0a\x09label := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLTabLabelChanged);

$core.addMethod(
$core.method({
selector: "widget",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@widget"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "widget\x0a\x09^ widget",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLTabLabelChanged);

$core.addMethod(
$core.method({
selector: "widget:",
protocol: 'accessing',
fn: function (aWidget){
var self=this;
self["@widget"]=aWidget;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aWidget"],
source: "widget: aWidget\x0a\x09widget := aWidget",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLTabLabelChanged);


});
