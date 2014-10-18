define("helios/Helios-Helpers", ["amber/boot", "amber_core/Kernel-Objects"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Helios-Helpers');
$core.packages["Helios-Helpers"].transport = {"type":"amd","amdNamespace":"helios"};

$core.addClass('HLClassifier', $globals.Object, ['next', 'method'], 'Helios-Helpers');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLClassifier.comment="I am an abstract class implementing a link in a `chain of responsibility` pattern.\x0a\x0aSubclasses are in charge of classifying a method according to multiple strategies.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "classify",
protocol: 'protocol',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$2,$receiver;
$1=self._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["next"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
return false;
} else {
$1;
};
$3=self._doClassify();
if($core.assert($3)){
$2=true;
} else {
$2=$recv(self._next())._classify();
};
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classify",{},$globals.HLClassifier)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classify\x0a\x09self next ifNil: [ ^ false ].\x0a\x09\x0a\x09^ self doClassify\x0a\x09\x09ifTrue: [ true ]\x0a\x09\x09ifFalse: [ self next classify ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "next", "ifTrue:ifFalse:", "doClassify", "classify"]
}),
$globals.HLClassifier);

$core.addMethod(
$core.method({
selector: "doClassify",
protocol: 'private',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doClassify",{},$globals.HLClassifier)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doClassify\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.HLClassifier);

$core.addMethod(
$core.method({
selector: "method",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@method"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "method\x0a\x09^ method",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLClassifier);

$core.addMethod(
$core.method({
selector: "method:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$receiver;
self["@method"]=anObject;
$1=self._next();
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
var nextLink;
nextLink=$receiver;
$recv(nextLink)._method_(anObject);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"method:",{anObject:anObject},$globals.HLClassifier)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "method: anObject\x0a\x09method := anObject.\x0a\x09self next\x0a\x09\x09ifNotNil: [ :nextLink | nextLink method: anObject ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "next", "method:"]
}),
$globals.HLClassifier);

$core.addMethod(
$core.method({
selector: "next",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@next"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "next\x0a\x09^ next",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLClassifier);

$core.addMethod(
$core.method({
selector: "next:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@next"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "next: anObject\x0a\x09next := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLClassifier);



$core.addClass('HLAccessorClassifier', $globals.HLClassifier, [], 'Helios-Helpers');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLAccessorClassifier.comment="I am a classifier checking the method selector matches an instance variable name.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "doClassify",
protocol: 'private',
fn: function (){
var self=this;
var names,selector;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
names=$recv($recv(self["@method"])._methodClass())._allInstanceVariableNames();
selector=$recv(self["@method"])._selector();
$1=$recv($recv(selector)._last()).__eq(":");
if($core.assert($1)){
selector=$recv(selector)._allButLast();
selector;
};
$2=$recv(names)._includes_(selector);
if(!$core.assert($2)){
return false;
};
$recv(self["@method"])._protocol_("accessing");
return true;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doClassify",{names:names,selector:selector},$globals.HLAccessorClassifier)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doClassify\x0a\x09| names selector |\x0a\x09\x0a\x09names := method methodClass allInstanceVariableNames.\x0a\x09selector := method selector.\x0a\x09\x0a\x09(selector last = ':')\x0a\x09\x09ifTrue: [ \x22selector might be a setter\x22\x0a\x09\x09\x09selector := selector allButLast ].\x0a\x09\x0a\x09(names includes: selector)\x0a\x09\x09ifFalse: [ ^ false ].\x0a\x09\x09\x0a\x09method protocol: 'accessing'.\x0a\x09^ true.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["allInstanceVariableNames", "methodClass", "selector", "ifTrue:", "=", "last", "allButLast", "ifFalse:", "includes:", "protocol:"]
}),
$globals.HLAccessorClassifier);



$core.addClass('HLImplementorClassifier', $globals.HLClassifier, [], 'Helios-Helpers');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLImplementorClassifier.comment="I am a classifier checking the other implementations of the same selector and choose the protocol the most populated.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "doClassify",
protocol: 'private',
fn: function (){
var self=this;
var currentClass;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$4,$2;
var $early={};
try {
currentClass=$recv(self["@method"])._methodClass();
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(currentClass)._superclass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["superclass"]=1;
//>>excludeEnd("ctx");
return $recv($1)._isNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileFalse_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
currentClass=$recv(currentClass)._superclass();
currentClass;
$3=currentClass;
$4=$recv(self["@method"])._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["selector"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._includesSelector_($4);
if($core.assert($2)){
$recv(self["@method"])._protocol_($recv($recv(currentClass).__gt_gt($recv(self["@method"])._selector()))._protocol());
throw $early=[true];
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return false;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doClassify",{currentClass:currentClass},$globals.HLImplementorClassifier)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doClassify\x0a\x09| currentClass |\x0a\x09currentClass := method methodClass.\x0a\x09\x0a\x09[ currentClass superclass isNil ] whileFalse: [\x0a\x09\x09currentClass := currentClass superclass.\x0a\x09\x09(currentClass includesSelector: method selector)\x0a\x09\x09\x09ifTrue: [ \x0a\x09\x09\x09\x09method protocol: (currentClass >> method selector) protocol.\x0a\x09\x09\x09\x09^ true ]].\x0a\x09\x0a\x09^ false.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["methodClass", "whileFalse:", "isNil", "superclass", "ifTrue:", "includesSelector:", "selector", "protocol:", "protocol", ">>"]
}),
$globals.HLImplementorClassifier);



$core.addClass('HLPrefixClassifier', $globals.HLClassifier, ['prefixMapping'], 'Helios-Helpers');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLPrefixClassifier.comment="I am classifier checking the method selector to know if it begins with a known prefix.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "buildPrefixDictionary",
protocol: 'initialization',
fn: function (){
var self=this;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
self["@prefixMapping"]=$recv($Dictionary())._new();
$1=self["@prefixMapping"];
$recv($1)._at_put_("test","tests");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_("bench","benchmarking");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$recv($1)._at_put_("copy","copying");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=3;
//>>excludeEnd("ctx");
$recv($1)._at_put_("initialize","initialization");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=4;
//>>excludeEnd("ctx");
$recv($1)._at_put_("accept","visitor");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=5;
//>>excludeEnd("ctx");
$recv($1)._at_put_("visit","visitor");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=6;
//>>excludeEnd("ctx");
$recv($1)._at_put_("signal","signalling");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=7;
//>>excludeEnd("ctx");
$recv($1)._at_put_("parse","parsing");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=8;
//>>excludeEnd("ctx");
$recv($1)._at_put_("add","adding");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=9;
//>>excludeEnd("ctx");
$recv($1)._at_put_("is","testing");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=10;
//>>excludeEnd("ctx");
$recv($1)._at_put_("as","converting");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=11;
//>>excludeEnd("ctx");
$2=$recv($1)._at_put_("new","instance creation");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"buildPrefixDictionary",{},$globals.HLPrefixClassifier)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "buildPrefixDictionary\x0a\x09prefixMapping := Dictionary new.\x0a\x09prefixMapping \x0a\x09\x09at: 'test' put: 'tests';\x0a\x09 \x09at: 'bench' put: 'benchmarking';\x0a\x09 \x09at: 'copy' put: 'copying';\x0a\x09\x09at: 'initialize' put: 'initialization';\x0a\x09\x09at: 'accept' put: 'visitor';\x0a\x09\x09at: 'visit' put: 'visitor';\x0a\x09\x09at: 'signal' put: 'signalling';\x0a\x09\x09at: 'parse' put: 'parsing';\x0a\x09\x09at: 'add' put: 'adding';\x0a\x09\x09at: 'is' put: 'testing';\x0a\x09\x09at: 'as' put: 'converting';\x0a\x09\x09at: 'new' put: 'instance creation'.",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["new", "at:put:"]
}),
$globals.HLPrefixClassifier);

$core.addMethod(
$core.method({
selector: "doClassify",
protocol: 'private',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
var $early={};
try {
$recv(self["@prefixMapping"])._keysAndValuesDo_((function(prefix,protocol){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv($recv(self["@method"])._selector())._beginsWith_(prefix);
if($core.assert($1)){
$recv(self["@method"])._protocol_(protocol);
throw $early=[true];
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({prefix:prefix,protocol:protocol},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return false;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doClassify",{},$globals.HLPrefixClassifier)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doClassify\x0a\x09prefixMapping keysAndValuesDo: [ :prefix :protocol |\x0a\x09\x09(method selector beginsWith: prefix)\x0a\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09method protocol: protocol.\x0a\x09\x09\x09\x09^ true ]].\x0a\x09^ false.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["keysAndValuesDo:", "ifTrue:", "beginsWith:", "selector", "protocol:"]
}),
$globals.HLPrefixClassifier);

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
$globals.HLPrefixClassifier.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._buildPrefixDictionary();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.HLPrefixClassifier)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x0a\x09self buildPrefixDictionary",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "buildPrefixDictionary"]
}),
$globals.HLPrefixClassifier);



$core.addClass('HLSuperclassClassifier', $globals.HLClassifier, [], 'Helios-Helpers');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLSuperclassClassifier.comment="I am a classifier checking the superclass chain to find a matching selector.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "doClassify",
protocol: 'private',
fn: function (){
var self=this;
var protocolBag,methods,protocolToUse,counter;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $HLReferencesModel(){return $globals.HLReferencesModel||(typeof HLReferencesModel=="undefined"?nil:HLReferencesModel)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$4,$3,$5;
var $early={};
try {
protocolBag=$recv($Dictionary())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
methods=$recv($recv($HLReferencesModel())._new())._implementorsOf_($recv(self["@method"])._selector());
$recv(methods)._ifEmpty_ifNotEmpty_((function(){
throw $early=[false];

}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(methods)._do_((function(aMethod){
var protocol;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
protocol=$recv($recv(aMethod)._method())._protocol();
protocol;
$2=$recv(self["@method"])._methodClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["methodClass"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq($recv(aMethod)._methodClass());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["="]=1;
//>>excludeEnd("ctx");
if(!$core.assert($1)){
$4=$recv($recv(protocol)._first()).__eq("*");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["="]=2;
//>>excludeEnd("ctx");
$3=$recv($4)._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv(protocol).__eq($recv(self["@method"])._defaultProtocol());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,5)});
//>>excludeEnd("ctx");
}));
if(!$core.assert($3)){
return $recv(protocolBag)._at_put_(protocol,$recv($recv(protocolBag)._at_ifAbsent_(protocol,(function(){
return (0);

}))).__plus((1)));
};
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({aMethod:aMethod,protocol:protocol},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv(protocolBag)._ifEmpty_((function(){
throw $early=[false];

}));
protocolToUse=nil;
counter=(0);
$recv(protocolBag)._keysAndValuesDo_((function(key,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$5=$recv(value).__gt(counter);
if($core.assert($5)){
counter=value;
counter;
protocolToUse=key;
return protocolToUse;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,9)});
//>>excludeEnd("ctx");
}));
$recv(self["@method"])._protocol_(protocolToUse);
return true;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doClassify",{protocolBag:protocolBag,methods:methods,protocolToUse:protocolToUse,counter:counter},$globals.HLSuperclassClassifier)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doClassify\x0a\x09| protocolBag methods protocolToUse counter |\x0a\x09\x0a\x09protocolBag := Dictionary new.\x0a\x09methods := HLReferencesModel new implementorsOf: method selector.\x0a\x09methods\x0a\x09\x09ifEmpty: [ ^ false ]\x0a\x09\x09ifNotEmpty: [\x0a\x09\x09\x09methods \x0a\x09\x09\x09\x09do: [ :aMethod || protocol |\x0a\x09\x09\x09\x09\x09protocol := aMethod method protocol.\x0a\x09\x09\x09\x09\x09(method methodClass = aMethod methodClass)\x0a\x09\x09\x09\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09\x09\x09((protocol first = '*') or: [ protocol = method defaultProtocol ])\x0a\x09\x09\x09\x09\x09\x09\x09ifFalse: [ \x0a\x09\x09\x09\x09\x09\x09\x09\x09protocolBag \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09at: protocol \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09put: (protocolBag at: protocol ifAbsent: [ 0 ]) + 1 ] ] ] ].\x0a\x09\x09\x09\x0a\x09protocolBag ifEmpty: [ ^ false ].\x0a\x09protocolToUse := nil.\x0a\x09counter := 0.\x0a\x09protocolBag keysAndValuesDo: [ :key :value | value > counter \x0a\x09\x09ifTrue: [\x0a\x09\x09\x09counter := value.\x0a\x09\x09\x09protocolToUse := key ] ].\x0a\x09method protocol: protocolToUse.\x0a\x09^ true",
referencedClasses: ["Dictionary", "HLReferencesModel"],
//>>excludeEnd("ide");
messageSends: ["new", "implementorsOf:", "selector", "ifEmpty:ifNotEmpty:", "do:", "protocol", "method", "ifFalse:", "=", "methodClass", "or:", "first", "defaultProtocol", "at:put:", "+", "at:ifAbsent:", "ifEmpty:", "keysAndValuesDo:", "ifTrue:", ">", "protocol:"]
}),
$globals.HLSuperclassClassifier);



$core.addClass('HLGenerationOutput', $globals.Object, ['sourceCodes', 'protocol', 'targetClass'], 'Helios-Helpers');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLGenerationOutput.comment="I am a simple data object used to store the result of a generation process.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addSourceCode:",
protocol: 'protocol',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@sourceCodes"])._add_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addSourceCode:",{aString:aString},$globals.HLGenerationOutput)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "addSourceCode: aString\x0a\x09sourceCodes add: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:"]
}),
$globals.HLGenerationOutput);

$core.addMethod(
$core.method({
selector: "compile",
protocol: 'protocol',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$recv(self["@sourceCodes"])._do_((function(methodSourceCode){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(self["@targetClass"])._includesSelector_($recv(methodSourceCode)._selector());
if(!$core.assert($1)){
return $recv(self["@targetClass"])._compile_protocol_($recv(methodSourceCode)._sourceCode(),self["@protocol"]);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({methodSourceCode:methodSourceCode},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compile",{},$globals.HLGenerationOutput)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "compile\x0a\x09sourceCodes do: [ :methodSourceCode |\x0a\x09\x09(targetClass includesSelector: methodSourceCode selector)\x0a\x09\x09\x09ifFalse: [ \x0a\x09\x09\x09\x09targetClass \x0a\x09\x09\x09\x09\x09compile: methodSourceCode sourceCode\x0a\x09\x09\x09\x09\x09protocol: protocol ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "ifFalse:", "includesSelector:", "selector", "compile:protocol:", "sourceCode"]
}),
$globals.HLGenerationOutput);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.HLGenerationOutput.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@sourceCodes"]=$recv($OrderedCollection())._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.HLGenerationOutput)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09\x0a\x09sourceCodes := OrderedCollection new",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["initialize", "new"]
}),
$globals.HLGenerationOutput);

$core.addMethod(
$core.method({
selector: "protocol",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@protocol"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "protocol\x0a\x09^ protocol",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLGenerationOutput);

$core.addMethod(
$core.method({
selector: "protocol:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@protocol"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "protocol: aString\x0a\x09protocol := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLGenerationOutput);

$core.addMethod(
$core.method({
selector: "sourceCodes",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@sourceCodes"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sourceCodes\x0a\x09^ sourceCodes",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLGenerationOutput);

$core.addMethod(
$core.method({
selector: "sourceCodes:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
self["@sourceCodes"]=aCollection;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "sourceCodes: aCollection\x0a\x09sourceCodes := aCollection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLGenerationOutput);

$core.addMethod(
$core.method({
selector: "targetClass",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@targetClass"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "targetClass\x0a\x09^ targetClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLGenerationOutput);

$core.addMethod(
$core.method({
selector: "targetClass:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
self["@targetClass"]=aClass;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "targetClass: aClass\x0a\x09targetClass := aClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLGenerationOutput);



$core.addClass('HLMethodClassifier', $globals.Object, ['firstClassifier'], 'Helios-Helpers');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLMethodClassifier.comment="I am in charge of categorizing methods following this strategy:\x0a\x0a- is it an accessor?\x0a- is it overriding a superclass method?\x0a- is it starting with a know prefix?\x0a- how are categorized the other implementations?";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addClassifier:",
protocol: 'private',
fn: function (aClassifier){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(aClassifier)._next_(self["@firstClassifier"]);
self["@firstClassifier"]=aClassifier;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addClassifier:",{aClassifier:aClassifier},$globals.HLMethodClassifier)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClassifier"],
source: "addClassifier: aClassifier\x0a\x09aClassifier next: firstClassifier.\x0a\x09firstClassifier := aClassifier",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["next:"]
}),
$globals.HLMethodClassifier);

$core.addMethod(
$core.method({
selector: "classify:",
protocol: 'protocol',
fn: function (aMethod){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=self["@firstClassifier"];
$recv($1)._method_(aMethod);
$2=$recv($1)._classify();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classify:",{aMethod:aMethod},$globals.HLMethodClassifier)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod"],
source: "classify: aMethod\x0a\x09firstClassifier\x0a\x09\x09method: aMethod;\x0a\x09\x09classify",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["method:", "classify"]
}),
$globals.HLMethodClassifier);

$core.addMethod(
$core.method({
selector: "classifyAll:",
protocol: 'protocol',
fn: function (aCollectionOfMethods){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(aCollectionOfMethods)._do_((function(method){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._classify_(method);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({method:method},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classifyAll:",{aCollectionOfMethods:aCollectionOfMethods},$globals.HLMethodClassifier)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollectionOfMethods"],
source: "classifyAll: aCollectionOfMethods\x0a\x09aCollectionOfMethods do: [ :method |\x0a\x09\x09self classify: method ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "classify:"]
}),
$globals.HLMethodClassifier);

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
$globals.HLMethodClassifier.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._setupClassifiers();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.HLMethodClassifier)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09\x0a\x09self setupClassifiers",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "setupClassifiers"]
}),
$globals.HLMethodClassifier);

$core.addMethod(
$core.method({
selector: "setupClassifiers",
protocol: 'initialization',
fn: function (){
var self=this;
function $HLImplementorClassifier(){return $globals.HLImplementorClassifier||(typeof HLImplementorClassifier=="undefined"?nil:HLImplementorClassifier)}
function $HLPrefixClassifier(){return $globals.HLPrefixClassifier||(typeof HLPrefixClassifier=="undefined"?nil:HLPrefixClassifier)}
function $HLSuperclassClassifier(){return $globals.HLSuperclassClassifier||(typeof HLSuperclassClassifier=="undefined"?nil:HLSuperclassClassifier)}
function $HLAccessorClassifier(){return $globals.HLAccessorClassifier||(typeof HLAccessorClassifier=="undefined"?nil:HLAccessorClassifier)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3;
$1=$recv($HLImplementorClassifier())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
self._addClassifier_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addClassifier:"]=1;
//>>excludeEnd("ctx");
$2=$recv($HLPrefixClassifier())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
self._addClassifier_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addClassifier:"]=2;
//>>excludeEnd("ctx");
$3=$recv($HLSuperclassClassifier())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=3;
//>>excludeEnd("ctx");
self._addClassifier_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addClassifier:"]=3;
//>>excludeEnd("ctx");
self._addClassifier_($recv($HLAccessorClassifier())._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupClassifiers",{},$globals.HLMethodClassifier)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupClassifiers\x0a\x09self addClassifier: HLImplementorClassifier new.\x0a\x09self addClassifier: HLPrefixClassifier new.\x0a\x09self addClassifier: HLSuperclassClassifier new.\x0a\x09self addClassifier: HLAccessorClassifier new",
referencedClasses: ["HLImplementorClassifier", "HLPrefixClassifier", "HLSuperclassClassifier", "HLAccessorClassifier"],
//>>excludeEnd("ide");
messageSends: ["addClassifier:", "new"]
}),
$globals.HLMethodClassifier);



$core.addClass('HLMethodGenerator', $globals.Object, ['output'], 'Helios-Helpers');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLMethodGenerator.comment="I am the abstract super class of the method generators.\x0a\x0aMy main method is `generate` which produces an `output` object accessed with `#output`.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "class:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@output"])._targetClass_(aClass);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"class:",{aClass:aClass},$globals.HLMethodGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "class: aClass\x0a\x09output targetClass: aClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["targetClass:"]
}),
$globals.HLMethodGenerator);

$core.addMethod(
$core.method({
selector: "generate",
protocol: 'protocol',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$recv(self["@output"])._targetClass();
if(($receiver = $1) == null || $receiver.isNil){
self._error_("class should not be nil");
} else {
$1;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"generate",{},$globals.HLMethodGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "generate\x0a\x09output targetClass ifNil: [ self error: 'class should not be nil'].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "targetClass", "error:"]
}),
$globals.HLMethodGenerator);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $HLGenerationOutput(){return $globals.HLGenerationOutput||(typeof HLGenerationOutput=="undefined"?nil:HLGenerationOutput)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.HLMethodGenerator.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@output"]=$recv($HLGenerationOutput())._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.HLMethodGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09\x0a\x09output := HLGenerationOutput new",
referencedClasses: ["HLGenerationOutput"],
//>>excludeEnd("ide");
messageSends: ["initialize", "new"]
}),
$globals.HLMethodGenerator);

$core.addMethod(
$core.method({
selector: "output",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@output"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "output\x0a\x09^ output",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLMethodGenerator);



$core.addClass('HLAccessorsGenerator', $globals.HLMethodGenerator, [], 'Helios-Helpers');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLAccessorsGenerator.comment="I am a generator used to compile the getters/setters of a class.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "accessorProtocolForObject",
protocol: 'double-dispatch',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@output"])._protocol_("accessing");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accessorProtocolForObject",{},$globals.HLAccessorsGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "accessorProtocolForObject\x0a\x09output protocol: 'accessing'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["protocol:"]
}),
$globals.HLAccessorsGenerator);

$core.addMethod(
$core.method({
selector: "accessorsForObject",
protocol: 'double-dispatch',
fn: function (){
var self=this;
var sources;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
sources=$recv($OrderedCollection())._new();
$recv($recv($recv($recv(self["@output"])._targetClass())._instanceVariableNames())._sorted())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=sources;
$recv($1)._add_(self._getterFor_(each));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._add_(self._setterFor_(each));
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(self["@output"])._sourceCodes_(sources);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accessorsForObject",{sources:sources},$globals.HLAccessorsGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "accessorsForObject\x0a\x09| sources |\x0a\x09\x0a\x09sources := OrderedCollection new.\x0a\x09output targetClass instanceVariableNames sorted do: [ :each | \x0a\x09\x09sources \x0a\x09\x09\x09add: (self getterFor: each);\x0a\x09\x09\x09add: (self setterFor: each) ].\x0a\x09output sourceCodes: sources",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["new", "do:", "sorted", "instanceVariableNames", "targetClass", "add:", "getterFor:", "setterFor:", "sourceCodes:"]
}),
$globals.HLAccessorsGenerator);

$core.addMethod(
$core.method({
selector: "generate",
protocol: 'protocol',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.HLAccessorsGenerator.superclass.fn.prototype._generate.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=$recv(self["@output"])._targetClass();
$recv($1)._accessorsSourceCodesWith_(self);
$2=$recv($1)._accessorProtocolWith_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"generate",{},$globals.HLAccessorsGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "generate\x0a\x09super generate.\x0a\x09\x0a\x09output targetClass \x0a\x09\x09accessorsSourceCodesWith: self;\x0a\x09\x09accessorProtocolWith: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["generate", "accessorsSourceCodesWith:", "targetClass", "accessorProtocolWith:"]
}),
$globals.HLAccessorsGenerator);

$core.addMethod(
$core.method({
selector: "getterFor:",
protocol: 'private',
fn: function (anInstanceVariable){
var self=this;
function $HLMethodSourceCode(){return $globals.HLMethodSourceCode||(typeof HLMethodSourceCode=="undefined"?nil:HLMethodSourceCode)}
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($HLMethodSourceCode())._new();
$recv($2)._selector_(anInstanceVariable);
$3=$recv($2)._sourceCode_($recv($String())._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(stream).__lt_lt(anInstanceVariable);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["<<"]=1;
//>>excludeEnd("ctx");
$recv($recv(stream)._cr())._tab();
return $recv($recv(stream).__lt_lt("^ ")).__lt_lt(anInstanceVariable);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["<<"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
})));
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getterFor:",{anInstanceVariable:anInstanceVariable},$globals.HLAccessorsGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInstanceVariable"],
source: "getterFor: anInstanceVariable\x0a\x09^ HLMethodSourceCode new\x0a\x09\x09selector:anInstanceVariable;\x0a\x09\x09sourceCode: (String streamContents: [ :stream |\x0a\x09\x09stream << anInstanceVariable.\x0a\x09\x09stream cr tab.\x0a\x09\x09stream << '^ ' << anInstanceVariable ])",
referencedClasses: ["HLMethodSourceCode", "String"],
//>>excludeEnd("ide");
messageSends: ["selector:", "new", "sourceCode:", "streamContents:", "<<", "tab", "cr"]
}),
$globals.HLAccessorsGenerator);

$core.addMethod(
$core.method({
selector: "setterFor:",
protocol: 'private',
fn: function (anInstanceVariable){
var self=this;
function $HLMethodSourceCode(){return $globals.HLMethodSourceCode||(typeof HLMethodSourceCode=="undefined"?nil:HLMethodSourceCode)}
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$4,$3,$1;
$2=$recv($HLMethodSourceCode())._new();
$recv($2)._selector_($recv(anInstanceVariable).__comma(":"));
$3=$recv($2)._sourceCode_($recv($String())._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=$recv(stream).__lt_lt(anInstanceVariable);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["<<"]=2;
//>>excludeEnd("ctx");
$recv($4).__lt_lt(": anObject");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["<<"]=1;
//>>excludeEnd("ctx");
$recv($recv(stream)._cr())._tab();
return $recv($recv(stream).__lt_lt(anInstanceVariable)).__lt_lt(" := anObject");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["<<"]=3;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
})));
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setterFor:",{anInstanceVariable:anInstanceVariable},$globals.HLAccessorsGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInstanceVariable"],
source: "setterFor: anInstanceVariable\x0a\x09^ HLMethodSourceCode new\x0a\x09\x09selector: anInstanceVariable, ':';\x0a\x09\x09sourceCode: (String streamContents: [ :stream |\x0a\x09\x09stream << anInstanceVariable << ': anObject'.\x0a\x09\x09stream cr tab.\x0a\x09\x09stream << anInstanceVariable << ' := anObject' ])",
referencedClasses: ["HLMethodSourceCode", "String"],
//>>excludeEnd("ide");
messageSends: ["selector:", "new", ",", "sourceCode:", "streamContents:", "<<", "tab", "cr"]
}),
$globals.HLAccessorsGenerator);



$core.addClass('HLInitializeGenerator', $globals.HLMethodGenerator, [], 'Helios-Helpers');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLInitializeGenerator.comment="I am used to double-dispatch the `initialize` method(s) generation. I am a disposable object.\x0a\x0a## Usage\x0a\x0a    ^ HLInitializeGenerator new\x0a        class: aClass;\x0a        generate;\x0a        output";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "generate",
protocol: 'protocol',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.HLInitializeGenerator.superclass.fn.prototype._generate.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=$recv(self["@output"])._targetClass();
$recv($1)._initializeSourceCodesWith_(self);
$2=$recv($1)._initializeProtocolWith_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"generate",{},$globals.HLInitializeGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "generate\x0a\x09super generate.\x0a\x09\x0a\x09output targetClass \x0a\x09\x09initializeSourceCodesWith: self;\x0a\x09\x09initializeProtocolWith: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["generate", "initializeSourceCodesWith:", "targetClass", "initializeProtocolWith:"]
}),
$globals.HLInitializeGenerator);

$core.addMethod(
$core.method({
selector: "generateInitializeCodeForObject",
protocol: 'private',
fn: function (){
var self=this;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$4,$5,$6,$7,$8,$1;
$1=$recv($String())._streamContents_((function(str){
var instVars,size;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
instVars=$recv($recv($recv(self["@output"])._targetClass())._instanceVariableNames())._sorted();
instVars;
size=$recv(instVars)._size();
size;
$recv(str).__lt_lt("initialize");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["<<"]=1;
//>>excludeEnd("ctx");
$3=$recv(str)._cr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["cr"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._tab();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["tab"]=1;
//>>excludeEnd("ctx");
$recv($2).__lt_lt("super initialize.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["<<"]=2;
//>>excludeEnd("ctx");
$4=$recv($2)._cr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["cr"]=2;
//>>excludeEnd("ctx");
$4;
$5=$recv(str)._cr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["cr"]=3;
//>>excludeEnd("ctx");
$recv($5)._tab();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["tab"]=2;
//>>excludeEnd("ctx");
return $recv(instVars)._withIndexDo_((function(name,index){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$6=$recv(index).__tild_eq((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["~="]=1;
//>>excludeEnd("ctx");
if($core.assert($6)){
$recv($recv(str)._cr())._tab();
};
$7=$recv(str).__lt_lt(name);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["<<"]=4;
//>>excludeEnd("ctx");
$recv($7).__lt_lt(" := nil");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["<<"]=3;
//>>excludeEnd("ctx");
$8=$recv(index).__tild_eq(size);
if($core.assert($8)){
return $recv(str).__lt_lt(".");
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({name:name,index:index},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({str:str,instVars:instVars,size:size},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"generateInitializeCodeForObject",{},$globals.HLInitializeGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "generateInitializeCodeForObject\x09\x0a\x09^ String streamContents: [ :str || instVars size |\x0a\x09\x09instVars := output targetClass instanceVariableNames sorted.\x0a\x09\x09size := instVars size.\x0a\x09\x09str << 'initialize'.\x0a\x09\x09str cr tab << 'super initialize.';cr.\x0a\x09\x09str cr tab.\x0a\x09\x09instVars withIndexDo: [ :name :index |\x0a\x09\x09\x09index ~= 1 ifTrue: [ str cr tab ].\x0a\x09\x09\x09str << name << ' := nil'.\x0a\x09\x09\x09index ~= size ifTrue: [ str << '.' ] ] ].",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["streamContents:", "sorted", "instanceVariableNames", "targetClass", "size", "<<", "tab", "cr", "withIndexDo:", "ifTrue:", "~="]
}),
$globals.HLInitializeGenerator);

$core.addMethod(
$core.method({
selector: "initializeForObject",
protocol: 'double-dispatch',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@output"])._addSourceCode_(self._initializeMethodForObject());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeForObject",{},$globals.HLInitializeGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeForObject\x0a\x09output addSourceCode: self initializeMethodForObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["addSourceCode:", "initializeMethodForObject"]
}),
$globals.HLInitializeGenerator);

$core.addMethod(
$core.method({
selector: "initializeMethodForObject",
protocol: 'private',
fn: function (){
var self=this;
function $HLMethodSourceCode(){return $globals.HLMethodSourceCode||(typeof HLMethodSourceCode=="undefined"?nil:HLMethodSourceCode)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($HLMethodSourceCode())._new();
$recv($2)._selector_("initialize");
$recv($2)._sourceCode_(self._generateInitializeCodeForObject());
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeMethodForObject",{},$globals.HLInitializeGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeMethodForObject\x09\x0a\x09^ HLMethodSourceCode new\x0a\x09\x09selector: 'initialize';\x0a\x09\x09sourceCode: self generateInitializeCodeForObject;\x0a\x09\x09yourself",
referencedClasses: ["HLMethodSourceCode"],
//>>excludeEnd("ide");
messageSends: ["selector:", "new", "sourceCode:", "generateInitializeCodeForObject", "yourself"]
}),
$globals.HLInitializeGenerator);

$core.addMethod(
$core.method({
selector: "initializeProtocolForObject",
protocol: 'double-dispatch',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@output"])._protocol_("initialization");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeProtocolForObject",{},$globals.HLInitializeGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeProtocolForObject\x0a\x09output protocol: 'initialization'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["protocol:"]
}),
$globals.HLInitializeGenerator);



$core.addClass('HLMethodSourceCode', $globals.Object, ['selector', 'sourceCode'], 'Helios-Helpers');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLMethodSourceCode.comment="I am a simple data object keeping track of the information about a method that will be compiled at the end of the generation process.";
//>>excludeEnd("ide");
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
$globals.HLMethodSourceCode);

$core.addMethod(
$core.method({
selector: "selector:",
protocol: 'accessing',
fn: function (aSelector){
var self=this;
self["@selector"]=aSelector;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSelector"],
source: "selector: aSelector\x0a\x09selector := aSelector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLMethodSourceCode);

$core.addMethod(
$core.method({
selector: "sourceCode",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@sourceCode"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sourceCode\x0a\x09^ sourceCode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLMethodSourceCode);

$core.addMethod(
$core.method({
selector: "sourceCode:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@sourceCode"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "sourceCode: aString\x0a\x09sourceCode := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLMethodSourceCode);



$core.addClass('HLPackageCommitErrorHelper', $globals.Object, ['model'], 'Helios-Helpers');
$core.addMethod(
$core.method({
selector: "commitPackage",
protocol: 'actions',
fn: function (){
var self=this;
function $HLCommitPackageCommand(){return $globals.HLCommitPackageCommand||(typeof HLCommitPackageCommand=="undefined"?nil:HLCommitPackageCommand)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv($HLCommitPackageCommand())._for_(self._model()))._execute();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commitPackage",{},$globals.HLPackageCommitErrorHelper)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "commitPackage\x0a\x09(HLCommitPackageCommand for: self model)\x0a\x09\x09execute",
referencedClasses: ["HLCommitPackageCommand"],
//>>excludeEnd("ide");
messageSends: ["execute", "for:", "model"]
}),
$globals.HLPackageCommitErrorHelper);

$core.addMethod(
$core.method({
selector: "commitToPath:",
protocol: 'actions',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(self._package())._transport())._setPath_(aString);
self._commitPackage();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commitToPath:",{aString:aString},$globals.HLPackageCommitErrorHelper)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "commitToPath: aString\x0a\x09\x22We only take AMD package transport into account for now\x22\x0a\x09\x0a\x09self package transport setPath: aString.\x0a\x09\x0a\x09self commitPackage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setPath:", "transport", "package", "commitPackage"]
}),
$globals.HLPackageCommitErrorHelper);

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
$globals.HLPackageCommitErrorHelper);

$core.addMethod(
$core.method({
selector: "model:",
protocol: 'accessing',
fn: function (aToolModel){
var self=this;
self["@model"]=aToolModel;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aToolModel"],
source: "model: aToolModel\x0a\x09model := aToolModel",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLPackageCommitErrorHelper);

$core.addMethod(
$core.method({
selector: "package",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._model())._packageToCommit();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"package",{},$globals.HLPackageCommitErrorHelper)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "package\x0a\x09^ self model packageToCommit",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["packageToCommit", "model"]
}),
$globals.HLPackageCommitErrorHelper);

$core.addMethod(
$core.method({
selector: "showHelp",
protocol: 'actions',
fn: function (){
var self=this;
function $HLConfirmationWidget(){return $globals.HLConfirmationWidget||(typeof HLConfirmationWidget=="undefined"?nil:HLConfirmationWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
$1=$recv($HLConfirmationWidget())._new();
$2=$1;
$3=$recv("Commit failed for namespace \x22".__comma($recv($recv(self._package())._transport())._namespace())).__comma("\x22. Do you want to commit to another path?");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($2)._confirmationString_($3);
$recv($1)._actionBlock_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._showNewCommitPath();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv($1)._cancelButtonLabel_("Abandon");
$recv($1)._confirmButtonLabel_("Set path");
$4=$recv($1)._show();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showHelp",{},$globals.HLPackageCommitErrorHelper)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "showHelp\x0a\x09HLConfirmationWidget new\x0a\x09\x09confirmationString: 'Commit failed for namespace \x22', self package transport namespace, '\x22. Do you want to commit to another path?';\x0a\x09\x09actionBlock: [ self showNewCommitPath ];\x0a\x09\x09cancelButtonLabel: 'Abandon';\x0a\x09\x09confirmButtonLabel: 'Set path';\x0a\x09\x09show",
referencedClasses: ["HLConfirmationWidget"],
//>>excludeEnd("ide");
messageSends: ["confirmationString:", "new", ",", "namespace", "transport", "package", "actionBlock:", "showNewCommitPath", "cancelButtonLabel:", "confirmButtonLabel:", "show"]
}),
$globals.HLPackageCommitErrorHelper);

$core.addMethod(
$core.method({
selector: "showNewCommitPath",
protocol: 'actions',
fn: function (){
var self=this;
function $HLRequestWidget(){return $globals.HLRequestWidget||(typeof HLRequestWidget=="undefined"?nil:HLRequestWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($HLRequestWidget())._new();
$recv($1)._beSingleline();
$recv($1)._confirmationString_("Set commit path");
$recv($1)._actionBlock_((function(url){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._commitToPath_(url);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({url:url},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv($1)._confirmButtonLabel_("Commit with new path");
$recv($1)._value_("/src");
$2=$recv($1)._show();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showNewCommitPath",{},$globals.HLPackageCommitErrorHelper)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "showNewCommitPath\x0a\x09HLRequestWidget new\x0a\x09\x09beSingleline;\x0a\x09\x09confirmationString: 'Set commit path';\x0a\x09\x09actionBlock: [ :url | self commitToPath: url ];\x0a\x09\x09confirmButtonLabel: 'Commit with new path';\x0a\x09\x09value: '/src';\x0a\x09\x09show",
referencedClasses: ["HLRequestWidget"],
//>>excludeEnd("ide");
messageSends: ["beSingleline", "new", "confirmationString:", "actionBlock:", "commitToPath:", "confirmButtonLabel:", "value:", "show"]
}),
$globals.HLPackageCommitErrorHelper);


$core.addMethod(
$core.method({
selector: "on:",
protocol: 'instance creation',
fn: function (aToolModel){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._model_(aToolModel);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aToolModel:aToolModel},$globals.HLPackageCommitErrorHelper.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aToolModel"],
source: "on: aToolModel\x0a\x09^ self new\x0a\x09\x09model: aToolModel;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["model:", "new", "yourself"]
}),
$globals.HLPackageCommitErrorHelper.klass);

});
