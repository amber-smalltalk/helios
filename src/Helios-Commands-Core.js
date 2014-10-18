define("helios/Helios-Commands-Core", ["amber/boot", "amber_core/Kernel-Objects"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Helios-Commands-Core');
$core.packages["Helios-Commands-Core"].transport = {"type":"amd","amdNamespace":"helios"};

$core.addClass('HLCommand', $globals.Object, ['input'], 'Helios-Commands-Core');
$core.addMethod(
$core.method({
selector: "asActionBinding",
protocol: 'converting',
fn: function (){
var self=this;
function $HLBindingAction(){return $globals.HLBindingAction||(typeof HLBindingAction=="undefined"?nil:HLBindingAction)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($HLBindingAction())._on_labelled_(self._keyCode(),self._label());
$recv($2)._command_(self);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asActionBinding",{},$globals.HLCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asActionBinding\x0a\x09^ (HLBindingAction on: self keyCode labelled: self label)\x0a    \x09command: self;\x0a\x09\x09yourself",
referencedClasses: ["HLBindingAction"],
//>>excludeEnd("ide");
messageSends: ["command:", "on:labelled:", "keyCode", "label", "yourself"]
}),
$globals.HLCommand);

$core.addMethod(
$core.method({
selector: "asBinding",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=self._isBindingGroup();
if($core.assert($2)){
$1=self._asGroupBinding();
} else {
$1=self._asActionBinding();
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asBinding",{},$globals.HLCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asBinding\x0a\x09^ self isBindingGroup\x0a\x09\x09ifTrue: [ self asGroupBinding ]\x0a\x09\x09ifFalse: [ self asActionBinding ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "isBindingGroup", "asGroupBinding", "asActionBinding"]
}),
$globals.HLCommand);

$core.addMethod(
$core.method({
selector: "asGroupBinding",
protocol: 'converting',
fn: function (){
var self=this;
function $HLBindingGroup(){return $globals.HLBindingGroup||(typeof HLBindingGroup=="undefined"?nil:HLBindingGroup)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($HLBindingGroup())._on_labelled_(self._keyCode(),self._label());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asGroupBinding",{},$globals.HLCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asGroupBinding\x0a\x09^ HLBindingGroup \x0a\x09\x09on: self keyCode\x0a\x09\x09labelled: self label",
referencedClasses: ["HLBindingGroup"],
//>>excludeEnd("ide");
messageSends: ["on:labelled:", "keyCode", "label"]
}),
$globals.HLCommand);

$core.addMethod(
$core.method({
selector: "commandError:",
protocol: 'error handling',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._error_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commandError:",{aString:aString},$globals.HLCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "commandError: aString\x0a\x09self error: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:"]
}),
$globals.HLCommand);

$core.addMethod(
$core.method({
selector: "defaultInput",
protocol: 'defaults',
fn: function (){
var self=this;
return "";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultInput\x0a\x09^ ''",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLCommand);

$core.addMethod(
$core.method({
selector: "documentation",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._class())._documentation();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"documentation",{},$globals.HLCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "documentation\x0a\x09^ self class documentation",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["documentation", "class"]
}),
$globals.HLCommand);

$core.addMethod(
$core.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "execute",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLCommand);

$core.addMethod(
$core.method({
selector: "input",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@input"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "input\x0a\x09^ input",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLCommand);

$core.addMethod(
$core.method({
selector: "input:",
protocol: 'accessing',
fn: function (aString){
var self=this;
var $1;
self["@input"]=aString;
$1=self["@input"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "input: aString\x0a\x09^ input := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLCommand);

$core.addMethod(
$core.method({
selector: "inputCompletion",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=[];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inputCompletion\x0a\x09^ #()",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLCommand);

$core.addMethod(
$core.method({
selector: "inputLabel",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._label();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inputLabel",{},$globals.HLCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inputLabel\x0a\x09^ self label",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["label"]
}),
$globals.HLCommand);

$core.addMethod(
$core.method({
selector: "isAction",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._isBindingGroup())._not();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isAction",{},$globals.HLCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isAction\x0a\x09^ self isBindingGroup not",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["not", "isBindingGroup"]
}),
$globals.HLCommand);

$core.addMethod(
$core.method({
selector: "isActive",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isActive\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLCommand);

$core.addMethod(
$core.method({
selector: "isBindingGroup",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($recv(self._class())._methodDictionary())._includesKey_("execute"))._not();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isBindingGroup",{},$globals.HLCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBindingGroup\x0a\x09^ (self class methodDictionary includesKey: 'execute') not",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["not", "includesKey:", "methodDictionary", "class"]
}),
$globals.HLCommand);

$core.addMethod(
$core.method({
selector: "isInputRequired",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isInputRequired\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLCommand);

$core.addMethod(
$core.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._class())._key();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"key",{},$globals.HLCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09^ self class key",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["key", "class"]
}),
$globals.HLCommand);

$core.addMethod(
$core.method({
selector: "keyCode",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._key())._asUppercase())._charCodeAt_((1));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"keyCode",{},$globals.HLCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "keyCode\x0a\x09^ self key asUppercase charCodeAt: 1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["charCodeAt:", "asUppercase", "key"]
}),
$globals.HLCommand);

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
$1=$recv(self._class())._label();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"label",{},$globals.HLCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ self class label",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["label", "class"]
}),
$globals.HLCommand);

$core.addMethod(
$core.method({
selector: "menuLabel",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._class())._menuLabel();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"menuLabel",{},$globals.HLCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "menuLabel\x0a\x09^ self class menuLabel",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["menuLabel", "class"]
}),
$globals.HLCommand);

$core.addMethod(
$core.method({
selector: "registerOn:",
protocol: 'registration',
fn: function (aBinding){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aBinding)._add_(self._asBinding());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"registerOn:",{aBinding:aBinding},$globals.HLCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBinding"],
source: "registerOn: aBinding\x0a\x09^ aBinding add: self asBinding",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "asBinding"]
}),
$globals.HLCommand);


$core.addMethod(
$core.method({
selector: "concreteClasses",
protocol: 'registration',
fn: function (){
var self=this;
var classes;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
classes=$recv($OrderedCollection())._new();
$1=self._isConcrete();
if($core.assert($1)){
$recv(classes)._add_(self);
};
$recv(self._subclasses())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(classes)._addAll_($recv(each)._concreteClasses());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$2=classes;
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"concreteClasses",{classes:classes},$globals.HLCommand.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "concreteClasses\x0a\x09| classes |\x0a\x09\x0a\x09classes := OrderedCollection new.\x0a\x09\x0a\x09self isConcrete\x0a\x09\x09ifTrue: [ classes add: self ].\x0a\x09\x09\x0a\x09self subclasses do: [ :each | \x0a\x09\x09classes addAll: each concreteClasses ].\x0a\x09\x09\x0a\x09^ classes",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["new", "ifTrue:", "isConcrete", "add:", "do:", "subclasses", "addAll:", "concreteClasses"]
}),
$globals.HLCommand.klass);

$core.addMethod(
$core.method({
selector: "documentation",
protocol: 'accessing',
fn: function (){
var self=this;
return "";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "documentation\x0a\x09^ ''",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLCommand.klass);

$core.addMethod(
$core.method({
selector: "isConcrete",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._key())._notNil();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isConcrete",{},$globals.HLCommand.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isConcrete\x0a\x09^ self key notNil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notNil", "key"]
}),
$globals.HLCommand.klass);

$core.addMethod(
$core.method({
selector: "isValidFor:",
protocol: 'testing',
fn: function (aModel){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aModel"],
source: "isValidFor: aModel\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLCommand.klass);

$core.addMethod(
$core.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return nil;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09\x22Answer a single character string or nil if no key\x22\x0a\x09\x0a\x09^ nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLCommand.klass);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ ''",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLCommand.klass);

$core.addMethod(
$core.method({
selector: "menuLabel",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._label();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"menuLabel",{},$globals.HLCommand.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "menuLabel\x0a\x09^ self label",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["label"]
}),
$globals.HLCommand.klass);

$core.addMethod(
$core.method({
selector: "registerConcreteClassesOn:",
protocol: 'accessing',
fn: function (aBinding){
var self=this;
var newBinding;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._isConcrete();
if($core.assert($1)){
newBinding=self._registerOn_(aBinding);
newBinding;
} else {
newBinding=aBinding;
newBinding;
};
$recv(self._subclasses())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._registerConcreteClassesOn_(newBinding);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"registerConcreteClassesOn:",{aBinding:aBinding,newBinding:newBinding},$globals.HLCommand.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBinding"],
source: "registerConcreteClassesOn: aBinding\x0a\x09| newBinding |\x0a\x09\x0a\x09self isConcrete\x0a\x09\x09ifTrue: [ newBinding := self registerOn: aBinding ]\x0a\x09\x09ifFalse: [ newBinding := aBinding ].\x0a\x09\x09\x0a\x09self subclasses do: [ :each | each registerConcreteClassesOn: newBinding ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "isConcrete", "registerOn:", "do:", "subclasses", "registerConcreteClassesOn:"]
}),
$globals.HLCommand.klass);

$core.addMethod(
$core.method({
selector: "registerOn:",
protocol: 'registration',
fn: function (aBinding){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._new())._registerOn_(aBinding);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"registerOn:",{aBinding:aBinding},$globals.HLCommand.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBinding"],
source: "registerOn: aBinding\x0a\x09^ self new registerOn: aBinding",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["registerOn:", "new"]
}),
$globals.HLCommand.klass);


$core.addClass('HLCloseTabCommand', $globals.HLCommand, [], 'Helios-Commands-Core');
$core.addMethod(
$core.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
function $HLManager(){return $globals.HLManager||(typeof HLManager=="undefined"?nil:HLManager)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv($HLManager())._current())._removeActiveTab();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"execute",{},$globals.HLCloseTabCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "execute\x0a\x09HLManager current removeActiveTab",
referencedClasses: ["HLManager"],
//>>excludeEnd("ide");
messageSends: ["removeActiveTab", "current"]
}),
$globals.HLCloseTabCommand);


$core.addMethod(
$core.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "w";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09^ 'w'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLCloseTabCommand.klass);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Close tab";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'Close tab'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLCloseTabCommand.klass);


$core.addClass('HLModelCommand', $globals.HLCommand, ['model'], 'Helios-Commands-Core');
$core.addMethod(
$core.method({
selector: "model",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@model"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "model\x0a\x09^ model",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLModelCommand);

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
$globals.HLModelCommand);


$core.addMethod(
$core.method({
selector: "for:",
protocol: 'instance creation',
fn: function (aModel){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"for:",{aModel:aModel},$globals.HLModelCommand.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aModel"],
source: "for: aModel\x0a\x09^ self new",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.HLModelCommand.klass);

$core.addMethod(
$core.method({
selector: "registerConcreteClassesOn:for:",
protocol: 'registration',
fn: function (aBinding,aModel){
var self=this;
var newBinding;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._isConcrete())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._isValidFor_(aModel);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if($core.assert($1)){
newBinding=self._registerOn_for_(aBinding,aModel);
newBinding;
} else {
newBinding=aBinding;
newBinding;
};
$recv(self._subclasses())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._registerConcreteClassesOn_for_(newBinding,aModel);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,4)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"registerConcreteClassesOn:for:",{aBinding:aBinding,aModel:aModel,newBinding:newBinding},$globals.HLModelCommand.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBinding", "aModel"],
source: "registerConcreteClassesOn: aBinding for: aModel\x0a\x09| newBinding |\x0a\x09\x0a\x09(self isConcrete and: [ self isValidFor: aModel ])\x0a\x09\x09ifTrue: [ newBinding := self registerOn: aBinding for: aModel ]\x0a\x09\x09ifFalse: [ newBinding := aBinding ].\x0a\x09\x09\x0a\x09self subclasses do: [ :each |\x0a\x09\x09each registerConcreteClassesOn: newBinding for: aModel ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "and:", "isConcrete", "isValidFor:", "registerOn:for:", "do:", "subclasses", "registerConcreteClassesOn:for:"]
}),
$globals.HLModelCommand.klass);

$core.addMethod(
$core.method({
selector: "registerOn:for:",
protocol: 'registration',
fn: function (aBinding,aModel){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._for_(aModel))._registerOn_(aBinding);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"registerOn:for:",{aBinding:aBinding,aModel:aModel},$globals.HLModelCommand.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBinding", "aModel"],
source: "registerOn: aBinding for: aModel\x0a\x09^ (self for: aModel) registerOn: aBinding",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["registerOn:", "for:"]
}),
$globals.HLModelCommand.klass);


$core.addClass('HLOpenCommand', $globals.HLCommand, [], 'Helios-Commands-Core');

$core.addMethod(
$core.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "o";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09^ 'o'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLOpenCommand.klass);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Open";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'Open'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLOpenCommand.klass);


$core.addClass('HLOpenBrowserCommand', $globals.HLOpenCommand, [], 'Helios-Commands-Core');
$core.addMethod(
$core.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
function $HLBrowser(){return $globals.HLBrowser||(typeof HLBrowser=="undefined"?nil:HLBrowser)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($HLBrowser())._openAsTab();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"execute",{},$globals.HLOpenBrowserCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "execute\x0a\x09^ HLBrowser openAsTab",
referencedClasses: ["HLBrowser"],
//>>excludeEnd("ide");
messageSends: ["openAsTab"]
}),
$globals.HLOpenBrowserCommand);


$core.addMethod(
$core.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "b";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09^ 'b'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLOpenBrowserCommand.klass);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Browser";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'Browser'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLOpenBrowserCommand.klass);


$core.addClass('HLOpenSUnitCommand', $globals.HLOpenCommand, [], 'Helios-Commands-Core');
$core.addMethod(
$core.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
function $HLSUnit(){return $globals.HLSUnit||(typeof HLSUnit=="undefined"?nil:HLSUnit)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($HLSUnit())._openAsTab();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"execute",{},$globals.HLOpenSUnitCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "execute\x0a\x09^ HLSUnit openAsTab",
referencedClasses: ["HLSUnit"],
//>>excludeEnd("ide");
messageSends: ["openAsTab"]
}),
$globals.HLOpenSUnitCommand);


$core.addMethod(
$core.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "s";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09^ 's'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLOpenSUnitCommand.klass);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "SUnit";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'SUnit'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLOpenSUnitCommand.klass);


$core.addClass('HLOpenWorkspaceCommand', $globals.HLOpenCommand, [], 'Helios-Commands-Core');
$core.addMethod(
$core.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
function $HLWorkspace(){return $globals.HLWorkspace||(typeof HLWorkspace=="undefined"?nil:HLWorkspace)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($HLWorkspace())._openAsTab();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"execute",{},$globals.HLOpenWorkspaceCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "execute\x0a\x09^ HLWorkspace openAsTab",
referencedClasses: ["HLWorkspace"],
//>>excludeEnd("ide");
messageSends: ["openAsTab"]
}),
$globals.HLOpenWorkspaceCommand);


$core.addMethod(
$core.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "w";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09^ 'w'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLOpenWorkspaceCommand.klass);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Workspace";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'Workspace'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLOpenWorkspaceCommand.klass);


$core.addClass('HLSwitchTabCommand', $globals.HLCommand, [], 'Helios-Commands-Core');
$core.addMethod(
$core.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
var activeTab;
function $HLTabSelectionWidget(){return $globals.HLTabSelectionWidget||(typeof HLTabSelectionWidget=="undefined"?nil:HLTabSelectionWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
activeTab=self._selectedTab();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selectedTab"]=1;
//>>excludeEnd("ctx");
$2=$recv($HLTabSelectionWidget())._new();
$recv($2)._tabs_(self._tabs());
$recv($2)._selectedTab_(self._selectedTab());
$recv($2)._selectCallback_((function(tab){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(tab)._activate();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["activate"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({tab:tab},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv($2)._confirmCallback_((function(tab){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(tab)._focus();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({tab:tab},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv($2)._cancelCallback_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(activeTab)._activate();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$3=$recv($2)._show();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"execute",{activeTab:activeTab},$globals.HLSwitchTabCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "execute\x0a\x09| activeTab |\x0a\x09\x0a\x09activeTab := self selectedTab.\x0a\x09\x0a\x09^ HLTabSelectionWidget new\x0a\x09\x09tabs: self tabs;\x0a\x09\x09selectedTab: self selectedTab;\x0a\x09\x09selectCallback: [ :tab | tab activate ];\x0a\x09\x09confirmCallback: [ :tab | tab focus ];\x0a\x09\x09cancelCallback: [ activeTab activate ];\x0a\x09\x09show",
referencedClasses: ["HLTabSelectionWidget"],
//>>excludeEnd("ide");
messageSends: ["selectedTab", "tabs:", "new", "tabs", "selectedTab:", "selectCallback:", "activate", "confirmCallback:", "focus", "cancelCallback:", "show"]
}),
$globals.HLSwitchTabCommand);

$core.addMethod(
$core.method({
selector: "selectedTab",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLManager(){return $globals.HLManager||(typeof HLManager=="undefined"?nil:HLManager)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($HLManager())._current())._activeTab();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectedTab",{},$globals.HLSwitchTabCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selectedTab\x0a\x09^ HLManager current activeTab",
referencedClasses: ["HLManager"],
//>>excludeEnd("ide");
messageSends: ["activeTab", "current"]
}),
$globals.HLSwitchTabCommand);

$core.addMethod(
$core.method({
selector: "tabs",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLManager(){return $globals.HLManager||(typeof HLManager=="undefined"?nil:HLManager)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($HLManager())._current())._tabs();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tabs",{},$globals.HLSwitchTabCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tabs\x0a\x09^ HLManager current tabs",
referencedClasses: ["HLManager"],
//>>excludeEnd("ide");
messageSends: ["tabs", "current"]
}),
$globals.HLSwitchTabCommand);


$core.addMethod(
$core.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "s";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09^ 's'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLSwitchTabCommand.klass);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Switch tab";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'Switch tab'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLSwitchTabCommand.klass);


$core.addClass('HLViewCommand', $globals.HLCommand, [], 'Helios-Commands-Core');

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "View";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'View'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLViewCommand.klass);

});
