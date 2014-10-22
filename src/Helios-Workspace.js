define("helios/Helios-Workspace", ["amber/boot", "amber_core/Kernel-Objects", "helios/Helios-Core"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Helios-Workspace');
$core.packages["Helios-Workspace"].transport = {"type":"amd","amdNamespace":"helios"};

$core.addClass('HLCodeModel', $globals.Object, ['announcer', 'environment', 'receiver'], 'Helios-Workspace');
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
}, function($ctx1) {$ctx1.fill(self,"announcer",{},$globals.HLCodeModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "announcer\x0a\x09^ announcer ifNil: [ announcer := Announcer new ]",
referencedClasses: ["Announcer"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.HLCodeModel);

$core.addMethod(
$core.method({
selector: "browse:",
protocol: 'actions',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(anObject)._browse();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"browse:",{anObject:anObject},$globals.HLCodeModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "browse: anObject\x0a\x09anObject browse",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["browse"]
}),
$globals.HLCodeModel);

$core.addMethod(
$core.method({
selector: "defaultReceiver",
protocol: 'defaults',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._environment())._doItReceiver();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultReceiver",{},$globals.HLCodeModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultReceiver\x0a\x09^ self environment doItReceiver",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["doItReceiver", "environment"]
}),
$globals.HLCodeModel);

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
return $recv(self._environment())._evaluate_for_(aString,self._receiver());
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
}, function($ctx1) {$ctx1.fill(self,"doIt:",{aString:aString},$globals.HLCodeModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "doIt: aString\x0a\x09\x22Evaluate aString in the receiver's `environment`.\x0a\x09\x0a\x09Note: Catch any error and handle it manually, bypassing\x0a\x09boot.js behavior to avoid the browser default action on\x0a\x09ctrl+d/ctrl+p.\x0a\x09\x0a\x09See https://github.com/amber-smalltalk/amber/issues/882\x22\x0a\x0a\x09^ [ self environment evaluate: aString for: self receiver ]\x0a\x09\x09tryCatch: [ :e | \x0a\x09\x09\x09ErrorHandler handleError: e.\x0a\x09\x09\x09nil ]",
referencedClasses: ["ErrorHandler"],
//>>excludeEnd("ide");
messageSends: ["tryCatch:", "evaluate:for:", "environment", "receiver", "handleError:"]
}),
$globals.HLCodeModel);

