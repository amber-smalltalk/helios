define("helios/Helios-Inspector", ["amber/boot", "helios/Helios-Core"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Helios-Inspector');
$core.packages["Helios-Inspector"].transport = {"type":"amd","amdNamespace":"helios"};

$core.addClass('HLInspectorDisplayWidget', $globals.HLNavigationListWidget, ['inspector'], 'Helios-Inspector');
$core.addMethod(
$core.method({
selector: "inspector",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@inspector"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inspector\x0a\x09^ inspector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLInspectorDisplayWidget);

$core.addMethod(
$core.method({
selector: "inspector:",
protocol: 'accessing',
fn: function (anInspector){
var self=this;
self["@inspector"]=anInspector;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInspector"],
source: "inspector: anInspector\x0a\x09inspector := anInspector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLInspectorDisplayWidget);

$core.addMethod(
$core.method({
selector: "model",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._inspector())._model();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"model",{},$globals.HLInspectorDisplayWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "model\x0a\x0a\x09^ self inspector model",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["model", "inspector"]
}),
$globals.HLInspectorDisplayWidget);

$core.addMethod(
$core.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(html)._div())._with_(self._selectionDisplayString());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},$globals.HLInspectorDisplayWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderContentOn: html\x0a\x09\x0a    html div with: self selectionDisplayString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "div", "selectionDisplayString"]
}),
$globals.HLInspectorDisplayWidget);

$core.addMethod(
$core.method({
selector: "selectionDisplayString",
protocol: 'rendering',
fn: function (){
var self=this;
var selection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$5,$4,$3,$2;
$1=self._model();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["model"]=1;
//>>excludeEnd("ctx");
selection=$recv($1)._selection();
$5=self._model();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["model"]=2;
//>>excludeEnd("ctx");
$4=$recv($5)._variables();
$3=$recv($4)._includesKey_(selection);
if($core.assert($3)){
$2=$recv($recv(self._model())._instVarObjectAt_(selection))._printString();
} else {
$2="";
};
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectionDisplayString",{selection:selection},$globals.HLInspectorDisplayWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selectionDisplayString\x0a\x09|selection|\x0a\x09selection := self model selection.\x0a    ^ (self model variables includesKey: selection)\x0a    \x09ifTrue:[ (self model instVarObjectAt: selection) printString ]\x0a      \x09ifFalse:[ '' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selection", "model", "ifTrue:ifFalse:", "includesKey:", "variables", "printString", "instVarObjectAt:"]
}),
$globals.HLInspectorDisplayWidget);



$core.addClass('HLInspectorModel', $globals.HLModel, ['inspectee', 'code', 'variables', 'label', 'selection'], 'Helios-Inspector');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLInspectorModel.comment="I am the model of the Helios inspector `HLInspectorWidget`.\x0a\x0a## API\x0a\x0aUse the method `inspect:on:` to inspect an object on an inspector.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "code",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLCodeModel(){return $globals.HLCodeModel||(typeof HLCodeModel=="undefined"?nil:HLCodeModel)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@code"];
if(($receiver = $2) == null || $receiver.isNil){
self["@code"]=$recv($HLCodeModel())._on_(self._environment());
$1=self["@code"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"code",{},$globals.HLInspectorModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "code\x0a\x09\x22Answers the code model working for this workspace model\x22\x0a\x09^ code ifNil:[ code := HLCodeModel on: self environment ]",
referencedClasses: ["HLCodeModel"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "on:", "environment"]
}),
$globals.HLInspectorModel);

$core.addMethod(
$core.method({
selector: "inspect:on:",
protocol: 'actions',
fn: function (anObject,anInspector){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@inspectee"]=anObject;
self["@variables"]=[];
$recv(self["@inspectee"])._inspectOn_(anInspector);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspect:on:",{anObject:anObject,anInspector:anInspector},$globals.HLInspectorModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "anInspector"],
source: "inspect: anObject on: anInspector\x0a\x09inspectee := anObject.\x0a\x09variables := #().\x0a\x09inspectee inspectOn: anInspector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["inspectOn:"]
}),
$globals.HLInspectorModel);

$core.addMethod(
$core.method({
selector: "inspectee",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@inspectee"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inspectee \x0a\x09^ inspectee",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLInspectorModel);

$core.addMethod(
$core.method({
selector: "inspectee:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@inspectee"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "inspectee: anObject \x0a\x09inspectee := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLInspectorModel);

$core.addMethod(
$core.method({
selector: "instVarObjectAt:",
protocol: 'actions',
fn: function (anInstVarName){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._variables())._at_(anInstVarName);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"instVarObjectAt:",{anInstVarName:anInstVarName},$globals.HLInspectorModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInstVarName"],
source: "instVarObjectAt: anInstVarName\x0a\x09^ self variables at: anInstVarName",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "variables"]
}),
$globals.HLInspectorModel);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@label"];
if(($receiver = $2) == null || $receiver.isNil){
$1=$recv(self._inspectee())._printString();
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"label",{},$globals.HLInspectorModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a    ^ label ifNil: [ self inspectee printString ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "printString", "inspectee"]
}),
$globals.HLInspectorModel);

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
source: "label: aString\x0a    label := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLInspectorModel);

$core.addMethod(
$core.method({
selector: "selectedInstVar:",
protocol: 'actions',
fn: function (anInstVarName){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._selection_(anInstVarName);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectedInstVar:",{anInstVarName:anInstVarName},$globals.HLInspectorModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInstVarName"],
source: "selectedInstVar: anInstVarName\x0a    self selection: anInstVarName",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selection:"]
}),
$globals.HLInspectorModel);

$core.addMethod(
$core.method({
selector: "selectedInstVarObject",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._instVarObjectAt_(self._selection());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectedInstVarObject",{},$globals.HLInspectorModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selectedInstVarObject\x0a\x09^ self instVarObjectAt: self selection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["instVarObjectAt:", "selection"]
}),
$globals.HLInspectorModel);

$core.addMethod(
$core.method({
selector: "selection",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@selection"];
if(($receiver = $2) == null || $receiver.isNil){
$1="";
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selection",{},$globals.HLInspectorModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selection\x0a\x09^ selection ifNil:[ '' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.HLInspectorModel);

$core.addMethod(
$core.method({
selector: "selection:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
function $HLInstanceVariableSelected(){return $globals.HLInstanceVariableSelected||(typeof HLInstanceVariableSelected=="undefined"?nil:HLInstanceVariableSelected)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@selection"]=anObject;
$recv(self._announcer())._announce_($recv($HLInstanceVariableSelected())._on_(self["@selection"]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selection:",{anObject:anObject},$globals.HLInspectorModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "selection: anObject\x0a\x09selection := anObject.\x0a\x0a\x09self announcer announce: (HLInstanceVariableSelected on: selection)",
referencedClasses: ["HLInstanceVariableSelected"],
//>>excludeEnd("ide");
messageSends: ["announce:", "announcer", "on:"]
}),
$globals.HLInspectorModel);

$core.addMethod(
$core.method({
selector: "subscribe:",
protocol: 'actions',
fn: function (aWidget){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(aWidget)._subscribeTo_(self._announcer());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subscribe:",{aWidget:aWidget},$globals.HLInspectorModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aWidget"],
source: "subscribe: aWidget\x0a\x09aWidget subscribeTo: self announcer",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subscribeTo:", "announcer"]
}),
$globals.HLInspectorModel);

$core.addMethod(
$core.method({
selector: "variables",
protocol: 'accessing',
fn: function (){
var self=this;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@variables"];
if(($receiver = $2) == null || $receiver.isNil){
$1=$recv($Dictionary())._new();
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"variables",{},$globals.HLInspectorModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "variables\x0a\x09^ variables ifNil: [ Dictionary new ]",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.HLInspectorModel);

$core.addMethod(
$core.method({
selector: "variables:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
self["@variables"]=aCollection;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "variables: aCollection\x0a\x09variables := aCollection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLInspectorModel);


$core.addMethod(
$core.method({
selector: "on:",
protocol: 'actions',
fn: function (anEnvironment){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._environment_(anEnvironment);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{anEnvironment:anEnvironment},$globals.HLInspectorModel.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anEnvironment"],
source: "on: anEnvironment\x0a\x0a\x09^ self new\x0a    \x09environment: anEnvironment;\x0a        yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["environment:", "new", "yourself"]
}),
$globals.HLInspectorModel.klass);


$core.addClass('HLInspectorVariablesWidget', $globals.HLNavigationListWidget, ['announcer', 'inspector', 'list', 'diveButton'], 'Helios-Inspector');
$core.addMethod(
$core.method({
selector: "announcer",
protocol: 'accessing',
fn: function (){
var self=this;
function $Announcer(){return $globals.Announcer||(typeof Announcer=="undefined"?nil:Announcer)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@announcer"];
if(($receiver = $2) == null || $receiver.isNil){
self["@announcer"]=$recv($Announcer())._new();
$1=self["@announcer"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"announcer",{},$globals.HLInspectorVariablesWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "announcer\x0a\x09^ announcer ifNil:[ announcer := Announcer new ]",
referencedClasses: ["Announcer"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.HLInspectorVariablesWidget);

$core.addMethod(
$core.method({
selector: "defaultItems",
protocol: 'defaults',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._variables();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultItems",{},$globals.HLInspectorVariablesWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultItems\x0a\x09^ self variables",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["variables"]
}),
$globals.HLInspectorVariablesWidget);

$core.addMethod(
$core.method({
selector: "dive",
protocol: 'actions',
fn: function (){
var self=this;
function $HLDiveRequested(){return $globals.HLDiveRequested||(typeof HLDiveRequested=="undefined"?nil:HLDiveRequested)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._announcer())._announce_($recv($HLDiveRequested())._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dive",{},$globals.HLInspectorVariablesWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dive\x0a\x09self announcer announce: HLDiveRequested new",
referencedClasses: ["HLDiveRequested"],
//>>excludeEnd("ide");
messageSends: ["announce:", "announcer", "new"]
}),
$globals.HLInspectorVariablesWidget);

$core.addMethod(
$core.method({
selector: "inspector",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@inspector"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inspector\x0a\x09^ inspector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLInspectorVariablesWidget);

$core.addMethod(
$core.method({
selector: "inspector:",
protocol: 'accessing',
fn: function (anInspector){
var self=this;
self["@inspector"]=anInspector;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInspector"],
source: "inspector: anInspector\x0a\x09inspector := anInspector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLInspectorVariablesWidget);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._model())._label();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"label",{},$globals.HLInspectorVariablesWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ self model label",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["label", "model"]
}),
$globals.HLInspectorVariablesWidget);

$core.addMethod(
$core.method({
selector: "model",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._inspector())._model();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"model",{},$globals.HLInspectorVariablesWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "model\x0a    ^ self inspector model",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["model", "inspector"]
}),
$globals.HLInspectorVariablesWidget);

$core.addMethod(
$core.method({
selector: "refresh",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._variables()).__eq(self._items());
if(!$core.assert($1)){
self._resetItems();
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.HLInspectorVariablesWidget.superclass.fn.prototype._refresh.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"refresh",{},$globals.HLInspectorVariablesWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "refresh\x0a\x09self variables = self items ifFalse: [\x0a\x09\x09self resetItems.\x0a    \x09super refresh ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "=", "variables", "items", "resetItems", "refresh"]
}),
$globals.HLInspectorVariablesWidget);

$core.addMethod(
$core.method({
selector: "renderButtonsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._button();
$recv($1)._class_("btn");
$recv($1)._with_("Dive");
$2=$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._dive();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self["@diveButton"]=$2;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},$globals.HLInspectorVariablesWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderButtonsOn: html\x0a\x09diveButton := html button \x0a\x09\x09class: 'btn';\x0a\x09\x09with: 'Dive'; \x0a\x09\x09onClick: [ self dive ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "button", "with:", "onClick:", "dive"]
}),
$globals.HLInspectorVariablesWidget);

$core.addMethod(
$core.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._renderHeadOn_(html);
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.HLInspectorVariablesWidget.superclass.fn.prototype._renderContentOn_.apply($recv(self), [html]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(self._wrapper())._onDblClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._dive();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},$globals.HLInspectorVariablesWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderContentOn: html\x0a\x09self renderHeadOn: html.\x0a\x09super renderContentOn: html.\x0a\x09self wrapper onDblClick: [ self dive ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["renderHeadOn:", "renderContentOn:", "onDblClick:", "wrapper", "dive"]
}),
$globals.HLInspectorVariablesWidget);

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
$recv($1)._class_("list-label");
$2=$recv($1)._with_(self._label());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderHeadOn:",{html:html},$globals.HLInspectorVariablesWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderHeadOn: html\x0a\x09html div \x0a\x09\x09class: 'list-label';\x0a\x09\x09with: self label",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "label"]
}),
$globals.HLInspectorVariablesWidget);

$core.addMethod(
$core.method({
selector: "resetItems",
protocol: 'actions',
fn: function (){
var self=this;
self["@items"]=nil;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "resetItems\x0a\x09items := nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLInspectorVariablesWidget);

$core.addMethod(
$core.method({
selector: "selectItem:",
protocol: 'reactions',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.HLInspectorVariablesWidget.superclass.fn.prototype._selectItem_.apply($recv(self), [anObject]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(self._model())._selectedInstVar_(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectItem:",{anObject:anObject},$globals.HLInspectorVariablesWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "selectItem: anObject\x0a\x09super selectItem: anObject.\x0a    self model selectedInstVar: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selectItem:", "selectedInstVar:", "model"]
}),
$globals.HLInspectorVariablesWidget);

$core.addMethod(
$core.method({
selector: "selection",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._model())._selection();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selection",{},$globals.HLInspectorVariablesWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selection\x0a\x09^ self model selection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selection", "model"]
}),
$globals.HLInspectorVariablesWidget);

$core.addMethod(
$core.method({
selector: "variables",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._model())._variables())._keys();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"variables",{},$globals.HLInspectorVariablesWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "variables\x0a\x09^ self model variables keys",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["keys", "variables", "model"]
}),
$globals.HLInspectorVariablesWidget);



$core.addClass('HLInspectorWidget', $globals.HLWidget, ['model', 'variablesWidget', 'displayWidget', 'codeWidget'], 'Helios-Inspector');
$core.addMethod(
$core.method({
selector: "codeWidget",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@codeWidget"];
if(($receiver = $2) == null || $receiver.isNil){
self["@codeWidget"]=self._defaultCodeWidget();
$1=self["@codeWidget"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"codeWidget",{},$globals.HLInspectorWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "codeWidget\x0a\x09^ codeWidget ifNil: [\x0a\x09\x09codeWidget := self defaultCodeWidget ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "defaultCodeWidget"]
}),
$globals.HLInspectorWidget);

$core.addMethod(
$core.method({
selector: "codeWidget:",
protocol: 'accessing',
fn: function (aWidget){
var self=this;
self["@codeWidget"]=aWidget;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aWidget"],
source: "codeWidget: aWidget\x0a\x09codeWidget := aWidget",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLInspectorWidget);

$core.addMethod(
$core.method({
selector: "defaultCodeWidget",
protocol: 'defaults',
fn: function (){
var self=this;
function $HLCodeWidget(){return $globals.HLCodeWidget||(typeof HLCodeWidget=="undefined"?nil:HLCodeWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$5,$4,$6,$1;
$2=$recv($HLCodeWidget())._new();
$3=$2;
$5=self._model();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["model"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._code();
$recv($3)._model_($4);
$recv($2)._receiver_($recv(self._model())._inspectee());
$6=$recv($2)._yourself();
$1=$6;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultCodeWidget",{},$globals.HLInspectorWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultCodeWidget\x0a\x09^ HLCodeWidget new\x0a    \x09model: self model code;\x0a       \x09receiver: self model inspectee;\x0a       \x09yourself",
referencedClasses: ["HLCodeWidget"],
//>>excludeEnd("ide");
messageSends: ["model:", "new", "code", "model", "receiver:", "inspectee", "yourself"]
}),
$globals.HLInspectorWidget);

$core.addMethod(
$core.method({
selector: "displayWidget",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLInspectorDisplayWidget(){return $globals.HLInspectorDisplayWidget||(typeof HLInspectorDisplayWidget=="undefined"?nil:HLInspectorDisplayWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$4,$1,$receiver;
$2=self["@displayWidget"];
if(($receiver = $2) == null || $receiver.isNil){
$3=$recv($HLInspectorDisplayWidget())._new();
$recv($3)._inspector_(self);
$4=$recv($3)._yourself();
self["@displayWidget"]=$4;
$1=self["@displayWidget"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"displayWidget",{},$globals.HLInspectorWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "displayWidget\x0a\x09^ displayWidget ifNil: [\x0a\x09\x09displayWidget := HLInspectorDisplayWidget new\x0a    \x09\x09inspector: self;\x0a        \x09yourself ]",
referencedClasses: ["HLInspectorDisplayWidget"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "inspector:", "new", "yourself"]
}),
$globals.HLInspectorWidget);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.HLInspectorWidget.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._register();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.HLInspectorWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self register",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "register"]
}),
$globals.HLInspectorWidget);

$core.addMethod(
$core.method({
selector: "inspect:",
protocol: 'actions',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$recv(self._model())._inspect_on_(anObject,self);
$recv(self._codeWidget())._receiver_(anObject);
self._refreshVariablesWidget();
$1=self._refreshDisplayWidget();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspect:",{anObject:anObject},$globals.HLInspectorWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "inspect: anObject\x0a\x09self model inspect: anObject on: self.\x0a\x09self codeWidget receiver: anObject.\x0a    \x0a\x09self \x0a    \x09refreshVariablesWidget;\x0a\x09\x09refreshDisplayWidget",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["inspect:on:", "model", "receiver:", "codeWidget", "refreshVariablesWidget", "refreshDisplayWidget"]
}),
$globals.HLInspectorWidget);

$core.addMethod(
$core.method({
selector: "inspectee",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._model())._inspectee();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspectee",{},$globals.HLInspectorWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inspectee\x0a\x09^ self model inspectee",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["inspectee", "model"]
}),
$globals.HLInspectorWidget);

$core.addMethod(
$core.method({
selector: "inspectee:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._model())._inspectee_(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspectee:",{anObject:anObject},$globals.HLInspectorWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "inspectee: anObject\x0a\x09self model inspectee: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["inspectee:", "model"]
}),
$globals.HLInspectorWidget);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._model())._label();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"label",{},$globals.HLInspectorWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a    ^ self model label",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["label", "model"]
}),
$globals.HLInspectorWidget);

$core.addMethod(
$core.method({
selector: "model",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLInspectorModel(){return $globals.HLInspectorModel||(typeof HLInspectorModel=="undefined"?nil:HLInspectorModel)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@model"];
if(($receiver = $2) == null || $receiver.isNil){
self._model_($recv($HLInspectorModel())._new());
$1=self["@model"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"model",{},$globals.HLInspectorWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "model\x0a\x09^ model ifNil: [ \x0a    \x09self model: HLInspectorModel new.\x0a\x09\x09model ]",
referencedClasses: ["HLInspectorModel"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "model:", "new"]
}),
$globals.HLInspectorWidget);

$core.addMethod(
$core.method({
selector: "model:",
protocol: 'accessing',
fn: function (aModel){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self["@model"]=aModel;
$recv(self._codeWidget())._model_($recv(aModel)._code());
self._observeCodeWidget();
self._observeVariablesWidget();
$1=self._observeModel();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"model:",{aModel:aModel},$globals.HLInspectorWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aModel"],
source: "model: aModel\x0a\x09model := aModel. \x0a    self codeWidget model: aModel code.\x0a    \x0a    self \x0a        observeCodeWidget;\x0a    \x09observeVariablesWidget;\x0a        observeModel",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["model:", "codeWidget", "code", "observeCodeWidget", "observeVariablesWidget", "observeModel"]
}),
$globals.HLInspectorWidget);

$core.addMethod(
$core.method({
selector: "observeCodeWidget",
protocol: 'actions',
fn: function (){
var self=this;
function $HLDoItExecuted(){return $globals.HLDoItExecuted||(typeof HLDoItExecuted=="undefined"?nil:HLDoItExecuted)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(self._codeWidget())._announcer())._on_do_($HLDoItExecuted(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._onDoneIt();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeCodeWidget",{},$globals.HLInspectorWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeCodeWidget\x0a\x09self codeWidget announcer \x0a    \x09on: HLDoItExecuted \x0a        do: [ self onDoneIt ]",
referencedClasses: ["HLDoItExecuted"],
//>>excludeEnd("ide");
messageSends: ["on:do:", "announcer", "codeWidget", "onDoneIt"]
}),
$globals.HLInspectorWidget);

$core.addMethod(
$core.method({
selector: "observeModel",
protocol: 'actions',
fn: function (){
var self=this;
function $HLInstanceVariableSelected(){return $globals.HLInstanceVariableSelected||(typeof HLInstanceVariableSelected=="undefined"?nil:HLInstanceVariableSelected)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(self._model())._announcer())._on_send_to_($HLInstanceVariableSelected(),"onInstanceVariableSelected",self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeModel",{},$globals.HLInspectorWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeModel\x0a\x09self model announcer\x0a        on: HLInstanceVariableSelected\x0a\x09\x09send: #onInstanceVariableSelected\x0a\x09\x09to: self",
referencedClasses: ["HLInstanceVariableSelected"],
//>>excludeEnd("ide");
messageSends: ["on:send:to:", "announcer", "model"]
}),
$globals.HLInspectorWidget);

$core.addMethod(
$core.method({
selector: "observeVariablesWidget",
protocol: 'actions',
fn: function (){
var self=this;
function $HLDiveRequested(){return $globals.HLDiveRequested||(typeof HLDiveRequested=="undefined"?nil:HLDiveRequested)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(self._variablesWidget())._announcer())._on_send_to_($HLDiveRequested(),"onDive",self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeVariablesWidget",{},$globals.HLInspectorWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeVariablesWidget\x0a\x09self variablesWidget announcer \x0a        on: HLDiveRequested \x0a\x09\x09send: #onDive\x0a\x09\x09to: self",
referencedClasses: ["HLDiveRequested"],
//>>excludeEnd("ide");
messageSends: ["on:send:to:", "announcer", "variablesWidget"]
}),
$globals.HLInspectorWidget);

$core.addMethod(
$core.method({
selector: "onDive",
protocol: 'reactions',
fn: function (){
var self=this;
function $HLInspector(){return $globals.HLInspector||(typeof HLInspector=="undefined"?nil:HLInspector)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($HLInspector())._new();
$recv($1)._inspect_($recv(self._model())._selectedInstVarObject());
$2=$recv($1)._openAsTab();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onDive",{},$globals.HLInspectorWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onDive\x0a\x09HLInspector new \x0a\x09\x09inspect: self model selectedInstVarObject;\x0a\x09\x09openAsTab",
referencedClasses: ["HLInspector"],
//>>excludeEnd("ide");
messageSends: ["inspect:", "new", "selectedInstVarObject", "model", "openAsTab"]
}),
$globals.HLInspectorWidget);

$core.addMethod(
$core.method({
selector: "onDoneIt",
protocol: 'reactions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onDoneIt",{},$globals.HLInspectorWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onDoneIt\x0a\x0a\x09self refresh",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["refresh"]
}),
$globals.HLInspectorWidget);

$core.addMethod(
$core.method({
selector: "onInspectIt",
protocol: 'reactions',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onInspectIt",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLInspectorWidget);

$core.addMethod(
$core.method({
selector: "onInstanceVariableSelected",
protocol: 'reactions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._refreshDisplayWidget();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onInstanceVariableSelected",{},$globals.HLInspectorWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onInstanceVariableSelected\x0a\x09self refreshDisplayWidget",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["refreshDisplayWidget"]
}),
$globals.HLInspectorWidget);

$core.addMethod(
$core.method({
selector: "onPrintIt",
protocol: 'reactions',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onPrintIt",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLInspectorWidget);

$core.addMethod(
$core.method({
selector: "refresh",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._inspect_(self._inspectee());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"refresh",{},$globals.HLInspectorWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "refresh\x0a\x09self inspect: self inspectee",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["inspect:", "inspectee"]
}),
$globals.HLInspectorWidget);

$core.addMethod(
$core.method({
selector: "refreshDisplayWidget",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._displayWidget())._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"refreshDisplayWidget",{},$globals.HLInspectorWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "refreshDisplayWidget\x0a\x09self displayWidget refresh",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["refresh", "displayWidget"]
}),
$globals.HLInspectorWidget);

$core.addMethod(
$core.method({
selector: "refreshVariablesWidget",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._variablesWidget())._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"refreshVariablesWidget",{},$globals.HLInspectorWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "refreshVariablesWidget\x0a\x09self variablesWidget refresh",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["refresh", "variablesWidget"]
}),
$globals.HLInspectorWidget);

$core.addMethod(
$core.method({
selector: "register",
protocol: 'registration',
fn: function (){
var self=this;
function $HLInspector(){return $globals.HLInspector||(typeof HLInspector=="undefined"?nil:HLInspector)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($HLInspector())._register_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"register",{},$globals.HLInspectorWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "register\x0a\x09HLInspector register: self",
referencedClasses: ["HLInspector"],
//>>excludeEnd("ide");
messageSends: ["register:"]
}),
$globals.HLInspectorWidget);

$core.addMethod(
$core.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $HLHorizontalSplitter(){return $globals.HLHorizontalSplitter||(typeof HLHorizontalSplitter=="undefined"?nil:HLHorizontalSplitter)}
function $HLVerticalSplitter(){return $globals.HLVerticalSplitter||(typeof HLVerticalSplitter=="undefined"?nil:HLVerticalSplitter)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($HLHorizontalSplitter())._with_with_($recv($HLVerticalSplitter())._with_with_(self._variablesWidget(),self._displayWidget()),self._codeWidget());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:with:"]=1;
//>>excludeEnd("ctx");
$recv(html)._with_($1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},$globals.HLInspectorWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderContentOn: html\x0a   \x09html with: (HLHorizontalSplitter\x0a    \x09with: (HLVerticalSplitter \x0a            with: self variablesWidget\x0a            with: self displayWidget)\x0a        with: self codeWidget)",
referencedClasses: ["HLHorizontalSplitter", "HLVerticalSplitter"],
//>>excludeEnd("ide");
messageSends: ["with:", "with:with:", "variablesWidget", "displayWidget", "codeWidget"]
}),
$globals.HLInspectorWidget);

$core.addMethod(
$core.method({
selector: "setLabel:",
protocol: 'actions',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._model())._label_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setLabel:",{aString:aString},$globals.HLInspectorWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "setLabel: aString\x0a\x09self model label: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["label:", "model"]
}),
$globals.HLInspectorWidget);

$core.addMethod(
$core.method({
selector: "setVariables:",
protocol: 'actions',
fn: function (aDictionary){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._model())._variables_(aDictionary);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setVariables:",{aDictionary:aDictionary},$globals.HLInspectorWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDictionary"],
source: "setVariables: aDictionary\x0a\x09self model variables: aDictionary",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["variables:", "model"]
}),
$globals.HLInspectorWidget);

$core.addMethod(
$core.method({
selector: "tabLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "Inspector";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tabLabel\x0a    ^ 'Inspector'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLInspectorWidget);

$core.addMethod(
$core.method({
selector: "unregister",
protocol: 'registration',
fn: function (){
var self=this;
function $HLInspector(){return $globals.HLInspector||(typeof HLInspector=="undefined"?nil:HLInspector)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.HLInspectorWidget.superclass.fn.prototype._unregister.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv($HLInspector())._unregister_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"unregister",{},$globals.HLInspectorWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "unregister\x0a\x09super unregister.\x0a\x09HLInspector unregister: self",
referencedClasses: ["HLInspector"],
//>>excludeEnd("ide");
messageSends: ["unregister", "unregister:"]
}),
$globals.HLInspectorWidget);

$core.addMethod(
$core.method({
selector: "variablesWidget",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLInspectorVariablesWidget(){return $globals.HLInspectorVariablesWidget||(typeof HLInspectorVariablesWidget=="undefined"?nil:HLInspectorVariablesWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$4,$1,$receiver;
$2=self["@variablesWidget"];
if(($receiver = $2) == null || $receiver.isNil){
$3=$recv($HLInspectorVariablesWidget())._new();
$recv($3)._inspector_(self);
$4=$recv($3)._yourself();
self["@variablesWidget"]=$4;
$1=self["@variablesWidget"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"variablesWidget",{},$globals.HLInspectorWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "variablesWidget\x0a\x09^ variablesWidget ifNil: [\x0a\x09\x09variablesWidget := HLInspectorVariablesWidget new\x0a    \x09\x09inspector: self;\x0a        \x09yourself ]",
referencedClasses: ["HLInspectorVariablesWidget"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "inspector:", "new", "yourself"]
}),
$globals.HLInspectorWidget);



$core.addClass('HLInspector', $globals.HLInspectorWidget, [], 'Helios-Inspector');
$core.addMethod(
$core.method({
selector: "inspect:",
protocol: 'actions',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._setTabLabel_($recv(anObject)._printString());
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.HLInspector.superclass.fn.prototype._inspect_.apply($recv(self), [anObject]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspect:",{anObject:anObject},$globals.HLInspector)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "inspect: anObject\x0a\x09self setTabLabel: anObject printString.\x0a\x09super inspect: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setTabLabel:", "printString", "inspect:"]
}),
$globals.HLInspector);

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
var $4,$3,$2,$1;
$4=self._variablesWidget();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["variablesWidget"]=1;
//>>excludeEnd("ctx");
$3=$recv($HLVerticalSplitter())._with_with_($4,self._displayWidget());
$2=$recv($HLHorizontalSplitter())._with_with_($3,self._codeWidget());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:with:"]=1;
//>>excludeEnd("ctx");
$1=$recv($HLContainer())._with_($2);
$recv(html)._with_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$recv(self._variablesWidget())._focus();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},$globals.HLInspector)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderContentOn: html\x0a   \x09html with: (HLContainer with: (HLHorizontalSplitter\x0a    \x09with: (HLVerticalSplitter \x0a            with: self variablesWidget\x0a            with: self displayWidget)\x0a        with: self codeWidget)).\x0a\x09\x0a\x09self variablesWidget focus",
referencedClasses: ["HLContainer", "HLHorizontalSplitter", "HLVerticalSplitter"],
//>>excludeEnd("ide");
messageSends: ["with:", "with:with:", "variablesWidget", "displayWidget", "codeWidget", "focus"]
}),
$globals.HLInspector);


$globals.HLInspector.klass.iVarNames = ['inspectors'];
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
$globals.HLInspector.klass);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.HLInspector.klass.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._watchChanges();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.HLInspector.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self watchChanges",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "watchChanges"]
}),
$globals.HLInspector.klass);

$core.addMethod(
$core.method({
selector: "inspect:",
protocol: 'actions',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=self._new();
$recv($1)._openAsTab();
$2=$recv($1)._inspect_(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspect:",{anObject:anObject},$globals.HLInspector.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "inspect: anObject\x0a\x09self new\x0a\x09\x09openAsTab;\x0a\x09\x09inspect: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["openAsTab", "new", "inspect:"]
}),
$globals.HLInspector.klass);

$core.addMethod(
$core.method({
selector: "inspectors",
protocol: 'accessing',
fn: function (){
var self=this;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@inspectors"];
if(($receiver = $2) == null || $receiver.isNil){
self["@inspectors"]=$recv($OrderedCollection())._new();
$1=self["@inspectors"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspectors",{},$globals.HLInspector.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inspectors\x0a\x09^ inspectors ifNil: [ inspectors := OrderedCollection new ]",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.HLInspector.klass);

$core.addMethod(
$core.method({
selector: "register:",
protocol: 'registration',
fn: function (anInspector){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._inspectors())._add_(anInspector);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"register:",{anInspector:anInspector},$globals.HLInspector.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInspector"],
source: "register: anInspector\x0a\x09self inspectors add: anInspector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "inspectors"]
}),
$globals.HLInspector.klass);

$core.addMethod(
$core.method({
selector: "tabClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "inspector";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tabClass\x0a\x09^ 'inspector'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLInspector.klass);

$core.addMethod(
$core.method({
selector: "tabLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "Inspector";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tabLabel\x0a\x09^ 'Inspector'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLInspector.klass);

$core.addMethod(
$core.method({
selector: "tabPriority",
protocol: 'accessing',
fn: function (){
var self=this;
return (10);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tabPriority\x0a\x09^ 10",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLInspector.klass);

$core.addMethod(
$core.method({
selector: "unregister:",
protocol: 'registration',
fn: function (anInspector){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._inspectors())._remove_(anInspector);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"unregister:",{anInspector:anInspector},$globals.HLInspector.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInspector"],
source: "unregister: anInspector\x0a\x09self inspectors remove: anInspector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove:", "inspectors"]
}),
$globals.HLInspector.klass);

$core.addMethod(
$core.method({
selector: "watchChanges",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._inspectors())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(each)._refresh();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._valueWithInterval_((500));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"watchChanges",{},$globals.HLInspector.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "watchChanges\x0a\x09[ self inspectors do: [ :each | each refresh ] ]\x0a\x09\x09valueWithInterval: 500",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["valueWithInterval:", "do:", "inspectors", "refresh"]
}),
$globals.HLInspector.klass);

});
