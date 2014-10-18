define("helios/Helios-Debugger", ["amber/boot", "amber_core/Kernel-Objects", "helios/Helios-Core", "helios/Helios-Workspace"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Helios-Debugger');
$core.packages["Helios-Debugger"].transport = {"type":"amd","amdNamespace":"helios"};

$core.addClass('HLContextInspectorDecorator', $globals.Object, ['context'], 'Helios-Debugger');
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
$globals.HLContextInspectorDecorator);

$core.addMethod(
$core.method({
selector: "evaluate:on:",
protocol: 'evaluating',
fn: function (aString,anEvaluator){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._context())._evaluate_on_(aString,anEvaluator);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"evaluate:on:",{aString:aString,anEvaluator:anEvaluator},$globals.HLContextInspectorDecorator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anEvaluator"],
source: "evaluate: aString on: anEvaluator\x0a\x09^ self context evaluate: aString on: anEvaluator",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["evaluate:on:", "context"]
}),
$globals.HLContextInspectorDecorator);

$core.addMethod(
$core.method({
selector: "initializeFromContext:",
protocol: 'initialization',
fn: function (aContext){
var self=this;
self["@context"]=aContext;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aContext"],
source: "initializeFromContext: aContext\x0a\x09context := aContext",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLContextInspectorDecorator);

$core.addMethod(
$core.method({
selector: "inspectOn:",
protocol: 'inspecting',
fn: function (anInspector){
var self=this;
var variables,inspectedContext;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$receiver;
variables=$recv($Dictionary())._new();
inspectedContext=self._context();
$1=variables;
$2=$recv(inspectedContext)._locals();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["locals"]=1;
//>>excludeEnd("ctx");
$recv($1)._addAll_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addAll:"]=1;
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(inspectedContext)._notNil())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(inspectedContext)._isBlockContext();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileTrue_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
inspectedContext=$recv(inspectedContext)._outerContext();
inspectedContext;
$3=inspectedContext;
if(($receiver = $3) == null || $receiver.isNil){
return $3;
} else {
return $recv(variables)._addAll_($recv(inspectedContext)._locals());
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$recv(anInspector)._setLabel_("Context");
$4=$recv(anInspector)._setVariables_(variables);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,variables:variables,inspectedContext:inspectedContext},$globals.HLContextInspectorDecorator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| variables inspectedContext |\x0a\x09\x0a\x09variables := Dictionary new.\x0a\x09inspectedContext := self context.\x0a\x09\x0a\x09variables addAll: inspectedContext locals.\x0a\x09\x0a\x09[ inspectedContext notNil and: [ inspectedContext isBlockContext ] ] whileTrue: [\x0a\x09\x09inspectedContext := inspectedContext outerContext.\x0a\x09\x09inspectedContext ifNotNil: [\x0a\x09\x09\x09variables addAll: inspectedContext locals ] ].\x0a\x09\x0a\x09anInspector\x0a\x09\x09setLabel: 'Context';\x0a\x09\x09setVariables: variables",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["new", "context", "addAll:", "locals", "whileTrue:", "and:", "notNil", "isBlockContext", "outerContext", "ifNotNil:", "setLabel:", "setVariables:"]
}),
$globals.HLContextInspectorDecorator);


$core.addMethod(
$core.method({
selector: "on:",
protocol: 'instance creation',
fn: function (aContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._initializeFromContext_(aContext);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aContext:aContext},$globals.HLContextInspectorDecorator.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aContext"],
source: "on: aContext\x0a\x09^ self new\x0a\x09\x09initializeFromContext: aContext;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initializeFromContext:", "new", "yourself"]
}),
$globals.HLContextInspectorDecorator.klass);


$core.addClass('HLDebugger', $globals.HLFocusableWidget, ['model', 'stackListWidget', 'codeWidget', 'inspectorWidget'], 'Helios-Debugger');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLDebugger.comment="I am the main widget for the Helios debugger.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "codeWidget",
protocol: 'widgets',
fn: function (){
var self=this;
function $HLDebuggerCodeWidget(){return $globals.HLDebuggerCodeWidget||(typeof HLDebuggerCodeWidget=="undefined"?nil:HLDebuggerCodeWidget)}
function $HLDebuggerCodeModel(){return $globals.HLDebuggerCodeModel||(typeof HLDebuggerCodeModel=="undefined"?nil:HLDebuggerCodeModel)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$4,$6,$7,$8,$9,$5,$10,$1,$receiver;
$2=self["@codeWidget"];
if(($receiver = $2) == null || $receiver.isNil){
$3=$recv($HLDebuggerCodeWidget())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$4=$3;
$6=$recv($HLDebuggerCodeModel())._new();
$7=$6;
$8=self._model();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["model"]=1;
//>>excludeEnd("ctx");
$recv($7)._debuggerModel_($8);
$9=$recv($6)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
$5=$9;
$recv($4)._model_($5);
$recv($3)._browserModel_(self._model());
$10=$recv($3)._yourself();
self["@codeWidget"]=$10;
$1=self["@codeWidget"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"codeWidget",{},$globals.HLDebugger)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "codeWidget\x0a\x09^ codeWidget ifNil: [ codeWidget := HLDebuggerCodeWidget new\x0a\x09\x09model: (HLDebuggerCodeModel new\x0a\x09\x09\x09debuggerModel: self model;\x0a\x09\x09\x09yourself);\x0a\x09\x09browserModel: self model;\x0a\x09\x09yourself ]",
referencedClasses: ["HLDebuggerCodeWidget", "HLDebuggerCodeModel"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "model:", "new", "debuggerModel:", "model", "yourself", "browserModel:"]
}),
$globals.HLDebugger);

$core.addMethod(
$core.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.HLDebugger.superclass.fn.prototype._cssClass.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=$recv($2).__comma(" hl_debugger");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},$globals.HLDebugger)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cssClass\x0a\x09^ super cssClass, ' hl_debugger'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "cssClass"]
}),
$globals.HLDebugger);

$core.addMethod(
$core.method({
selector: "focus",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._stackListWidget())._focus();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"focus",{},$globals.HLDebugger)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "focus\x0a\x09self stackListWidget focus",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["focus", "stackListWidget"]
}),
$globals.HLDebugger);

