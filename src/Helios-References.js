define("helios/Helios-References", ["amber/boot", "amber_core/Kernel-Objects", "helios/Helios-Core"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Helios-References');
$core.packages["Helios-References"].transport = {"type":"amd","amdNamespace":"helios"};

$core.addClass('HLMethodReference', $globals.Object, ['selector', 'methodClass'], 'Helios-References');
$core.addMethod(
$core.method({
selector: "initializeFromMethod:",
protocol: 'initialization',
fn: function (aCompiledMethod){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._selector_($recv(aCompiledMethod)._selector());
$1=self._methodClass_($recv(aCompiledMethod)._methodClass());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeFromMethod:",{aCompiledMethod:aCompiledMethod},$globals.HLMethodReference)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCompiledMethod"],
source: "initializeFromMethod: aCompiledMethod\x0a\x09self\x0a\x09\x09selector: aCompiledMethod selector;\x0a\x09\x09methodClass: aCompiledMethod methodClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selector:", "selector", "methodClass:", "methodClass"]
}),
$globals.HLMethodReference);

$core.addMethod(
$core.method({
selector: "method",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._methodClass())._methodAt_(self._selector());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"method",{},$globals.HLMethodReference)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "method\x0a\x09^ self methodClass methodAt: self selector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["methodAt:", "methodClass", "selector"]
}),
$globals.HLMethodReference);