$core.addMethod(
$core.method({
selector: "environment",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLManager(){return $globals.HLManager||(typeof HLManager=="undefined"?nil:HLManager)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@environment"];
if(($receiver = $2) == null || $receiver.isNil){
$1=$recv($recv($HLManager())._current())._environment();
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"environment",{},$globals.HLCodeModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "environment\x0a\x09^ environment ifNil: [ HLManager current environment ]",
referencedClasses: ["HLManager"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "environment", "current"]
}),
$globals.HLCodeModel);

$core.addMethod(
$core.method({
selector: "environment:",
protocol: 'accessing',
fn: function (anEnvironment){
var self=this;
self["@environment"]=anEnvironment;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anEnvironment"],
source: "environment: anEnvironment\x0a\x09environment := anEnvironment",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLCodeModel);

$core.addMethod(
$core.method({
selector: "inspect:",
protocol: 'actions',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._environment())._inspect_(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspect:",{anObject:anObject},$globals.HLCodeModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "inspect: anObject\x0a\x09self environment inspect: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["inspect:", "environment"]
}),
$globals.HLCodeModel);

$core.addMethod(
$core.method({
selector: "receiver",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@receiver"];
if(($receiver = $2) == null || $receiver.isNil){
self["@receiver"]=self._defaultReceiver();
$1=self["@receiver"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"receiver",{},$globals.HLCodeModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "receiver\x0a\x09^ receiver ifNil: [ receiver := self defaultReceiver ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "defaultReceiver"]
}),
$globals.HLCodeModel);

$core.addMethod(
$core.method({
selector: "receiver:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@receiver"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "receiver: anObject\x0a\x09receiver := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLCodeModel);


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
}, function($ctx1) {$ctx1.fill(self,"on:",{anEnvironment:anEnvironment},$globals.HLCodeModel.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anEnvironment"],
source: "on: anEnvironment\x0a\x0a\x09^ self new\x0a    \x09environment: anEnvironment;\x0a        yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["environment:", "new", "yourself"]
}),
$globals.HLCodeModel.klass);


$core.addClass('HLCodeWidget', $globals.HLWidget, ['model', 'wrapper', 'code', 'editor', 'state'], 'Helios-Workspace');
$core.addMethod(
$core.method({
selector: "announcer",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._model())._announcer();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"announcer",{},$globals.HLCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "announcer\x0a\x09^ self model announcer",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["announcer", "model"]
}),
$globals.HLCodeWidget);

$core.addMethod(
$core.method({
selector: "browseIt",
protocol: 'actions',
fn: function (){
var self=this;
var result;
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
function $ErrorHandler(){return $globals.ErrorHandler||(typeof ErrorHandler=="undefined"?nil:ErrorHandler)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
var $early={};
try {
result=$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._doIt();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._on_do_($Error(),(function(exception){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv($ErrorHandler())._handleError_(exception);
throw $early=[$1];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({exception:exception},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv(self._model())._browse_(result);
return self;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"browseIt",{result:result},$globals.HLCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "browseIt\x0a\x09| result |\x0a\x09\x0a\x09result := [ self doIt ] on: Error do: [ :exception | \x0a\x09\x09^ ErrorHandler handleError: exception ].\x0a\x09\x09\x0a\x09self model browse: result",
referencedClasses: ["Error", "ErrorHandler"],
//>>excludeEnd("ide");
messageSends: ["on:do:", "doIt", "handleError:", "browse:", "model"]
}),
$globals.HLCodeWidget);

$core.addMethod(
$core.method({
selector: "canHaveFocus",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "canHaveFocus\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLCodeWidget);

$core.addMethod(
$core.method({
selector: "clear",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._contents_("");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"clear",{},$globals.HLCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "clear\x0a\x09self contents: ''",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["contents:"]
}),
$globals.HLCodeWidget);

$core.addMethod(
$core.method({
selector: "configureEditor",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3;
$1=self._editor();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["editor"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_("amberCodeWidget",self);
$2=self._editor();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["editor"]=2;
//>>excludeEnd("ctx");
$recv($2)._on_do_("change",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._onChange();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv($recv(self._wrapper())._asJQuery())._on_in_do_("mousedown",".CodeMirror pre",(function(event){
var position,node;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(event)._at_("ctrlKey");
if($core.assert($3)){
position=$recv(self._editor())._coordsChar_($globals.HashedCollection._newFromPairs_(["left",$recv(event)._clientX(),"top",$recv(event)._clientY()]));
position;
self._onCtrlClickAt_($recv($recv($recv(position)._line()).__at($recv(position)._ch())).__plus((1)));
return $recv(event)._preventDefault();
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({event:event,position:position,node:node},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"configureEditor",{},$globals.HLCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "configureEditor\x0a\x09self editor at: 'amberCodeWidget' put: self.\x0a\x09self editor on: 'change' do: [ self onChange ].\x0a\x0a\x09self wrapper asJQuery on: 'mousedown' in: '.CodeMirror pre' do: [ :event | | position node |\x0a\x09\x09(event at: 'ctrlKey') ifTrue: [\x0a\x09\x09\x09position := self editor coordsChar: #{ \x0a\x09\x09\x09\x09'left' -> event clientX.\x0a\x09\x09\x09\x09'top' -> event clientY\x0a\x09\x09\x09}.\x0a\x09\x09\x09self onCtrlClickAt: (position line @ position ch) + 1.\x0a\x09\x09\x09event preventDefault ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "editor", "on:do:", "onChange", "on:in:do:", "asJQuery", "wrapper", "ifTrue:", "at:", "coordsChar:", "clientX", "clientY", "onCtrlClickAt:", "+", "@", "line", "ch", "preventDefault"]
}),
$globals.HLCodeWidget);

$core.addMethod(
$core.method({
selector: "contents",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@editor"])._getValue();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"contents",{},$globals.HLCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "contents\x0a\x09^ editor getValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["getValue"]
}),
$globals.HLCodeWidget);

$core.addMethod(
$core.method({
selector: "contents:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$receiver;
$recv(self["@editor"])._setValue_(aString);
$1=self["@state"];
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
self._updateState();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"contents:",{aString:aString},$globals.HLCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "contents: aString\x0a\x09editor setValue: aString.\x0a\x09state ifNotNil: [ self updateState ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setValue:", "ifNotNil:", "updateState"]
}),
$globals.HLCodeWidget);

$core.addMethod(
$core.method({
selector: "currentLine",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@editor"])._getLine_($recv($recv(self["@editor"])._getCursor())._line());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"currentLine",{},$globals.HLCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "currentLine\x0a    ^editor getLine: (editor getCursor line)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["getLine:", "line", "getCursor"]
}),
$globals.HLCodeWidget);

$core.addMethod(
$core.method({
selector: "currentLineOrSelection",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv(self["@editor"])._somethingSelected();
if($core.assert($2)){
$1=self._selection();
} else {
$1=self._currentLine();
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"currentLineOrSelection",{},$globals.HLCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "currentLineOrSelection\x0a    ^editor somethingSelected\x0a\x09\x09ifFalse: [ self currentLine ]\x0a\x09\x09ifTrue: [ self selection ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:ifTrue:", "somethingSelected", "currentLine", "selection"]
}),
$globals.HLCodeWidget);

$core.addMethod(
$core.method({
selector: "doIt",
protocol: 'actions',
fn: function (){
var self=this;
var result;
function $HLDoItExecuted(){return $globals.HLDoItExecuted||(typeof HLDoItExecuted=="undefined"?nil:HLDoItExecuted)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=self._model();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["model"]=1;
//>>excludeEnd("ctx");
result=$recv($1)._doIt_(self._currentLineOrSelection());
$recv($recv(self._model())._announcer())._announce_($recv($HLDoItExecuted())._on_(self["@model"]));
$2=result;
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doIt",{result:result},$globals.HLCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doIt\x0a\x09| result |\x0a\x0a\x09result := self model doIt: self currentLineOrSelection.\x0a\x09self model announcer announce: (HLDoItExecuted on: model).\x0a\x0a\x09^ result",
referencedClasses: ["HLDoItExecuted"],
//>>excludeEnd("ide");
messageSends: ["doIt:", "model", "currentLineOrSelection", "announce:", "announcer", "on:"]
}),
$globals.HLCodeWidget);

$core.addMethod(
$core.method({
selector: "editor",
protocol: 'actions',
fn: function (){
var self=this;
var $1;
$1=self["@editor"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "editor\x0a\x09^ editor",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLCodeWidget);

$core.addMethod(
$core.method({
selector: "editorOptions",
protocol: 'accessing',
fn: function (){
var self=this;
function $HashedCollection(){return $globals.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2="helios.editorTheme"._settingValueIfAbsent_("default");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["settingValueIfAbsent:"]=1;
//>>excludeEnd("ctx");
$1=$globals.HashedCollection._newFromPairs_(["theme",$2,"mode","text/x-stsrc","lineNumbers",true,"enterMode","flat","indentWithTabs",true,"indentUnit",(4),"matchBrackets",true,"electricChars",false,"keyMap","Amber","extraKeys",$recv($HashedCollection())._with_($recv("helios.completionKey"._settingValueIfAbsent_("Shift-Space")).__minus_gt("autocomplete"))]);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"editorOptions",{},$globals.HLCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "editorOptions\x0a\x09^ #{\x0a\x09\x09'theme' -> ('helios.editorTheme' settingValueIfAbsent: 'default').\x0a\x09\x09'mode' -> 'text/x-stsrc'.\x0a        'lineNumbers' -> true.\x0a        'enterMode' -> 'flat'.\x0a        'indentWithTabs' -> true.\x0a\x09\x09'indentUnit' -> 4.\x0a        'matchBrackets' -> true.\x0a        'electricChars' -> false.\x0a\x09\x09'keyMap' -> 'Amber'.\x0a\x09\x09'extraKeys' -> (HashedCollection with: ('helios.completionKey' settingValueIfAbsent: 'Shift-Space') -> 'autocomplete')\x0a\x09}",
referencedClasses: ["HashedCollection"],
//>>excludeEnd("ide");
messageSends: ["settingValueIfAbsent:", "with:", "->"]
}),
$globals.HLCodeWidget);

$core.addMethod(
$core.method({
selector: "focus",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@editor"])._focus();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"focus",{},$globals.HLCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "focus\x0a\x09editor focus",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["focus"]
}),
$globals.HLCodeWidget);

$core.addMethod(
$core.method({
selector: "hasFocus",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self["@code"])._asJQuery())._is_(":active");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hasFocus",{},$globals.HLCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hasFocus\x0a\x09^ code asJQuery is: ':active'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["is:", "asJQuery"]
}),
$globals.HLCodeWidget);

$core.addMethod(
$core.method({
selector: "hasModification",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hasModification\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLCodeWidget);

$core.addMethod(
$core.method({
selector: "inspectIt",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._model())._inspect_(self._doIt());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspectIt",{},$globals.HLCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inspectIt\x0a\x09self model inspect: self doIt",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["inspect:", "model", "doIt"]
}),
$globals.HLCodeWidget);

$core.addMethod(
$core.method({
selector: "messageHintFor:token:",
protocol: 'hints',
fn: function (anEditor,aToken){
var self=this;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$1=$recv($recv($recv($recv($recv($Smalltalk())._core())._allSelectors())._asArray())._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(aToken)._string();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["string"]=1;
//>>excludeEnd("ctx");
return $recv(each)._includesSubString_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
})))._reject_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each).__eq($recv(aToken)._string());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"messageHintFor:token:",{anEditor:anEditor,aToken:aToken},$globals.HLCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anEditor", "aToken"],
source: "messageHintFor: anEditor token: aToken\x0a\x09^ (Smalltalk core allSelectors asArray \x0a\x09\x09select: [ :each | each includesSubString: aToken string ])\x0a\x09\x09reject: [ :each | each = aToken string ]",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["reject:", "select:", "asArray", "allSelectors", "core", "includesSubString:", "string", "="]
}),
$globals.HLCodeWidget);

$core.addMethod(
$core.method({
selector: "model",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLCodeModel(){return $globals.HLCodeModel||(typeof HLCodeModel=="undefined"?nil:HLCodeModel)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@model"];
if(($receiver = $2) == null || $receiver.isNil){
self["@model"]=$recv($HLCodeModel())._new();
$1=self["@model"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"model",{},$globals.HLCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "model\x0a\x09^ model ifNil: [ model := HLCodeModel new ]",
referencedClasses: ["HLCodeModel"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.HLCodeWidget);

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
$globals.HLCodeWidget);

$core.addMethod(
$core.method({
selector: "navigateTo:",
protocol: 'actions',
fn: function (aString){
var self=this;
function $Finder(){return $globals.Finder||(typeof Finder=="undefined"?nil:Finder)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($Finder())._findString_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"navigateTo:",{aString:aString},$globals.HLCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "navigateTo: aString\x0a\x09Finder findString: aString",
referencedClasses: ["Finder"],
//>>excludeEnd("ide");
messageSends: ["findString:"]
}),
$globals.HLCodeWidget);

$core.addMethod(
$core.method({
selector: "navigateToReference:",
protocol: 'actions',
fn: function (aString){
var self=this;
function $HLReferences(){return $globals.HLReferences||(typeof HLReferences=="undefined"?nil:HLReferences)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv($HLReferences())._openAsTab())._search_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"navigateToReference:",{aString:aString},$globals.HLCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "navigateToReference: aString\x0a\x09(HLReferences openAsTab)\x0a\x09\x09search: aString",
referencedClasses: ["HLReferences"],
//>>excludeEnd("ide");
messageSends: ["search:", "openAsTab"]
}),
$globals.HLCodeWidget);

$core.addMethod(
$core.method({
selector: "onChange",
protocol: 'reactions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._updateState();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onChange",{},$globals.HLCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onChange\x0a\x09self updateState",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["updateState"]
}),
$globals.HLCodeWidget);

$core.addMethod(
$core.method({
selector: "onCtrlClickAt:",
protocol: 'reactions',
fn: function (aPoint){
var self=this;
var ast,node;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $early={};
try {
ast=$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($Smalltalk())._parse_($recv(self._editor())._getValue());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._on_do_($Error(),(function(error){
throw $early=[self];

}));
node=$recv(ast)._navigationNodeAt_ifAbsent_(aPoint,(function(){
throw $early=[nil];

}));
self._navigateTo_($recv(node)._navigationLink());
return self;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onCtrlClickAt:",{aPoint:aPoint,ast:ast,node:node},$globals.HLCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "onCtrlClickAt: aPoint\x0a\x09| ast node |\x0a\x09\x0a\x09ast := [ Smalltalk parse: self editor getValue ] \x0a\x09\x09on: Error \x0a\x09\x09do: [ :error | ^ self ].\x0a\x09\x0a\x09node := ast \x0a\x09\x09navigationNodeAt: aPoint \x0a\x09\x09ifAbsent: [ ^ nil ].\x0a\x09\x09\x0a\x09self navigateTo: node navigationLink",
referencedClasses: ["Smalltalk", "Error"],
//>>excludeEnd("ide");
messageSends: ["on:do:", "parse:", "getValue", "editor", "navigationNodeAt:ifAbsent:", "navigateTo:", "navigationLink"]
}),
$globals.HLCodeWidget);

$core.addMethod(
$core.method({
selector: "onInspectIt",
protocol: 'reactions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._inspectIt();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onInspectIt",{},$globals.HLCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onInspectIt\x0a\x0a\x09self inspectIt",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["inspectIt"]
}),
$globals.HLCodeWidget);

$core.addMethod(
$core.method({
selector: "onPrintIt",
protocol: 'reactions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._printIt();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onPrintIt",{},$globals.HLCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onPrintIt\x0a\x0a\x09self printIt",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["printIt"]
}),
$globals.HLCodeWidget);

$core.addMethod(
$core.method({
selector: "onSaveIt",
protocol: 'reactions',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onSaveIt\x0a\x09\x22I do not do anything\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLCodeWidget);

$core.addMethod(
$core.method({
selector: "print:",
protocol: 'actions',
fn: function (aString){
var self=this;
var start,stop,currentLine;
function $HashedCollection(){return $globals.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$4,$3,$5,$6,$7,$8,$9,$10,$12,$11;
$1=$recv(self["@editor"])._getCursor_(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["getCursor:"]=1;
//>>excludeEnd("ctx");
currentLine=$recv($1)._line();
start=$recv($HashedCollection())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv(start)._at_put_("line",currentLine);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$2=start;
$4=$recv(self["@editor"])._getCursor_(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["getCursor:"]=2;
//>>excludeEnd("ctx");
$3=$recv($4)._ch();
$recv($2)._at_put_("ch",$3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$5=$recv(self["@editor"])._getSelection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["getSelection"]=1;
//>>excludeEnd("ctx");
$recv($5)._ifEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$6=start;
$7=$recv($recv(self["@editor"])._getLine_(currentLine))._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$recv($6)._at_put_("ch",$7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:put:"]=3;
//>>excludeEnd("ctx");
return $recv(self["@editor"])._setSelection_end_($globals.HashedCollection._newFromPairs_(["line",currentLine,"ch",(0)]),start);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["setSelection:end:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
stop=$recv($HashedCollection())._new();
$recv(stop)._at_put_("line",currentLine);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=4;
//>>excludeEnd("ctx");
$8=stop;
$9=$recv($recv($recv(start)._at_("ch")).__plus($recv(aString)._size())).__plus((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$recv($8)._at_put_("ch",$9);
$10=self["@editor"];
$12=$recv($recv($recv(self["@editor"])._getSelection()).__comma(" ")).__comma(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$11=$recv($12).__comma(" ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($10)._replaceSelection_($11);
$recv(self["@editor"])._setCursor_($recv(self["@editor"])._getCursor_(true));
$recv(self["@editor"])._setSelection_end_(stop,start);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"print:",{aString:aString,start:start,stop:stop,currentLine:currentLine},$globals.HLCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "print: aString\x0a\x09| start stop currentLine |\x0a    currentLine := (editor getCursor: false) line.\x0a\x09start := HashedCollection new.\x0a\x09start at: 'line' put: currentLine.\x0a\x09start at: 'ch' put: (editor getCursor: false) ch.\x0a    (editor getSelection) ifEmpty: [\x0a    \x09\x22select current line if selection is empty\x22\x0a    \x09start at: 'ch' put: (editor getLine: currentLine) size.\x0a        editor setSelection: #{'line' -> currentLine. 'ch' -> 0} end: start.\x0a    ].\x0a\x09stop := HashedCollection new.\x0a\x09stop at: 'line' put: currentLine.\x0a\x09stop at: 'ch' put: ((start at: 'ch') + aString size + 2).\x0a\x0a\x09editor replaceSelection: (editor getSelection, ' ', aString, ' ').\x0a\x09editor setCursor: (editor getCursor: true).\x0a\x09editor setSelection: stop end: start",
referencedClasses: ["HashedCollection"],
//>>excludeEnd("ide");
messageSends: ["line", "getCursor:", "new", "at:put:", "ch", "ifEmpty:", "getSelection", "size", "getLine:", "setSelection:end:", "+", "at:", "replaceSelection:", ",", "setCursor:"]
}),
$globals.HLCodeWidget);

$core.addMethod(
$core.method({
selector: "printIt",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._print_($recv(self._doIt())._printString());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printIt",{},$globals.HLCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "printIt\x0a\x09self print: self doIt printString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["print:", "printString", "doIt"]
}),
$globals.HLCodeWidget);

$core.addMethod(
$core.method({
selector: "receiver",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._model())._receiver();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"receiver",{},$globals.HLCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "receiver\x0a\x09^ self model receiver",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["receiver", "model"]
}),
$globals.HLCodeWidget);

$core.addMethod(
$core.method({
selector: "receiver:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._model())._receiver_(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"receiver:",{anObject:anObject},$globals.HLCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "receiver: anObject\x0a\x09self model receiver: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["receiver:", "model"]
}),
$globals.HLCodeWidget);

$core.addMethod(
$core.method({
selector: "renderButtonsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7,$8;
$1=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["button"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_("button");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$recv($1)._with_("DoIt");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._doIt();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["onClick:"]=1;
//>>excludeEnd("ctx");
$3=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["button"]=2;
//>>excludeEnd("ctx");
$recv($3)._class_("button");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=2;
//>>excludeEnd("ctx");
$recv($3)._with_("PrintIt");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$4=$recv($3)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._printIt();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["onClick:"]=2;
//>>excludeEnd("ctx");
$5=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["button"]=3;
//>>excludeEnd("ctx");
$recv($5)._class_("button");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=3;
//>>excludeEnd("ctx");
$recv($5)._with_("InspectIt");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$6=$recv($5)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._inspectIt();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["onClick:"]=3;
//>>excludeEnd("ctx");
$7=$recv(html)._button();
$recv($7)._class_("button");
$recv($7)._with_("BrowseIt");
$8=$recv($7)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._browseIt();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},$globals.HLCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderButtonsOn: html\x0a\x09html button \x0a\x09\x09class: 'button';\x0a\x09\x09with: 'DoIt';\x0a\x09\x09onClick: [ self doIt ].\x0a\x09html button \x0a\x09\x09class: 'button';\x0a\x09\x09with: 'PrintIt';\x0a\x09\x09onClick: [ self printIt ].\x0a\x09html button \x0a\x09\x09class: 'button';\x0a\x09\x09with: 'InspectIt';\x0a\x09\x09onClick: [ self inspectIt ].\x0a\x09html button \x0a\x09\x09class: 'button';\x0a\x09\x09with: 'BrowseIt';\x0a\x09\x09onClick: [ self browseIt ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "button", "with:", "onClick:", "doIt", "printIt", "inspectIt", "browseIt"]
}),
$globals.HLCodeWidget);

$core.addMethod(
$core.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6;
$1=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["div"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_("editor");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self["@code"]=$recv(html)._textarea();
return self["@code"];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$3=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["div"]=2;
//>>excludeEnd("ctx");
self["@state"]=$recv($3)._class_("state");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=2;
//>>excludeEnd("ctx");
$4=$recv(html)._div();
$recv($4)._class_("buttons_bar");
$5=$recv($4)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._renderButtonsOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
self._setEditorOn_($recv(self["@code"])._element());
self._configureEditor();
$6=self._updateState();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},$globals.HLCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderContentOn: html\x0a\x09html div class: 'editor'; with: [\x0a\x09\x09code := html textarea ].\x0a\x09state := html div class: 'state'.\x0a\x09\x0a\x09html div \x0a\x09\x09class: 'buttons_bar';\x0a\x09\x09with: [ self renderButtonsOn: html ].\x0a\x09\x0a\x09self \x0a\x09\x09setEditorOn: code element;\x0a\x09\x09configureEditor;\x0a\x09\x09updateState",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "textarea", "renderButtonsOn:", "setEditorOn:", "element", "configureEditor", "updateState"]
}),
$globals.HLCodeWidget);

$core.addMethod(
$core.method({
selector: "saveIt",
protocol: 'actions',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "saveIt\x0a\x09\x22I do not do anything\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLCodeWidget);

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
$1=$recv(self["@editor"])._getSelection();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selection",{},$globals.HLCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selection\x0a\x09^editor getSelection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["getSelection"]
}),
$globals.HLCodeWidget);

$core.addMethod(
$core.method({
selector: "selectionEnd",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self["@code"])._element())._selectionEnd();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectionEnd",{},$globals.HLCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selectionEnd\x0a   ^code element selectionEnd",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selectionEnd", "element"]
}),
$globals.HLCodeWidget);

$core.addMethod(
$core.method({
selector: "selectionEnd:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(self["@code"])._element())._selectionEnd_(anInteger);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectionEnd:",{anInteger:anInteger},$globals.HLCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "selectionEnd: anInteger\x0a   code element selectionEnd: anInteger",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selectionEnd:", "element"]
}),
$globals.HLCodeWidget);

$core.addMethod(
$core.method({
selector: "selectionStart",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self["@code"])._element())._selectionStart();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectionStart",{},$globals.HLCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selectionStart\x0a   ^code element selectionStart",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selectionStart", "element"]
}),
$globals.HLCodeWidget);

$core.addMethod(
$core.method({
selector: "selectionStart:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(self["@code"])._element())._selectionStart_(anInteger);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectionStart:",{anInteger:anInteger},$globals.HLCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "selectionStart: anInteger\x0a   code element selectionStart: anInteger",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selectionStart:", "element"]
}),
$globals.HLCodeWidget);

$core.addMethod(
$core.method({
selector: "setEditorOn:",
protocol: 'actions',
fn: function (aTextarea){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self['@editor'] = self._class()._codeMirror().fromTextArea(aTextarea, self._editorOptions());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setEditorOn:",{aTextarea:aTextarea},$globals.HLCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTextarea"],
source: "setEditorOn: aTextarea\x0a\x09<self['@editor'] = self._class()._codeMirror().fromTextArea(aTextarea, self._editorOptions())>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLCodeWidget);

$core.addMethod(
$core.method({
selector: "updateState",
protocol: 'updating',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=self._hasModification();
if($core.assert($1)){
$2=$recv(self["@state"])._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($2)._addClass_("modified");
} else {
$recv($recv(self["@state"])._asJQuery())._removeClass_("modified");
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateState",{},$globals.HLCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateState\x0a\x09self hasModification \x0a\x09\x09ifTrue: [ state asJQuery addClass: 'modified' ]\x0a\x09\x09ifFalse: [ state asJQuery removeClass: 'modified' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "hasModification", "addClass:", "asJQuery", "removeClass:"]
}),
$globals.HLCodeWidget);

$core.addMethod(
$core.method({
selector: "variableHintFor:token:",
protocol: 'hints',
fn: function (anEditor,aToken){
var self=this;
var variables,classNames,pseudoVariables;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$1,$9,$8,$7,$6,$10,$5,$4;
$3=$recv($recv($recv(anEditor)._display())._wrapper())._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._find_("span.cm-variable");
$1=$recv($2)._get();
variables=$recv($1)._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(each)._asJQuery())._html();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collect:"]=1;
//>>excludeEnd("ctx");
classNames=$recv($recv($Smalltalk())._classes())._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
pseudoVariables=$recv($Smalltalk())._pseudoVariableNames();
$9=$recv($recv(variables).__comma(classNames)).__comma(pseudoVariables);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$8=$recv($9)._asSet();
$7=$recv($8)._asArray();
$6=$recv($7)._sort();
$5=$recv($6)._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$10=$recv(aToken)._string();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["string"]=1;
//>>excludeEnd("ctx");
return $recv(each)._includesSubString_($10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$4=$recv($5)._reject_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each).__eq($recv(aToken)._string());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,4)});
//>>excludeEnd("ctx");
}));
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"variableHintFor:token:",{anEditor:anEditor,aToken:aToken,variables:variables,classNames:classNames,pseudoVariables:pseudoVariables},$globals.HLCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anEditor", "aToken"],
source: "variableHintFor: anEditor token: aToken\x0a\x09| variables classNames pseudoVariables |\x0a\x09\x0a\x09variables := (anEditor display wrapper asJQuery find: 'span.cm-variable') get\x0a\x09\x09collect: [ :each | each asJQuery html ].\x0a\x09\x0a\x09classNames := Smalltalk classes collect: [ :each | each name ].\x0a\x09pseudoVariables := Smalltalk pseudoVariableNames.\x0a\x09\x0a\x09^ ((variables, classNames, pseudoVariables) asSet asArray sort\x0a\x09\x09select: [ :each | each includesSubString: aToken string ])\x0a\x09\x09reject: [ :each | each = aToken string ]",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["collect:", "get", "find:", "asJQuery", "wrapper", "display", "html", "classes", "name", "pseudoVariableNames", "reject:", "select:", "sort", "asArray", "asSet", ",", "includesSubString:", "string", "="]
}),
$globals.HLCodeWidget);


$core.addMethod(
$core.method({
selector: "codeMirror",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(require)._value_("codemirror/lib/codemirror");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"codeMirror",{},$globals.HLCodeWidget.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "codeMirror\x0a\x09^ require value: 'codemirror/lib/codemirror'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:"]
}),
$globals.HLCodeWidget.klass);

$core.addMethod(
$core.method({
selector: "hintFor:options:",
protocol: 'hints',
fn: function (anEditor,options){
var self=this;
var cursor,token,completions,codeMirror;
function $HLCodeWidget(){return $globals.HLCodeWidget||(typeof HLCodeWidget=="undefined"?nil:HLCodeWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$4,$3,$2,$5,$7,$9,$10,$8,$6;
codeMirror=self._codeMirror();
cursor=$recv(anEditor)._getCursor();
token=$recv(anEditor)._getTokenAt_(cursor);
$1=token;
$4=$recv(codeMirror)._basicAt_("innerMode");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["basicAt:"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._value_value_($recv(anEditor)._getMode(),$recv(token)._at_("state"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value:value:"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._state();
$recv($1)._at_put_("state",$2);
$5=$recv($recv(token)._type()).__eq("variable");
if($core.assert($5)){
completions=$recv($HLCodeWidget())._variableHintFor_token_(anEditor,token);
} else {
completions=$recv($HLCodeWidget())._messageHintFor_token_(anEditor,token);
};
$7=completions;
$9=$recv(codeMirror)._basicAt_("Pos");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["basicAt:"]=2;
//>>excludeEnd("ctx");
$10=$recv(cursor)._line();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["line"]=1;
//>>excludeEnd("ctx");
$8=$recv($9)._value_value_($10,$recv(token)._end());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value:value:"]=2;
//>>excludeEnd("ctx");
$6=$globals.HashedCollection._newFromPairs_(["list",$7,"from",$8,"to",$recv($recv(codeMirror)._basicAt_("Pos"))._value_value_($recv(cursor)._line(),$recv(token)._start())]);
return $6;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hintFor:options:",{anEditor:anEditor,options:options,cursor:cursor,token:token,completions:completions,codeMirror:codeMirror},$globals.HLCodeWidget.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anEditor", "options"],
source: "hintFor: anEditor options: options\x0a\x09| cursor token completions codeMirror |\x0a\x09\x0a\x09codeMirror := self codeMirror.\x0a\x09cursor := anEditor getCursor.\x0a\x09token := anEditor getTokenAt: cursor.\x0a\x09token at: 'state' put: ((codeMirror basicAt: 'innerMode')\x0a\x09\x09value: anEditor getMode value: (token at: 'state')) state.\x0a\x09\x0a\x09completions := token type = 'variable' \x0a\x09\x09ifTrue: [ HLCodeWidget variableHintFor: anEditor token: token ]\x0a\x09\x09ifFalse: [ HLCodeWidget messageHintFor: anEditor token: token ].\x0a\x09\x0a\x09^ #{\x0a\x09\x09'list' -> completions.\x0a\x09\x09'from' -> ((codeMirror basicAt: 'Pos') value: cursor line value: token end).\x0a\x09\x09'to' -> ((codeMirror basicAt: 'Pos') value: cursor line value: token start)\x0a\x09}",
referencedClasses: ["HLCodeWidget"],
//>>excludeEnd("ide");
messageSends: ["codeMirror", "getCursor", "getTokenAt:", "at:put:", "state", "value:value:", "basicAt:", "getMode", "at:", "ifTrue:ifFalse:", "=", "type", "variableHintFor:token:", "messageHintFor:token:", "line", "end", "start"]
}),
$globals.HLCodeWidget.klass);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.HLCodeWidget.klass.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._setupCodeMirror();
self._setupCommands();
$1=self._setupKeyMaps();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.HLCodeWidget.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self \x0a\x09\x09setupCodeMirror;\x0a\x09\x09setupCommands;\x0a\x09\x09setupKeyMaps.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "setupCodeMirror", "setupCommands", "setupKeyMaps"]
}),
$globals.HLCodeWidget.klass);

$core.addMethod(
$core.method({
selector: "keyMap",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLManager(){return $globals.HLManager||(typeof HLManager=="undefined"?nil:HLManager)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv($recv($recv($HLManager())._current())._keyBinder())._systemIsMac();
if($core.assert($2)){
$1=self._macKeyMap();
} else {
$1=self._pcKeyMap();
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"keyMap",{},$globals.HLCodeWidget.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "keyMap\x0a\x09^ HLManager current keyBinder systemIsMac\x0a\x09\x09ifTrue: [ self macKeyMap ]\x0a\x09\x09ifFalse: [ self pcKeyMap ]",
referencedClasses: ["HLManager"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "systemIsMac", "keyBinder", "current", "macKeyMap", "pcKeyMap"]
}),
$globals.HLCodeWidget.klass);

$core.addMethod(
$core.method({
selector: "macKeyMap",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=$globals.HashedCollection._newFromPairs_(["Alt-Backspace","delWordBefore","Alt-Delete","delWordAfter","Alt-Left","goWordLeft","Alt-Right","goWordRight","Cmd-A","selectAll","Cmd-Alt-F","replace","Cmd-D","doIt","Cmd-B","browseIt","Cmd-Down","goDocEnd","Cmd-End","goDocEnd","Cmd-F","find","Cmd-G","findNext","Cmd-I","inspectIt","Cmd-Left","goLineStart","Cmd-P","printIt","Cmd-Right","goLineEnd","Cmd-S","saveIt","Cmd-Up","goDocStart","Cmd-Y","redo","Cmd-Z","undo","Cmd-[","indentLess","Cmd-]","indentMore","Ctrl-Alt-Backspace","delWordAfter","Shift-Cmd-Alt-F","replaceAll","Shift-Cmd-G","findPrev","Shift-Cmd-Z","redo","fallthrough",["basic","emacsy"]]);
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "macKeyMap\x0a\x09^ #{\x0a\x09\x09'Alt-Backspace'\x09\x09\x09-> 'delWordBefore'.\x0a\x09\x09'Alt-Delete'\x09\x09\x09-> 'delWordAfter'. \x0a\x09\x09'Alt-Left'\x09\x09\x09\x09-> 'goWordLeft'.\x0a\x09\x09'Alt-Right'\x09\x09\x09\x09-> 'goWordRight'. \x0a\x09\x09'Cmd-A'\x09\x09\x09\x09\x09-> 'selectAll'. \x0a\x09\x09'Cmd-Alt-F'\x09\x09\x09\x09-> 'replace'. \x0a\x09\x09'Cmd-D'\x09\x09\x09\x09\x09-> 'doIt'. \x0a\x09\x09'Cmd-B'\x09\x09\x09\x09\x09-> 'browseIt'. \x0a\x09\x09'Cmd-Down'\x09\x09\x09\x09-> 'goDocEnd'. \x0a\x09\x09'Cmd-End'\x09\x09\x09\x09-> 'goDocEnd'. \x0a\x09\x09'Cmd-F'\x09\x09\x09\x09\x09-> 'find'.\x0a\x09\x09'Cmd-G'\x09\x09\x09\x09\x09-> 'findNext'. \x0a\x09\x09'Cmd-I'\x09\x09\x09\x09\x09-> 'inspectIt'. \x0a\x09\x09'Cmd-Left'\x09\x09\x09\x09-> 'goLineStart'. \x0a\x09\x09'Cmd-P'\x09\x09\x09\x09\x09-> 'printIt'. \x0a\x09\x09'Cmd-Right'\x09\x09\x09\x09-> 'goLineEnd'. \x0a\x09\x09'Cmd-S'\x09\x09\x09\x09\x09-> 'saveIt'. \x0a\x09\x09'Cmd-Up'\x09\x09\x09\x09-> 'goDocStart'. \x0a\x09\x09'Cmd-Y'\x09\x09\x09\x09\x09-> 'redo'.\x0a\x09\x09'Cmd-Z'\x09\x09\x09\x09\x09-> 'undo'. \x0a\x09\x09'Cmd-['\x09\x09\x09\x09\x09-> 'indentLess'. \x0a\x09\x09'Cmd-]'\x09\x09\x09\x09\x09-> 'indentMore'.\x0a\x09\x09'Ctrl-Alt-Backspace'\x09-> 'delWordAfter'. \x0a\x09\x09'Shift-Cmd-Alt-F'\x09\x09-> 'replaceAll'.\x0a\x09\x09'Shift-Cmd-G'\x09\x09\x09-> 'findPrev'. \x0a\x09\x09'Shift-Cmd-Z'\x09\x09\x09-> 'redo'. \x0a    \x09'fallthrough' \x09\x09\x09-> { 'basic'. 'emacsy' }\x0a  }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLCodeWidget.klass);

$core.addMethod(
$core.method({
selector: "messageHintFor:token:",
protocol: 'hints',
fn: function (anEditor,aToken){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(anEditor)._at_("amberCodeWidget"))._messageHintFor_token_(anEditor,aToken);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"messageHintFor:token:",{anEditor:anEditor,aToken:aToken},$globals.HLCodeWidget.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anEditor", "aToken"],
source: "messageHintFor: anEditor token: aToken\x0a\x09^ (anEditor at: 'amberCodeWidget')\x0a\x09\x09messageHintFor: anEditor token: aToken",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["messageHintFor:token:", "at:"]
}),
$globals.HLCodeWidget.klass);

$core.addMethod(
$core.method({
selector: "pcKeyMap",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=$globals.HashedCollection._newFromPairs_(["Alt-Left","goLineStart","Alt-Right","goLineEnd","Alt-Up","goDocStart","Ctrl-A","selectAll","Ctrl-Backspace","delWordBefore","Ctrl-D","doIt","Ctrl-B","browseIt","Ctrl-Delete","delWordAfter","Ctrl-Down","goDocEnd","Ctrl-End","goDocEnd","Ctrl-F","find","Ctrl-G","findNext","Ctrl-I","inspectIt","Ctrl-Home","goDocStart","Ctrl-Left","goWordLeft","Ctrl-P","printIt","Ctrl-Right","goWordRight","Ctrl-S","saveIt","Ctrl-Y","redo","Ctrl-Z","undo","Ctrl-[","indentLess","Ctrl-]","indentMore","Shift-Ctrl-F","replace","Shift-Ctrl-G","findPrev","Shift-Ctrl-R","replaceAll","Shift-Ctrl-Z","redo","fallthrough",["basic"]]);
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pcKeyMap\x0a\x09^ #{\x0a\x09\x09'Alt-Left' -> \x09\x09'goLineStart'. \x0a\x09\x09'Alt-Right' -> \x09\x09'goLineEnd'.\x0a\x09\x09'Alt-Up' -> \x09\x09'goDocStart'. \x0a\x09\x09'Ctrl-A' -> \x09\x09'selectAll'. \x0a\x09\x09'Ctrl-Backspace' -> 'delWordBefore'. \x0a\x09\x09'Ctrl-D' -> \x09\x09'doIt'. \x0a\x09\x09'Ctrl-B' -> \x09\x09'browseIt'. \x0a\x09\x09'Ctrl-Delete' -> \x09\x09'delWordAfter'. \x0a\x09\x09'Ctrl-Down' -> \x09\x09'goDocEnd'.\x0a\x09\x09'Ctrl-End' -> \x09\x09'goDocEnd'. \x0a\x09\x09'Ctrl-F' -> \x09\x09'find'.\x0a\x09\x09'Ctrl-G' -> \x09\x09'findNext'. \x0a\x09\x09'Ctrl-I' -> \x09\x09'inspectIt'.\x0a\x09\x09'Ctrl-Home' -> \x09\x09'goDocStart'. \x0a\x09\x09'Ctrl-Left' -> \x09\x09'goWordLeft'. \x0a\x09\x09'Ctrl-P' -> \x09\x09'printIt'.\x0a\x09\x09'Ctrl-Right' -> \x09'goWordRight'. \x0a\x09\x09'Ctrl-S' -> \x09\x09'saveIt'. \x0a\x09\x09'Ctrl-Y' -> \x09\x09'redo'.\x0a\x09\x09'Ctrl-Z' -> \x09\x09'undo'. \x0a\x09\x09'Ctrl-[' -> \x09\x09'indentLess'. \x0a\x09\x09'Ctrl-]' -> \x09\x09'indentMore'.\x0a\x09\x09'Shift-Ctrl-F' -> \x09'replace'. \x0a\x09\x09'Shift-Ctrl-G' -> \x09'findPrev'. \x0a\x09\x09'Shift-Ctrl-R' -> \x09'replaceAll'.\x0a\x09\x09'Shift-Ctrl-Z' -> \x09'redo'. \x0a\x09\x09'fallthrough' -> \x09#('basic')\x0a}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLCodeWidget.klass);

$core.addMethod(
$core.method({
selector: "setupCodeMirror",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");

		var codeMirror = self._codeMirror();
		codeMirror.keyMap.default.fallthrough = ["basic"];
		codeMirror.commands.autocomplete = function(cm) {
			codeMirror.showHint(cm, self._hintFor_options_.bind(self));
		}
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupCodeMirror",{},$globals.HLCodeWidget.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupCodeMirror\x0a\x09<\x0a\x09\x09var codeMirror = self._codeMirror();\x0a\x09\x09codeMirror.keyMap.default.fallthrough = [\x22basic\x22];\x0a\x09\x09codeMirror.commands.autocomplete = function(cm) {\x0a\x09\x09\x09codeMirror.showHint(cm, self._hintFor_options_.bind(self));\x0a\x09\x09}\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLCodeWidget.klass);

$core.addMethod(
$core.method({
selector: "setupCommands",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6;
$1=$recv(self._codeMirror())._basicAt_("commands");
$recv($1)._at_put_("doIt",(function(cm){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(cm)._amberCodeWidget();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["amberCodeWidget"]=1;
//>>excludeEnd("ctx");
return $recv($2)._doIt();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({cm:cm},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_("inspectIt",(function(cm){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(cm)._amberCodeWidget();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["amberCodeWidget"]=2;
//>>excludeEnd("ctx");
return $recv($3)._inspectIt();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({cm:cm},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$recv($1)._at_put_("printIt",(function(cm){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=$recv(cm)._amberCodeWidget();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["amberCodeWidget"]=3;
//>>excludeEnd("ctx");
return $recv($4)._printIt();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({cm:cm},$ctx1,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=3;
//>>excludeEnd("ctx");
$recv($1)._at_put_("saveIt",(function(cm){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$5=$recv(cm)._amberCodeWidget();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["amberCodeWidget"]=4;
//>>excludeEnd("ctx");
return $recv($5)._saveIt();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({cm:cm},$ctx1,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=4;
//>>excludeEnd("ctx");
$6=$recv($1)._at_put_("browseIt",(function(cm){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(cm)._amberCodeWidget())._browseIt();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({cm:cm},$ctx1,5)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupCommands",{},$globals.HLCodeWidget.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupCommands\x0a\x09(self codeMirror basicAt: 'commands') \x0a\x09\x09at: 'doIt' put: [ :cm | cm amberCodeWidget doIt ];\x0a\x09\x09at: 'inspectIt' put: [ :cm | cm amberCodeWidget inspectIt ];\x0a\x09\x09at: 'printIt' put: [ :cm | cm amberCodeWidget printIt ];\x0a\x09\x09at: 'saveIt' put: [ :cm | cm amberCodeWidget saveIt ];\x0a\x09\x09at: 'browseIt' put: [ :cm | cm amberCodeWidget browseIt ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "basicAt:", "codeMirror", "doIt", "amberCodeWidget", "inspectIt", "printIt", "saveIt", "browseIt"]
}),
$globals.HLCodeWidget.klass);

$core.addMethod(
$core.method({
selector: "setupKeyMaps",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._codeMirror().keyMap['Amber'] = self._keyMap();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupKeyMaps",{},$globals.HLCodeWidget.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupKeyMaps\x0a\x09<self._codeMirror().keyMap['Amber'] = self._keyMap()>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLCodeWidget.klass);

$core.addMethod(
$core.method({
selector: "variableHintFor:token:",
protocol: 'hints',
fn: function (anEditor,aToken){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(anEditor)._at_("amberCodeWidget"))._variableHintFor_token_(anEditor,aToken);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"variableHintFor:token:",{anEditor:anEditor,aToken:aToken},$globals.HLCodeWidget.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anEditor", "aToken"],
source: "variableHintFor: anEditor token: aToken\x0a\x09^ (anEditor at: 'amberCodeWidget')\x0a\x09\x09variableHintFor: anEditor token: aToken",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["variableHintFor:token:", "at:"]
}),
$globals.HLCodeWidget.klass);


$core.addClass('HLNavigationCodeWidget', $globals.HLCodeWidget, ['methodContents'], 'Helios-Workspace');
$core.addMethod(
$core.method({
selector: "configureEditor",
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
$globals.HLNavigationCodeWidget.superclass.fn.prototype._configureEditor.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._contents_(self._methodContents());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"configureEditor",{},$globals.HLNavigationCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "configureEditor\x0a\x09super configureEditor.\x0a\x09self contents: self methodContents",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["configureEditor", "contents:", "methodContents"]
}),
$globals.HLNavigationCodeWidget);

$core.addMethod(
$core.method({
selector: "contents:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._methodContents_(aString);
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.HLNavigationCodeWidget.superclass.fn.prototype._contents_.apply($recv(self), [aString]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"contents:",{aString:aString},$globals.HLNavigationCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "contents: aString\x0a\x09self methodContents: aString.\x0a\x09super contents: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["methodContents:", "contents:"]
}),
$globals.HLNavigationCodeWidget);

$core.addMethod(
$core.method({
selector: "hasModification",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._methodContents()).__eq(self._contents()))._not();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hasModification",{},$globals.HLNavigationCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hasModification\x0a\x09^ (self methodContents = self contents) not",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["not", "=", "methodContents", "contents"]
}),
$globals.HLNavigationCodeWidget);

$core.addMethod(
$core.method({
selector: "methodContents",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@methodContents"];
if(($receiver = $2) == null || $receiver.isNil){
$1="";
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"methodContents",{},$globals.HLNavigationCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "methodContents\x0a\x09^ methodContents ifNil: [ '' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.HLNavigationCodeWidget);

$core.addMethod(
$core.method({
selector: "methodContents:",
protocol: 'accessing',
fn: function (aString){
var self=this;
var $1;
self["@methodContents"]=aString;
$1=self["@methodContents"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "methodContents: aString\x0a\x09^ methodContents := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLNavigationCodeWidget);

$core.addMethod(
$core.method({
selector: "previous",
protocol: 'accessing',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "previous\x0a\x09\x22for browser lists widget\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLNavigationCodeWidget);

$core.addMethod(
$core.method({
selector: "previous:",
protocol: 'accessing',
fn: function (aWidget){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aWidget"],
source: "previous: aWidget\x0a\x09\x22for browser lists widget\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLNavigationCodeWidget);


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
$globals.HLNavigationCodeWidget.klass);

$core.addMethod(
$core.method({
selector: "on:",
protocol: 'instance creation',
fn: function (aBrowserModel){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._browserModel_(aBrowserModel);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aBrowserModel:aBrowserModel},$globals.HLNavigationCodeWidget.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBrowserModel"],
source: "on: aBrowserModel\x0a\x09^ self new\x0a\x09\x09browserModel: aBrowserModel;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["browserModel:", "new", "yourself"]
}),
$globals.HLNavigationCodeWidget.klass);


$core.addClass('HLBrowserCodeWidget', $globals.HLNavigationCodeWidget, ['browserModel'], 'Helios-Workspace');
$core.addMethod(
$core.method({
selector: "browserModel",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@browserModel"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "browserModel\x0a\x09^ browserModel",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLBrowserCodeWidget);

$core.addMethod(
$core.method({
selector: "browserModel:",
protocol: 'accessing',
fn: function (aBrowserModel){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self["@browserModel"]=aBrowserModel;
self._observeSystem();
$1=self._observeBrowserModel();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"browserModel:",{aBrowserModel:aBrowserModel},$globals.HLBrowserCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBrowserModel"],
source: "browserModel: aBrowserModel\x0a\x09browserModel := aBrowserModel.\x0a\x09self \x0a\x09\x09observeSystem;\x0a\x09\x09observeBrowserModel",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["observeSystem", "observeBrowserModel"]
}),
$globals.HLBrowserCodeWidget);

$core.addMethod(
$core.method({
selector: "observeBrowserModel",
protocol: 'actions',
fn: function (){
var self=this;
function $HLSaveSourceCode(){return $globals.HLSaveSourceCode||(typeof HLSaveSourceCode=="undefined"?nil:HLSaveSourceCode)}
function $HLShowInstanceToggled(){return $globals.HLShowInstanceToggled||(typeof HLShowInstanceToggled=="undefined"?nil:HLShowInstanceToggled)}
function $HLSourceCodeSaved(){return $globals.HLSourceCodeSaved||(typeof HLSourceCodeSaved=="undefined"?nil:HLSourceCodeSaved)}
function $HLAboutToChange(){return $globals.HLAboutToChange||(typeof HLAboutToChange=="undefined"?nil:HLAboutToChange)}
function $HLParseErrorRaised(){return $globals.HLParseErrorRaised||(typeof HLParseErrorRaised=="undefined"?nil:HLParseErrorRaised)}
function $HLCompileErrorRaised(){return $globals.HLCompileErrorRaised||(typeof HLCompileErrorRaised=="undefined"?nil:HLCompileErrorRaised)}
function $HLUnknownVariableErrorRaised(){return $globals.HLUnknownVariableErrorRaised||(typeof HLUnknownVariableErrorRaised=="undefined"?nil:HLUnknownVariableErrorRaised)}
function $HLInstVarAdded(){return $globals.HLInstVarAdded||(typeof HLInstVarAdded=="undefined"?nil:HLInstVarAdded)}
function $HLMethodSelected(){return $globals.HLMethodSelected||(typeof HLMethodSelected=="undefined"?nil:HLMethodSelected)}
function $HLClassSelected(){return $globals.HLClassSelected||(typeof HLClassSelected=="undefined"?nil:HLClassSelected)}
function $HLPackageSelected(){return $globals.HLPackageSelected||(typeof HLPackageSelected=="undefined"?nil:HLPackageSelected)}
function $HLProtocolSelected(){return $globals.HLProtocolSelected||(typeof HLProtocolSelected=="undefined"?nil:HLProtocolSelected)}
function $HLSourceCodeFocusRequested(){return $globals.HLSourceCodeFocusRequested||(typeof HLSourceCodeFocusRequested=="undefined"?nil:HLSourceCodeFocusRequested)}
function $HLShowTemplate(){return $globals.HLShowTemplate||(typeof HLShowTemplate=="undefined"?nil:HLShowTemplate)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(self._browserModel())._announcer();
$recv($1)._on_send_to_($HLSaveSourceCode(),"onSaveIt",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=1;
//>>excludeEnd("ctx");
$recv($1)._on_send_to_($HLShowInstanceToggled(),"onShowInstanceToggled",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=2;
//>>excludeEnd("ctx");
$recv($1)._on_send_to_($HLSourceCodeSaved(),"onSourceCodeSaved",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=3;
//>>excludeEnd("ctx");
$recv($1)._on_send_to_($HLAboutToChange(),"onBrowserAboutToChange:",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=4;
//>>excludeEnd("ctx");
$recv($1)._on_send_to_($HLParseErrorRaised(),"onParseError:",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=5;
//>>excludeEnd("ctx");
$recv($1)._on_send_to_($HLCompileErrorRaised(),"onCompileError:",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=6;
//>>excludeEnd("ctx");
$recv($1)._on_send_to_($HLUnknownVariableErrorRaised(),"onUnknownVariableError:",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=7;
//>>excludeEnd("ctx");
$recv($1)._on_send_to_($HLInstVarAdded(),"onInstVarAdded",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=8;
//>>excludeEnd("ctx");
$recv($1)._on_send_to_($HLMethodSelected(),"onMethodSelected:",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=9;
//>>excludeEnd("ctx");
$recv($1)._on_send_to_($HLClassSelected(),"onClassSelected:",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=10;
//>>excludeEnd("ctx");
$recv($1)._on_send_to_($HLPackageSelected(),"onPackageSelected:",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=11;
//>>excludeEnd("ctx");
$recv($1)._on_send_to_($HLProtocolSelected(),"onProtocolSelected:",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=12;
//>>excludeEnd("ctx");
$recv($1)._on_send_to_($HLSourceCodeFocusRequested(),"onSourceCodeFocusRequested",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=13;
//>>excludeEnd("ctx");
$2=$recv($1)._on_send_to_($HLShowTemplate(),"onShowTemplate:",self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeBrowserModel",{},$globals.HLBrowserCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeBrowserModel\x0a\x09self browserModel announcer\x0a\x09\x09on: HLSaveSourceCode\x0a\x09\x09send: #onSaveIt\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLShowInstanceToggled\x0a\x09\x09send: #onShowInstanceToggled\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLSourceCodeSaved\x0a\x09\x09send: #onSourceCodeSaved\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLAboutToChange\x0a\x09\x09send: #onBrowserAboutToChange:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLParseErrorRaised\x0a\x09\x09send: #onParseError:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLCompileErrorRaised\x0a\x09\x09send: #onCompileError:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLUnknownVariableErrorRaised\x0a\x09\x09send: #onUnknownVariableError:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLInstVarAdded \x0a\x09\x09send: #onInstVarAdded\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLMethodSelected \x0a\x09\x09send: #onMethodSelected:\x0a\x09\x09to: self;\x0a\x09\x09\x0a    \x09on: HLClassSelected \x0a\x09\x09send: #onClassSelected:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLPackageSelected \x0a\x09\x09send: #onPackageSelected:\x0a\x09\x09to: self;\x0a\x09\x09\x0a    \x09on: HLProtocolSelected \x0a\x09\x09send: #onProtocolSelected: \x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLSourceCodeFocusRequested \x0a\x09\x09send: #onSourceCodeFocusRequested\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLShowTemplate\x0a\x09\x09send: #onShowTemplate:\x0a\x09\x09to: self",
referencedClasses: ["HLSaveSourceCode", "HLShowInstanceToggled", "HLSourceCodeSaved", "HLAboutToChange", "HLParseErrorRaised", "HLCompileErrorRaised", "HLUnknownVariableErrorRaised", "HLInstVarAdded", "HLMethodSelected", "HLClassSelected", "HLPackageSelected", "HLProtocolSelected", "HLSourceCodeFocusRequested", "HLShowTemplate"],
//>>excludeEnd("ide");
messageSends: ["on:send:to:", "announcer", "browserModel"]
}),
$globals.HLBrowserCodeWidget);

$core.addMethod(
$core.method({
selector: "observeSystem",
protocol: 'actions',
fn: function (){
var self=this;
function $MethodModified(){return $globals.MethodModified||(typeof MethodModified=="undefined"?nil:MethodModified)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(self._browserModel())._systemAnnouncer())._on_send_to_($MethodModified(),"onMethodModified:",self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeSystem",{},$globals.HLBrowserCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeSystem\x0a\x09self browserModel systemAnnouncer\x0a    \x09on: MethodModified\x0a        send: #onMethodModified:\x0a\x09\x09to: self",
referencedClasses: ["MethodModified"],
//>>excludeEnd("ide");
messageSends: ["on:send:to:", "systemAnnouncer", "browserModel"]
}),
$globals.HLBrowserCodeWidget);

$core.addMethod(
$core.method({
selector: "onBrowserAboutToChange:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
var block;
function $HLChangeForbidden(){return $globals.HLChangeForbidden||(typeof HLChangeForbidden=="undefined"?nil:HLChangeForbidden)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
block=$recv(anAnnouncement)._actionBlock();
$1=self._hasModification();
if($core.assert($1)){
self._confirm_ifTrue_("Changes have not been saved. Do you want to discard these changes?",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._methodContents_(self._contents());
return $recv(block)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv($HLChangeForbidden())._signal();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onBrowserAboutToChange:",{anAnnouncement:anAnnouncement,block:block},$globals.HLBrowserCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onBrowserAboutToChange: anAnnouncement\x0a\x09| block |\x0a\x09\x0a\x09block := anAnnouncement actionBlock.\x0a\x09\x0a\x09self hasModification\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09self \x0a\x09\x09\x09\x09confirm: 'Changes have not been saved. Do you want to discard these changes?' \x0a\x09\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09\x09\x22Don't ask twice\x22\x0a\x09\x09\x09\x09\x09self methodContents: self contents.\x0a\x09\x09\x09\x09\x09block value ].\x0a\x09\x09\x09\x0a\x09\x09\x09\x0a\x09\x09\x09HLChangeForbidden signal ]",
referencedClasses: ["HLChangeForbidden"],
//>>excludeEnd("ide");
messageSends: ["actionBlock", "ifTrue:", "hasModification", "confirm:ifTrue:", "methodContents:", "contents", "value", "signal"]
}),
$globals.HLBrowserCodeWidget);

$core.addMethod(
$core.method({
selector: "onClassSelected:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
var class_;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$receiver;
class_=$recv(anAnnouncement)._item();
$1=class_;
if(($receiver = $1) == null || $receiver.isNil){
$2=self._contents_("");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["contents:"]=1;
//>>excludeEnd("ctx");
return $2;
} else {
$1;
};
self._contents_($recv(class_)._definition());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onClassSelected:",{anAnnouncement:anAnnouncement,class_:class_},$globals.HLBrowserCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onClassSelected: anAnnouncement\x0a\x09| class |\x0a\x09\x0a\x09class:= anAnnouncement item.\x0a\x09\x0a\x09class ifNil: [ ^ self contents: '' ].\x0a\x09self contents: class definition",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["item", "ifNil:", "contents:", "definition"]
}),
$globals.HLBrowserCodeWidget);

$core.addMethod(
$core.method({
selector: "onCompileError:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._alert_($recv($recv(anAnnouncement)._error())._messageText());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onCompileError:",{anAnnouncement:anAnnouncement},$globals.HLBrowserCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onCompileError: anAnnouncement\x0a\x09self alert: anAnnouncement error messageText",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["alert:", "messageText", "error"]
}),
$globals.HLBrowserCodeWidget);

$core.addMethod(
$core.method({
selector: "onInstVarAdded",
protocol: 'reactions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._browserModel())._save_(self._contents());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onInstVarAdded",{},$globals.HLBrowserCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onInstVarAdded\x0a\x09self browserModel save: self contents",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["save:", "browserModel", "contents"]
}),
$globals.HLBrowserCodeWidget);

$core.addMethod(
$core.method({
selector: "onMethodModified:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
var method;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$1,$5,$4,$7,$6,$receiver;
method=$recv(anAnnouncement)._method();
$3=self._browserModel();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["browserModel"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._selectedClass();
$1=$recv($2).__eq($recv(method)._methodClass());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
if(!$core.assert($1)){
return self;
};
$5=self._browserModel();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["browserModel"]=2;
//>>excludeEnd("ctx");
$4=$recv($5)._selectedMethod();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selectedMethod"]=1;
//>>excludeEnd("ctx");
if(($receiver = $4) == null || $receiver.isNil){
return self;
} else {
$4;
};
$7=$recv($recv(self._browserModel())._selectedMethod())._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selector"]=1;
//>>excludeEnd("ctx");
$6=$recv($7).__eq($recv(method)._selector());
if(!$core.assert($6)){
return self;
};
self._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onMethodModified:",{anAnnouncement:anAnnouncement,method:method},$globals.HLBrowserCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onMethodModified: anAnnouncement\x0a\x09| method |\x0a\x09\x0a\x09method := anAnnouncement method.\x0a\x09\x0a\x09self browserModel selectedClass = method methodClass ifFalse: [ ^ self ].\x0a\x09self browserModel selectedMethod ifNil: [ ^ self ].\x0a\x09self browserModel selectedMethod selector = method selector ifFalse: [ ^ self ].\x0a\x0a\x09self refresh",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["method", "ifFalse:", "=", "selectedClass", "browserModel", "methodClass", "ifNil:", "selectedMethod", "selector", "refresh"]
}),
$globals.HLBrowserCodeWidget);

$core.addMethod(
$core.method({
selector: "onMethodSelected:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
var method;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$receiver;
method=$recv(anAnnouncement)._item();
$1=method;
if(($receiver = $1) == null || $receiver.isNil){
$2=self._contents_("");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["contents:"]=1;
//>>excludeEnd("ctx");
return $2;
} else {
$1;
};
self._contents_($recv(method)._source());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onMethodSelected:",{anAnnouncement:anAnnouncement,method:method},$globals.HLBrowserCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onMethodSelected: anAnnouncement\x0a\x09| method |\x0a\x09\x0a\x09method := anAnnouncement item.\x0a\x09\x0a\x09method ifNil: [ ^ self contents: '' ].\x0a\x09self contents: method source",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["item", "ifNil:", "contents:", "source"]
}),
$globals.HLBrowserCodeWidget);

$core.addMethod(
$core.method({
selector: "onPackageSelected:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
var package_;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$receiver;
package_=$recv(anAnnouncement)._item();
$1=package_;
if(($receiver = $1) == null || $receiver.isNil){
$2=self._contents_("");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["contents:"]=1;
//>>excludeEnd("ctx");
return $2;
} else {
$1;
};
self._contents_($recv(package_)._definition());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onPackageSelected:",{anAnnouncement:anAnnouncement,package_:package_},$globals.HLBrowserCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onPackageSelected: anAnnouncement\x0a\x09| package |\x0a\x09\x0a\x09package := anAnnouncement item.\x0a\x09\x0a\x09package ifNil: [ ^ self contents: '' ].\x0a\x09self contents: package definition",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["item", "ifNil:", "contents:", "definition"]
}),
$globals.HLBrowserCodeWidget);

$core.addMethod(
$core.method({
selector: "onParseError:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
var lineIndex,newContents;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$2,$6,$5,$4;
lineIndex=(1);
self._contents_($recv($String())._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._contents())._linesDo_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$1=$recv(lineIndex).__eq($recv(anAnnouncement)._line());
if($core.assert($1)){
$3=$recv(anAnnouncement)._column();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["column"]=1;
//>>excludeEnd("ctx");
$2=$recv(each)._copyFrom_to_((1),$3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["copyFrom:to:"]=1;
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_("<- ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_($recv(anAnnouncement)._message());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["nextPutAll:"]=3;
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_(" ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["nextPutAll:"]=4;
//>>excludeEnd("ctx");
$6=$recv($recv(anAnnouncement)._column()).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$5=$recv(each)._copyFrom_to_($6,$recv(each)._size());
$4=$recv(stream)._nextPutAll_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["nextPutAll:"]=5;
//>>excludeEnd("ctx");
$4;
} else {
$recv(stream)._nextPutAll_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["nextPutAll:"]=6;
//>>excludeEnd("ctx");
};
$recv(stream)._nextPutAll_($recv($String())._cr());
lineIndex=$recv(lineIndex).__plus((1));
return lineIndex;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
})));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onParseError:",{anAnnouncement:anAnnouncement,lineIndex:lineIndex,newContents:newContents},$globals.HLBrowserCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onParseError: anAnnouncement\x0a\x09| lineIndex newContents |\x0a\x09\x0a\x09lineIndex := 1.\x0a\x09\x0a\x09self contents: (String streamContents: [ :stream |\x0a\x09\x09self contents linesDo: [ :each |\x0a\x09\x09\x09lineIndex = anAnnouncement line \x0a\x09\x09\x09\x09ifTrue: [ \x0a\x09\x09\x09\x09\x09stream \x0a\x09\x09\x09\x09\x09\x09nextPutAll: (each copyFrom: 1 to: anAnnouncement column);\x0a\x09\x09\x09\x09\x09\x09nextPutAll: '<- ';\x0a\x09\x09\x09\x09\x09\x09nextPutAll: anAnnouncement message;\x0a\x09\x09\x09\x09\x09\x09nextPutAll: ' ';\x0a\x09\x09\x09\x09\x09\x09nextPutAll: (each copyFrom: anAnnouncement column + 1 to: each size) ]\x0a\x09\x09\x09\x09ifFalse: [ stream nextPutAll: each ].\x0a\x09\x09\x09stream nextPutAll: String cr.\x0a\x09\x09\x09lineIndex := lineIndex + 1 ] ])",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["contents:", "streamContents:", "linesDo:", "contents", "ifTrue:ifFalse:", "=", "line", "nextPutAll:", "copyFrom:to:", "column", "message", "+", "size", "cr"]
}),
$globals.HLBrowserCodeWidget);

$core.addMethod(
$core.method({
selector: "onProtocolSelected:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$3,$receiver;
$2=self._browserModel();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["browserModel"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._selectedClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selectedClass"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
$3=self._contents_("");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["contents:"]=1;
//>>excludeEnd("ctx");
return $3;
} else {
$1;
};
self._contents_($recv($recv(self._browserModel())._selectedClass())._definition());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onProtocolSelected:",{anAnnouncement:anAnnouncement},$globals.HLBrowserCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onProtocolSelected: anAnnouncement\x0a\x09self browserModel selectedClass ifNil: [ ^ self contents: '' ].\x0a\x09self contents: self browserModel selectedClass definition",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "selectedClass", "browserModel", "contents:", "definition"]
}),
$globals.HLBrowserCodeWidget);

$core.addMethod(
$core.method({
selector: "onSaveIt",
protocol: 'reactions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._browserModel())._save_(self._contents());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onSaveIt",{},$globals.HLBrowserCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onSaveIt\x0a\x09self browserModel save: self contents",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["save:", "browserModel", "contents"]
}),
$globals.HLBrowserCodeWidget);

$core.addMethod(
$core.method({
selector: "onShowInstanceToggled",
protocol: 'reactions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$3,$receiver;
$2=self._browserModel();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["browserModel"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._selectedClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selectedClass"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
$3=self._contents_("");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["contents:"]=1;
//>>excludeEnd("ctx");
return $3;
} else {
$1;
};
self._contents_($recv($recv(self._browserModel())._selectedClass())._definition());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onShowInstanceToggled",{},$globals.HLBrowserCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onShowInstanceToggled\x0a\x09self browserModel selectedClass ifNil: [ ^ self contents: '' ].\x0a    \x0a\x09self contents: self browserModel selectedClass definition",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "selectedClass", "browserModel", "contents:", "definition"]
}),
$globals.HLBrowserCodeWidget);

$core.addMethod(
$core.method({
selector: "onShowTemplate:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._contents_($recv(anAnnouncement)._template());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onShowTemplate:",{anAnnouncement:anAnnouncement},$globals.HLBrowserCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onShowTemplate: anAnnouncement\x0a\x09self contents: anAnnouncement template",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["contents:", "template"]
}),
$globals.HLBrowserCodeWidget);

$core.addMethod(
$core.method({
selector: "onSourceCodeFocusRequested",
protocol: 'reactions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._focus();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onSourceCodeFocusRequested",{},$globals.HLBrowserCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onSourceCodeFocusRequested\x0a\x09self focus",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["focus"]
}),
$globals.HLBrowserCodeWidget);

$core.addMethod(
$core.method({
selector: "onSourceCodeSaved",
protocol: 'reactions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._methodContents_(self._contents());
self._updateState();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onSourceCodeSaved",{},$globals.HLBrowserCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onSourceCodeSaved\x0a\x09self methodContents: self contents.\x0a\x09self updateState",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["methodContents:", "contents", "updateState"]
}),
$globals.HLBrowserCodeWidget);

$core.addMethod(
$core.method({
selector: "onUnknownVariableError:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
var error;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
error=$recv(anAnnouncement)._error();
self._confirm_ifTrue_($recv($String())._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_($recv(error)._messageText());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv(stream)._nextPutAll_($recv($String())._cr());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$1=$recv(stream)._nextPutAll_("Would you like to define an instance variable?");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
})),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._browserModel())._addInstVarNamed_($recv(error)._variableName());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onUnknownVariableError:",{anAnnouncement:anAnnouncement,error:error},$globals.HLBrowserCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onUnknownVariableError: anAnnouncement\x0a\x09| error |\x0a\x09\x0a\x09error := anAnnouncement error.\x0a\x09\x0a\x09self \x0a\x09\x09confirm: (String streamContents: [ :stream |\x0a\x09\x09\x09stream \x0a\x09\x09\x09\x09nextPutAll: error messageText;\x0a\x09\x09\x09\x09nextPutAll: String cr;\x0a\x09\x09\x09\x09nextPutAll: 'Would you like to define an instance variable?' ])\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09self browserModel addInstVarNamed: error variableName ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["error", "confirm:ifTrue:", "streamContents:", "nextPutAll:", "messageText", "cr", "addInstVarNamed:", "browserModel", "variableName"]
}),
$globals.HLBrowserCodeWidget);

$core.addMethod(
$core.method({
selector: "refresh",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=self._hasModification();
if($core.assert($1)){
return self;
};
$2=self._hasFocus();
if($core.assert($2)){
return self;
};
self._contents_($recv($recv(self._browserModel())._selectedMethod())._source());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"refresh",{},$globals.HLBrowserCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "refresh\x0a\x09self hasModification ifTrue: [ ^ self ].\x0a    self hasFocus ifTrue: [ ^ self ].\x0a\x0a\x09self contents: self browserModel selectedMethod source",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "hasModification", "hasFocus", "contents:", "source", "selectedMethod", "browserModel"]
}),
$globals.HLBrowserCodeWidget);

$core.addMethod(
$core.method({
selector: "renderButtonsOn:",
protocol: 'actions',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._button();
$recv($1)._class_("button");
$recv($1)._with_("SaveIt");
$2=$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._saveIt();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.HLBrowserCodeWidget.superclass.fn.prototype._renderButtonsOn_.apply($recv(self), [html]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},$globals.HLBrowserCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderButtonsOn: html\x0a\x09html button \x0a\x09\x09class: 'button';\x0a\x09\x09with: 'SaveIt';\x0a\x09\x09onClick: [ self saveIt ].\x0a\x09super renderButtonsOn: html",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "button", "with:", "onClick:", "saveIt", "renderButtonsOn:"]
}),
$globals.HLBrowserCodeWidget);

$core.addMethod(
$core.method({
selector: "saveIt",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._browserModel())._saveSourceCode();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"saveIt",{},$globals.HLBrowserCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "saveIt\x0a\x09self browserModel saveSourceCode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["saveSourceCode", "browserModel"]
}),
$globals.HLBrowserCodeWidget);

$core.addMethod(
$core.method({
selector: "unregister",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.HLBrowserCodeWidget.superclass.fn.prototype._unregsiter.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$2=self._browserModel();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["browserModel"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._announcer();
$recv($1)._unsubscribe_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["unsubscribe:"]=1;
//>>excludeEnd("ctx");
$recv($recv(self._browserModel())._systemAnnouncer())._unsubscribe_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"unregister",{},$globals.HLBrowserCodeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "unregister\x0a\x09super unregsiter.\x0a\x09\x0a\x09self browserModel announcer unsubscribe: self.\x0a\x09self browserModel systemAnnouncer unsubscribe: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["unregsiter", "unsubscribe:", "announcer", "browserModel", "systemAnnouncer"]
}),
$globals.HLBrowserCodeWidget);


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
$globals.HLBrowserCodeWidget.klass);

$core.addMethod(
$core.method({
selector: "on:",
protocol: 'instance creation',
fn: function (aBrowserModel){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._browserModel_(aBrowserModel);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aBrowserModel:aBrowserModel},$globals.HLBrowserCodeWidget.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBrowserModel"],
source: "on: aBrowserModel\x0a\x09^ self new\x0a\x09\x09browserModel: aBrowserModel;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["browserModel:", "new", "yourself"]
}),
$globals.HLBrowserCodeWidget.klass);


$core.addClass('HLWorkspace', $globals.HLWidget, ['codeWidget', 'transcript'], 'Helios-Workspace');
$core.addMethod(
$core.method({
selector: "canHaveFocus",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "canHaveFocus\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLWorkspace);

$core.addMethod(
$core.method({
selector: "codeWidget",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLCodeWidget(){return $globals.HLCodeWidget||(typeof HLCodeWidget=="undefined"?nil:HLCodeWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@codeWidget"];
if(($receiver = $2) == null || $receiver.isNil){
self["@codeWidget"]=$recv($HLCodeWidget())._new();
$1=self["@codeWidget"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"codeWidget",{},$globals.HLWorkspace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "codeWidget\x0a\x09^ codeWidget ifNil: [ codeWidget := HLCodeWidget new ]",
referencedClasses: ["HLCodeWidget"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.HLWorkspace);

$core.addMethod(
$core.method({
selector: "focus",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._codeWidget())._focus();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"focus",{},$globals.HLWorkspace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "focus\x0a\x09^ self codeWidget focus",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["focus", "codeWidget"]
}),
$globals.HLWorkspace);

$core.addMethod(
$core.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $HLContainer(){return $globals.HLContainer||(typeof HLContainer=="undefined"?nil:HLContainer)}
function $HLHorizontalSplitter(){return $globals.HLHorizontalSplitter||(typeof HLHorizontalSplitter=="undefined"?nil:HLHorizontalSplitter)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(html)._with_($recv($HLContainer())._with_($recv($HLHorizontalSplitter())._with_with_(self._codeWidget(),(function(canvas){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._renderTranscriptOn_(canvas);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({canvas:canvas},$ctx1,1)});
//>>excludeEnd("ctx");
}))));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},$globals.HLWorkspace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderContentOn: html\x0a\x09html with: (HLContainer with: (HLHorizontalSplitter\x0a\x09\x09with: self codeWidget\x0a\x09\x09with: [ :canvas | self renderTranscriptOn: canvas ]))",
referencedClasses: ["HLContainer", "HLHorizontalSplitter"],
//>>excludeEnd("ide");
messageSends: ["with:", "with:with:", "codeWidget", "renderTranscriptOn:"]
}),
$globals.HLWorkspace);

$core.addMethod(
$core.method({
selector: "renderTranscriptOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$4,$2;
$1=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["div"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_("transcript-container");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._div();
$recv($3)._class_("list-label");
$4=$recv($3)._with_("Transcript");
$4;
return $recv(self._transcript())._renderOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderTranscriptOn:",{html:html},$globals.HLWorkspace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderTranscriptOn: html\x0a\x09html div \x0a\x09\x09class: 'transcript-container';\x0a\x09\x09with: [\x0a\x09\x09\x09html div\x0a\x09\x09\x09\x09class: 'list-label';\x0a\x09\x09\x09\x09with: 'Transcript'.\x0a\x09\x09\x09self transcript renderOn: html ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "renderOn:", "transcript"]
}),
$globals.HLWorkspace);

$core.addMethod(
$core.method({
selector: "transcript",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLTranscript(){return $globals.HLTranscript||(typeof HLTranscript=="undefined"?nil:HLTranscript)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@transcript"];
if(($receiver = $2) == null || $receiver.isNil){
self["@transcript"]=$recv($HLTranscript())._new();
$1=self["@transcript"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"transcript",{},$globals.HLWorkspace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "transcript\x0a\x09^ transcript ifNil: [ transcript := HLTranscript new ]",
referencedClasses: ["HLTranscript"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.HLWorkspace);

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
$globals.HLWorkspace.superclass.fn.prototype._unregister.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["unregister"]=1;
//>>excludeEnd("ctx");
$recv(self._transcript())._unregister();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"unregister",{},$globals.HLWorkspace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "unregister\x0a\x09super unregister.\x0a\x09self transcript unregister",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["unregister", "transcript"]
}),
$globals.HLWorkspace);


$core.addMethod(
$core.method({
selector: "canBeOpenAsTab",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "canBeOpenAsTab\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLWorkspace.klass);

$core.addMethod(
$core.method({
selector: "tabClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "workspace";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tabClass\x0a\x09^ 'workspace'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLWorkspace.klass);

$core.addMethod(
$core.method({
selector: "tabLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "Workspace";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tabLabel\x0a\x09^ 'Workspace'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLWorkspace.klass);

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
$globals.HLWorkspace.klass);

});