$core.addMethod(
$core.method({
selector: "initializeFromError:",
protocol: 'initialization',
fn: function (anError){
var self=this;
function $HLDebuggerModel(){return $globals.HLDebuggerModel||(typeof HLDebuggerModel=="undefined"?nil:HLDebuggerModel)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@model"]=$recv($HLDebuggerModel())._on_(anError);
self._observeModel();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeFromError:",{anError:anError},$globals.HLDebugger)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anError"],
source: "initializeFromError: anError\x0a\x09model := HLDebuggerModel on: anError.\x0a\x09self observeModel",
referencedClasses: ["HLDebuggerModel"],
//>>excludeEnd("ide");
messageSends: ["on:", "observeModel"]
}),
$globals.HLDebugger);

$core.addMethod(
$core.method({
selector: "inspectorWidget",
protocol: 'widgets',
fn: function (){
var self=this;
function $HLInspectorWidget(){return $globals.HLInspectorWidget||(typeof HLInspectorWidget=="undefined"?nil:HLInspectorWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@inspectorWidget"];
if(($receiver = $2) == null || $receiver.isNil){
self["@inspectorWidget"]=$recv($HLInspectorWidget())._new();
$1=self["@inspectorWidget"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspectorWidget",{},$globals.HLDebugger)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inspectorWidget\x0a\x09^ inspectorWidget ifNil: [ \x0a\x09\x09inspectorWidget := HLInspectorWidget new ]",
referencedClasses: ["HLInspectorWidget"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.HLDebugger);

$core.addMethod(
$core.method({
selector: "model",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLDebuggerModel(){return $globals.HLDebuggerModel||(typeof HLDebuggerModel=="undefined"?nil:HLDebuggerModel)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@model"];
if(($receiver = $2) == null || $receiver.isNil){
self["@model"]=$recv($HLDebuggerModel())._new();
$1=self["@model"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"model",{},$globals.HLDebugger)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "model\x0a\x09^ model ifNil: [ model := HLDebuggerModel new ]",
referencedClasses: ["HLDebuggerModel"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.HLDebugger);

$core.addMethod(
$core.method({
selector: "observeModel",
protocol: 'actions',
fn: function (){
var self=this;
function $HLDebuggerContextSelected(){return $globals.HLDebuggerContextSelected||(typeof HLDebuggerContextSelected=="undefined"?nil:HLDebuggerContextSelected)}
function $HLDebuggerStepped(){return $globals.HLDebuggerStepped||(typeof HLDebuggerStepped=="undefined"?nil:HLDebuggerStepped)}
function $HLDebuggerProceeded(){return $globals.HLDebuggerProceeded||(typeof HLDebuggerProceeded=="undefined"?nil:HLDebuggerProceeded)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(self._model())._announcer();
$recv($1)._on_send_to_($HLDebuggerContextSelected(),"onContextSelected:",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=1;
//>>excludeEnd("ctx");
$recv($1)._on_send_to_($HLDebuggerStepped(),"onDebuggerStepped:",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=2;
//>>excludeEnd("ctx");
$2=$recv($1)._on_send_to_($HLDebuggerProceeded(),"onDebuggerProceeded",self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeModel",{},$globals.HLDebugger)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeModel\x0a\x09self model announcer \x0a\x09\x09on: HLDebuggerContextSelected\x0a\x09\x09send: #onContextSelected:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLDebuggerStepped\x0a\x09\x09send: #onDebuggerStepped:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLDebuggerProceeded\x0a\x09\x09send: #onDebuggerProceeded\x0a\x09\x09to: self",
referencedClasses: ["HLDebuggerContextSelected", "HLDebuggerStepped", "HLDebuggerProceeded"],
//>>excludeEnd("ide");
messageSends: ["on:send:to:", "announcer", "model"]
}),
$globals.HLDebugger);

$core.addMethod(
$core.method({
selector: "onContextSelected:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
function $HLContextInspectorDecorator(){return $globals.HLContextInspectorDecorator||(typeof HLContextInspectorDecorator=="undefined"?nil:HLContextInspectorDecorator)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._inspectorWidget())._inspect_($recv($HLContextInspectorDecorator())._on_($recv(anAnnouncement)._context()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onContextSelected:",{anAnnouncement:anAnnouncement},$globals.HLDebugger)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onContextSelected: anAnnouncement\x0a\x09self inspectorWidget inspect: (HLContextInspectorDecorator on: anAnnouncement context)",
referencedClasses: ["HLContextInspectorDecorator"],
//>>excludeEnd("ide");
messageSends: ["inspect:", "inspectorWidget", "on:", "context"]
}),
$globals.HLDebugger);

$core.addMethod(
$core.method({
selector: "onDebuggerProceeded",
protocol: 'reactions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._removeTab();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onDebuggerProceeded",{},$globals.HLDebugger)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onDebuggerProceeded\x0a\x09self removeTab",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeTab"]
}),
$globals.HLDebugger);

$core.addMethod(
$core.method({
selector: "onDebuggerStepped:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
function $HLContextInspectorDecorator(){return $globals.HLContextInspectorDecorator||(typeof HLContextInspectorDecorator=="undefined"?nil:HLContextInspectorDecorator)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._model())._atEnd();
if($core.assert($1)){
self._removeTab();
};
$recv(self._inspectorWidget())._inspect_($recv($HLContextInspectorDecorator())._on_($recv(anAnnouncement)._context()));
$recv(self._stackListWidget())._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onDebuggerStepped:",{anAnnouncement:anAnnouncement},$globals.HLDebugger)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onDebuggerStepped: anAnnouncement\x0a\x09self model atEnd ifTrue: [ self removeTab ].\x0a\x09\x0a\x09self inspectorWidget inspect: (HLContextInspectorDecorator on: anAnnouncement context).\x0a\x09self stackListWidget refresh",
referencedClasses: ["HLContextInspectorDecorator"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "atEnd", "model", "removeTab", "inspect:", "inspectorWidget", "on:", "context", "refresh", "stackListWidget"]
}),
$globals.HLDebugger);

$core.addMethod(
$core.method({
selector: "registerBindingsOn:",
protocol: 'keybindings',
fn: function (aBindingGroup){
var self=this;
function $HLToolCommand(){return $globals.HLToolCommand||(typeof HLToolCommand=="undefined"?nil:HLToolCommand)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($HLToolCommand())._registerConcreteClassesOn_for_(aBindingGroup,self._model());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"registerBindingsOn:",{aBindingGroup:aBindingGroup},$globals.HLDebugger)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBindingGroup"],
source: "registerBindingsOn: aBindingGroup\x0a\x09HLToolCommand \x0a\x09\x09registerConcreteClassesOn: aBindingGroup \x0a\x09\x09for: self model",
referencedClasses: ["HLToolCommand"],
//>>excludeEnd("ide");
messageSends: ["registerConcreteClassesOn:for:", "model"]
}),
$globals.HLDebugger);

$core.addMethod(
$core.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $HLContainer(){return $globals.HLContainer||(typeof HLContainer=="undefined"?nil:HLContainer)}
function $HLVerticalSplitter(){return $globals.HLVerticalSplitter||(typeof HLVerticalSplitter=="undefined"?nil:HLVerticalSplitter)}
function $HLHorizontalSplitter(){return $globals.HLHorizontalSplitter||(typeof HLHorizontalSplitter=="undefined"?nil:HLHorizontalSplitter)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
self._renderHeadOn_(html);
$2=$recv($HLVerticalSplitter())._with_with_(self._codeWidget(),$recv($HLHorizontalSplitter())._with_with_(self._stackListWidget(),self._inspectorWidget()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:with:"]=1;
//>>excludeEnd("ctx");
$1=$recv($HLContainer())._with_($2);
$recv(html)._with_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},$globals.HLDebugger)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderContentOn: html\x0a\x09self renderHeadOn: html.\x0a\x09html with: (HLContainer with: (HLVerticalSplitter\x0a\x09\x09with: self codeWidget\x0a\x09\x09with: (HLHorizontalSplitter\x0a\x09\x09\x09with: self stackListWidget\x0a\x09\x09\x09with: self inspectorWidget)))",
referencedClasses: ["HLContainer", "HLVerticalSplitter", "HLHorizontalSplitter"],
//>>excludeEnd("ide");
messageSends: ["renderHeadOn:", "with:", "with:with:", "codeWidget", "stackListWidget", "inspectorWidget"]
}),
$globals.HLDebugger);

$core.addMethod(
$core.method({
selector: "renderHeadOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._div();
$recv($1)._class_("head");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(html)._h2())._with_($recv($recv(self._model())._error())._messageText());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderHeadOn:",{html:html},$globals.HLDebugger)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderHeadOn: html\x0a\x09html div \x0a\x09\x09class: 'head'; \x0a\x09\x09with: [ html h2 with: self model error messageText ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "h2", "messageText", "error", "model"]
}),
$globals.HLDebugger);

$core.addMethod(
$core.method({
selector: "stackListWidget",
protocol: 'widgets',
fn: function (){
var self=this;
function $HLStackListWidget(){return $globals.HLStackListWidget||(typeof HLStackListWidget=="undefined"?nil:HLStackListWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$4,$1,$receiver;
$2=self["@stackListWidget"];
if(($receiver = $2) == null || $receiver.isNil){
$3=$recv($HLStackListWidget())._on_(self._model());
$recv($3)._next_(self._codeWidget());
$4=$recv($3)._yourself();
self["@stackListWidget"]=$4;
$1=self["@stackListWidget"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"stackListWidget",{},$globals.HLDebugger)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "stackListWidget\x0a\x09^ stackListWidget ifNil: [ \x0a\x09\x09stackListWidget := (HLStackListWidget on: self model)\x0a\x09\x09\x09next: self codeWidget;\x0a\x09\x09\x09yourself ]",
referencedClasses: ["HLStackListWidget"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "next:", "on:", "model", "codeWidget", "yourself"]
}),
$globals.HLDebugger);

$core.addMethod(
$core.method({
selector: "unregister",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.HLDebugger.superclass.fn.prototype._unregister.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["unregister"]=1;
//>>excludeEnd("ctx");
$recv(self._inspectorWidget())._unregister();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"unregister",{},$globals.HLDebugger)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "unregister\x0a\x09super unregister.\x0a\x09self inspectorWidget unregister",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["unregister", "inspectorWidget"]
}),
$globals.HLDebugger);


$core.addMethod(
$core.method({
selector: "on:",
protocol: 'instance creation',
fn: function (anError){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._initializeFromError_(anError);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{anError:anError},$globals.HLDebugger.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anError"],
source: "on: anError\x0a\x09^ self new\x0a\x09\x09initializeFromError: anError;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initializeFromError:", "new", "yourself"]
}),
$globals.HLDebugger.klass);

$core.addMethod(
$core.method({
selector: "tabClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "debugger";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tabClass\x0a\x09^ 'debugger'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLDebugger.klass);

$core.addMethod(
$core.method({
selector: "tabLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "Debugger";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tabLabel\x0a\x09^ 'Debugger'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLDebugger.klass);


$core.addClass('HLDebuggerCodeModel', $globals.HLCodeModel, ['debuggerModel'], 'Helios-Debugger');
$core.addMethod(
$core.method({
selector: "debuggerModel",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@debuggerModel"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "debuggerModel\x0a\x09^ debuggerModel",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLDebuggerCodeModel);

$core.addMethod(
$core.method({
selector: "debuggerModel:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@debuggerModel"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "debuggerModel: anObject\x0a\x09debuggerModel := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLDebuggerCodeModel);

$core.addMethod(
$core.method({
selector: "doIt:",
protocol: 'actions',
fn: function (aString){
var self=this;
function $ErrorHandler(){return $globals.ErrorHandler||(typeof ErrorHandler=="undefined"?nil:ErrorHandler)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._debuggerModel())._evaluate_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._tryCatch_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv($ErrorHandler())._handleError_(e);
return nil;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doIt:",{aString:aString},$globals.HLDebuggerCodeModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "doIt: aString\x0a\x09^ [ self debuggerModel evaluate: aString ]\x0a\x09\x09tryCatch: [ :e | \x0a\x09\x09\x09ErrorHandler handleError: e.\x0a\x09\x09\x09nil ]",
referencedClasses: ["ErrorHandler"],
//>>excludeEnd("ide");
messageSends: ["tryCatch:", "evaluate:", "debuggerModel", "handleError:"]
}),
$globals.HLDebuggerCodeModel);



$core.addClass('HLDebuggerCodeWidget', $globals.HLBrowserCodeWidget, [], 'Helios-Debugger');
$core.addMethod(
$core.method({
selector: "addStopAt:",
protocol: 'actions',
fn: function (anInteger){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@editor"])._setGutterMarker_gutter_value_(anInteger,"stops",$recv($recv("<div class=\x22stop\x22></stop>"._asJQuery())._toArray())._first());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addStopAt:",{anInteger:anInteger},$globals.HLDebuggerCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "addStopAt: anInteger\x0a\x09editor\x0a\x09\x09setGutterMarker: anInteger\x0a\x09\x09gutter: 'stops'\x0a\x09\x09value: '<div class=\x22stop\x22></stop>' asJQuery toArray first",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setGutterMarker:gutter:value:", "first", "toArray", "asJQuery"]
}),
$globals.HLDebuggerCodeWidget);

$core.addMethod(
$core.method({
selector: "clearHighlight",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._editor())._clearGutter_("stops");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"clearHighlight",{},$globals.HLDebuggerCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "clearHighlight\x0a\x09self editor clearGutter: 'stops'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["clearGutter:", "editor"]
}),
$globals.HLDebuggerCodeWidget);

$core.addMethod(
$core.method({
selector: "contents:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._clearHighlight();
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.HLDebuggerCodeWidget.superclass.fn.prototype._contents_.apply($recv(self), [aString]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"contents:",{aString:aString},$globals.HLDebuggerCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "contents: aString\x0a\x09self clearHighlight.\x0a\x09super contents: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["clearHighlight", "contents:"]
}),
$globals.HLDebuggerCodeWidget);

$core.addMethod(
$core.method({
selector: "editorOptions",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.HLDebuggerCodeWidget.superclass.fn.prototype._editorOptions.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv($2)._at_put_("gutters",["CodeMirror-linenumbers", "stops"]);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"editorOptions",{},$globals.HLDebuggerCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "editorOptions\x0a\x09^ super editorOptions\x0a\x09\x09at: 'gutters' put: #('CodeMirror-linenumbers' 'stops');\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "editorOptions", "yourself"]
}),
$globals.HLDebuggerCodeWidget);

$core.addMethod(
$core.method({
selector: "highlight",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$recv(self._browserModel())._nextNode();
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
var node;
node=$receiver;
self._highlightNode_(node);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"highlight",{},$globals.HLDebuggerCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "highlight\x0a\x09self browserModel nextNode ifNotNil: [ :node |\x0a\x09\x09self highlightNode: node ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "nextNode", "browserModel", "highlightNode:"]
}),
$globals.HLDebuggerCodeWidget);

$core.addMethod(
$core.method({
selector: "highlightNode:",
protocol: 'actions',
fn: function (aNode){
var self=this;
var token;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $4,$3,$2,$1,$5,$9,$8,$7,$11,$10,$6,$15,$14,$13,$12,$receiver;
if(($receiver = aNode) == null || $receiver.isNil){
aNode;
} else {
self._clearHighlight();
$4=$recv(aNode)._positionStart();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["positionStart"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__minus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$1=self._addStopAt_($2);
$1;
$5=self._editor();
$9=$recv(aNode)._positionStart();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["positionStart"]=2;
//>>excludeEnd("ctx");
$8=$recv($9)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=2;
//>>excludeEnd("ctx");
$7=$recv($8).__minus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=2;
//>>excludeEnd("ctx");
$11=$recv($recv(aNode)._positionStart())._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$10=$recv($11).__minus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=3;
//>>excludeEnd("ctx");
$6=$globals.HashedCollection._newFromPairs_(["line",$7,"ch",$10]);
$15=$recv(aNode)._positionEnd();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["positionEnd"]=1;
//>>excludeEnd("ctx");
$14=$recv($15)._x();
$13=$recv($14).__minus((1));
$12=$globals.HashedCollection._newFromPairs_(["line",$13,"ch",$recv($recv(aNode)._positionEnd())._y()]);
$recv($5)._setSelection_to_($6,$12);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"highlightNode:",{aNode:aNode,token:token},$globals.HLDebuggerCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "highlightNode: aNode\x0a\x09| token |\x0a\x09\x0a\x09aNode ifNotNil: [\x0a\x09\x09self\x0a\x09\x09\x09clearHighlight;\x0a\x09\x09\x09addStopAt: aNode positionStart x - 1.\x0a\x0a\x09\x09self editor \x0a\x09\x09\x09setSelection: #{ 'line' -> (aNode positionStart x - 1). 'ch' -> (aNode positionStart y - 1) }\x0a\x09\x09\x09to: #{ 'line' -> (aNode positionEnd x - 1). 'ch' -> (aNode positionEnd y) } ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "clearHighlight", "addStopAt:", "-", "x", "positionStart", "setSelection:to:", "editor", "y", "positionEnd"]
}),
$globals.HLDebuggerCodeWidget);

$core.addMethod(
$core.method({
selector: "observeBrowserModel",
protocol: 'actions',
fn: function (){
var self=this;
function $HLDebuggerContextSelected(){return $globals.HLDebuggerContextSelected||(typeof HLDebuggerContextSelected=="undefined"?nil:HLDebuggerContextSelected)}
function $HLDebuggerStepped(){return $globals.HLDebuggerStepped||(typeof HLDebuggerStepped=="undefined"?nil:HLDebuggerStepped)}
function $HLDebuggerWhere(){return $globals.HLDebuggerWhere||(typeof HLDebuggerWhere=="undefined"?nil:HLDebuggerWhere)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$4,$3;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.HLDebuggerCodeWidget.superclass.fn.prototype._observeBrowserModel.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$2=self._browserModel();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["browserModel"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._announcer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["announcer"]=1;
//>>excludeEnd("ctx");
$recv($1)._on_send_to_($HLDebuggerContextSelected(),"onContextSelected",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=1;
//>>excludeEnd("ctx");
$4=self._browserModel();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["browserModel"]=2;
//>>excludeEnd("ctx");
$3=$recv($4)._announcer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["announcer"]=2;
//>>excludeEnd("ctx");
$recv($3)._on_send_to_($HLDebuggerStepped(),"onContextSelected",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=2;
//>>excludeEnd("ctx");
$recv($recv(self._browserModel())._announcer())._on_send_to_($HLDebuggerWhere(),"onContextSelected",self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeBrowserModel",{},$globals.HLDebuggerCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeBrowserModel\x0a\x09super observeBrowserModel.\x0a\x09\x0a\x09self browserModel announcer \x0a\x09\x09on: HLDebuggerContextSelected\x0a\x09\x09send: #onContextSelected\x0a\x09\x09to: self.\x0a\x09\x0a\x09self browserModel announcer \x0a\x09\x09on: HLDebuggerStepped\x0a\x09\x09send: #onContextSelected\x0a\x09\x09to: self.\x0a\x09\x0a\x09self browserModel announcer \x0a\x09\x09on: HLDebuggerWhere\x0a\x09\x09send: #onContextSelected\x0a\x09\x09to: self",
referencedClasses: ["HLDebuggerContextSelected", "HLDebuggerStepped", "HLDebuggerWhere"],
//>>excludeEnd("ide");
messageSends: ["observeBrowserModel", "on:send:to:", "announcer", "browserModel"]
}),
$globals.HLDebuggerCodeWidget);

$core.addMethod(
$core.method({
selector: "onContextSelected",
protocol: 'reactions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._highlight();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onContextSelected",{},$globals.HLDebuggerCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onContextSelected\x0a\x09self highlight",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["highlight"]
}),
$globals.HLDebuggerCodeWidget);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.HLDebuggerCodeWidget.superclass.fn.prototype._renderOn_.apply($recv(self), [html]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._contents_($recv($recv(self._browserModel())._selectedMethod())._source());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.HLDebuggerCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09super renderOn: html.\x0a\x09self contents: self browserModel selectedMethod source",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["renderOn:", "contents:", "source", "selectedMethod", "browserModel"]
}),
$globals.HLDebuggerCodeWidget);



$core.addClass('HLDebuggerModel', $globals.HLToolModel, ['rootContext', 'debugger', 'error'], 'Helios-Debugger');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLDebuggerModel.comment="I am a model for debugging Amber code in Helios.\x0a\x0aMy instances hold a reference to an `ASTDebugger` instance, itself referencing the current `context`. The context should be the root of the context stack.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "atEnd",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._debugger())._atEnd();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"atEnd",{},$globals.HLDebuggerModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "atEnd\x0a\x09^ self debugger atEnd",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["atEnd", "debugger"]
}),
$globals.HLDebuggerModel);

$core.addMethod(
$core.method({
selector: "contexts",
protocol: 'accessing',
fn: function (){
var self=this;
var contexts,context;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
contexts=$recv($OrderedCollection())._new();
context=self._rootContext();
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(context)._notNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileTrue_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(contexts)._add_(context);
context=$recv(context)._outerContext();
return context;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$1=contexts;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"contexts",{contexts:contexts,context:context},$globals.HLDebuggerModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "contexts\x0a\x09| contexts context |\x0a\x09\x0a\x09contexts := OrderedCollection new.\x0a\x09context := self rootContext.\x0a\x09\x0a\x09[ context notNil ] whileTrue: [\x0a\x09\x09contexts add: context.\x0a\x09\x09context := context outerContext ].\x0a\x09\x09\x0a\x09^ contexts",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["new", "rootContext", "whileTrue:", "notNil", "add:", "outerContext"]
}),
$globals.HLDebuggerModel);

$core.addMethod(
$core.method({
selector: "currentContext",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._debugger())._context();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"currentContext",{},$globals.HLDebuggerModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "currentContext\x0a\x09^ self debugger context",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["context", "debugger"]
}),
$globals.HLDebuggerModel);

$core.addMethod(
$core.method({
selector: "currentContext:",
protocol: 'accessing',
fn: function (aContext){
var self=this;
function $HLDebuggerContextSelected(){return $globals.HLDebuggerContextSelected||(typeof HLDebuggerContextSelected=="undefined"?nil:HLDebuggerContextSelected)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
self._withChangesDo_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._selectedMethod_($recv(aContext)._method());
$recv(self._debugger())._context_(aContext);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["context:"]=1;
//>>excludeEnd("ctx");
$1=$recv($HLDebuggerContextSelected())._new();
$recv($1)._context_(aContext);
$2=$recv($1)._yourself();
return $recv(self._announcer())._announce_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"currentContext:",{aContext:aContext},$globals.HLDebuggerModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aContext"],
source: "currentContext: aContext\x0a\x09self withChangesDo: [ \x0a\x09\x09self selectedMethod: aContext method.\x0a\x09\x09self debugger context: aContext.\x0a\x09\x09self announcer announce: (HLDebuggerContextSelected new\x0a\x09\x09\x09context: aContext;\x0a\x09\x09\x09yourself) ]",
referencedClasses: ["HLDebuggerContextSelected"],
//>>excludeEnd("ide");
messageSends: ["withChangesDo:", "selectedMethod:", "method", "context:", "debugger", "announce:", "announcer", "new", "yourself"]
}),
$globals.HLDebuggerModel);

$core.addMethod(
$core.method({
selector: "debugger",
protocol: 'accessing',
fn: function (){
var self=this;
function $ASTDebugger(){return $globals.ASTDebugger||(typeof ASTDebugger=="undefined"?nil:ASTDebugger)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@debugger"];
if(($receiver = $2) == null || $receiver.isNil){
self["@debugger"]=$recv($ASTDebugger())._new();
$1=self["@debugger"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"debugger",{},$globals.HLDebuggerModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "debugger\x0a\x09^ debugger ifNil: [ debugger := ASTDebugger new ]",
referencedClasses: ["ASTDebugger"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.HLDebuggerModel);

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
$globals.HLDebuggerModel);

$core.addMethod(
$core.method({
selector: "evaluate:",
protocol: 'evaluating',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._environment())._evaluate_for_(aString,self._currentContext());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"evaluate:",{aString:aString},$globals.HLDebuggerModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "evaluate: aString\x0a\x09^ self environment \x0a\x09\x09evaluate: aString \x0a\x09\x09for: self currentContext",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["evaluate:for:", "environment", "currentContext"]
}),
$globals.HLDebuggerModel);

$core.addMethod(
$core.method({
selector: "flushInnerContexts",
protocol: 'private',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._currentContext();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["currentContext"]=1;
//>>excludeEnd("ctx");
$recv($1)._innerContext_(nil);
self["@rootContext"]=self._currentContext();
self._initializeContexts();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"flushInnerContexts",{},$globals.HLDebuggerModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "flushInnerContexts\x0a\x09\x22When stepping, the inner contexts are not relevent anymore,\x0a\x09and can be flushed\x22\x0a\x09\x0a\x09self currentContext innerContext: nil.\x0a\x09rootContext := self currentContext.\x0a\x09self initializeContexts",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["innerContext:", "currentContext", "initializeContexts"]
}),
$globals.HLDebuggerModel);

$core.addMethod(
$core.method({
selector: "initializeFromError:",
protocol: 'initialization',
fn: function (anError){
var self=this;
var errorContext;
function $AIContext(){return $globals.AIContext||(typeof AIContext=="undefined"?nil:AIContext)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@error"]=anError;
errorContext=$recv($AIContext())._fromMethodContext_($recv(self["@error"])._context());
self["@rootContext"]=$recv(self["@error"])._signalerContextFrom_(errorContext);
self._selectedMethod_($recv(self["@rootContext"])._method());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeFromError:",{anError:anError,errorContext:errorContext},$globals.HLDebuggerModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anError"],
source: "initializeFromError: anError\x0a\x09| errorContext |\x0a\x09\x0a\x09error := anError.\x0a\x09errorContext := (AIContext fromMethodContext: error context).\x0a\x09rootContext := error signalerContextFrom: errorContext.\x0a\x09self selectedMethod: rootContext method",
referencedClasses: ["AIContext"],
//>>excludeEnd("ide");
messageSends: ["fromMethodContext:", "context", "signalerContextFrom:", "selectedMethod:", "method"]
}),
$globals.HLDebuggerModel);

$core.addMethod(
$core.method({
selector: "nextNode",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._debugger())._node();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextNode",{},$globals.HLDebuggerModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nextNode\x0a\x09^ self debugger node",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["node", "debugger"]
}),
$globals.HLDebuggerModel);

$core.addMethod(
$core.method({
selector: "onStep",
protocol: 'reactions',
fn: function (){
var self=this;
function $HLDebuggerContextSelected(){return $globals.HLDebuggerContextSelected||(typeof HLDebuggerContextSelected=="undefined"?nil:HLDebuggerContextSelected)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$3,$4;
self["@rootContext"]=self._currentContext();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["currentContext"]=1;
//>>excludeEnd("ctx");
$2=self._currentContext();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["currentContext"]=2;
//>>excludeEnd("ctx");
$1=$recv($2)._method();
self._selectedMethod_($1);
$3=$recv($HLDebuggerContextSelected())._new();
$recv($3)._context_(self._currentContext());
$4=$recv($3)._yourself();
$recv(self._announcer())._announce_($4);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onStep",{},$globals.HLDebuggerModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onStep\x0a\x09rootContext := self currentContext.\x0a\x09\x0a\x09\x22Force a refresh of the context list and code widget\x22\x0a\x09self selectedMethod: self currentContext method.\x0a\x09self announcer announce: (HLDebuggerContextSelected new\x0a\x09\x09context: self currentContext;\x0a\x09\x09yourself)",
referencedClasses: ["HLDebuggerContextSelected"],
//>>excludeEnd("ide");
messageSends: ["currentContext", "selectedMethod:", "method", "announce:", "announcer", "context:", "new", "yourself"]
}),
$globals.HLDebuggerModel);

$core.addMethod(
$core.method({
selector: "proceed",
protocol: 'actions',
fn: function (){
var self=this;
function $HLDebuggerProceeded(){return $globals.HLDebuggerProceeded||(typeof HLDebuggerProceeded=="undefined"?nil:HLDebuggerProceeded)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._debugger())._proceed();
$recv(self._announcer())._announce_($recv($HLDebuggerProceeded())._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"proceed",{},$globals.HLDebuggerModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "proceed\x0a\x09self debugger proceed.\x0a\x09\x0a\x09self announcer announce: HLDebuggerProceeded new",
referencedClasses: ["HLDebuggerProceeded"],
//>>excludeEnd("ide");
messageSends: ["proceed", "debugger", "announce:", "announcer", "new"]
}),
$globals.HLDebuggerModel);

$core.addMethod(
$core.method({
selector: "restart",
protocol: 'actions',
fn: function (){
var self=this;
function $HLDebuggerStepped(){return $globals.HLDebuggerStepped||(typeof HLDebuggerStepped=="undefined"?nil:HLDebuggerStepped)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$recv(self._debugger())._restart();
self._onStep();
$1=$recv($HLDebuggerStepped())._new();
$recv($1)._context_(self._currentContext());
$2=$recv($1)._yourself();
$recv(self._announcer())._announce_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"restart",{},$globals.HLDebuggerModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "restart\x0a\x09self debugger restart.\x0a\x09self onStep.\x0a\x09\x0a\x09self announcer announce: (HLDebuggerStepped new\x0a\x09\x09context: self currentContext;\x0a\x09\x09yourself)",
referencedClasses: ["HLDebuggerStepped"],
//>>excludeEnd("ide");
messageSends: ["restart", "debugger", "onStep", "announce:", "announcer", "context:", "new", "currentContext", "yourself"]
}),
$globals.HLDebuggerModel);

$core.addMethod(
$core.method({
selector: "rootContext",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@rootContext"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "rootContext\x0a\x09^ rootContext",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLDebuggerModel);

$core.addMethod(
$core.method({
selector: "stepOver",
protocol: 'actions',
fn: function (){
var self=this;
function $HLDebuggerStepped(){return $globals.HLDebuggerStepped||(typeof HLDebuggerStepped=="undefined"?nil:HLDebuggerStepped)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$recv(self._debugger())._stepOver();
self._onStep();
$1=$recv($HLDebuggerStepped())._new();
$recv($1)._context_(self._currentContext());
$2=$recv($1)._yourself();
$recv(self._announcer())._announce_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"stepOver",{},$globals.HLDebuggerModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "stepOver\x0a\x09self debugger stepOver.\x0a\x09self onStep.\x0a\x09\x0a\x09self announcer announce: (HLDebuggerStepped new\x0a\x09\x09context: self currentContext;\x0a\x09\x09yourself)",
referencedClasses: ["HLDebuggerStepped"],
//>>excludeEnd("ide");
messageSends: ["stepOver", "debugger", "onStep", "announce:", "announcer", "context:", "new", "currentContext", "yourself"]
}),
$globals.HLDebuggerModel);

$core.addMethod(
$core.method({
selector: "where",
protocol: 'actions',
fn: function (){
var self=this;
function $HLDebuggerWhere(){return $globals.HLDebuggerWhere||(typeof HLDebuggerWhere=="undefined"?nil:HLDebuggerWhere)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._announcer())._announce_($recv($HLDebuggerWhere())._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"where",{},$globals.HLDebuggerModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "where\x0a\x09self announcer announce: HLDebuggerWhere new",
referencedClasses: ["HLDebuggerWhere"],
//>>excludeEnd("ide");
messageSends: ["announce:", "announcer", "new"]
}),
$globals.HLDebuggerModel);


$core.addMethod(
$core.method({
selector: "on:",
protocol: 'instance creation',
fn: function (anError){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._initializeFromError_(anError);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{anError:anError},$globals.HLDebuggerModel.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anError"],
source: "on: anError\x0a\x09^ self new\x0a\x09\x09initializeFromError: anError;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initializeFromError:", "new", "yourself"]
}),
$globals.HLDebuggerModel.klass);


$core.addClass('HLErrorHandler', $globals.Object, [], 'Helios-Debugger');
$core.addMethod(
$core.method({
selector: "confirmDebugError:",
protocol: 'error handling',
fn: function (anError){
var self=this;
function $HLConfirmationWidget(){return $globals.HLConfirmationWidget||(typeof HLConfirmationWidget=="undefined"?nil:HLConfirmationWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($HLConfirmationWidget())._new();
$recv($1)._confirmationString_($recv(anError)._messageText());
$recv($1)._actionBlock_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._debugError_(anError);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv($1)._cancelButtonLabel_("Abandon");
$recv($1)._confirmButtonLabel_("Debug");
$2=$recv($1)._show();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"confirmDebugError:",{anError:anError},$globals.HLErrorHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anError"],
source: "confirmDebugError: anError\x0a\x09HLConfirmationWidget new\x0a\x09\x09confirmationString: anError messageText;\x0a\x09\x09actionBlock: [ self debugError: anError ];\x0a\x09\x09cancelButtonLabel: 'Abandon';\x0a\x09\x09confirmButtonLabel: 'Debug';\x0a\x09\x09show",
referencedClasses: ["HLConfirmationWidget"],
//>>excludeEnd("ide");
messageSends: ["confirmationString:", "new", "messageText", "actionBlock:", "debugError:", "cancelButtonLabel:", "confirmButtonLabel:", "show"]
}),
$globals.HLErrorHandler);

$core.addMethod(
$core.method({
selector: "debugError:",
protocol: 'error handling',
fn: function (anError){
var self=this;
function $HLDebugger(){return $globals.HLDebugger||(typeof HLDebugger=="undefined"?nil:HLDebugger)}
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
function $ConsoleErrorHandler(){return $globals.ConsoleErrorHandler||(typeof ConsoleErrorHandler=="undefined"?nil:ConsoleErrorHandler)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($HLDebugger())._on_(anError))._openAsTab();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._on_do_($Error(),(function(error){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($ConsoleErrorHandler())._new())._handleError_(error);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({error:error},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"debugError:",{anError:anError},$globals.HLErrorHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anError"],
source: "debugError: anError\x0a\x0a\x09[ \x0a\x09\x09(HLDebugger on: anError) openAsTab \x0a\x09] \x0a\x09\x09on: Error \x0a\x09\x09do: [ :error | ConsoleErrorHandler new handleError: error ]",
referencedClasses: ["HLDebugger", "Error", "ConsoleErrorHandler"],
//>>excludeEnd("ide");
messageSends: ["on:do:", "openAsTab", "on:", "handleError:", "new"]
}),
$globals.HLErrorHandler);

$core.addMethod(
$core.method({
selector: "handleError:",
protocol: 'error handling',
fn: function (anError){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._confirmDebugError_(anError);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleError:",{anError:anError},$globals.HLErrorHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anError"],
source: "handleError: anError\x0a\x09self confirmDebugError: anError",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["confirmDebugError:"]
}),
$globals.HLErrorHandler);

$core.addMethod(
$core.method({
selector: "onErrorHandled",
protocol: 'error handling',
fn: function (){
var self=this;
function $HLProgressWidget(){return $globals.HLProgressWidget||(typeof HLProgressWidget=="undefined"?nil:HLProgressWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($HLProgressWidget())._default();
$recv($1)._flush();
$2=$recv($1)._remove();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onErrorHandled",{},$globals.HLErrorHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onErrorHandled\x0a\x09\x22when an error is handled, we need to make sure that\x0a\x09any progress bar widget gets removed. Because HLProgressBarWidget is asynchronous,\x0a\x09it has to be done here.\x22\x0a\x09\x0a\x09HLProgressWidget default \x0a\x09\x09flush; \x0a\x09\x09remove",
referencedClasses: ["HLProgressWidget"],
//>>excludeEnd("ide");
messageSends: ["flush", "default", "remove"]
}),
$globals.HLErrorHandler);



$core.addClass('HLStackListWidget', $globals.HLToolListWidget, [], 'Helios-Debugger');
$core.addMethod(
$core.method({
selector: "items",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._model())._contexts();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"items",{},$globals.HLStackListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "items\x0a\x09^ self model contexts",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["contexts", "model"]
}),
$globals.HLStackListWidget);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Call stack";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'Call stack'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLStackListWidget);

$core.addMethod(
$core.method({
selector: "observeModel",
protocol: 'actions',
fn: function (){
var self=this;
function $HLDebuggerStepped(){return $globals.HLDebuggerStepped||(typeof HLDebuggerStepped=="undefined"?nil:HLDebuggerStepped)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.HLStackListWidget.superclass.fn.prototype._observeModel.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv($recv(self._model())._announcer())._on_send_to_($HLDebuggerStepped(),"onDebuggerStepped:",self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeModel",{},$globals.HLStackListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeModel\x0a\x09super observeModel.\x0a\x09\x0a\x09self model announcer \x0a\x09\x09on: HLDebuggerStepped\x0a\x09\x09send: #onDebuggerStepped:\x0a\x09\x09to: self",
referencedClasses: ["HLDebuggerStepped"],
//>>excludeEnd("ide");
messageSends: ["observeModel", "on:send:to:", "announcer", "model"]
}),
$globals.HLStackListWidget);

$core.addMethod(
$core.method({
selector: "onDebuggerStepped:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@items"]=nil;
self._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onDebuggerStepped:",{anAnnouncement:anAnnouncement},$globals.HLStackListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onDebuggerStepped: anAnnouncement\x0a\x09items := nil.\x0a\x09self refresh",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["refresh"]
}),
$globals.HLStackListWidget);

$core.addMethod(
$core.method({
selector: "proceed",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._model())._proceed();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"proceed",{},$globals.HLStackListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "proceed\x0a\x09self model proceed",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["proceed", "model"]
}),
$globals.HLStackListWidget);

$core.addMethod(
$core.method({
selector: "renderButtonsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$4,$5,$6,$7,$8,$9,$10,$2;
$1=$recv(html)._div();
$recv($1)._class_("debugger_bar");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["button"]=1;
//>>excludeEnd("ctx");
$recv($3)._class_("btn restart");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=2;
//>>excludeEnd("ctx");
$recv($3)._with_("Restart");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$4=$recv($3)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._restart();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["onClick:"]=1;
//>>excludeEnd("ctx");
$4;
$5=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["button"]=2;
//>>excludeEnd("ctx");
$recv($5)._class_("btn where");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=3;
//>>excludeEnd("ctx");
$recv($5)._with_("Where");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$6=$recv($5)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._where();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["onClick:"]=2;
//>>excludeEnd("ctx");
$6;
$7=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["button"]=3;
//>>excludeEnd("ctx");
$recv($7)._class_("btn stepOver");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=4;
//>>excludeEnd("ctx");
$recv($7)._with_("Step over");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
$8=$recv($7)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._stepOver();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["onClick:"]=3;
//>>excludeEnd("ctx");
$8;
$9=$recv(html)._button();
$recv($9)._class_("btn proceed");
$recv($9)._with_("Proceed");
$10=$recv($9)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._proceed();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)});
//>>excludeEnd("ctx");
}));
return $10;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},$globals.HLStackListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderButtonsOn: html\x0a\x09html div \x0a\x09\x09class: 'debugger_bar'; \x0a\x09\x09with: [\x0a\x09\x09\x09html button \x0a\x09\x09\x09\x09class: 'btn restart';\x0a\x09\x09\x09\x09with: 'Restart';\x0a\x09\x09\x09\x09onClick: [ self restart ].\x0a\x09\x09\x09html button \x0a\x09\x09\x09\x09class: 'btn where';\x0a\x09\x09\x09\x09with: 'Where';\x0a\x09\x09\x09\x09onClick: [ self where ].\x0a\x09\x09\x09html button \x0a\x09\x09\x09\x09class: 'btn stepOver';\x0a\x09\x09\x09\x09with: 'Step over';\x0a\x09\x09\x09\x09onClick: [ self stepOver ].\x0a\x09\x09\x09html button \x0a\x09\x09\x09\x09class: 'btn proceed';\x0a\x09\x09\x09\x09with: 'Proceed';\x0a\x09\x09\x09\x09onClick: [ self proceed ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "button", "onClick:", "restart", "where", "stepOver", "proceed"]
}),
$globals.HLStackListWidget);

$core.addMethod(
$core.method({
selector: "restart",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._model())._restart();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"restart",{},$globals.HLStackListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "restart\x0a\x09self model restart",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["restart", "model"]
}),
$globals.HLStackListWidget);

$core.addMethod(
$core.method({
selector: "selectItem:",
protocol: 'actions',
fn: function (aContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._model())._currentContext_(aContext);
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.HLStackListWidget.superclass.fn.prototype._selectItem_.apply($recv(self), [aContext]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectItem:",{aContext:aContext},$globals.HLStackListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aContext"],
source: "selectItem: aContext\x0a   \x09self model currentContext: aContext.\x0a\x09super selectItem: aContext",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["currentContext:", "model", "selectItem:"]
}),
$globals.HLStackListWidget);

$core.addMethod(
$core.method({
selector: "selectedItem",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._model())._currentContext();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectedItem",{},$globals.HLStackListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selectedItem\x0a   \x09^ self model currentContext",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["currentContext", "model"]
}),
$globals.HLStackListWidget);

$core.addMethod(
$core.method({
selector: "stepOver",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._model())._stepOver();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"stepOver",{},$globals.HLStackListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "stepOver\x0a\x09self model stepOver",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["stepOver", "model"]
}),
$globals.HLStackListWidget);

$core.addMethod(
$core.method({
selector: "where",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._model())._where();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"where",{},$globals.HLStackListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "where\x0a\x09self model where",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["where", "model"]
}),
$globals.HLStackListWidget);


});