$core.addMethod(
$core.method({
selector: "methodClass",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@methodClass"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "methodClass\x0a\x09^ methodClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLMethodReference);

$core.addMethod(
$core.method({
selector: "methodClass:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
self["@methodClass"]=aClass;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "methodClass: aClass\x0a\x09methodClass := aClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLMethodReference);

$core.addMethod(
$core.method({
selector: "selector",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@selector"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selector\x0a\x09^ selector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLMethodReference);

$core.addMethod(
$core.method({
selector: "selector:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@selector"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "selector: aString\x0a\x09selector := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLMethodReference);

$core.addMethod(
$core.method({
selector: "source",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._method())._source();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"source",{},$globals.HLMethodReference)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "source\x0a\x09^ self method source",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["source", "method"]
}),
$globals.HLMethodReference);


$core.addMethod(
$core.method({
selector: "on:",
protocol: 'instance creation',
fn: function (aCompiledMethod){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._initializeFromMethod_(aCompiledMethod);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aCompiledMethod:aCompiledMethod},$globals.HLMethodReference.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCompiledMethod"],
source: "on: aCompiledMethod\x0a\x09^ self new\x0a\x09\x09initializeFromMethod: aCompiledMethod;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initializeFromMethod:", "new", "yourself"]
}),
$globals.HLMethodReference.klass);


$core.addClass('HLReferences', $globals.HLWidget, ['model', 'sendersListWidget', 'implementorsListWidget', 'classReferencesListWidget', 'regexpListWidget', 'sourceCodeWidget'], 'Helios-References');
$core.addMethod(
$core.method({
selector: "classReferencesListWidget",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLClassReferencesListWidget(){return $globals.HLClassReferencesListWidget||(typeof HLClassReferencesListWidget=="undefined"?nil:HLClassReferencesListWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@classReferencesListWidget"];
if(($receiver = $2) == null || $receiver.isNil){
self["@classReferencesListWidget"]=$recv($HLClassReferencesListWidget())._on_(self._model());
self["@classReferencesListWidget"];
$1=$recv(self["@classReferencesListWidget"])._next_(self._regexpListWidget());
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classReferencesListWidget",{},$globals.HLReferences)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classReferencesListWidget\x0a\x09^ classReferencesListWidget ifNil: [\x0a      \x09classReferencesListWidget := HLClassReferencesListWidget on: self model.\x0a\x09\x09classReferencesListWidget next: self regexpListWidget ]",
referencedClasses: ["HLClassReferencesListWidget"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "on:", "model", "next:", "regexpListWidget"]
}),
$globals.HLReferences);

$core.addMethod(
$core.method({
selector: "implementorsListWidget",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLImplementorsListWidget(){return $globals.HLImplementorsListWidget||(typeof HLImplementorsListWidget=="undefined"?nil:HLImplementorsListWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@implementorsListWidget"];
if(($receiver = $2) == null || $receiver.isNil){
self["@implementorsListWidget"]=$recv($HLImplementorsListWidget())._on_(self._model());
self["@implementorsListWidget"];
$1=$recv(self["@implementorsListWidget"])._next_(self._classReferencesListWidget());
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"implementorsListWidget",{},$globals.HLReferences)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "implementorsListWidget\x0a\x09^ implementorsListWidget ifNil: [\x0a      \x09implementorsListWidget := HLImplementorsListWidget on: self model.\x0a\x09\x09implementorsListWidget next: self classReferencesListWidget ]",
referencedClasses: ["HLImplementorsListWidget"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "on:", "model", "next:", "classReferencesListWidget"]
}),
$globals.HLReferences);

$core.addMethod(
$core.method({
selector: "model",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLReferencesModel(){return $globals.HLReferencesModel||(typeof HLReferencesModel=="undefined"?nil:HLReferencesModel)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$4,$1,$receiver;
$2=self["@model"];
if(($receiver = $2) == null || $receiver.isNil){
$3=$recv($HLReferencesModel())._new();
$recv($3)._environment_($recv(self._manager())._environment());
$4=$recv($3)._yourself();
self["@model"]=$4;
$1=self["@model"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"model",{},$globals.HLReferences)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "model\x0a\x09^ model ifNil: [\x0a\x09\x09model := (HLReferencesModel new\x0a\x09\x09\x09environment: self manager environment;\x0a\x09\x09\x09yourself) ]",
referencedClasses: ["HLReferencesModel"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "environment:", "new", "environment", "manager", "yourself"]
}),
$globals.HLReferences);

$core.addMethod(
$core.method({
selector: "model:",
protocol: 'accessing',
fn: function (aModel){
var self=this;
self["@model"]=aModel;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aModel"],
source: "model: aModel\x0a\x09model := aModel",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLReferences);

$core.addMethod(
$core.method({
selector: "regexpListWidget",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLRegexpListWidget(){return $globals.HLRegexpListWidget||(typeof HLRegexpListWidget=="undefined"?nil:HLRegexpListWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@regexpListWidget"];
if(($receiver = $2) == null || $receiver.isNil){
self["@regexpListWidget"]=$recv($HLRegexpListWidget())._on_(self._model());
self["@regexpListWidget"];
$1=$recv(self["@regexpListWidget"])._next_(self._sourceCodeWidget());
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"regexpListWidget",{},$globals.HLReferences)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "regexpListWidget\x0a\x09^ regexpListWidget ifNil: [\x0a      \x09regexpListWidget := HLRegexpListWidget on: self model.\x0a\x09\x09regexpListWidget next: self sourceCodeWidget ]",
referencedClasses: ["HLRegexpListWidget"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "on:", "model", "next:", "sourceCodeWidget"]
}),
$globals.HLReferences);

$core.addMethod(
$core.method({
selector: "registerBindingsOn:",
protocol: 'actions',
fn: function (aBindingGroup){
var self=this;
function $HLToolCommand(){return $globals.HLToolCommand||(typeof HLToolCommand=="undefined"?nil:HLToolCommand)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($HLToolCommand())._registerConcreteClassesOn_for_(aBindingGroup,self._model());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"registerBindingsOn:",{aBindingGroup:aBindingGroup},$globals.HLReferences)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBindingGroup"],
source: "registerBindingsOn: aBindingGroup\x0a\x09HLToolCommand \x0a\x09\x09registerConcreteClassesOn: aBindingGroup \x0a\x09\x09for: self model",
referencedClasses: ["HLToolCommand"],
//>>excludeEnd("ide");
messageSends: ["registerConcreteClassesOn:for:", "model"]
}),
$globals.HLReferences);

$core.addMethod(
$core.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $HLContainer(){return $globals.HLContainer||(typeof HLContainer=="undefined"?nil:HLContainer)}
function $HLHorizontalSplitter(){return $globals.HLHorizontalSplitter||(typeof HLHorizontalSplitter=="undefined"?nil:HLHorizontalSplitter)}
function $HLVerticalSplitter(){return $globals.HLVerticalSplitter||(typeof HLVerticalSplitter=="undefined"?nil:HLVerticalSplitter)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $5,$4,$3,$2,$1;
$5=self._sendersListWidget();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["sendersListWidget"]=1;
//>>excludeEnd("ctx");
$4=$recv($HLVerticalSplitter())._with_with_($5,self._implementorsListWidget());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:with:"]=3;
//>>excludeEnd("ctx");
$3=$recv($HLVerticalSplitter())._with_with_($4,$recv($HLVerticalSplitter())._with_with_(self._classReferencesListWidget(),self._regexpListWidget()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:with:"]=2;
//>>excludeEnd("ctx");
$2=$recv($HLHorizontalSplitter())._with_with_($3,self._sourceCodeWidget());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:with:"]=1;
//>>excludeEnd("ctx");
$1=$recv($HLContainer())._with_($2);
$recv(html)._with_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$recv(self._sendersListWidget())._focus();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},$globals.HLReferences)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderContentOn: html\x0a\x09html with: (HLContainer with: (HLHorizontalSplitter \x0a    \x09with: (HLVerticalSplitter\x0a        \x09with: (HLVerticalSplitter\x0a            \x09with: self sendersListWidget\x0a                with: self implementorsListWidget)\x0a            with: (HLVerticalSplitter\x0a            \x09with: self classReferencesListWidget\x0a                with: self regexpListWidget)) \x0a        with: self sourceCodeWidget)).\x0a\x09\x0a\x09self sendersListWidget focus",
referencedClasses: ["HLContainer", "HLHorizontalSplitter", "HLVerticalSplitter"],
//>>excludeEnd("ide");
messageSends: ["with:", "with:with:", "sendersListWidget", "implementorsListWidget", "classReferencesListWidget", "regexpListWidget", "sourceCodeWidget", "focus"]
}),
$globals.HLReferences);

$core.addMethod(
$core.method({
selector: "search:",
protocol: 'actions',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._model())._search_(aString);
self._setTabLabel_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"search:",{aString:aString},$globals.HLReferences)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "search: aString\x0a\x09self model search: aString.\x0a\x09self setTabLabel: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["search:", "model", "setTabLabel:"]
}),
$globals.HLReferences);

$core.addMethod(
$core.method({
selector: "sendersListWidget",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLSendersListWidget(){return $globals.HLSendersListWidget||(typeof HLSendersListWidget=="undefined"?nil:HLSendersListWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@sendersListWidget"];
if(($receiver = $2) == null || $receiver.isNil){
self["@sendersListWidget"]=$recv($HLSendersListWidget())._on_(self._model());
self["@sendersListWidget"];
$1=$recv(self["@sendersListWidget"])._next_(self._implementorsListWidget());
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sendersListWidget",{},$globals.HLReferences)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sendersListWidget\x0a\x09^ sendersListWidget ifNil: [\x0a      \x09sendersListWidget := HLSendersListWidget on: self model.\x0a\x09\x09sendersListWidget next: self implementorsListWidget ]",
referencedClasses: ["HLSendersListWidget"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "on:", "model", "next:", "implementorsListWidget"]
}),
$globals.HLReferences);

$core.addMethod(
$core.method({
selector: "sourceCodeWidget",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLBrowserCodeWidget(){return $globals.HLBrowserCodeWidget||(typeof HLBrowserCodeWidget=="undefined"?nil:HLBrowserCodeWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$4,$1,$receiver;
$2=self["@sourceCodeWidget"];
if(($receiver = $2) == null || $receiver.isNil){
$3=$recv($HLBrowserCodeWidget())._new();
$recv($3)._browserModel_(self._model());
$4=$recv($3)._yourself();
self["@sourceCodeWidget"]=$4;
$1=self["@sourceCodeWidget"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sourceCodeWidget",{},$globals.HLReferences)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sourceCodeWidget\x0a\x09^ sourceCodeWidget ifNil: [\x0a      \x09sourceCodeWidget := HLBrowserCodeWidget new\x0a\x09\x09\x09browserModel: self model;\x0a\x09\x09\x09yourself ]",
referencedClasses: ["HLBrowserCodeWidget"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "browserModel:", "new", "model", "yourself"]
}),
$globals.HLReferences);


$core.addMethod(
$core.method({
selector: "canBeOpenAsTab",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "canBeOpenAsTab\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLReferences.klass);

$core.addMethod(
$core.method({
selector: "tabClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "references";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tabClass\x0a\x09^ 'references'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLReferences.klass);

$core.addMethod(
$core.method({
selector: "tabLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "References";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tabLabel\x0a\x09^ 'References'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLReferences.klass);

$core.addMethod(
$core.method({
selector: "tabPriority",
protocol: 'accessing',
fn: function (){
var self=this;
return (100);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tabPriority\x0a\x09^ 100",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLReferences.klass);


$core.addClass('HLReferencesListWidget', $globals.HLToolListWidget, [], 'Helios-References');
$core.addMethod(
$core.method({
selector: "activateListItem:",
protocol: 'actions',
fn: function (anItem){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._model())._withChangesDo_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.supercall = true, 
//>>excludeEnd("ctx");
$globals.HLReferencesListWidget.superclass.fn.prototype._activateListItem_.apply($recv(self), [anItem]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.supercall = false;
//>>excludeEnd("ctx");;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"activateListItem:",{anItem:anItem},$globals.HLReferencesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anItem"],
source: "activateListItem: anItem\x0a\x09self model withChangesDo: [ super activateListItem: anItem ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["withChangesDo:", "model", "activateListItem:"]
}),
$globals.HLReferencesListWidget);

$core.addMethod(
$core.method({
selector: "commandCategory",
protocol: 'accessing',
fn: function (){
var self=this;
return "Methods";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "commandCategory\x0a\x09^ 'Methods'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLReferencesListWidget);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "List";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'List'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLReferencesListWidget);

$core.addMethod(
$core.method({
selector: "observeModel",
protocol: 'actions',
fn: function (){
var self=this;
function $HLSearchReferences(){return $globals.HLSearchReferences||(typeof HLSearchReferences=="undefined"?nil:HLSearchReferences)}
function $HLMethodSelected(){return $globals.HLMethodSelected||(typeof HLMethodSelected=="undefined"?nil:HLMethodSelected)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(self._model())._announcer();
$recv($1)._on_do_($HLSearchReferences(),(function(ann){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._onSearchReferences_($recv(ann)._searchString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:do:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._on_do_($HLMethodSelected(),(function(ann){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._onMethodSelected_($recv(ann)._item());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeModel",{},$globals.HLReferencesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeModel\x0a\x09self model announcer\x0a\x09\x09on: HLSearchReferences\x0a\x09\x09do: [ :ann | self onSearchReferences: ann searchString ];\x0a\x09\x09on: HLMethodSelected\x0a\x09\x09do: [ :ann | self onMethodSelected: ann item ]",
referencedClasses: ["HLSearchReferences", "HLMethodSelected"],
//>>excludeEnd("ide");
messageSends: ["on:do:", "announcer", "model", "onSearchReferences:", "searchString", "onMethodSelected:", "item"]
}),
$globals.HLReferencesListWidget);

$core.addMethod(
$core.method({
selector: "onMethodSelected:",
protocol: 'reactions',
fn: function (aMethod){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$receiver;
var $early={};
try {
if(($receiver = aMethod) == null || $receiver.isNil){
return self;
} else {
aMethod;
};
$recv(self._items())._detect_ifNone_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(aMethod)._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["selector"]=1;
//>>excludeEnd("ctx");
return $recv(each).__eq($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}),(function(){
throw $early=[self];

}));
$2=$recv(aMethod)._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selector"]=2;
//>>excludeEnd("ctx");
self._selectedItem_($2);
$3=self._activateItem_($recv(aMethod)._selector());
return self;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onMethodSelected:",{aMethod:aMethod},$globals.HLReferencesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod"],
source: "onMethodSelected: aMethod\x0a\x09aMethod ifNil: [ ^ self ].\x0a\x09self items detect: [ :each | each = aMethod selector ] ifNone: [ ^ self ].\x0a\x09\x0a\x09self \x0a\x09\x09selectedItem: aMethod selector;\x0a\x09\x09activateItem: aMethod selector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "detect:ifNone:", "items", "=", "selector", "selectedItem:", "activateItem:"]
}),
$globals.HLReferencesListWidget);

$core.addMethod(
$core.method({
selector: "onSearchReferences:",
protocol: 'reactions',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onSearchReferences:",{aString:aString},$globals.HLReferencesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "onSearchReferences: aString\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.HLReferencesListWidget);

$core.addMethod(
$core.method({
selector: "renderItemLabel:on:",
protocol: 'rendering',
fn: function (aMethod,html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($recv($recv(aMethod)._methodClass())._name()).__comma(" >> #")).__comma($recv(aMethod)._selector());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv(html)._with_($1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderItemLabel:on:",{aMethod:aMethod,html:html},$globals.HLReferencesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod", "html"],
source: "renderItemLabel: aMethod on: html\x0a\x09html with: aMethod methodClass name, ' >> #', aMethod selector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", ",", "name", "methodClass", "selector"]
}),
$globals.HLReferencesListWidget);

$core.addMethod(
$core.method({
selector: "selectItem:",
protocol: 'actions',
fn: function (aMethod){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.HLReferencesListWidget.superclass.fn.prototype._selectItem_.apply($recv(self), [aMethod]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(self._model())._selectedMethod_(aMethod);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectItem:",{aMethod:aMethod},$globals.HLReferencesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod"],
source: "selectItem: aMethod\x0a\x09super selectItem: aMethod.\x0a\x09self model selectedMethod: aMethod",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selectItem:", "selectedMethod:", "model"]
}),
$globals.HLReferencesListWidget);


$core.addMethod(
$core.method({
selector: "on:",
protocol: 'instance creation',
fn: function (aModel){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._model_(aModel);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aModel:aModel},$globals.HLReferencesListWidget.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aModel"],
source: "on: aModel\x0a\x09^ self new \x0a\x09\x09model: aModel; \x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["model:", "new", "yourself"]
}),
$globals.HLReferencesListWidget.klass);


$core.addClass('HLClassReferencesListWidget', $globals.HLReferencesListWidget, [], 'Helios-References');
$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Class references";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'Class references'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLClassReferencesListWidget);

$core.addMethod(
$core.method({
selector: "onSearchReferences:",
protocol: 'reactions',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._selectItem_(nil);
self._items_($recv(self._model())._classReferencesOf_(aString));
self._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onSearchReferences:",{aString:aString},$globals.HLClassReferencesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "onSearchReferences: aString\x0a\x09self selectItem: nil.\x0a\x09self items: (self model classReferencesOf: aString).\x0a\x09self refresh",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selectItem:", "items:", "classReferencesOf:", "model", "refresh"]
}),
$globals.HLClassReferencesListWidget);



$core.addClass('HLImplementorsListWidget', $globals.HLReferencesListWidget, [], 'Helios-References');
$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Implementors";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'Implementors'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLImplementorsListWidget);

$core.addMethod(
$core.method({
selector: "onSearchReferences:",
protocol: 'reactions',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._selectItem_(nil);
self._items_($recv(self._model())._implementorsOf_(aString));
self._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onSearchReferences:",{aString:aString},$globals.HLImplementorsListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "onSearchReferences: aString\x0a\x09self selectItem: nil.\x0a\x09self items: (self model implementorsOf: aString).\x0a\x09self refresh",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selectItem:", "items:", "implementorsOf:", "model", "refresh"]
}),
$globals.HLImplementorsListWidget);



$core.addClass('HLRegexpListWidget', $globals.HLReferencesListWidget, [], 'Helios-References');
$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Source search";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'Source search'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLRegexpListWidget);

$core.addMethod(
$core.method({
selector: "onSearchReferences:",
protocol: 'reactions',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._selectItem_(nil);
self._items_($recv(self._model())._regexpReferencesOf_(aString));
self._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onSearchReferences:",{aString:aString},$globals.HLRegexpListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "onSearchReferences: aString\x0a\x09self selectItem: nil.\x0a\x09self items: (self model regexpReferencesOf: aString).\x0a\x09self refresh",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selectItem:", "items:", "regexpReferencesOf:", "model", "refresh"]
}),
$globals.HLRegexpListWidget);



$core.addClass('HLSendersListWidget', $globals.HLReferencesListWidget, [], 'Helios-References');
$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Senders";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'Senders'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLSendersListWidget);

$core.addMethod(
$core.method({
selector: "onSearchReferences:",
protocol: 'reactions',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._selectItem_(nil);
self._items_($recv(self._model())._sendersOf_(aString));
self._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onSearchReferences:",{aString:aString},$globals.HLSendersListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "onSearchReferences: aString\x0a\x09self selectItem: nil.\x0a\x09self items: (self model sendersOf: aString).\x0a\x09self refresh",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selectItem:", "items:", "sendersOf:", "model", "refresh"]
}),
$globals.HLSendersListWidget);



$core.addClass('HLReferencesModel', $globals.HLToolModel, ['methodsCache', 'classesAndMetaclassesCache'], 'Helios-References');
$core.addMethod(
$core.method({
selector: "allMethods",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._methodsCache();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allMethods",{},$globals.HLReferencesModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "allMethods\x0a\x09^ self methodsCache",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["methodsCache"]
}),
$globals.HLReferencesModel);

$core.addMethod(
$core.method({
selector: "classReferencesOf:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._allMethods())._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(each)._referencedClasses())._includes_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classReferencesOf:",{aString:aString},$globals.HLReferencesModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "classReferencesOf: aString\x0a\x09\x22Answer all methods referencing the class named aString\x22\x0a\x09\x0a\x09^self allMethods select: [ :each |\x0a\x09\x09\x09(each referencedClasses includes: aString) ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["select:", "allMethods", "includes:", "referencedClasses"]
}),
$globals.HLReferencesModel);

$core.addMethod(
$core.method({
selector: "classesAndMetaclasses",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._classesAndMetaclassesCache();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classesAndMetaclasses",{},$globals.HLReferencesModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classesAndMetaclasses\x0a\x09^ self classesAndMetaclassesCache",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["classesAndMetaclassesCache"]
}),
$globals.HLReferencesModel);

$core.addMethod(
$core.method({
selector: "classesAndMetaclassesCache",
protocol: 'cache',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=self["@classesAndMetaclassesCache"];
if(($receiver = $1) == null || $receiver.isNil){
self._updateClassesAndMetaclassesCache();
} else {
$1;
};
$2=self["@classesAndMetaclassesCache"];
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classesAndMetaclassesCache",{},$globals.HLReferencesModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classesAndMetaclassesCache\x0a\x09classesAndMetaclassesCache ifNil: [ self updateClassesAndMetaclassesCache ].\x0a\x09^ classesAndMetaclassesCache",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "updateClassesAndMetaclassesCache"]
}),
$globals.HLReferencesModel);

$core.addMethod(
$core.method({
selector: "implementorsOf:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._allMethods())._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(each)._selector()).__eq(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
})))._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._methodReferenceOn_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"implementorsOf:",{aString:aString},$globals.HLReferencesModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "implementorsOf: aString\x0a\x09^ (self allMethods select: [ :each |\x0a\x09\x09each selector = aString ])\x0a\x09\x09\x09collect: [ :each | self methodReferenceOn: each ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["collect:", "select:", "allMethods", "=", "selector", "methodReferenceOn:"]
}),
$globals.HLReferencesModel);

$core.addMethod(
$core.method({
selector: "isReferencesModel",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isReferencesModel\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLReferencesModel);

$core.addMethod(
$core.method({
selector: "methodReferenceOn:",
protocol: 'accessing',
fn: function (aCompiledMethod){
var self=this;
function $HLMethodReference(){return $globals.HLMethodReference||(typeof HLMethodReference=="undefined"?nil:HLMethodReference)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($HLMethodReference())._on_(aCompiledMethod);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"methodReferenceOn:",{aCompiledMethod:aCompiledMethod},$globals.HLReferencesModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCompiledMethod"],
source: "methodReferenceOn: aCompiledMethod\x0a\x09^ HLMethodReference on: aCompiledMethod",
referencedClasses: ["HLMethodReference"],
//>>excludeEnd("ide");
messageSends: ["on:"]
}),
$globals.HLReferencesModel);

$core.addMethod(
$core.method({
selector: "methodsCache",
protocol: 'cache',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=self["@methodsCache"];
if(($receiver = $1) == null || $receiver.isNil){
self._updateMethodsCache();
} else {
$1;
};
$2=self["@methodsCache"];
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"methodsCache",{},$globals.HLReferencesModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "methodsCache\x0a\x09methodsCache ifNil: [ self updateMethodsCache ].\x0a\x09^ methodsCache",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "updateMethodsCache"]
}),
$globals.HLReferencesModel);

$core.addMethod(
$core.method({
selector: "openClassNamed:",
protocol: 'actions',
fn: function (aString){
var self=this;
var browser;
function $HLBrowser(){return $globals.HLBrowser||(typeof HLBrowser=="undefined"?nil:HLBrowser)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._withChangesDo_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
browser=$recv($HLBrowser())._openAsTab();
browser;
return $recv(browser)._openClassNamed_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"openClassNamed:",{aString:aString,browser:browser},$globals.HLReferencesModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "openClassNamed: aString\x0a\x09| browser |\x0a\x09\x0a\x09self withChangesDo: [\x0a\x09\x09browser := HLBrowser openAsTab.\x0a\x09\x09browser openClassNamed: aString ]",
referencedClasses: ["HLBrowser"],
//>>excludeEnd("ide");
messageSends: ["withChangesDo:", "openAsTab", "openClassNamed:"]
}),
$globals.HLReferencesModel);

$core.addMethod(
$core.method({
selector: "openMethod",
protocol: 'actions',
fn: function (){
var self=this;
var browser;
function $HLBrowser(){return $globals.HLBrowser||(typeof HLBrowser=="undefined"?nil:HLBrowser)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self._selectedMethod();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selectedMethod"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
return self;
} else {
$1;
};
self._withChangesDo_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
browser=$recv($HLBrowser())._openAsTab();
browser;
return $recv(browser)._openMethod_(self._selectedMethod());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"openMethod",{browser:browser},$globals.HLReferencesModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "openMethod\x0a\x09| browser |\x0a\x09\x0a\x09self selectedMethod ifNil: [ ^ self ].\x0a\x09\x0a\x09self withChangesDo: [\x0a\x09\x09browser := HLBrowser openAsTab.\x0a\x09\x09browser openMethod: self selectedMethod ]",
referencedClasses: ["HLBrowser"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "selectedMethod", "withChangesDo:", "openAsTab", "openMethod:"]
}),
$globals.HLReferencesModel);

$core.addMethod(
$core.method({
selector: "regexpReferencesOf:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._allMethods())._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(each)._source())._match_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
})))._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._methodReferenceOn_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"regexpReferencesOf:",{aString:aString},$globals.HLReferencesModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "regexpReferencesOf: aString\x0a\x09^ (self allMethods select: [ :each |\x0a\x09\x09each source match: aString ])\x0a\x09\x09\x09collect: [ :each | self methodReferenceOn: each ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["collect:", "select:", "allMethods", "match:", "source", "methodReferenceOn:"]
}),
$globals.HLReferencesModel);

$core.addMethod(
$core.method({
selector: "search:",
protocol: 'actions',
fn: function (aString){
var self=this;
function $HLSearchReferences(){return $globals.HLSearchReferences||(typeof HLSearchReferences=="undefined"?nil:HLSearchReferences)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
self._updateCaches();
$1=$recv($HLSearchReferences())._new();
$recv($1)._searchString_(aString);
$2=$recv($1)._yourself();
$recv(self._announcer())._announce_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"search:",{aString:aString},$globals.HLReferencesModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "search: aString\x0a\x09self updateCaches.\x0a\x09\x0a\x09self announcer announce: (HLSearchReferences new\x0a\x09\x09searchString: aString;\x0a\x09\x09yourself)",
referencedClasses: ["HLSearchReferences"],
//>>excludeEnd("ide");
messageSends: ["updateCaches", "announce:", "announcer", "searchString:", "new", "yourself"]
}),
$globals.HLReferencesModel);

$core.addMethod(
$core.method({
selector: "sendersOf:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._allMethods())._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(each)._messageSends())._includes_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
})))._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._methodReferenceOn_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sendersOf:",{aString:aString},$globals.HLReferencesModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "sendersOf: aString\x0a\x09^ (self allMethods select: [ :each |\x0a\x09\x09each messageSends includes: aString ])\x0a\x09\x09\x09collect: [ :each | self methodReferenceOn: each ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["collect:", "select:", "allMethods", "includes:", "messageSends", "methodReferenceOn:"]
}),
$globals.HLReferencesModel);

$core.addMethod(
$core.method({
selector: "updateCaches",
protocol: 'cache',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._updateClassesAndMetaclassesCache();
$1=self._updateMethodsCache();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateCaches",{},$globals.HLReferencesModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateCaches\x0a\x09self \x0a\x09\x09updateClassesAndMetaclassesCache;\x0a\x09\x09updateMethodsCache",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["updateClassesAndMetaclassesCache", "updateMethodsCache"]
}),
$globals.HLReferencesModel);

$core.addMethod(
$core.method({
selector: "updateClassesAndMetaclassesCache",
protocol: 'cache',
fn: function (){
var self=this;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
self["@classesAndMetaclassesCache"]=$recv($OrderedCollection())._new();
$recv($recv(self._environment())._classes())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=self["@classesAndMetaclassesCache"];
$recv($1)._add_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._add_($recv(each)._class());
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateClassesAndMetaclassesCache",{},$globals.HLReferencesModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateClassesAndMetaclassesCache\x0a\x09classesAndMetaclassesCache := OrderedCollection new.\x0a\x09\x0a\x09self environment classes do: [ :each |\x0a\x09\x09classesAndMetaclassesCache\x0a\x09\x09\x09\x09add: each; \x0a\x09\x09\x09\x09add: each class ]",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["new", "do:", "classes", "environment", "add:", "class"]
}),
$globals.HLReferencesModel);

$core.addMethod(
$core.method({
selector: "updateMethodsCache",
protocol: 'cache',
fn: function (){
var self=this;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@methodsCache"]=$recv($OrderedCollection())._new();
$recv(self._classesAndMetaclasses())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@methodsCache"])._addAll_($recv(each)._methods());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateMethodsCache",{},$globals.HLReferencesModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateMethodsCache\x0a\x09methodsCache := OrderedCollection new.\x0a\x09\x0a\x09self classesAndMetaclasses\x0a\x09\x09do: [ :each | methodsCache addAll: each methods ]",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["new", "do:", "classesAndMetaclasses", "addAll:", "methods"]
}),
$globals.HLReferencesModel);


});
