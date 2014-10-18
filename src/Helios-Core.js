define("helios/Helios-Core", ["amber/boot", "amber_core/Kernel-Infrastructure", "amber_core/Kernel-Objects", "amber_core/Web"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Helios-Core');
$core.packages["Helios-Core"].transport = {"type":"amd","amdNamespace":"helios"};

$core.addClass('HLModel', $globals.InterfacingObject, ['announcer', 'environment'], 'Helios-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLModel.comment="I am the abstract superclass of all models of Helios.\x0aI am the \x22Model\x22 part of the MVC pattern implementation in Helios.\x0a\x0aI provide access to an `Environment` object and both a local (model-specific) and global (system-specific) announcer.\x0a\x0aThe `#withChangesDo:` method is handy for performing model changes ensuring that all widgets are aware of the change and can prevent it from happening.\x0a\x0aModifications of the system should be done via commands (see `HLCommand` and subclasses).";
//>>excludeEnd("ide");
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
}, function($ctx1) {$ctx1.fill(self,"announcer",{},$globals.HLModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "announcer\x0a\x09^ announcer ifNil: [ announcer := Announcer new ]",
referencedClasses: ["Announcer"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.HLModel);

$core.addMethod(
$core.method({
selector: "environment",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@environment"];
if(($receiver = $2) == null || $receiver.isNil){
$1=$recv(self._manager())._environment();
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"environment",{},$globals.HLModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "environment\x0a\x09^ environment ifNil: [ self manager environment ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "environment", "manager"]
}),
$globals.HLModel);

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
$globals.HLModel);

$core.addMethod(
$core.method({
selector: "isBrowserModel",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBrowserModel\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLModel);

$core.addMethod(
$core.method({
selector: "isReferencesModel",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isReferencesModel\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLModel);

$core.addMethod(
$core.method({
selector: "isToolModel",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isToolModel\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLModel);

$core.addMethod(
$core.method({
selector: "manager",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLManager(){return $globals.HLManager||(typeof HLManager=="undefined"?nil:HLManager)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($HLManager())._current();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"manager",{},$globals.HLModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "manager\x0a\x09^ HLManager current",
referencedClasses: ["HLManager"],
//>>excludeEnd("ide");
messageSends: ["current"]
}),
$globals.HLModel);

$core.addMethod(
$core.method({
selector: "systemAnnouncer",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._environment())._systemAnnouncer();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"systemAnnouncer",{},$globals.HLModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "systemAnnouncer\x0a\x09^ self environment systemAnnouncer",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["systemAnnouncer", "environment"]
}),
$globals.HLModel);

$core.addMethod(
$core.method({
selector: "withChangesDo:",
protocol: 'error handling',
fn: function (aBlock){
var self=this;
function $HLAboutToChange(){return $globals.HLAboutToChange||(typeof HLAboutToChange=="undefined"?nil:HLAboutToChange)}
function $HLChangeForbidden(){return $globals.HLChangeForbidden||(typeof HLChangeForbidden=="undefined"?nil:HLChangeForbidden)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv($HLAboutToChange())._new();
$recv($1)._actionBlock_(aBlock);
$2=$recv($1)._yourself();
$recv(self._announcer())._announce_($2);
return $recv(aBlock)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._on_do_($HLChangeForbidden(),(function(ex){

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"withChangesDo:",{aBlock:aBlock},$globals.HLModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "withChangesDo: aBlock\x0a\x09[ \x0a\x09\x09self announcer announce: (HLAboutToChange new\x0a\x09\x09\x09actionBlock: aBlock;\x0a\x09\x09\x09yourself).\x0a\x09\x09aBlock value.\x0a\x09]\x0a\x09\x09on: HLChangeForbidden \x0a\x09\x09do: [ :ex | ]",
referencedClasses: ["HLAboutToChange", "HLChangeForbidden"],
//>>excludeEnd("ide");
messageSends: ["on:do:", "announce:", "announcer", "actionBlock:", "new", "yourself", "value"]
}),
$globals.HLModel);



$core.addClass('HLFinder', $globals.HLModel, [], 'Helios-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLFinder.comment="I am the `Finder` service handler of Helios.\x0a\x0aFinding a class will open a new class browser, while finding a method will open a references browser.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "findClass:",
protocol: 'finding',
fn: function (aClass){
var self=this;
function $HLBrowser(){return $globals.HLBrowser||(typeof HLBrowser=="undefined"?nil:HLBrowser)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv($HLBrowser())._openAsTab())._openClassNamed_($recv(aClass)._name());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"findClass:",{aClass:aClass},$globals.HLFinder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "findClass: aClass\x0a\x09HLBrowser openAsTab openClassNamed: aClass name",
referencedClasses: ["HLBrowser"],
//>>excludeEnd("ide");
messageSends: ["openClassNamed:", "openAsTab", "name"]
}),
$globals.HLFinder);

$core.addMethod(
$core.method({
selector: "findMethod:",
protocol: 'finding',
fn: function (aCompiledMethod){
var self=this;
function $HLBrowser(){return $globals.HLBrowser||(typeof HLBrowser=="undefined"?nil:HLBrowser)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv($HLBrowser())._openAsTab())._openMethod_(aCompiledMethod);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"findMethod:",{aCompiledMethod:aCompiledMethod},$globals.HLFinder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCompiledMethod"],
source: "findMethod: aCompiledMethod\x0a\x09HLBrowser openAsTab openMethod: aCompiledMethod",
referencedClasses: ["HLBrowser"],
//>>excludeEnd("ide");
messageSends: ["openMethod:", "openAsTab"]
}),
$globals.HLFinder);

$core.addMethod(
$core.method({
selector: "findString:",
protocol: 'finding',
fn: function (aString){
var self=this;
var foundClass;
function $HLReferences(){return $globals.HLReferences||(typeof HLReferences=="undefined"?nil:HLReferences)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$receiver;
foundClass=$recv($recv(self._environment())._classes())._detect_ifNone_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(each)._name()).__eq(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
return nil;

}));
$1=foundClass;
if(($receiver = $1) == null || $receiver.isNil){
$recv($recv($HLReferences())._openAsTab())._search_(aString);
} else {
self._findClass_(foundClass);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"findString:",{aString:aString,foundClass:foundClass},$globals.HLFinder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "findString: aString\x0a\x09| foundClass |\x0a\x09\x0a\x09foundClass := self environment classes \x0a\x09\x09detect: [ :each | each name = aString ]\x0a\x09\x09ifNone: [ nil ].\x0a\x09\x0a\x09foundClass \x0a\x09\x09ifNil: [ HLReferences openAsTab search: aString ]\x0a\x09\x09ifNotNil: [ self findClass: foundClass ]",
referencedClasses: ["HLReferences"],
//>>excludeEnd("ide");
messageSends: ["detect:ifNone:", "classes", "environment", "=", "name", "ifNil:ifNotNil:", "search:", "openAsTab", "findClass:"]
}),
$globals.HLFinder);



$core.addClass('HLToolModel', $globals.HLModel, ['selectedClass', 'selectedPackage', 'selectedProtocol', 'selectedSelector'], 'Helios-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLToolModel.comment="I am a model specific to package and class manipulation. All browsers should either use me or a subclass as their model.\x0a\x0aI provide methods for package, class, protocol and method manipulation and access, forwarding to my environment.\x0a\x0aI also handle compilation of classes and methods as well as compilation and parsing errors.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addInstVarNamed:",
protocol: 'actions',
fn: function (aString){
var self=this;
function $HLInstVarAdded(){return $globals.HLInstVarAdded||(typeof HLInstVarAdded=="undefined"?nil:HLInstVarAdded)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
$1=self._environment();
$2=self._selectedClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selectedClass"]=1;
//>>excludeEnd("ctx");
$recv($1)._addInstVarNamed_to_(aString,$2);
$3=$recv($HLInstVarAdded())._new();
$recv($3)._theClass_(self._selectedClass());
$recv($3)._variableName_(aString);
$4=$recv($3)._yourself();
$recv(self._announcer())._announce_($4);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addInstVarNamed:",{aString:aString},$globals.HLToolModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "addInstVarNamed: aString\x0a\x09self environment addInstVarNamed: aString to: self selectedClass.\x0a\x09self announcer announce: (HLInstVarAdded new\x0a\x09\x09theClass: self selectedClass;\x0a\x09\x09variableName: aString;\x0a\x09\x09yourself)",
referencedClasses: ["HLInstVarAdded"],
//>>excludeEnd("ide");
messageSends: ["addInstVarNamed:to:", "environment", "selectedClass", "announce:", "announcer", "theClass:", "new", "variableName:", "yourself"]
}),
$globals.HLToolModel);

$core.addMethod(
$core.method({
selector: "allProtocol",
protocol: 'defaults',
fn: function (){
var self=this;
return "-- all --";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "allProtocol\x0a\x09^ '-- all --'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLToolModel);

$core.addMethod(
$core.method({
selector: "allSelectors",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._environment())._allSelectors();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allSelectors",{},$globals.HLToolModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "allSelectors\x0a\x09^ self environment allSelectors",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["allSelectors", "environment"]
}),
$globals.HLToolModel);

$core.addMethod(
$core.method({
selector: "availableClassNames",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._environment())._availableClassNames();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"availableClassNames",{},$globals.HLToolModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "availableClassNames\x0a\x09^ self environment availableClassNames",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["availableClassNames", "environment"]
}),
$globals.HLToolModel);

$core.addMethod(
$core.method({
selector: "availablePackageNames",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._environment())._availablePackageNames();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"availablePackageNames",{},$globals.HLToolModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "availablePackageNames\x0a\x09^ self environment availablePackageNames",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["availablePackageNames", "environment"]
}),
$globals.HLToolModel);

$core.addMethod(
$core.method({
selector: "availablePackages",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._environment())._availablePackageNames();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"availablePackages",{},$globals.HLToolModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "availablePackages\x0a\x09^ self environment availablePackageNames",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["availablePackageNames", "environment"]
}),
$globals.HLToolModel);

$core.addMethod(
$core.method({
selector: "availableProtocols",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._environment())._availableProtocolsFor_(self._selectedClass());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"availableProtocols",{},$globals.HLToolModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "availableProtocols\x0a\x09^ self environment availableProtocolsFor: self selectedClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["availableProtocolsFor:", "environment", "selectedClass"]
}),
$globals.HLToolModel);

$core.addMethod(
$core.method({
selector: "commitPackageOnSuccess:onError:",
protocol: 'commands actions',
fn: function (aBlock,anotherBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._environment())._commitPackage_onSuccess_onError_(self._packageToCommit(),aBlock,anotherBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commitPackageOnSuccess:onError:",{aBlock:aBlock,anotherBlock:anotherBlock},$globals.HLToolModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "anotherBlock"],
source: "commitPackageOnSuccess: aBlock onError: anotherBlock\x0a\x09self environment \x0a\x09\x09commitPackage: self packageToCommit\x0a\x09\x09onSuccess: aBlock\x0a\x09\x09onError: anotherBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["commitPackage:onSuccess:onError:", "environment", "packageToCommit"]
}),
$globals.HLToolModel);

$core.addMethod(
$core.method({
selector: "compilationProtocol",
protocol: 'private',
fn: function (){
var self=this;
var currentProtocol;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$4,$3,$receiver;
currentProtocol=self._selectedProtocol();
$1=currentProtocol;
if(($receiver = $1) == null || $receiver.isNil){
currentProtocol=self._unclassifiedProtocol();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["unclassifiedProtocol"]=1;
//>>excludeEnd("ctx");
currentProtocol;
} else {
$1;
};
$2=self._selectedMethod();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selectedMethod"]=1;
//>>excludeEnd("ctx");
if(($receiver = $2) == null || $receiver.isNil){
$2;
} else {
currentProtocol=$recv(self._selectedMethod())._protocol();
currentProtocol;
};
$4=$recv(currentProtocol).__eq(self._allProtocol());
if($core.assert($4)){
$3=self._unclassifiedProtocol();
} else {
$3=currentProtocol;
};
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compilationProtocol",{currentProtocol:currentProtocol},$globals.HLToolModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "compilationProtocol\x0a\x09| currentProtocol |\x0a\x09\x0a\x09currentProtocol := self selectedProtocol.\x0a\x09currentProtocol ifNil: [ currentProtocol := self unclassifiedProtocol ].\x0a\x09self selectedMethod ifNotNil: [ currentProtocol := self selectedMethod protocol ].\x0a\x0a\x09^ currentProtocol = self allProtocol\x0a\x09\x09ifTrue: [ self unclassifiedProtocol ]\x0a\x09\x09ifFalse: [ currentProtocol ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selectedProtocol", "ifNil:", "unclassifiedProtocol", "ifNotNil:", "selectedMethod", "protocol", "ifTrue:ifFalse:", "=", "allProtocol"]
}),
$globals.HLToolModel);

$core.addMethod(
$core.method({
selector: "compileClassComment:",
protocol: 'compiling',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._environment())._compileClassComment_for_(aString,self._selectedClass());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compileClassComment:",{aString:aString},$globals.HLToolModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "compileClassComment: aString\x0a\x09self environment \x0a\x09\x09compileClassComment: aString \x0a\x09\x09for: self selectedClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["compileClassComment:for:", "environment", "selectedClass"]
}),
$globals.HLToolModel);

$core.addMethod(
$core.method({
selector: "compileClassDefinition:",
protocol: 'compiling',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._environment())._compileClassDefinition_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compileClassDefinition:",{aString:aString},$globals.HLToolModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "compileClassDefinition: aString\x0a\x09self environment compileClassDefinition: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["compileClassDefinition:", "environment"]
}),
$globals.HLToolModel);

$core.addMethod(
$core.method({
selector: "compileMethod:",
protocol: 'compiling',
fn: function (aString){
var self=this;
var method;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._withCompileErrorHandling_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
method=$recv(self._environment())._compileMethod_for_protocol_(aString,self._selectedClass(),self._compilationProtocol());
method;
return self._selectedMethod_(method);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compileMethod:",{aString:aString,method:method},$globals.HLToolModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "compileMethod: aString\x0a\x09| method |\x0a\x09\x0a\x09self withCompileErrorHandling: [ \x0a\x09\x09method := self environment \x0a\x09\x09\x09compileMethod: aString \x0a\x09\x09\x09for: self selectedClass\x0a\x09\x09\x09protocol: self compilationProtocol.\x0a\x0a\x09\x09self selectedMethod: method ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["withCompileErrorHandling:", "compileMethod:for:protocol:", "environment", "selectedClass", "compilationProtocol", "selectedMethod:"]
}),
$globals.HLToolModel);

$core.addMethod(
$core.method({
selector: "copyClassTo:",
protocol: 'commands actions',
fn: function (aClassName){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._withChangesDo_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._environment())._copyClass_to_($recv(self._selectedClass())._theNonMetaClass(),aClassName);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"copyClassTo:",{aClassName:aClassName},$globals.HLToolModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClassName"],
source: "copyClassTo: aClassName\x0a\x09self withChangesDo: [ \x0a\x09\x09self environment \x0a\x09\x09\x09copyClass: self selectedClass theNonMetaClass\x0a\x09\x09\x09to: aClassName ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["withChangesDo:", "copyClass:to:", "environment", "theNonMetaClass", "selectedClass"]
}),
$globals.HLToolModel);

$core.addMethod(
$core.method({
selector: "forceSelectedClass:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._withChangesDo_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._selectedClass_(nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["selectedClass:"]=1;
//>>excludeEnd("ctx");
$1=self._selectedClass_(aClass);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"forceSelectedClass:",{aClass:aClass},$globals.HLToolModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "forceSelectedClass: aClass\x0a\x09self withChangesDo: [\x0a\x09\x09self \x09\x0a\x09\x09\x09selectedClass: nil;\x0a\x09\x09\x09selectedClass: aClass ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["withChangesDo:", "selectedClass:"]
}),
$globals.HLToolModel);

$core.addMethod(
$core.method({
selector: "forceSelectedMethod:",
protocol: 'accessing',
fn: function (aMethod){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._withChangesDo_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._selectedMethod_(nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["selectedMethod:"]=1;
//>>excludeEnd("ctx");
$1=self._selectedMethod_(aMethod);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"forceSelectedMethod:",{aMethod:aMethod},$globals.HLToolModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod"],
source: "forceSelectedMethod: aMethod\x0a\x09self withChangesDo: [\x0a\x09\x09self \x09\x0a\x09\x09\x09selectedMethod: nil;\x0a\x09\x09\x09selectedMethod: aMethod ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["withChangesDo:", "selectedMethod:"]
}),
$globals.HLToolModel);

$core.addMethod(
$core.method({
selector: "forceSelectedPackage:",
protocol: 'accessing',
fn: function (aPackage){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._withChangesDo_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._selectedPackage_(nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["selectedPackage:"]=1;
//>>excludeEnd("ctx");
$1=self._selectedPackage_(aPackage);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"forceSelectedPackage:",{aPackage:aPackage},$globals.HLToolModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "forceSelectedPackage: aPackage\x0a\x09self withChangesDo: [\x0a\x09\x09self \x09\x0a\x09\x09\x09selectedPackage: nil;\x0a\x09\x09\x09selectedPackage: aPackage ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["withChangesDo:", "selectedPackage:"]
}),
$globals.HLToolModel);

$core.addMethod(
$core.method({
selector: "forceSelectedProtocol:",
protocol: 'accessing',
fn: function (aProtocol){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._withChangesDo_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._selectedProtocol_(nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["selectedProtocol:"]=1;
//>>excludeEnd("ctx");
$1=self._selectedProtocol_(aProtocol);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"forceSelectedProtocol:",{aProtocol:aProtocol},$globals.HLToolModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aProtocol"],
source: "forceSelectedProtocol: aProtocol\x0a\x09self withChangesDo: [\x0a\x09\x09self \x09\x0a\x09\x09\x09selectedProtocol: nil;\x0a\x09\x09\x09selectedProtocol: aProtocol ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["withChangesDo:", "selectedProtocol:"]
}),
$globals.HLToolModel);

$core.addMethod(
$core.method({
selector: "handleCompileError:",
protocol: 'error handling',
fn: function (anError){
var self=this;
function $HLCompileErrorRaised(){return $globals.HLCompileErrorRaised||(typeof HLCompileErrorRaised=="undefined"?nil:HLCompileErrorRaised)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($HLCompileErrorRaised())._new();
$recv($1)._error_(anError);
$2=$recv($1)._yourself();
$recv(self._announcer())._announce_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleCompileError:",{anError:anError},$globals.HLToolModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anError"],
source: "handleCompileError: anError\x0a\x09self announcer announce: (HLCompileErrorRaised new\x0a\x09\x09error: anError;\x0a\x09\x09yourself)",
referencedClasses: ["HLCompileErrorRaised"],
//>>excludeEnd("ide");
messageSends: ["announce:", "announcer", "error:", "new", "yourself"]
}),
$globals.HLToolModel);

$core.addMethod(
$core.method({
selector: "handleParseError:",
protocol: 'error handling',
fn: function (anError){
var self=this;
var split,line,column,messageToInsert;
function $HLParseErrorRaised(){return $globals.HLParseErrorRaised||(typeof HLParseErrorRaised=="undefined"?nil:HLParseErrorRaised)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$2,$4,$6,$7,$8,$9,$5;
split=$recv($recv(anError)._messageText())._tokenize_(" : ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["tokenize:"]=1;
//>>excludeEnd("ctx");
messageToInsert=$recv(split)._second();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["second"]=1;
//>>excludeEnd("ctx");
$1=$recv(split)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first"]=1;
//>>excludeEnd("ctx");
$3=$recv(split)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first"]=2;
//>>excludeEnd("ctx");
$2=$recv($3)._size();
split=$recv($1)._copyFrom_to_((21),$2);
split=$recv(split)._tokenize_(" column ");
line=$recv(split)._first();
column=$recv(split)._second();
$4=self._announcer();
$6=$recv($HLParseErrorRaised())._new();
$7=$6;
$8=$recv(line)._asNumber();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asNumber"]=1;
//>>excludeEnd("ctx");
$recv($7)._line_($8);
$recv($6)._column_($recv(column)._asNumber());
$recv($6)._message_(messageToInsert);
$recv($6)._error_(anError);
$9=$recv($6)._yourself();
$5=$9;
$recv($4)._announce_($5);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleParseError:",{anError:anError,split:split,line:line,column:column,messageToInsert:messageToInsert},$globals.HLToolModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anError"],
source: "handleParseError: anError\x0a\x09| split line column messageToInsert |\x0a\x09\x0a\x09split := anError messageText tokenize: ' : '.\x0a\x09messageToInsert := split second.\x0a\x0a\x09\x2221 = 'Parse error on line ' size + 1\x22\x0a\x09split := split first copyFrom: 21 to: split first size.\x0a\x09\x0a\x09split := split tokenize: ' column '.\x0a\x09line := split first.\x0a\x09column := split second.\x0a\x09\x0a\x09self announcer announce: (HLParseErrorRaised new\x0a\x09\x09line: line asNumber;\x0a\x09\x09column: column asNumber;\x0a\x09\x09message: messageToInsert;\x0a\x09\x09error: anError;\x0a\x09\x09yourself)",
referencedClasses: ["HLParseErrorRaised"],
//>>excludeEnd("ide");
messageSends: ["tokenize:", "messageText", "second", "copyFrom:to:", "first", "size", "announce:", "announcer", "line:", "new", "asNumber", "column:", "message:", "error:", "yourself"]
}),
$globals.HLToolModel);

$core.addMethod(
$core.method({
selector: "handleUnkownVariableError:",
protocol: 'error handling',
fn: function (anError){
var self=this;
function $HLUnknownVariableErrorRaised(){return $globals.HLUnknownVariableErrorRaised||(typeof HLUnknownVariableErrorRaised=="undefined"?nil:HLUnknownVariableErrorRaised)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($HLUnknownVariableErrorRaised())._new();
$recv($1)._error_(anError);
$2=$recv($1)._yourself();
$recv(self._announcer())._announce_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleUnkownVariableError:",{anError:anError},$globals.HLToolModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anError"],
source: "handleUnkownVariableError: anError\x0a\x09self announcer announce: (HLUnknownVariableErrorRaised new\x0a\x09\x09error: anError;\x0a\x09\x09yourself)",
referencedClasses: ["HLUnknownVariableErrorRaised"],
//>>excludeEnd("ide");
messageSends: ["announce:", "announcer", "error:", "new", "yourself"]
}),
$globals.HLToolModel);

$core.addMethod(
$core.method({
selector: "isToolModel",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isToolModel\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLToolModel);

$core.addMethod(
$core.method({
selector: "moveClassToPackage:",
protocol: 'commands actions',
fn: function (aPackageName){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._withChangesDo_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._environment())._moveClass_toPackage_($recv(self._selectedClass())._theNonMetaClass(),aPackageName);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"moveClassToPackage:",{aPackageName:aPackageName},$globals.HLToolModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackageName"],
source: "moveClassToPackage: aPackageName\x0a\x09self withChangesDo: [\x0a\x09\x09self environment \x0a\x09\x09\x09moveClass: self selectedClass theNonMetaClass\x0a\x09\x09\x09toPackage: aPackageName ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["withChangesDo:", "moveClass:toPackage:", "environment", "theNonMetaClass", "selectedClass"]
}),
$globals.HLToolModel);

$core.addMethod(
$core.method({
selector: "moveMethodToClass:",
protocol: 'commands actions',
fn: function (aClassName){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._withChangesDo_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._environment())._moveMethod_toClass_(self._selectedMethod(),aClassName);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"moveMethodToClass:",{aClassName:aClassName},$globals.HLToolModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClassName"],
source: "moveMethodToClass: aClassName\x0a\x09self withChangesDo: [\x0a\x09\x09self environment \x0a\x09\x09\x09moveMethod: self selectedMethod \x0a\x09\x09\x09toClass: aClassName ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["withChangesDo:", "moveMethod:toClass:", "environment", "selectedMethod"]
}),
$globals.HLToolModel);

$core.addMethod(
$core.method({
selector: "moveMethodToProtocol:",
protocol: 'commands actions',
fn: function (aProtocol){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._withChangesDo_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._environment())._moveMethod_toProtocol_(self._selectedMethod(),aProtocol);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"moveMethodToProtocol:",{aProtocol:aProtocol},$globals.HLToolModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aProtocol"],
source: "moveMethodToProtocol: aProtocol\x0a\x09self withChangesDo: [\x0a\x09\x09self environment \x0a\x09\x09\x09moveMethod: self selectedMethod \x0a\x09\x09\x09toProtocol: aProtocol ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["withChangesDo:", "moveMethod:toProtocol:", "environment", "selectedMethod"]
}),
$globals.HLToolModel);

$core.addMethod(
$core.method({
selector: "openClassNamed:",
protocol: 'commands actions',
fn: function (aString){
var self=this;
var class_;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._withChangesDo_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
class_=$recv(self._environment())._classNamed_(aString);
class_;
self._selectedPackage_($recv(class_)._package());
return self._selectedClass_(class_);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"openClassNamed:",{aString:aString,class_:class_},$globals.HLToolModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "openClassNamed: aString\x0a\x09| class |\x0a\x09\x0a\x09self withChangesDo: [\x0a\x09\x09class := self environment classNamed: aString.\x0a\x09\x09self selectedPackage: class package.\x0a\x09\x09self selectedClass: class ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["withChangesDo:", "classNamed:", "environment", "selectedPackage:", "package", "selectedClass:"]
}),
$globals.HLToolModel);

$core.addMethod(
$core.method({
selector: "packageToCommit",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self._selectedMethod();
if(($receiver = $2) == null || $receiver.isNil){
$1=self._selectedPackage();
} else {
var method;
method=$receiver;
$1=$recv(method)._package();
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"packageToCommit",{},$globals.HLToolModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "packageToCommit\x0a\x09\x22Answer the package to commit depending on the context:\x0a\x09- if a Method is selected, answer its package\x0a\x09- else answer the `selectedPackage`\x22\x0a\x09\x0a\x09^ self selectedMethod \x0a\x09\x09ifNil: [ self selectedPackage ]\x0a\x09\x09ifNotNil: [ :method | method package ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:ifNotNil:", "selectedMethod", "selectedPackage", "package"]
}),
$globals.HLToolModel);

$core.addMethod(
$core.method({
selector: "packages",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._environment())._packages();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"packages",{},$globals.HLToolModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "packages\x0a\x09^ self environment packages",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["packages", "environment"]
}),
$globals.HLToolModel);

$core.addMethod(
$core.method({
selector: "removeClass",
protocol: 'commands actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$5,$4,$3,$2;
self._withChangesDo_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=self._manager();
$5=self._selectedClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["selectedClass"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._theNonMetaClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["theNonMetaClass"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._name();
$2="Do you REALLY want to remove class ".__comma($3);
return $recv($1)._confirm_ifTrue_($2,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(self._environment())._removeClass_($recv(self._selectedClass())._theNonMetaClass());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeClass",{},$globals.HLToolModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeClass\x0a\x09self withChangesDo: [\x0a\x09\x09self manager \x0a\x09\x09\x09confirm: 'Do you REALLY want to remove class ', self selectedClass theNonMetaClass name\x0a\x09\x09\x09ifTrue: [ self environment removeClass: self selectedClass theNonMetaClass ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["withChangesDo:", "confirm:ifTrue:", "manager", ",", "name", "theNonMetaClass", "selectedClass", "removeClass:", "environment"]
}),
$globals.HLToolModel);

$core.addMethod(
$core.method({
selector: "removeMethod",
protocol: 'commands actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$7,$6,$5,$4,$3,$9,$8,$2;
self._withChangesDo_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=self._manager();
$7=self._selectedMethod();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["selectedMethod"]=1;
//>>excludeEnd("ctx");
$6=$recv($7)._methodClass();
$5=$recv($6)._name();
$4="Do you REALLY want to remove method ".__comma($5);
$3=$recv($4).__comma(" >> #");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=2;
//>>excludeEnd("ctx");
$9=self._selectedMethod();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["selectedMethod"]=2;
//>>excludeEnd("ctx");
$8=$recv($9)._selector();
$2=$recv($3).__comma($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $recv($1)._confirm_ifTrue_($2,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(self._environment())._removeMethod_(self._selectedMethod());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeMethod",{},$globals.HLToolModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeMethod\x0a\x09self withChangesDo: [\x0a\x09\x09self manager \x0a\x09\x09\x09confirm: 'Do you REALLY want to remove method ', self selectedMethod methodClass name,' >> #', self selectedMethod selector\x0a\x09\x09\x09ifTrue: [ self environment removeMethod: self selectedMethod ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["withChangesDo:", "confirm:ifTrue:", "manager", ",", "name", "methodClass", "selectedMethod", "selector", "removeMethod:", "environment"]
}),
$globals.HLToolModel);

$core.addMethod(
$core.method({
selector: "removeProtocol",
protocol: 'commands actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$2;
self._withChangesDo_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=self._manager();
$3=self._selectedProtocol();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["selectedProtocol"]=1;
//>>excludeEnd("ctx");
$2="Do you REALLY want to remove protocol ".__comma($3);
return $recv($1)._confirm_ifTrue_($2,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(self._environment())._removeProtocol_from_(self._selectedProtocol(),self._selectedClass());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeProtocol",{},$globals.HLToolModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeProtocol\x0a\x09self withChangesDo: [\x0a\x09\x09self manager \x0a\x09\x09\x09confirm: 'Do you REALLY want to remove protocol ', self selectedProtocol\x0a\x09\x09\x09ifTrue: [ self environment \x0a\x09\x09\x09\x09removeProtocol: self selectedProtocol \x0a\x09\x09\x09\x09from: self selectedClass ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["withChangesDo:", "confirm:ifTrue:", "manager", ",", "selectedProtocol", "removeProtocol:from:", "environment", "selectedClass"]
}),
$globals.HLToolModel);

$core.addMethod(
$core.method({
selector: "renameClassTo:",
protocol: 'commands actions',
fn: function (aClassName){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._withChangesDo_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._environment())._renameClass_to_($recv(self._selectedClass())._theNonMetaClass(),aClassName);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renameClassTo:",{aClassName:aClassName},$globals.HLToolModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClassName"],
source: "renameClassTo: aClassName\x0a\x09self withChangesDo: [\x0a\x09\x09self environment \x0a\x09\x09\x09renameClass: self selectedClass theNonMetaClass\x0a\x09\x09\x09to: aClassName ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["withChangesDo:", "renameClass:to:", "environment", "theNonMetaClass", "selectedClass"]
}),
$globals.HLToolModel);

$core.addMethod(
$core.method({
selector: "renameProtocolTo:",
protocol: 'commands actions',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._withChangesDo_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._environment())._renameProtocol_to_in_(self._selectedProtocol(),aString,self._selectedClass());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renameProtocolTo:",{aString:aString},$globals.HLToolModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "renameProtocolTo: aString\x0a\x09self withChangesDo: [\x0a\x09\x09self environment \x0a\x09\x09\x09renameProtocol: self selectedProtocol\x0a\x09\x09\x09to: aString\x0a\x09\x09\x09in: self selectedClass ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["withChangesDo:", "renameProtocol:to:in:", "environment", "selectedProtocol", "selectedClass"]
}),
$globals.HLToolModel);

$core.addMethod(
$core.method({
selector: "save:",
protocol: 'actions',
fn: function (aString){
var self=this;
function $HLSourceCodeSaved(){return $globals.HLSourceCodeSaved||(typeof HLSourceCodeSaved=="undefined"?nil:HLSourceCodeSaved)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$recv(self._announcer())._announce_($recv($HLSourceCodeSaved())._new());
$1=self._shouldCompileClassDefinition_(aString);
if($core.assert($1)){
self._compileClassDefinition_(aString);
} else {
self._compileMethod_(aString);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"save:",{aString:aString},$globals.HLToolModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "save: aString\x0a\x09self announcer announce: HLSourceCodeSaved new.\x0a\x09\x0a\x09(self shouldCompileClassDefinition: aString)\x0a\x09\x09ifTrue: [ self compileClassDefinition: aString ]\x0a\x09\x09ifFalse: [ self compileMethod: aString ]",
referencedClasses: ["HLSourceCodeSaved"],
//>>excludeEnd("ide");
messageSends: ["announce:", "announcer", "new", "ifTrue:ifFalse:", "shouldCompileClassDefinition:", "compileClassDefinition:", "compileMethod:"]
}),
$globals.HLToolModel);

$core.addMethod(
$core.method({
selector: "saveSourceCode",
protocol: 'actions',
fn: function (){
var self=this;
function $HLSaveSourceCode(){return $globals.HLSaveSourceCode||(typeof HLSaveSourceCode=="undefined"?nil:HLSaveSourceCode)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._announcer())._announce_($recv($HLSaveSourceCode())._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"saveSourceCode",{},$globals.HLToolModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "saveSourceCode\x0a\x09self announcer announce: HLSaveSourceCode new",
referencedClasses: ["HLSaveSourceCode"],
//>>excludeEnd("ide");
messageSends: ["announce:", "announcer", "new"]
}),
$globals.HLToolModel);

$core.addMethod(
$core.method({
selector: "selectedClass",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@selectedClass"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selectedClass\x0a\x09^ selectedClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLToolModel);

$core.addMethod(
$core.method({
selector: "selectedClass:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
function $HLClassSelected(){return $globals.HLClassSelected||(typeof HLClassSelected=="undefined"?nil:HLClassSelected)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$1,$4,$6,$5,$7,$receiver;
$3=self._selectedClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selectedClass"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__eq(aClass);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aClass)._isNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if($core.assert($1)){
return self;
};
self._withChangesDo_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=$recv(self["@selectedClass"]).__eq(aClass);
if($core.assert($4)){
self._selectedProtocol_(nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["selectedProtocol:"]=1;
//>>excludeEnd("ctx");
};
if(($receiver = aClass) == null || $receiver.isNil){
self["@selectedClass"]=nil;
self["@selectedClass"];
} else {
$6=$recv(aClass)._theNonMetaClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["theNonMetaClass"]=1;
//>>excludeEnd("ctx");
$5=$recv($6)._package();
self._selectedPackage_($5);
$7=self._showInstance();
if($core.assert($7)){
self["@selectedClass"]=$recv(aClass)._theNonMetaClass();
self["@selectedClass"];
} else {
self["@selectedClass"]=$recv(aClass)._theMetaClass();
self["@selectedClass"];
};
};
self._selectedProtocol_(nil);
return $recv(self._announcer())._announce_($recv($HLClassSelected())._on_(self._selectedClass()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectedClass:",{aClass:aClass},$globals.HLToolModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "selectedClass: aClass\x0a\x09(self selectedClass = aClass and: [ aClass isNil ]) \x0a\x09\x09ifTrue: [ ^ self ].\x0a\x09\x0a\x09self withChangesDo: [\x0a\x09\x09selectedClass = aClass ifTrue: [ \x0a\x09\x09\x09self selectedProtocol: nil ].\x0a    \x0a\x09\x09aClass \x0a   \x09\x09\x09ifNil: [ selectedClass := nil ]\x0a    \x09\x09ifNotNil: [\x0a\x09\x09\x09\x09self selectedPackage: aClass theNonMetaClass package.\x0a\x09\x09\x09\x09self showInstance \x0a   \x09\x09\x09\x09\x09ifTrue: [ selectedClass := aClass theNonMetaClass ]\x0a     \x09\x09\x09\x09ifFalse: [ selectedClass := aClass theMetaClass ] ].\x0a\x09\x09self selectedProtocol: nil.\x0a\x09\x09self announcer announce: (HLClassSelected on: self selectedClass) ]",
referencedClasses: ["HLClassSelected"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "and:", "=", "selectedClass", "isNil", "withChangesDo:", "selectedProtocol:", "ifNil:ifNotNil:", "selectedPackage:", "package", "theNonMetaClass", "ifTrue:ifFalse:", "showInstance", "theMetaClass", "announce:", "announcer", "on:"]
}),
$globals.HLToolModel);

$core.addMethod(
$core.method({
selector: "selectedMethod",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self._selectedClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selectedClass"]=1;
//>>excludeEnd("ctx");
if(($receiver = $2) == null || $receiver.isNil){
$1=$2;
} else {
$1=$recv($recv(self._selectedClass())._methodDictionary())._at_ifAbsent_(self["@selectedSelector"],(function(){
return nil;

}));
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectedMethod",{},$globals.HLToolModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selectedMethod\x0a\x09^ self selectedClass ifNotNil: [ \x0a\x09\x09self selectedClass methodDictionary \x0a\x09\x09\x09at: selectedSelector \x0a\x09\x09\x09ifAbsent: [ nil ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "selectedClass", "at:ifAbsent:", "methodDictionary"]
}),
$globals.HLToolModel);

$core.addMethod(
$core.method({
selector: "selectedMethod:",
protocol: 'accessing',
fn: function (aCompiledMethod){
var self=this;
function $HLMethodSelected(){return $globals.HLMethodSelected||(typeof HLMethodSelected=="undefined"?nil:HLMethodSelected)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$recv(self["@selectedSelector"]).__eq(aCompiledMethod);
if($core.assert($1)){
return self;
};
self._withChangesDo_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if(($receiver = aCompiledMethod) == null || $receiver.isNil){
self["@selectedSelector"]=nil;
self["@selectedSelector"];
} else {
self["@selectedClass"]=$recv(aCompiledMethod)._methodClass();
self["@selectedClass"];
self["@selectedPackage"]=$recv($recv(self["@selectedClass"])._theNonMetaClass())._package();
self["@selectedPackage"];
self["@selectedSelector"]=$recv(aCompiledMethod)._selector();
self["@selectedSelector"];
};
return $recv(self._announcer())._announce_($recv($HLMethodSelected())._on_(aCompiledMethod));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectedMethod:",{aCompiledMethod:aCompiledMethod},$globals.HLToolModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCompiledMethod"],
source: "selectedMethod: aCompiledMethod\x0a\x09selectedSelector = aCompiledMethod ifTrue: [ ^ self ].\x0a    \x0a    self withChangesDo: [\x0a\x09\x09aCompiledMethod\x0a    \x09\x09ifNil: [ selectedSelector := nil ]\x0a      \x09\x09ifNotNil: [\x0a\x09\x09\x09\x09selectedClass := aCompiledMethod methodClass.\x0a\x09\x09\x09\x09selectedPackage := selectedClass theNonMetaClass package.\x0a\x09\x09\x09\x09selectedSelector := aCompiledMethod selector ].\x0a\x0a\x09\x09self announcer announce: (HLMethodSelected on: aCompiledMethod) ]",
referencedClasses: ["HLMethodSelected"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "=", "withChangesDo:", "ifNil:ifNotNil:", "methodClass", "package", "theNonMetaClass", "selector", "announce:", "announcer", "on:"]
}),
$globals.HLToolModel);

$core.addMethod(
$core.method({
selector: "selectedPackage",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@selectedPackage"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selectedPackage\x0a\x09^ selectedPackage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLToolModel);

$core.addMethod(
$core.method({
selector: "selectedPackage:",
protocol: 'accessing',
fn: function (aPackage){
var self=this;
function $HLPackageSelected(){return $globals.HLPackageSelected||(typeof HLPackageSelected=="undefined"?nil:HLPackageSelected)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@selectedPackage"]).__eq(aPackage);
if($core.assert($1)){
return self;
};
self._withChangesDo_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self["@selectedPackage"]=aPackage;
self["@selectedPackage"];
self._selectedClass_(nil);
return $recv(self._announcer())._announce_($recv($HLPackageSelected())._on_(aPackage));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectedPackage:",{aPackage:aPackage},$globals.HLToolModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "selectedPackage: aPackage\x0a\x09selectedPackage = aPackage ifTrue: [ ^ self ].\x0a    \x0a\x09self withChangesDo: [\x0a\x09\x09selectedPackage := aPackage.\x0a\x09\x09self selectedClass: nil.\x0a\x09\x09self announcer announce: (HLPackageSelected on: aPackage) ]",
referencedClasses: ["HLPackageSelected"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "=", "withChangesDo:", "selectedClass:", "announce:", "announcer", "on:"]
}),
$globals.HLToolModel);

$core.addMethod(
$core.method({
selector: "selectedProtocol",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@selectedProtocol"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selectedProtocol\x0a\x09^ selectedProtocol",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLToolModel);

$core.addMethod(
$core.method({
selector: "selectedProtocol:",
protocol: 'accessing',
fn: function (aString){
var self=this;
function $HLProtocolSelected(){return $globals.HLProtocolSelected||(typeof HLProtocolSelected=="undefined"?nil:HLProtocolSelected)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@selectedProtocol"]).__eq(aString);
if($core.assert($1)){
return self;
};
self._withChangesDo_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self["@selectedProtocol"]=aString;
self["@selectedProtocol"];
self._selectedMethod_(nil);
return $recv(self._announcer())._announce_($recv($HLProtocolSelected())._on_(aString));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectedProtocol:",{aString:aString},$globals.HLToolModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "selectedProtocol: aString\x0a\x09selectedProtocol = aString ifTrue: [ ^ self ].\x0a\x0a\x09self withChangesDo: [\x0a\x09\x09selectedProtocol := aString.\x0a\x09\x09self selectedMethod: nil.\x0a\x09\x09self announcer announce: (HLProtocolSelected on: aString) ]",
referencedClasses: ["HLProtocolSelected"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "=", "withChangesDo:", "selectedMethod:", "announce:", "announcer", "on:"]
}),
$globals.HLToolModel);

$core.addMethod(
$core.method({
selector: "shouldCompileClassDefinition:",
protocol: 'testing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._selectedClass())._isNil())._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aString)._match_("^\x5cs*[A-Z]");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shouldCompileClassDefinition:",{aString:aString},$globals.HLToolModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "shouldCompileClassDefinition: aString\x0a\x09^ self selectedClass isNil or: [\x0a\x09\x09aString match: '^\x5cs*[A-Z]' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["or:", "isNil", "selectedClass", "match:"]
}),
$globals.HLToolModel);

$core.addMethod(
$core.method({
selector: "unclassifiedProtocol",
protocol: 'defaults',
fn: function (){
var self=this;
return "as yet unclassified";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "unclassifiedProtocol\x0a\x09^ 'as yet unclassified'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLToolModel);

$core.addMethod(
$core.method({
selector: "withCompileErrorHandling:",
protocol: 'error handling',
fn: function (aBlock){
var self=this;
function $ParseError(){return $globals.ParseError||(typeof ParseError=="undefined"?nil:ParseError)}
function $UnknownVariableError(){return $globals.UnknownVariableError||(typeof UnknownVariableError=="undefined"?nil:UnknownVariableError)}
function $CompilerError(){return $globals.CompilerError||(typeof CompilerError=="undefined"?nil:CompilerError)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=self._environment();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["environment"]=1;
//>>excludeEnd("ctx");
$recv($1)._evaluate_on_do_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=self._environment();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["environment"]=2;
//>>excludeEnd("ctx");
return $recv($2)._evaluate_on_do_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(self._environment())._evaluate_on_do_(aBlock,$ParseError(),(function(ex){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return self._handleParseError_(ex);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({ex:ex},$ctx3,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}),$UnknownVariableError(),(function(ex){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._handleUnkownVariableError_(ex);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({ex:ex},$ctx2,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["evaluate:on:do:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$CompilerError(),(function(ex){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._handleCompileError_(ex);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["evaluate:on:do:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"withCompileErrorHandling:",{aBlock:aBlock},$globals.HLToolModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "withCompileErrorHandling: aBlock\x0a\x09self environment\x0a\x09\x09evaluate: [\x0a\x09\x09\x09self environment \x0a\x09\x09\x09evaluate: [\x0a\x09\x09\x09\x09self environment \x0a\x09\x09\x09\x09\x09evaluate: aBlock\x0a\x09\x09\x09\x09\x09on: ParseError\x0a\x09\x09\x09\x09\x09do: [ :ex | self handleParseError: ex ] ]\x0a\x09\x09\x09on: UnknownVariableError\x0a\x09\x09\x09do: [ :ex | self handleUnkownVariableError: ex ] ]\x0a\x09\x09on: CompilerError\x0a\x09\x09do: [ :ex | self handleCompileError: ex ]",
referencedClasses: ["ParseError", "UnknownVariableError", "CompilerError"],
//>>excludeEnd("ide");
messageSends: ["evaluate:on:do:", "environment", "handleParseError:", "handleUnkownVariableError:", "handleCompileError:"]
}),
$globals.HLToolModel);

$core.addMethod(
$core.method({
selector: "withHelperLabelled:do:",
protocol: 'private',
fn: function (aString,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$4,$2,$5;
$1="#helper"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($1)._remove();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["remove"]=1;
//>>excludeEnd("ctx");
$2=(function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._div();
$recv($3)._id_("helper");
$4=$recv($3)._with_(aString);
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
});
$5="body"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=2;
//>>excludeEnd("ctx");
$recv($2)._appendToJQuery_($5);
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(aBlock)._value();
return $recv("#helper"._asJQuery())._remove();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}))._valueWithTimeout_((10));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"withHelperLabelled:do:",{aString:aString,aBlock:aBlock},$globals.HLToolModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aBlock"],
source: "withHelperLabelled: aString do: aBlock\x0a\x09\x22TODO: doesn't belong here\x22\x0a\x0a\x09'#helper' asJQuery remove.\x0a\x0a\x09[ :html |\x0a\x09\x09html div \x0a\x09\x09\x09id: 'helper';\x0a\x09\x09\x09with: aString ] appendToJQuery: 'body' asJQuery.\x0a\x09\x0a\x09[\x0a\x09\x09aBlock value.\x0a\x09\x09'#helper' asJQuery remove\x0a\x09] \x0a\x09\x09valueWithTimeout: 10",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove", "asJQuery", "appendToJQuery:", "id:", "div", "with:", "valueWithTimeout:", "value"]
}),
$globals.HLToolModel);


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
}, function($ctx1) {$ctx1.fill(self,"on:",{anEnvironment:anEnvironment},$globals.HLToolModel.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anEnvironment"],
source: "on: anEnvironment\x0a\x0a\x09^ self new\x0a    \x09environment: anEnvironment;\x0a        yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["environment:", "new", "yourself"]
}),
$globals.HLToolModel.klass);


$core.addClass('HLProgressHandler', $globals.Object, [], 'Helios-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLProgressHandler.comment="I am a specific progress handler for Helios, displaying progresses in a modal window.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "do:on:displaying:",
protocol: 'progress handling',
fn: function (aBlock,aCollection,aString){
var self=this;
function $HLProgressWidget(){return $globals.HLProgressWidget||(typeof HLProgressWidget=="undefined"?nil:HLProgressWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv($HLProgressWidget())._default())._do_on_displaying_(aBlock,aCollection,aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"do:on:displaying:",{aBlock:aBlock,aCollection:aCollection,aString:aString},$globals.HLProgressHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "aCollection", "aString"],
source: "do: aBlock on: aCollection displaying: aString\x0a\x09HLProgressWidget default\x0a\x09\x09do: aBlock \x0a\x09\x09on: aCollection \x0a\x09\x09displaying: aString",
referencedClasses: ["HLProgressWidget"],
//>>excludeEnd("ide");
messageSends: ["do:on:displaying:", "default"]
}),
$globals.HLProgressHandler);



$core.addClass('HLWidget', $globals.Widget, ['wrapper'], 'Helios-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLWidget.comment="I am the abstract superclass of all Helios widgets.\x0a\x0aI provide common methods, additional behavior to widgets useful for Helios, like dialog creation, command execution and tab creation.\x0a\x0a## API\x0a\x0a1. Rendering\x0a\x0a    Instead of overriding `#renderOn:` as with other Widget subclasses, my subclasses should override `#renderContentOn:`.\x0a\x0a2. Refreshing\x0a\x0a    To re-render a widget, use `#refresh`.\x0a\x0a3. Key bindings registration and tabs\x0a\x0a    When displayed as a tab, the widget has a chance to register keybindings with the `#registerBindingsOn:` hook method.\x0a    \x0a4. Unregistration\x0a\x0a    When a widget has subscribed to announcements or other actions that need to be cleared when closing the tab, the hook method `#unregister` will be called by helios.\x0a\x0a5. Tabs\x0a\x0a   To enable a widget class to be open as a tab, override the class-side `#canBeOpenAsTab` method to answer `true`. `#tabClass` and `#tabPriority` can be overridden too to respectively change the css class of the tab and the order of tabs in the main menu.\x0a\x0a6. Command execution\x0a\x0a    An helios command (instance of `HLCommand` or one of its subclass) can be executed with `#execute:`.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "bindKeyDown:keyUp:",
protocol: 'keybindings',
fn: function (keyDownBlock,keyUpBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(self._wrapper())._asJQuery();
$recv($1)._keydown_(keyDownBlock);
$2=$recv($1)._keyup_(keyUpBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bindKeyDown:keyUp:",{keyDownBlock:keyDownBlock,keyUpBlock:keyUpBlock},$globals.HLWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["keyDownBlock", "keyUpBlock"],
source: "bindKeyDown: keyDownBlock keyUp: keyUpBlock\x0a\x09self wrapper asJQuery\x0a\x09\x09keydown: keyDownBlock;\x0a\x09\x09keyup: keyUpBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["keydown:", "asJQuery", "wrapper", "keyup:"]
}),
$globals.HLWidget);

$core.addMethod(
$core.method({
selector: "canHaveFocus",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "canHaveFocus\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLWidget);

$core.addMethod(
$core.method({
selector: "confirm:ifTrue:",
protocol: 'actions',
fn: function (aString,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._manager())._confirm_ifTrue_(aString,aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"confirm:ifTrue:",{aString:aString,aBlock:aBlock},$globals.HLWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aBlock"],
source: "confirm: aString ifTrue: aBlock\x0a\x09self manager confirm: aString ifTrue: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["confirm:ifTrue:", "manager"]
}),
$globals.HLWidget);

$core.addMethod(
$core.method({
selector: "confirm:ifTrue:ifFalse:",
protocol: 'actions',
fn: function (aString,aBlock,anotherBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._manager())._confirm_ifTrue_ifFalse_(aString,aBlock,anotherBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"confirm:ifTrue:ifFalse:",{aString:aString,aBlock:aBlock,anotherBlock:anotherBlock},$globals.HLWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aBlock", "anotherBlock"],
source: "confirm: aString ifTrue: aBlock ifFalse: anotherBlock\x0a\x09self manager \x0a\x09\x09confirm: aString \x0a\x09\x09ifTrue: aBlock\x0a\x09\x09ifFalse: anotherBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["confirm:ifTrue:ifFalse:", "manager"]
}),
$globals.HLWidget);

$core.addMethod(
$core.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "hl_widget";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cssClass\x0a\x09^ 'hl_widget'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLWidget);

$core.addMethod(
$core.method({
selector: "defaultTabLabel",
protocol: 'defaults',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._class())._tabLabel();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultTabLabel",{},$globals.HLWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultTabLabel\x0a\x09^ self class tabLabel",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tabLabel", "class"]
}),
$globals.HLWidget);

$core.addMethod(
$core.method({
selector: "execute:",
protocol: 'actions',
fn: function (aCommand){
var self=this;
function $HLManager(){return $globals.HLManager||(typeof HLManager=="undefined"?nil:HLManager)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($recv($HLManager())._current())._keyBinder();
$recv($1)._activate();
$2=$recv($1)._applyBinding_($recv(aCommand)._asBinding());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"execute:",{aCommand:aCommand},$globals.HLWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCommand"],
source: "execute: aCommand\x0a\x09HLManager current keyBinder\x0a\x09\x09activate;\x0a\x09\x09applyBinding: aCommand asBinding",
referencedClasses: ["HLManager"],
//>>excludeEnd("ide");
messageSends: ["activate", "keyBinder", "current", "applyBinding:", "asBinding"]
}),
$globals.HLWidget);

$core.addMethod(
$core.method({
selector: "inform:",
protocol: 'actions',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._manager())._inform_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inform:",{aString:aString},$globals.HLWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "inform: aString\x0a\x09self manager inform: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["inform:", "manager"]
}),
$globals.HLWidget);

$core.addMethod(
$core.method({
selector: "manager",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLManager(){return $globals.HLManager||(typeof HLManager=="undefined"?nil:HLManager)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($HLManager())._current();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"manager",{},$globals.HLWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "manager\x0a\x09^ HLManager current",
referencedClasses: ["HLManager"],
//>>excludeEnd("ide");
messageSends: ["current"]
}),
$globals.HLWidget);

$core.addMethod(
$core.method({
selector: "openAsTab",
protocol: 'actions',
fn: function (){
var self=this;
function $HLTabWidget(){return $globals.HLTabWidget||(typeof HLTabWidget=="undefined"?nil:HLTabWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv($HLTabWidget())._on_labelled_(self,self._defaultTabLabel()))._add();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"openAsTab",{},$globals.HLWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "openAsTab\x0a\x09(HLTabWidget on: self labelled: self defaultTabLabel)\x0a\x09\x09add",
referencedClasses: ["HLTabWidget"],
//>>excludeEnd("ide");
messageSends: ["add", "on:labelled:", "defaultTabLabel"]
}),
$globals.HLWidget);

$core.addMethod(
$core.method({
selector: "refresh",
protocol: 'updating',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$2,$receiver;
$1=self._wrapper();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["wrapper"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
return self;
} else {
$1;
};
$3=self._wrapper();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["wrapper"]=2;
//>>excludeEnd("ctx");
$2=$recv($3)._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($2)._empty();
$recv((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._renderContentOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,2)});
//>>excludeEnd("ctx");
}))._appendToJQuery_($recv(self._wrapper())._asJQuery());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"refresh",{},$globals.HLWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "refresh\x0a\x09self wrapper ifNil: [ ^ self ].\x0a    \x0a\x09self wrapper asJQuery empty.\x0a    [ :html | self renderContentOn: html ] appendToJQuery: self wrapper asJQuery",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "wrapper", "empty", "asJQuery", "appendToJQuery:", "renderContentOn:"]
}),
$globals.HLWidget);

$core.addMethod(
$core.method({
selector: "registerBindings",
protocol: 'keybindings',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._registerBindingsOn_($recv($recv(self._manager())._keyBinder())._bindings());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"registerBindings",{},$globals.HLWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "registerBindings\x0a\x09self registerBindingsOn: self manager keyBinder bindings",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["registerBindingsOn:", "bindings", "keyBinder", "manager"]
}),
$globals.HLWidget);

$core.addMethod(
$core.method({
selector: "registerBindingsOn:",
protocol: 'keybindings',
fn: function (aBindingGroup){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBindingGroup"],
source: "registerBindingsOn: aBindingGroup",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLWidget);

$core.addMethod(
$core.method({
selector: "removeTab",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._manager())._removeTabForWidget_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeTab",{},$globals.HLWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeTab\x0a\x09self manager removeTabForWidget: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeTabForWidget:", "manager"]
}),
$globals.HLWidget);

$core.addMethod(
$core.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderContentOn: html",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLWidget);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._div();
$recv($1)._class_(self._cssClass());
$2=$recv($1)._yourself();
self["@wrapper"]=$2;
$recv((function(renderer){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._renderContentOn_(renderer);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({renderer:renderer},$ctx1,1)});
//>>excludeEnd("ctx");
}))._appendToJQuery_($recv(self["@wrapper"])._asJQuery());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.HLWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09wrapper := html div\x0a\x09\x09class: self cssClass;\x0a\x09\x09yourself.\x0a    [ :renderer | self renderContentOn: renderer ] appendToJQuery: wrapper asJQuery",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "cssClass", "yourself", "appendToJQuery:", "renderContentOn:", "asJQuery"]
}),
$globals.HLWidget);

$core.addMethod(
$core.method({
selector: "request:do:",
protocol: 'actions',
fn: function (aString,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._manager())._request_do_(aString,aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"request:do:",{aString:aString,aBlock:aBlock},$globals.HLWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aBlock"],
source: "request: aString do: aBlock\x0a\x09self manager request: aString do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["request:do:", "manager"]
}),
$globals.HLWidget);

$core.addMethod(
$core.method({
selector: "request:value:do:",
protocol: 'actions',
fn: function (aString,valueString,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._manager())._request_value_do_(aString,valueString,aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"request:value:do:",{aString:aString,valueString:valueString,aBlock:aBlock},$globals.HLWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "valueString", "aBlock"],
source: "request: aString value: valueString do: aBlock\x0a\x09self manager \x0a\x09\x09request: aString \x0a\x09\x09value: valueString\x0a\x09\x09do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["request:value:do:", "manager"]
}),
$globals.HLWidget);

$core.addMethod(
$core.method({
selector: "setTabLabel:",
protocol: 'accessing',
fn: function (aString){
var self=this;
function $HLTabLabelChanged(){return $globals.HLTabLabelChanged||(typeof HLTabLabelChanged=="undefined"?nil:HLTabLabelChanged)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($HLTabLabelChanged())._new();
$recv($1)._widget_(self);
$recv($1)._label_(aString);
$2=$recv($1)._yourself();
$recv($recv(self._manager())._announcer())._announce_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setTabLabel:",{aString:aString},$globals.HLWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "setTabLabel: aString\x0a\x09self manager announcer announce: (HLTabLabelChanged new\x0a\x09\x09widget: self;\x0a\x09\x09label: aString;\x0a\x09\x09yourself)",
referencedClasses: ["HLTabLabelChanged"],
//>>excludeEnd("ide");
messageSends: ["announce:", "announcer", "manager", "widget:", "new", "label:", "yourself"]
}),
$globals.HLWidget);

$core.addMethod(
$core.method({
selector: "tabClass",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._class())._tabClass();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tabClass",{},$globals.HLWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tabClass\x0a\x09^ self class tabClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tabClass", "class"]
}),
$globals.HLWidget);

$core.addMethod(
$core.method({
selector: "unbindKeyDownKeyUp",
protocol: 'keybindings',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(self._wrapper())._asJQuery();
$recv($1)._unbind_("keydown");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["unbind:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._unbind_("keyup");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"unbindKeyDownKeyUp",{},$globals.HLWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "unbindKeyDownKeyUp\x0a\x09self wrapper asJQuery\x0a\x09\x09unbind: 'keydown';\x0a\x09\x09unbind: 'keyup'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["unbind:", "asJQuery", "wrapper"]
}),
$globals.HLWidget);

$core.addMethod(
$core.method({
selector: "unregister",
protocol: 'actions',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "unregister\x0a\x09\x22This method is called whenever the receiver is closed (as a tab).\x0a\x09Widgets subscribing to announcements should unregister there\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLWidget);

$core.addMethod(
$core.method({
selector: "wrapper",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@wrapper"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "wrapper\x0a\x09^ wrapper",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLWidget);


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
$globals.HLWidget.klass);

$core.addMethod(
$core.method({
selector: "openAsTab",
protocol: 'accessing',
fn: function (){
var self=this;
var instance;
function $HLTabWidget(){return $globals.HLTabWidget||(typeof HLTabWidget=="undefined"?nil:HLTabWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
instance=self._new();
$recv($recv($HLTabWidget())._on_labelled_(instance,$recv(instance)._defaultTabLabel()))._add();
$1=instance;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"openAsTab",{instance:instance},$globals.HLWidget.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "openAsTab\x0a\x09| instance |\x0a\x09\x0a\x09instance := self new.\x0a\x09(HLTabWidget \x0a\x09\x09on: instance \x0a\x09\x09labelled: instance defaultTabLabel) add.\x0a\x09^ instance",
referencedClasses: ["HLTabWidget"],
//>>excludeEnd("ide");
messageSends: ["new", "add", "on:labelled:", "defaultTabLabel"]
}),
$globals.HLWidget.klass);

$core.addMethod(
$core.method({
selector: "tabClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tabClass\x0a\x09^ ''",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLWidget.klass);

$core.addMethod(
$core.method({
selector: "tabLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "Tab";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tabLabel\x0a\x09^ 'Tab'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLWidget.klass);

$core.addMethod(
$core.method({
selector: "tabPriority",
protocol: 'accessing',
fn: function (){
var self=this;
return (500);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tabPriority\x0a\x09^ 500",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLWidget.klass);


$core.addClass('HLFocusableWidget', $globals.HLWidget, [], 'Helios-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLFocusableWidget.comment="I am a widget that can be focused.\x0a\x0a## API \x0a\x0aInstead of overriding `#renderOn:` as with other `Widget` subclasses, my subclasses should override `#renderContentOn:`.\x0a\x0aTo bring the focus to the widget, use the `#focus` method.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "blur",
protocol: 'events',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(self._wrapper())._asJQuery())._blur();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"blur",{},$globals.HLFocusableWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "blur\x0a\x09self wrapper asJQuery blur",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["blur", "asJQuery", "wrapper"]
}),
$globals.HLFocusableWidget);

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
$globals.HLFocusableWidget);

$core.addMethod(
$core.method({
selector: "focus",
protocol: 'events',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(self._wrapper())._asJQuery())._focus();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"focus",{},$globals.HLFocusableWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "focus\x0a\x09self wrapper asJQuery focus",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["focus", "asJQuery", "wrapper"]
}),
$globals.HLFocusableWidget);

$core.addMethod(
$core.method({
selector: "focusClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "focused";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "focusClass\x0a\x09^ 'focused'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLFocusableWidget);

$core.addMethod(
$core.method({
selector: "hasFocus",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$1;
$3=self._wrapper();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["wrapper"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._notNil();
$1=$recv($2)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(self._wrapper())._asJQuery())._hasClass_(self._focusClass());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hasFocus",{},$globals.HLFocusableWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hasFocus\x0a\x09^ self wrapper notNil and: [ self wrapper asJQuery hasClass: self focusClass ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["and:", "notNil", "wrapper", "hasClass:", "asJQuery", "focusClass"]
}),
$globals.HLFocusableWidget);

$core.addMethod(
$core.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderContentOn: html",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLFocusableWidget);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$5,$4,$6,$7;
$1=$recv(html)._div();
$recv($1)._class_(self._cssClass());
$2=$recv($1)._yourself();
self["@wrapper"]=$2;
$recv(self["@wrapper"])._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._renderContentOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$3=self["@wrapper"];
$recv($3)._at_put_("tabindex","0");
$recv($3)._onBlur_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$5=self._wrapper();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["wrapper"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$6=self._focusClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["focusClass"]=1;
//>>excludeEnd("ctx");
return $recv($4)._removeClass_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$7=$recv($3)._onFocus_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(self._wrapper())._asJQuery())._addClass_(self._focusClass());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.HLFocusableWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a    wrapper := html div \x0a    \x09class: self cssClass;\x0a\x09\x09yourself.\x0a\x09\x09\x0a       wrapper with: [ self renderContentOn: html ].\x0a\x09\x0a\x09wrapper\x0a\x09\x09at: 'tabindex' put: '0';\x0a\x09\x09onBlur: [ self wrapper asJQuery removeClass: self focusClass ];\x0a        onFocus: [ self wrapper asJQuery addClass: self focusClass ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "cssClass", "yourself", "with:", "renderContentOn:", "at:put:", "onBlur:", "removeClass:", "asJQuery", "wrapper", "focusClass", "onFocus:", "addClass:"]
}),
$globals.HLFocusableWidget);



$core.addClass('HLListWidget', $globals.HLFocusableWidget, ['items', 'selectedItem'], 'Helios-Core');
$core.addMethod(
$core.method({
selector: "activateFirstListItem",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._activateListItem_($recv($recv($recv(self["@wrapper"])._asJQuery())._find_("li.inactive"))._eq_((0)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"activateFirstListItem",{},$globals.HLListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "activateFirstListItem\x0a\x09self activateListItem: ((wrapper asJQuery find: 'li.inactive') eq: 0)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["activateListItem:", "eq:", "find:", "asJQuery"]
}),
$globals.HLListWidget);

$core.addMethod(
$core.method({
selector: "activateItem:",
protocol: 'actions',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._activateListItem_(self._findListItemFor_(anObject));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"activateItem:",{anObject:anObject},$globals.HLListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "activateItem: anObject\x0a\x09self activateListItem: (self findListItemFor: anObject)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["activateListItem:", "findListItemFor:"]
}),
$globals.HLListWidget);

$core.addMethod(
$core.method({
selector: "activateListItem:",
protocol: 'actions',
fn: function (aListItem){
var self=this;
var item;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$receiver;
$1=$recv(aListItem)._get_((0));
if(($receiver = $1) == null || $receiver.isNil){
return self;
} else {
$1;
};
$2=$recv($recv(aListItem)._parent())._children();
$3=self._activeItemCssClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["activeItemCssClass"]=1;
//>>excludeEnd("ctx");
$recv($2)._removeClass_($3);
$recv(aListItem)._addClass_(self._activeItemCssClass());
self._ensureVisible_(aListItem);
item=$recv(aListItem)._data_("item");
$4=$recv(self._selectedItem()).__eq_eq(item);
if(!$core.assert($4)){
self._selectItem_(item);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"activateListItem:",{aListItem:aListItem,item:item},$globals.HLListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aListItem"],
source: "activateListItem: aListItem\x0a\x09| item |\x0a\x09\x0a\x09(aListItem get: 0) ifNil: [ ^ self ].\x0a\x09aListItem parent children removeClass: self activeItemCssClass.\x0a\x09aListItem addClass: self activeItemCssClass.\x0a    \x0a\x09self ensureVisible: aListItem.\x0a    \x0a   \x22Activate the corresponding item\x22\x0a   item := aListItem data: 'item'.\x0a   self selectedItem == item ifFalse: [\x0a\x09   self selectItem: item ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "get:", "removeClass:", "children", "parent", "activeItemCssClass", "addClass:", "ensureVisible:", "data:", "ifFalse:", "==", "selectedItem", "selectItem:"]
}),
$globals.HLListWidget);

$core.addMethod(
$core.method({
selector: "activateNextListItem",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $4,$3,$6,$5,$2,$1;
$4=self._wrapper();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["wrapper"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$6=self._activeItemCssClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["activeItemCssClass"]=1;
//>>excludeEnd("ctx");
$5="li.".__comma($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._find_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["find:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._next();
self._activateListItem_($1);
$recv($recv($recv($recv(self._wrapper())._asJQuery())._find_(" .".__comma(self._activeItemCssClass())))._get())._ifEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._activateFirstListItem();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"activateNextListItem",{},$globals.HLListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "activateNextListItem\x0a\x09self activateListItem: (self wrapper asJQuery find: ('li.', self activeItemCssClass)) next.\x0a\x09\x0a\x09\x22select the first item if none is selected\x22\x0a\x09(self wrapper asJQuery find: (' .', self activeItemCssClass)) get ifEmpty: [\x0a\x09\x09self activateFirstListItem ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["activateListItem:", "next", "find:", "asJQuery", "wrapper", ",", "activeItemCssClass", "ifEmpty:", "get", "activateFirstListItem"]
}),
$globals.HLListWidget);

$core.addMethod(
$core.method({
selector: "activatePreviousListItem",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._activateListItem_($recv($recv($recv(self._wrapper())._asJQuery())._find_("li.".__comma(self._activeItemCssClass())))._prev());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"activatePreviousListItem",{},$globals.HLListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "activatePreviousListItem\x0a\x09self activateListItem: (self wrapper asJQuery find:  ('li.', self activeItemCssClass)) prev",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["activateListItem:", "prev", "find:", "asJQuery", "wrapper", ",", "activeItemCssClass"]
}),
$globals.HLListWidget);

$core.addMethod(
$core.method({
selector: "activeItemCssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "active";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "activeItemCssClass\x0a\x09^'active'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLListWidget);

$core.addMethod(
$core.method({
selector: "buttonsDivCssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "pane_actions form-actions";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "buttonsDivCssClass\x0a\x09^ 'pane_actions form-actions'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLListWidget);

$core.addMethod(
$core.method({
selector: "cssClassForItem:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
return "";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "cssClassForItem: anObject\x0a\x09^ ''",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLListWidget);

$core.addMethod(
$core.method({
selector: "defaultItems",
protocol: 'defaults',
fn: function (){
var self=this;
var $1;
$1=[];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultItems\x0a\x09^ #()",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLListWidget);

$core.addMethod(
$core.method({
selector: "ensureVisible:",
protocol: 'actions',
fn: function (aListItem){
var self=this;
var parent,position;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$4,$3,$2,$5,$9,$8,$11,$10,$7,$6,$15,$14,$16,$13,$17,$12,$18,$22,$23,$21,$20,$19,$receiver;
$1=$recv(aListItem)._get_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["get:"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
return self;
} else {
$1;
};
position=self._positionOf_(aListItem);
parent=$recv(aListItem)._parent();
$4=$recv(aListItem)._position();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["position"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._top();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["top"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__lt((0));
if($core.assert($2)){
$5=$recv(parent)._get_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["get:"]=2;
//>>excludeEnd("ctx");
$9=$recv(parent)._get_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["get:"]=3;
//>>excludeEnd("ctx");
$8=$recv($9)._scrollTop();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scrollTop"]=1;
//>>excludeEnd("ctx");
$11=$recv(aListItem)._position();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["position"]=2;
//>>excludeEnd("ctx");
$10=$recv($11)._top();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["top"]=2;
//>>excludeEnd("ctx");
$7=$recv($8).__plus($10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$6=$recv($7).__minus((10));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$recv($5)._scrollTop_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scrollTop:"]=1;
//>>excludeEnd("ctx");
};
$15=$recv(aListItem)._position();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["position"]=3;
//>>excludeEnd("ctx");
$14=$recv($15)._top();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["top"]=3;
//>>excludeEnd("ctx");
$16=$recv(aListItem)._height();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["height"]=1;
//>>excludeEnd("ctx");
$13=$recv($14).__plus($16);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=2;
//>>excludeEnd("ctx");
$17=$recv(parent)._height();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["height"]=2;
//>>excludeEnd("ctx");
$12=$recv($13).__gt($17);
if($core.assert($12)){
$18=$recv(parent)._get_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["get:"]=4;
//>>excludeEnd("ctx");
$22=$recv($recv(parent)._get_((0)))._scrollTop();
$23=$recv(aListItem)._height();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["height"]=3;
//>>excludeEnd("ctx");
$21=$recv($22).__plus($23);
$20=$recv($21).__minus($recv($recv(parent)._height()).__minus($recv($recv(aListItem)._position())._top()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=2;
//>>excludeEnd("ctx");
$19=$recv($20).__plus((10));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=3;
//>>excludeEnd("ctx");
$recv($18)._scrollTop_($19);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ensureVisible:",{aListItem:aListItem,parent:parent,position:position},$globals.HLListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aListItem"],
source: "ensureVisible: aListItem\x09\x0a\x09\x22Move the scrollbar to show the active element\x22\x0a\x09\x0a\x09| parent position |\x0a\x09(aListItem get: 0) ifNil: [ ^ self ].\x0a\x09position := self positionOf: aListItem.\x0a\x09parent := aListItem parent.\x0a\x09\x0a    aListItem position top < 0 ifTrue: [\x0a\x09\x09(parent get: 0) scrollTop: ((parent get: 0) scrollTop + aListItem position top - 10) ].\x0a    aListItem position top + aListItem height > parent height ifTrue: [ \x0a\x09\x09(parent get: 0) scrollTop: ((parent get: 0) scrollTop + aListItem height - (parent height - aListItem position top)) +10 ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "get:", "positionOf:", "parent", "ifTrue:", "<", "top", "position", "scrollTop:", "-", "+", "scrollTop", ">", "height"]
}),
$globals.HLListWidget);

$core.addMethod(
$core.method({
selector: "findListItemFor:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $4,$3,$2,$1;
$4=$recv(self["@wrapper"])._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._find_("li");
$2=$recv($3)._filter_($recv((function(thisArg,otherArg){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($recv(thisArg)._asJQuery())._data_("item")).__eq(anObject);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({thisArg:thisArg,otherArg:otherArg},$ctx1,1)});
//>>excludeEnd("ctx");
}))._currySelf());
$1=$recv($2)._eq_((0));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"findListItemFor:",{anObject:anObject},$globals.HLListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "findListItemFor: anObject\x0a\x09^ (((wrapper asJQuery find: 'li') \x0a\x09\x09filter: [ :thisArg :otherArg | (thisArg asJQuery data: 'item') = anObject ] currySelf) eq: 0)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["eq:", "filter:", "find:", "asJQuery", "currySelf", "=", "data:"]
}),
$globals.HLListWidget);

$core.addMethod(
$core.method({
selector: "focus",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$receiver;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.HLListWidget.superclass.fn.prototype._focus.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=$recv(self._items())._isEmpty();
if(!$core.assert($1)){
$2=self._selectedItem();
if(($receiver = $2) == null || $receiver.isNil){
self._activateFirstListItem();
} else {
$2;
};
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"focus",{},$globals.HLListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "focus\x0a\x09super focus.\x0a    self items isEmpty ifFalse: [ \x0a\x09\x09self selectedItem ifNil: [ self activateFirstListItem ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["focus", "ifFalse:", "isEmpty", "items", "ifNil:", "selectedItem", "activateFirstListItem"]
}),
$globals.HLListWidget);

$core.addMethod(
$core.method({
selector: "items",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@items"];
if(($receiver = $2) == null || $receiver.isNil){
self["@items"]=self._defaultItems();
$1=self["@items"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"items",{},$globals.HLListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "items\x0a\x09^ items ifNil: [ items := self defaultItems ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "defaultItems"]
}),
$globals.HLListWidget);

$core.addMethod(
$core.method({
selector: "items:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
self["@items"]=aCollection;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "items: aCollection\x0a\x09items := aCollection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLListWidget);

$core.addMethod(
$core.method({
selector: "listCssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "nav nav-pills nav-stacked";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "listCssClass \x0a\x09^'nav nav-pills nav-stacked'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLListWidget);

$core.addMethod(
$core.method({
selector: "listCssClassForItem:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv(self._selectedItem()).__eq(anObject);
if($core.assert($2)){
$1=self._activeItemCssClass();
} else {
$1="inactive";
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"listCssClassForItem:",{anObject:anObject},$globals.HLListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "listCssClassForItem: anObject\x0a\x09^ self selectedItem = anObject\x0a\x09\x09ifTrue: [ self activeItemCssClass ]\x0a\x09\x09ifFalse: [ 'inactive' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "=", "selectedItem", "activeItemCssClass"]
}),
$globals.HLListWidget);

$core.addMethod(
$core.method({
selector: "positionOf:",
protocol: 'accessing',
fn: function (aListItem){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");

    	return aListItem.parent().children().get().indexOf(aListItem.get(0)) + 1
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"positionOf:",{aListItem:aListItem},$globals.HLListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aListItem"],
source: "positionOf: aListItem\x0a\x09<\x0a    \x09return aListItem.parent().children().get().indexOf(aListItem.get(0)) + 1\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLListWidget);

$core.addMethod(
$core.method({
selector: "reactivateListItem:",
protocol: 'actions',
fn: function (aListItem){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._activateListItem_(aListItem);
self._reselectItem_(self._selectedItem());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reactivateListItem:",{aListItem:aListItem},$globals.HLListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aListItem"],
source: "reactivateListItem: aListItem\x0a\x09self activateListItem: aListItem.\x0a\x09self reselectItem: self selectedItem",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["activateListItem:", "reselectItem:", "selectedItem"]
}),
$globals.HLListWidget);

$core.addMethod(
$core.method({
selector: "refresh",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$receiver;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.HLListWidget.superclass.fn.prototype._refresh.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=self._selectedItem();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selectedItem"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
self._ensureVisible_(self._findListItemFor_(self._selectedItem()));
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"refresh",{},$globals.HLListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "refresh\x0a\x09super refresh.\x0a\x09self selectedItem ifNotNil: [self ensureVisible: (self findListItemFor: self selectedItem)].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["refresh", "ifNotNil:", "selectedItem", "ensureVisible:", "findListItemFor:"]
}),
$globals.HLListWidget);

$core.addMethod(
$core.method({
selector: "renderButtonsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderButtonsOn: html",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLListWidget);

$core.addMethod(
$core.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
$1=$recv(html)._ul();
$recv($1)._class_(self._listCssClass());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._renderListOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._focus();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$3=$recv(html)._div();
$recv($3)._class_(self._buttonsDivCssClass());
$4=$recv($3)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._renderButtonsOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
self._setupKeyBindings();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},$globals.HLListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderContentOn: html\x0a\x09html ul \x0a    \x09class: self listCssClass;\x0a        with: [ self renderListOn: html ];\x0a\x09\x09onClick: [ self focus ].\x0a    html div class: self buttonsDivCssClass; with: [\x0a      \x09self renderButtonsOn: html ].\x0a        \x0a   self setupKeyBindings",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "ul", "listCssClass", "with:", "renderListOn:", "onClick:", "focus", "div", "buttonsDivCssClass", "renderButtonsOn:", "setupKeyBindings"]
}),
$globals.HLListWidget);

$core.addMethod(
$core.method({
selector: "renderItem:on:",
protocol: 'rendering',
fn: function (anObject,html){
var self=this;
var li;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$4,$5,$3;
li=$recv(html)._li();
$1=$recv(li)._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($1)._data_put_("item",anObject);
$2=li;
$recv($2)._class_(self._listCssClassForItem_(anObject));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$3=$recv($2)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=$recv(html)._a();
$recv($4)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv($recv(html)._tag_("i"))._class_(self._cssClassForItem_(anObject));
return self._renderItemLabel_on_(anObject,html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
$5=$recv($4)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._reactivateListItem_($recv(li)._asJQuery());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
return $5;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderItem:on:",{anObject:anObject,html:html,li:li},$globals.HLListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "html"],
source: "renderItem: anObject on: html\x0a\x09| li |\x0a    \x0a\x09li := html li.\x0a\x09li asJQuery data: 'item' put: anObject.\x0a    li\x0a\x09\x09class: (self listCssClassForItem: anObject);\x0a        with: [ \x0a        \x09html a\x0a            \x09with: [ \x0a            \x09\x09(html tag: 'i') class: (self cssClassForItem: anObject).\x0a  \x09\x09\x09\x09\x09self renderItemLabel: anObject on: html ];\x0a\x09\x09\x09\x09onClick: [\x0a                  \x09self reactivateListItem: li asJQuery ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["li", "data:put:", "asJQuery", "class:", "listCssClassForItem:", "with:", "a", "tag:", "cssClassForItem:", "renderItemLabel:on:", "onClick:", "reactivateListItem:"]
}),
$globals.HLListWidget);

$core.addMethod(
$core.method({
selector: "renderItemLabel:on:",
protocol: 'rendering',
fn: function (anObject,html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(html)._with_($recv(anObject)._asString());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderItemLabel:on:",{anObject:anObject,html:html},$globals.HLListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "html"],
source: "renderItemLabel: anObject on: html\x0a\x09html with: anObject asString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "asString"]
}),
$globals.HLListWidget);

$core.addMethod(
$core.method({
selector: "renderListOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._items())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._renderItem_on_(each,html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderListOn:",{html:html},$globals.HLListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderListOn: html\x0a\x09self items do: [ :each  | \x0a    \x09self renderItem: each  on: html ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "items", "renderItem:on:"]
}),
$globals.HLListWidget);

$core.addMethod(
$core.method({
selector: "reselectItem:",
protocol: 'actions',
fn: function (anObject){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "reselectItem: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLListWidget);

$core.addMethod(
$core.method({
selector: "selectItem:",
protocol: 'actions',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._selectedItem_(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectItem:",{anObject:anObject},$globals.HLListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "selectItem: anObject\x0a\x09self selectedItem: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selectedItem:"]
}),
$globals.HLListWidget);

$core.addMethod(
$core.method({
selector: "selectedItem",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@selectedItem"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selectedItem\x0a\x09^ selectedItem",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLListWidget);

$core.addMethod(
$core.method({
selector: "selectedItem:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@selectedItem"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "selectedItem: anObject\x0a\x09selectedItem := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLListWidget);

$core.addMethod(
$core.method({
selector: "setupKeyBindings",
protocol: 'events',
fn: function (){
var self=this;
function $HLRepeatedKeyDownHandler(){return $globals.HLRepeatedKeyDownHandler||(typeof HLRepeatedKeyDownHandler=="undefined"?nil:HLRepeatedKeyDownHandler)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3;
$1=$recv($HLRepeatedKeyDownHandler())._on_(self);
$recv($1)._whileKeyDown_do_((38),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._activatePreviousListItem();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["whileKeyDown:do:"]=1;
//>>excludeEnd("ctx");
$recv($1)._whileKeyDown_do_((40),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._activateNextListItem();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$2=$recv($1)._rebindKeys();
$recv($recv(self._wrapper())._asJQuery())._keydown_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv($recv(e)._which()).__eq((13));
if($core.assert($3)){
return self._reselectItem_(self._selectedItem());
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupKeyBindings",{},$globals.HLListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupKeyBindings \x0a\x09(HLRepeatedKeyDownHandler on: self)\x0a\x09\x09whileKeyDown: 38 do: [ self activatePreviousListItem ];\x0a\x09\x09whileKeyDown: 40 do: [ self activateNextListItem ];\x0a\x09\x09rebindKeys.\x0a\x09\x09\x0a\x09self wrapper asJQuery keydown: [ :e |\x0a        e which = 13 ifTrue: [ \x0a        \x09self reselectItem: self selectedItem ] ]",
referencedClasses: ["HLRepeatedKeyDownHandler"],
//>>excludeEnd("ide");
messageSends: ["whileKeyDown:do:", "on:", "activatePreviousListItem", "activateNextListItem", "rebindKeys", "keydown:", "asJQuery", "wrapper", "ifTrue:", "=", "which", "reselectItem:", "selectedItem"]
}),
$globals.HLListWidget);



$core.addClass('HLNavigationListWidget', $globals.HLListWidget, ['previous', 'next'], 'Helios-Core');
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
$globals.HLNavigationListWidget);

$core.addMethod(
$core.method({
selector: "next:",
protocol: 'accessing',
fn: function (aWidget){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self["@next"]=aWidget;
$1=$recv($recv(aWidget)._previous()).__eq(self);
if(!$core.assert($1)){
$recv(aWidget)._previous_(self);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"next:",{aWidget:aWidget},$globals.HLNavigationListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aWidget"],
source: "next: aWidget\x0a\x09next := aWidget.\x0a    aWidget previous = self ifFalse: [ aWidget previous: self ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "=", "previous", "previous:"]
}),
$globals.HLNavigationListWidget);

$core.addMethod(
$core.method({
selector: "nextFocus",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["next"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$recv(self._next())._focus();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextFocus",{},$globals.HLNavigationListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nextFocus\x0a\x09self next ifNotNil: [ self next focus ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "next", "focus"]
}),
$globals.HLNavigationListWidget);

$core.addMethod(
$core.method({
selector: "previous",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@previous"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "previous\x0a\x09^ previous",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLNavigationListWidget);

$core.addMethod(
$core.method({
selector: "previous:",
protocol: 'accessing',
fn: function (aWidget){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self["@previous"]=aWidget;
$1=$recv($recv(aWidget)._next()).__eq(self);
if(!$core.assert($1)){
$recv(aWidget)._next_(self);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"previous:",{aWidget:aWidget},$globals.HLNavigationListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aWidget"],
source: "previous: aWidget\x0a\x09previous := aWidget.\x0a    aWidget next = self ifFalse: [ aWidget next: self ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "=", "next", "next:"]
}),
$globals.HLNavigationListWidget);

$core.addMethod(
$core.method({
selector: "previousFocus",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self._previous();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["previous"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$recv(self._previous())._focus();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"previousFocus",{},$globals.HLNavigationListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "previousFocus\x0a\x09self previous ifNotNil: [ self previous focus ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "previous", "focus"]
}),
$globals.HLNavigationListWidget);

$core.addMethod(
$core.method({
selector: "setupKeyBindings",
protocol: 'events',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$3;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.HLNavigationListWidget.superclass.fn.prototype._setupKeyBindings.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv($recv(self._wrapper())._asJQuery())._keydown_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(e)._which();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["which"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq((39));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
self._nextFocus();
};
$3=$recv($recv(e)._which()).__eq((37));
if($core.assert($3)){
return self._previousFocus();
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupKeyBindings",{},$globals.HLNavigationListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupKeyBindings\x0a\x09super setupKeyBindings.\x0a\x0a\x09self wrapper asJQuery keydown: [ :e |\x0a        e which = 39 ifTrue: [ \x0a        \x09self nextFocus ].\x0a\x09\x09e which = 37 ifTrue: [ \x0a        \x09self previousFocus ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setupKeyBindings", "keydown:", "asJQuery", "wrapper", "ifTrue:", "=", "which", "nextFocus", "previousFocus"]
}),
$globals.HLNavigationListWidget);



$core.addClass('HLToolListWidget', $globals.HLNavigationListWidget, ['model'], 'Helios-Core');
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
$globals.HLToolListWidget.superclass.fn.prototype._activateListItem_.apply($recv(self), [anItem]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.supercall = false;
//>>excludeEnd("ctx");;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"activateListItem:",{anItem:anItem},$globals.HLToolListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anItem"],
source: "activateListItem: anItem\x0a\x09self model withChangesDo: [ super activateListItem: anItem ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["withChangesDo:", "model", "activateListItem:"]
}),
$globals.HLToolListWidget);

$core.addMethod(
$core.method({
selector: "activateNextListItem",
protocol: 'actions',
fn: function (){
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
$globals.HLToolListWidget.superclass.fn.prototype._activateNextListItem.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.supercall = false;
//>>excludeEnd("ctx");;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"activateNextListItem",{},$globals.HLToolListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "activateNextListItem\x0a\x09self model withChangesDo: [ super activateNextListItem ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["withChangesDo:", "model", "activateNextListItem"]
}),
$globals.HLToolListWidget);

$core.addMethod(
$core.method({
selector: "activatePreviousListItem",
protocol: 'actions',
fn: function (){
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
$globals.HLToolListWidget.superclass.fn.prototype._activatePreviousListItem.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.supercall = false;
//>>excludeEnd("ctx");;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"activatePreviousListItem",{},$globals.HLToolListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "activatePreviousListItem\x0a\x09self model withChangesDo: [ super activatePreviousListItem ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["withChangesDo:", "model", "activatePreviousListItem"]
}),
$globals.HLToolListWidget);

$core.addMethod(
$core.method({
selector: "commandCategory",
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
}, function($ctx1) {$ctx1.fill(self,"commandCategory",{},$globals.HLToolListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "commandCategory\x0a\x09^ self label",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["label"]
}),
$globals.HLToolListWidget);

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
$globals.HLToolListWidget);

$core.addMethod(
$core.method({
selector: "menuCommands",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLToolCommand(){return $globals.HLToolCommand||(typeof HLToolCommand=="undefined"?nil:HLToolCommand)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$1=$recv($recv($recv($recv($HLToolCommand())._concreteClasses())._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=self._model();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["model"]=1;
//>>excludeEnd("ctx");
return $recv(each)._isValidFor_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
})))._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._for_(self._model());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
})))._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($recv(each)._category()).__eq(self._commandCategory()))._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(each)._isAction())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv(each)._isActive();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["and:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["select:"]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"menuCommands",{},$globals.HLToolListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "menuCommands\x0a\x09\x22Answer a collection of commands to be put in the cog menu\x22\x0a\x09\x0a\x09^ ((HLToolCommand concreteClasses\x0a\x09\x09select: [ :each | each isValidFor: self model ])\x0a\x09\x09\x09collect: [ :each | each for: self model ])\x0a\x09\x09\x09select: [ :each | \x0a\x09\x09\x09\x09each category = self commandCategory and: [ \x0a\x09\x09\x09\x09\x09each isAction and: [ each isActive ] ] ]",
referencedClasses: ["HLToolCommand"],
//>>excludeEnd("ide");
messageSends: ["select:", "collect:", "concreteClasses", "isValidFor:", "model", "for:", "and:", "=", "category", "commandCategory", "isAction", "isActive"]
}),
$globals.HLToolListWidget);

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
$globals.HLToolListWidget);

$core.addMethod(
$core.method({
selector: "model:",
protocol: 'accessing',
fn: function (aBrowserModel){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self["@model"]=aBrowserModel;
self._observeSystem();
$1=self._observeModel();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"model:",{aBrowserModel:aBrowserModel},$globals.HLToolListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBrowserModel"],
source: "model: aBrowserModel\x0a\x09model := aBrowserModel.\x0a    \x0a    self \x0a\x09\x09observeSystem;\x0a\x09\x09observeModel",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["observeSystem", "observeModel"]
}),
$globals.HLToolListWidget);

$core.addMethod(
$core.method({
selector: "observeModel",
protocol: 'actions',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeModel",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLToolListWidget);

$core.addMethod(
$core.method({
selector: "observeSystem",
protocol: 'actions',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeSystem",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLToolListWidget);

$core.addMethod(
$core.method({
selector: "reactivateListItem:",
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
$globals.HLToolListWidget.superclass.fn.prototype._reactivateListItem_.apply($recv(self), [anItem]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.supercall = false;
//>>excludeEnd("ctx");;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reactivateListItem:",{anItem:anItem},$globals.HLToolListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anItem"],
source: "reactivateListItem: anItem\x0a\x09self model withChangesDo: [ super reactivateListItem: anItem ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["withChangesDo:", "model", "reactivateListItem:"]
}),
$globals.HLToolListWidget);

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
$globals.HLToolListWidget.superclass.fn.prototype._renderContentOn_.apply($recv(self), [html]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},$globals.HLToolListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderContentOn: html\x0a\x09self renderHeadOn: html.\x09\x0a\x09super renderContentOn: html",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["renderHeadOn:", "renderContentOn:"]
}),
$globals.HLToolListWidget);

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
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(html)._with_(self._label());
return self._renderMenuOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderHeadOn:",{html:html},$globals.HLToolListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderHeadOn: html\x0a\x09html div \x0a\x09\x09class: 'list-label';\x0a\x09\x09with: [\x0a\x09\x09\x09html with: self label.\x0a\x09\x09\x09self renderMenuOn: html ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "label", "renderMenuOn:"]
}),
$globals.HLToolListWidget);

$core.addMethod(
$core.method({
selector: "renderMenuOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var commands;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$4,$5,$6,$8,$9,$7,$3;
commands=self._menuCommands();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["menuCommands"]=1;
//>>excludeEnd("ctx");
$1=$recv(commands)._isEmpty();
if($core.assert($1)){
return self;
};
$2=$recv(html)._div();
$recv($2)._class_("btn-group cog");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$3=$recv($2)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=$recv(html)._a();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["a"]=1;
//>>excludeEnd("ctx");
$recv($4)._class_("btn dropdown-toggle");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=2;
//>>excludeEnd("ctx");
$recv($4)._at_put_("data-toggle","dropdown");
$5=$recv($4)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(html)._tag_("i"))._class_("icon-chevron-down");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["class:"]=3;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$5;
$6=$recv(html)._ul();
$recv($6)._class_("dropdown-menu pull-right");
$7=$recv($6)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(self._menuCommands())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv($recv(html)._li())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx5) {
//>>excludeEnd("ctx");
$8=$recv(html)._a();
$recv($8)._with_($recv(each)._menuLabel());
$9=$recv($8)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx6) {
//>>excludeEnd("ctx");
return self._execute_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx6) {$ctx6.fillBlock({},$ctx5,7)});
//>>excludeEnd("ctx");
}));
return $9;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,6)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({each:each},$ctx3,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
return $7;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderMenuOn:",{html:html,commands:commands},$globals.HLToolListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderMenuOn: html\x0a\x09| commands |\x0a\x09\x0a\x09commands := self menuCommands.\x0a\x09commands isEmpty ifTrue: [ ^ self ].\x0a\x09\x0a\x09html div \x0a\x09\x09class: 'btn-group cog';\x0a\x09\x09with: [\x0a\x09\x09\x09html a\x0a\x09\x09\x09\x09class: 'btn dropdown-toggle';\x0a\x09\x09\x09\x09at: 'data-toggle' put: 'dropdown';\x0a\x09\x09\x09\x09with: [ (html tag: 'i') class: 'icon-chevron-down' ].\x0a\x09\x09html ul \x0a\x09\x09\x09class: 'dropdown-menu pull-right';\x0a\x09\x09\x09with: [ \x0a\x09\x09\x09\x09self menuCommands do: [ :each | \x0a\x09\x09\x09\x09\x09html li with: [ html a \x0a\x09\x09\x09\x09\x09\x09with: each menuLabel;\x0a\x09\x09\x09\x09\x09\x09onClick: [ self execute: each ] ] ] ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["menuCommands", "ifTrue:", "isEmpty", "class:", "div", "with:", "a", "at:put:", "tag:", "ul", "do:", "li", "menuLabel", "onClick:", "execute:"]
}),
$globals.HLToolListWidget);

$core.addMethod(
$core.method({
selector: "selectedItem:",
protocol: 'accessing',
fn: function (anItem){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.HLToolListWidget.superclass.fn.prototype._selectedItem_.apply($recv(self), [anItem]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._updateMenu();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectedItem:",{anItem:anItem},$globals.HLToolListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anItem"],
source: "selectedItem: anItem\x0a\x09\x22Selection changed, update the cog menu\x22\x0a\x09\x0a\x09super selectedItem: anItem.\x0a\x09self updateMenu",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selectedItem:", "updateMenu"]
}),
$globals.HLToolListWidget);

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
$globals.HLToolListWidget.superclass.fn.prototype._unregister.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$2=self._model();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["model"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._announcer();
$recv($1)._unsubscribe_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["unsubscribe:"]=1;
//>>excludeEnd("ctx");
$recv($recv(self._model())._systemAnnouncer())._unsubscribe_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"unregister",{},$globals.HLToolListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "unregister\x0a\x09super unregister.\x0a\x09\x0a\x09self model announcer unsubscribe: self.\x0a\x09self model systemAnnouncer unsubscribe: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["unregister", "unsubscribe:", "announcer", "model", "systemAnnouncer"]
}),
$globals.HLToolListWidget);

$core.addMethod(
$core.method({
selector: "updateMenu",
protocol: 'updating',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$1;
$3=self._wrapper();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["wrapper"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._find_(".cog");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["find:"]=1;
//>>excludeEnd("ctx");
$recv($1)._remove();
$recv((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._renderMenuOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}))._appendToJQuery_($recv($recv(self._wrapper())._asJQuery())._find_(".list-label"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateMenu",{},$globals.HLToolListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateMenu\x0a\x09(self wrapper asJQuery find: '.cog') remove.\x0a\x09\x0a\x09[ :html | self renderMenuOn: html ] \x0a\x09\x09appendToJQuery: (self wrapper asJQuery find: '.list-label')",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove", "find:", "asJQuery", "wrapper", "appendToJQuery:", "renderMenuOn:"]
}),
$globals.HLToolListWidget);


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
}, function($ctx1) {$ctx1.fill(self,"on:",{aModel:aModel},$globals.HLToolListWidget.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aModel"],
source: "on: aModel\x0a\x09^ self new \x0a    \x09model: aModel;\x0a        yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["model:", "new", "yourself"]
}),
$globals.HLToolListWidget.klass);


$core.addClass('HLTabListWidget', $globals.HLListWidget, ['callback'], 'Helios-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLTabListWidget.comment="I am a widget used to display a list of helios tabs.\x0a\x0aWhen a tab is selected, `callback` is evaluated with the selected tab as argument.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "callback",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@callback"];
if(($receiver = $2) == null || $receiver.isNil){
$1=(function(){

});
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"callback",{},$globals.HLTabListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "callback\x0a\x09^ callback ifNil: [ [] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.HLTabListWidget);

$core.addMethod(
$core.method({
selector: "callback:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@callback"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "callback: aBlock\x0a\x09callback := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLTabListWidget);

$core.addMethod(
$core.method({
selector: "renderItemLabel:on:",
protocol: 'rendering',
fn: function (aTab,html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._span();
$recv($1)._class_($recv(aTab)._cssClass());
$2=$recv($1)._with_($recv(aTab)._label());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderItemLabel:on:",{aTab:aTab,html:html},$globals.HLTabListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTab", "html"],
source: "renderItemLabel: aTab on: html\x0a\x09html span\x0a\x09\x09class: aTab cssClass;\x0a\x09\x09with: aTab label",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "span", "cssClass", "with:", "label"]
}),
$globals.HLTabListWidget);

$core.addMethod(
$core.method({
selector: "selectItem:",
protocol: 'actions',
fn: function (aTab){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.HLTabListWidget.superclass.fn.prototype._selectItem_.apply($recv(self), [aTab]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(self._callback())._value_(aTab);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectItem:",{aTab:aTab},$globals.HLTabListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTab"],
source: "selectItem: aTab\x0a\x09super selectItem: aTab.\x0a\x09self callback value: aTab",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selectItem:", "value:", "callback"]
}),
$globals.HLTabListWidget);



$core.addClass('HLInformationWidget', $globals.HLWidget, ['informationString'], 'Helios-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLInformationWidget.comment="I display an information dialog.\x0a\x0a## API\x0a\x0a`HLWidget >> #inform:` is a convenience method for creating information dialogs.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "informationString",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@informationString"];
if(($receiver = $2) == null || $receiver.isNil){
$1="";
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"informationString",{},$globals.HLInformationWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "informationString\x0a\x09^ informationString ifNil: [ '' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.HLInformationWidget);

$core.addMethod(
$core.method({
selector: "informationString:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@informationString"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "informationString: anObject\x0a\x09informationString := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLInformationWidget);

$core.addMethod(
$core.method({
selector: "remove",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=self._wrapper();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["wrapper"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($1)._fadeOut_((100));
return $recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(self._wrapper())._asJQuery())._remove();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}))._valueWithTimeout_((400));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._valueWithTimeout_((1500));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["valueWithTimeout:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"remove",{},$globals.HLInformationWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "remove\x0a\x09[ \x0a\x09\x09self wrapper asJQuery fadeOut: 100.\x0a\x09\x09[ self wrapper asJQuery remove ]\x0a\x09\x09\x09valueWithTimeout: 400.\x0a\x09]\x0a\x09\x09valueWithTimeout: 1500",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["valueWithTimeout:", "fadeOut:", "asJQuery", "wrapper", "remove"]
}),
$globals.HLInformationWidget);

$core.addMethod(
$core.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._div();
$recv($1)._class_("growl");
$2=$recv($1)._with_(self._informationString());
self._remove();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},$globals.HLInformationWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderContentOn: html\x0a\x09html div \x0a\x09\x09class: 'growl'; \x0a\x09\x09with: self informationString.\x0a\x09\x09\x0a\x09self remove",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "informationString", "remove"]
}),
$globals.HLInformationWidget);

$core.addMethod(
$core.method({
selector: "show",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._appendToJQuery_("body"._asJQuery());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"show",{},$globals.HLInformationWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "show\x0a\x09self appendToJQuery: 'body' asJQuery",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["appendToJQuery:", "asJQuery"]
}),
$globals.HLInformationWidget);



$core.addClass('HLManager', $globals.HLWidget, ['tabsWidget', 'environment', 'history', 'announcer'], 'Helios-Core');
$core.addMethod(
$core.method({
selector: "activate:",
protocol: 'actions',
fn: function (aTab){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._tabsWidget())._activate_(aTab);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"activate:",{aTab:aTab},$globals.HLManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTab"],
source: "activate: aTab\x0a\x09self tabsWidget activate: aTab",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["activate:", "tabsWidget"]
}),
$globals.HLManager);

$core.addMethod(
$core.method({
selector: "activeTab",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._tabsWidget())._activeTab();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"activeTab",{},$globals.HLManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "activeTab\x0a\x09^ self tabsWidget activeTab",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["activeTab", "tabsWidget"]
}),
$globals.HLManager);

$core.addMethod(
$core.method({
selector: "addTab:",
protocol: 'actions',
fn: function (aTab){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._tabsWidget())._addTab_(aTab);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addTab:",{aTab:aTab},$globals.HLManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTab"],
source: "addTab: aTab\x0a\x09self tabsWidget addTab: aTab",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["addTab:", "tabsWidget"]
}),
$globals.HLManager);

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
}, function($ctx1) {$ctx1.fill(self,"announcer",{},$globals.HLManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "announcer\x0a\x09^ announcer ifNil: [ announcer := Announcer new ]",
referencedClasses: ["Announcer"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.HLManager);

$core.addMethod(
$core.method({
selector: "confirm:ifFalse:",
protocol: 'actions',
fn: function (aString,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._confirm_ifTrue_ifFalse_(aString,(function(){

}),aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"confirm:ifFalse:",{aString:aString,aBlock:aBlock},$globals.HLManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aBlock"],
source: "confirm: aString ifFalse: aBlock\x0a\x09self \x0a\x09\x09confirm: aString\x0a\x09\x09ifTrue: []\x0a\x09\x09ifFalse: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["confirm:ifTrue:ifFalse:"]
}),
$globals.HLManager);

$core.addMethod(
$core.method({
selector: "confirm:ifTrue:",
protocol: 'actions',
fn: function (aString,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._confirm_ifTrue_ifFalse_(aString,aBlock,(function(){

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"confirm:ifTrue:",{aString:aString,aBlock:aBlock},$globals.HLManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aBlock"],
source: "confirm: aString ifTrue: aBlock\x0a\x09self \x0a\x09\x09confirm: aString\x0a\x09\x09ifTrue: aBlock\x0a\x09\x09ifFalse: []",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["confirm:ifTrue:ifFalse:"]
}),
$globals.HLManager);

$core.addMethod(
$core.method({
selector: "confirm:ifTrue:ifFalse:",
protocol: 'actions',
fn: function (aString,aBlock,anotherBlock){
var self=this;
function $HLConfirmationWidget(){return $globals.HLConfirmationWidget||(typeof HLConfirmationWidget=="undefined"?nil:HLConfirmationWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($HLConfirmationWidget())._new();
$recv($1)._confirmationString_(aString);
$recv($1)._actionBlock_(aBlock);
$recv($1)._cancelBlock_(anotherBlock);
$2=$recv($1)._show();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"confirm:ifTrue:ifFalse:",{aString:aString,aBlock:aBlock,anotherBlock:anotherBlock},$globals.HLManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aBlock", "anotherBlock"],
source: "confirm: aString ifTrue: aBlock ifFalse: anotherBlock\x0a\x09HLConfirmationWidget new\x0a\x09\x09confirmationString: aString;\x0a\x09\x09actionBlock: aBlock;\x0a\x09\x09cancelBlock: anotherBlock;\x0a\x09\x09show",
referencedClasses: ["HLConfirmationWidget"],
//>>excludeEnd("ide");
messageSends: ["confirmationString:", "new", "actionBlock:", "cancelBlock:", "show"]
}),
$globals.HLManager);

$core.addMethod(
$core.method({
selector: "defaultEnvironment",
protocol: 'defaults',
fn: function (){
var self=this;
var parent,parentSmalltalkGlobals;
function $Environment(){return $globals.Environment||(typeof Environment=="undefined"?nil:Environment)}
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$5,$4,$6,$7,$8,$9,$receiver;
$1=$recv(window)._opener();
if(($receiver = $1) == null || $receiver.isNil){
parent=$recv(window)._parent();
} else {
parent=$1;
};
$2=parent;
if(($receiver = $2) == null || $receiver.isNil){
$3=$recv($Environment())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
return $3;
} else {
$2;
};
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$5=$recv(parent)._at_("requirejs");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
$4=$recv($5)._value_("amber/boot");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["value:"]=1;
//>>excludeEnd("ctx");
parentSmalltalkGlobals=$recv($4)._at_("globals");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
return parentSmalltalkGlobals;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}))._on_do_($Error(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$6=$recv(parent)._at_("requirejs");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=3;
//>>excludeEnd("ctx");
parentSmalltalkGlobals=$recv($6)._value_("amber_vm/globals");
return parentSmalltalkGlobals;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
}));
$7=parentSmalltalkGlobals;
if(($receiver = $7) == null || $receiver.isNil){
$8=$recv($Environment())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
return $8;
} else {
$7;
};
$9=$recv($recv(parentSmalltalkGlobals)._at_("Environment"))._new();
return $9;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultEnvironment",{parent:parent,parentSmalltalkGlobals:parentSmalltalkGlobals},$globals.HLManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultEnvironment\x0a\x09\x22If helios is loaded from within a frame, answer the parent window environment\x22\x0a\x09\x0a\x09| parent parentSmalltalkGlobals |\x0a\x09\x0a\x09parent := window opener ifNil: [ window parent ].\x0a\x09parent ifNil: [ ^ Environment new ].\x0a\x09\x0a\x09[ parentSmalltalkGlobals := ((parent at: 'requirejs') value: 'amber/boot') at: 'globals' ]\x0a\x09on: Error do: [ parentSmalltalkGlobals := (parent at: 'requirejs') value: 'amber_vm/globals' ].\x0a\x09parentSmalltalkGlobals ifNil: [ ^ Environment new ].\x0a\x09\x0a\x09^ (parentSmalltalkGlobals at: 'Environment') new",
referencedClasses: ["Environment", "Error"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "opener", "parent", "new", "on:do:", "at:", "value:"]
}),
$globals.HLManager);

$core.addMethod(
$core.method({
selector: "environment",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@environment"];
if(($receiver = $2) == null || $receiver.isNil){
self["@environment"]=self._defaultEnvironment();
$1=self["@environment"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"environment",{},$globals.HLManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "environment\x0a\x09\x22The default environment used by all Helios objects\x22\x0a    \x0a\x09^ environment ifNil: [ environment := self defaultEnvironment ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "defaultEnvironment"]
}),
$globals.HLManager);

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
$globals.HLManager);

$core.addMethod(
$core.method({
selector: "history",
protocol: 'accessing',
fn: function (){
var self=this;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@history"];
if(($receiver = $2) == null || $receiver.isNil){
self["@history"]=$recv($OrderedCollection())._new();
$1=self["@history"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"history",{},$globals.HLManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "history\x0a\x09^ history ifNil: [ history := OrderedCollection new ]",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.HLManager);

$core.addMethod(
$core.method({
selector: "history:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
self["@history"]=aCollection;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "history: aCollection\x0a\x09history := aCollection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLManager);

$core.addMethod(
$core.method({
selector: "inform:",
protocol: 'actions',
fn: function (aString){
var self=this;
function $HLInformationWidget(){return $globals.HLInformationWidget||(typeof HLInformationWidget=="undefined"?nil:HLInformationWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($HLInformationWidget())._new();
$recv($1)._informationString_(aString);
$2=$recv($1)._show();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inform:",{aString:aString},$globals.HLManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "inform: aString\x0a\x09HLInformationWidget new\x0a\x09\x09informationString: aString;\x0a\x09\x09show",
referencedClasses: ["HLInformationWidget"],
//>>excludeEnd("ide");
messageSends: ["informationString:", "new", "show"]
}),
$globals.HLManager);

$core.addMethod(
$core.method({
selector: "keyBinder",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLKeyBinder(){return $globals.HLKeyBinder||(typeof HLKeyBinder=="undefined"?nil:HLKeyBinder)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($HLKeyBinder())._current();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"keyBinder",{},$globals.HLManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "keyBinder\x0a\x09^ HLKeyBinder current",
referencedClasses: ["HLKeyBinder"],
//>>excludeEnd("ide");
messageSends: ["current"]
}),
$globals.HLManager);

$core.addMethod(
$core.method({
selector: "registerErrorHandler",
protocol: 'services',
fn: function (){
var self=this;
function $HLErrorHandler(){return $globals.HLErrorHandler||(typeof HLErrorHandler=="undefined"?nil:HLErrorHandler)}
function $ErrorHandler(){return $globals.ErrorHandler||(typeof ErrorHandler=="undefined"?nil:ErrorHandler)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=self._environment();
$2=$recv($HLErrorHandler())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($1)._registerErrorHandler_($2);
$recv($ErrorHandler())._register_($recv($HLErrorHandler())._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"registerErrorHandler",{},$globals.HLManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "registerErrorHandler\x0a\x09self environment registerErrorHandler: HLErrorHandler new.\x0a\x09ErrorHandler register: HLErrorHandler new",
referencedClasses: ["HLErrorHandler", "ErrorHandler"],
//>>excludeEnd("ide");
messageSends: ["registerErrorHandler:", "environment", "new", "register:"]
}),
$globals.HLManager);

$core.addMethod(
$core.method({
selector: "registerFinder",
protocol: 'services',
fn: function (){
var self=this;
function $HLFinder(){return $globals.HLFinder||(typeof HLFinder=="undefined"?nil:HLFinder)}
function $Finder(){return $globals.Finder||(typeof Finder=="undefined"?nil:Finder)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=self._environment();
$2=$recv($HLFinder())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($1)._registerFinder_($2);
$recv($Finder())._register_($recv($HLFinder())._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"registerFinder",{},$globals.HLManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "registerFinder\x0a\x09self environment registerFinder: HLFinder new.\x0a\x09Finder register: HLFinder new",
referencedClasses: ["HLFinder", "Finder"],
//>>excludeEnd("ide");
messageSends: ["registerFinder:", "environment", "new", "register:"]
}),
$globals.HLManager);

$core.addMethod(
$core.method({
selector: "registerInspector",
protocol: 'services',
fn: function (){
var self=this;
function $HLInspector(){return $globals.HLInspector||(typeof HLInspector=="undefined"?nil:HLInspector)}
function $Inspector(){return $globals.Inspector||(typeof Inspector=="undefined"?nil:Inspector)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._environment())._registerInspector_($HLInspector());
$recv($Inspector())._register_($HLInspector());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"registerInspector",{},$globals.HLManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "registerInspector\x0a\x09self environment registerInspector: HLInspector.\x0a\x09Inspector register: HLInspector",
referencedClasses: ["HLInspector", "Inspector"],
//>>excludeEnd("ide");
messageSends: ["registerInspector:", "environment", "register:"]
}),
$globals.HLManager);

$core.addMethod(
$core.method({
selector: "registerProgressHandler",
protocol: 'services',
fn: function (){
var self=this;
function $HLProgressHandler(){return $globals.HLProgressHandler||(typeof HLProgressHandler=="undefined"?nil:HLProgressHandler)}
function $ProgressHandler(){return $globals.ProgressHandler||(typeof ProgressHandler=="undefined"?nil:ProgressHandler)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=self._environment();
$2=$recv($HLProgressHandler())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($1)._registerProgressHandler_($2);
$recv($ProgressHandler())._register_($recv($HLProgressHandler())._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"registerProgressHandler",{},$globals.HLManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "registerProgressHandler\x0a\x09self environment registerProgressHandler: HLProgressHandler new.\x0a\x09ProgressHandler register: HLProgressHandler new",
referencedClasses: ["HLProgressHandler", "ProgressHandler"],
//>>excludeEnd("ide");
messageSends: ["registerProgressHandler:", "environment", "new", "register:"]
}),
$globals.HLManager);

$core.addMethod(
$core.method({
selector: "registerServices",
protocol: 'private',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._registerInspector();
self._registerErrorHandler();
self._registerProgressHandler();
self._registerTranscript();
$1=self._registerFinder();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"registerServices",{},$globals.HLManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "registerServices\x0a\x09self\x0a\x09\x09registerInspector;\x0a\x09\x09registerErrorHandler;\x0a\x09\x09registerProgressHandler;\x0a\x09\x09registerTranscript;\x0a\x09\x09registerFinder",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["registerInspector", "registerErrorHandler", "registerProgressHandler", "registerTranscript", "registerFinder"]
}),
$globals.HLManager);

$core.addMethod(
$core.method({
selector: "registerTranscript",
protocol: 'services',
fn: function (){
var self=this;
function $HLTranscriptHandler(){return $globals.HLTranscriptHandler||(typeof HLTranscriptHandler=="undefined"?nil:HLTranscriptHandler)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._environment())._registerTranscript_($HLTranscriptHandler());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"registerTranscript",{},$globals.HLManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "registerTranscript\x0a\x09self environment registerTranscript: HLTranscriptHandler",
referencedClasses: ["HLTranscriptHandler"],
//>>excludeEnd("ide");
messageSends: ["registerTranscript:", "environment"]
}),
$globals.HLManager);

$core.addMethod(
$core.method({
selector: "removeActiveTab",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._tabsWidget())._removeActiveTab();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeActiveTab",{},$globals.HLManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeActiveTab\x0a\x09self tabsWidget removeActiveTab",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeActiveTab", "tabsWidget"]
}),
$globals.HLManager);

$core.addMethod(
$core.method({
selector: "removeTabForWidget:",
protocol: 'actions',
fn: function (aWidget){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._tabsWidget())._removeTabForWidget_(aWidget);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeTabForWidget:",{aWidget:aWidget},$globals.HLManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aWidget"],
source: "removeTabForWidget: aWidget\x0a\x09self tabsWidget removeTabForWidget: aWidget",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeTabForWidget:", "tabsWidget"]
}),
$globals.HLManager);

$core.addMethod(
$core.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $HLWelcomeWidget(){return $globals.HLWelcomeWidget||(typeof HLWelcomeWidget=="undefined"?nil:HLWelcomeWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(html)._with_(self._tabsWidget());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$recv(html)._with_($recv($HLWelcomeWidget())._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},$globals.HLManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderContentOn: html\x0a\x09html with: self tabsWidget.\x0a\x09html with: HLWelcomeWidget new",
referencedClasses: ["HLWelcomeWidget"],
//>>excludeEnd("ide");
messageSends: ["with:", "tabsWidget", "new"]
}),
$globals.HLManager);

$core.addMethod(
$core.method({
selector: "request:do:",
protocol: 'actions',
fn: function (aString,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._request_value_do_(aString,"",aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"request:do:",{aString:aString,aBlock:aBlock},$globals.HLManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aBlock"],
source: "request: aString do: aBlock\x0a\x09self \x0a\x09\x09request: aString\x0a\x09\x09value: ''\x0a\x09\x09do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["request:value:do:"]
}),
$globals.HLManager);

$core.addMethod(
$core.method({
selector: "request:value:do:",
protocol: 'actions',
fn: function (aString,valueString,aBlock){
var self=this;
function $HLRequestWidget(){return $globals.HLRequestWidget||(typeof HLRequestWidget=="undefined"?nil:HLRequestWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($HLRequestWidget())._new();
$recv($1)._confirmationString_(aString);
$recv($1)._actionBlock_(aBlock);
$recv($1)._value_(valueString);
$2=$recv($1)._show();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"request:value:do:",{aString:aString,valueString:valueString,aBlock:aBlock},$globals.HLManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "valueString", "aBlock"],
source: "request: aString value: valueString do: aBlock\x0a\x09HLRequestWidget new\x0a\x09\x09confirmationString: aString;\x0a\x09\x09actionBlock: aBlock;\x0a\x09\x09value: valueString;\x0a\x09\x09show",
referencedClasses: ["HLRequestWidget"],
//>>excludeEnd("ide");
messageSends: ["confirmationString:", "new", "actionBlock:", "value:", "show"]
}),
$globals.HLManager);

$core.addMethod(
$core.method({
selector: "setEditorTheme:",
protocol: 'accessing',
fn: function (aTheme){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv("helios.editorTheme"._asSetting())._value_(aTheme);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setEditorTheme:",{aTheme:aTheme},$globals.HLManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTheme"],
source: "setEditorTheme: aTheme\x0a\x0a\x09'helios.editorTheme' asSetting value: aTheme",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:", "asSetting"]
}),
$globals.HLManager);

$core.addMethod(
$core.method({
selector: "setTheme:",
protocol: 'accessing',
fn: function (aTheme){
var self=this;
var currentTheme;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
currentTheme="helios.theme"._asSettingIfAbsent_("default");
$1="body"._asJQuery();
$recv($1)._removeClass_($recv(currentTheme)._value());
$2=$recv($1)._addClass_(aTheme);
$recv("helios.theme"._asSetting())._value_(aTheme);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setTheme:",{aTheme:aTheme,currentTheme:currentTheme},$globals.HLManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTheme"],
source: "setTheme: aTheme\x0a\x09| currentTheme |\x0a\x0a\x09currentTheme := 'helios.theme' asSettingIfAbsent: 'default'.\x0a\x09\x0a\x09'body' asJQuery\x0a\x09\x09removeClass: currentTheme value;\x0a\x09\x09addClass: aTheme.\x0a\x09\x09\x0a\x09\x0a\x09'helios.theme' asSetting value: aTheme",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asSettingIfAbsent:", "removeClass:", "asJQuery", "value", "addClass:", "value:", "asSetting"]
}),
$globals.HLManager);

$core.addMethod(
$core.method({
selector: "setup",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._registerServices();
$1=self._setupEvents();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["setupEvents"]=1;
//>>excludeEnd("ctx");
$recv(self._keyBinder())._setupEvents();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["setupEvents"]=2;
//>>excludeEnd("ctx");
$recv(self._tabsWidget())._setupEvents();
self._setupTheme();
$recv("#helper"._asJQuery())._fadeOut();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setup",{},$globals.HLManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setup\x0a\x09self \x0a\x09\x09registerServices;\x0a\x09\x09setupEvents.\x0a    self keyBinder setupEvents.\x0a\x09self tabsWidget setupEvents.\x0a\x09self setupTheme.\x0a\x09\x0a\x09\x0a\x09'#helper' asJQuery fadeOut",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["registerServices", "setupEvents", "keyBinder", "tabsWidget", "setupTheme", "fadeOut", "asJQuery"]
}),
$globals.HLManager);

$core.addMethod(
$core.method({
selector: "setupEvents",
protocol: 'private',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5;
$1="body"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($1)._keydown_((function(event){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(event)._ctrlKey();
if($core.assert($2)){
$3="body"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asJQuery"]=2;
//>>excludeEnd("ctx");
return $recv($3)._addClass_("navigation");
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$4="body"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=3;
//>>excludeEnd("ctx");
$recv($4)._keyup_((function(event){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$5="body"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asJQuery"]=4;
//>>excludeEnd("ctx");
return $recv($5)._removeClass_("navigation");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$recv($recv(window)._asJQuery())._resize_((function(event){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._refresh();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,4)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupEvents",{},$globals.HLManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupEvents\x0a\x09'body' asJQuery keydown: [ :event |\x0a\x09\x09\x09\x0a\x09\x09\x22On ctrl keydown, adds a 'navigation' css class to <body>\x0a\x09\x09for the CodeMirror navigation links. See `HLCodeWidget`.\x22\x0a\x09\x09event ctrlKey ifTrue: [\x0a\x09\x09\x09'body' asJQuery addClass: 'navigation' ] ].\x0a\x09\x09\x09\x0a\x09'body' asJQuery keyup: [ :event |\x0a\x09\x09'body' asJQuery removeClass: 'navigation' ].\x0a\x09\x09\x0a\x09window asJQuery resize: [ :event |\x0a\x09\x09self refresh ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["keydown:", "asJQuery", "ifTrue:", "ctrlKey", "addClass:", "keyup:", "removeClass:", "resize:", "refresh"]
}),
$globals.HLManager);

$core.addMethod(
$core.method({
selector: "setupTheme",
protocol: 'private',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._setTheme_("default");
$1=self._setEditorTheme_("default");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupTheme",{},$globals.HLManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupTheme\x0a\x09\x22self \x0a\x09\x09setTheme: 'niflheim';\x0a\x09\x09setEditorTheme: 'niflheim'.\x22\x0a\x09\x09\x0a\x09self \x0a\x09\x09setTheme: 'default';\x0a\x09\x09setEditorTheme: 'default'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setTheme:", "setEditorTheme:"]
}),
$globals.HLManager);

$core.addMethod(
$core.method({
selector: "tabWidth",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($recv($recv(window)._asJQuery())._width()).__minus((90))).__slash($recv(self._tabs())._size());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tabWidth",{},$globals.HLManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tabWidth\x0a\x09^ (window asJQuery width - 90) / self tabs size",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["/", "-", "width", "asJQuery", "size", "tabs"]
}),
$globals.HLManager);

$core.addMethod(
$core.method({
selector: "tabs",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._tabsWidget())._tabs();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tabs",{},$globals.HLManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tabs\x0a\x09^ self tabsWidget tabs",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tabs", "tabsWidget"]
}),
$globals.HLManager);

$core.addMethod(
$core.method({
selector: "tabsWidget",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLTabsWidget(){return $globals.HLTabsWidget||(typeof HLTabsWidget=="undefined"?nil:HLTabsWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@tabsWidget"];
if(($receiver = $2) == null || $receiver.isNil){
self["@tabsWidget"]=$recv($HLTabsWidget())._new();
$1=self["@tabsWidget"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tabsWidget",{},$globals.HLManager)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tabsWidget\x0a\x09^ tabsWidget ifNil: [ tabsWidget := HLTabsWidget new ]",
referencedClasses: ["HLTabsWidget"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.HLManager);


$globals.HLManager.klass.iVarNames = ['current'];
$core.addMethod(
$core.method({
selector: "current",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@current"];
if(($receiver = $2) == null || $receiver.isNil){
self["@current"]=$recv(self._basicNew())._initialize();
$1=self["@current"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"current",{},$globals.HLManager.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "current\x0a\x09^ current ifNil: [ current := self basicNew initialize ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "initialize", "basicNew"]
}),
$globals.HLManager.klass);

$core.addMethod(
$core.method({
selector: "new",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._shouldNotImplement();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new",{},$globals.HLManager.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "new\x0a\x09\x22Use current instead\x22\x0a\x0a\x09self shouldNotImplement",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["shouldNotImplement"]
}),
$globals.HLManager.klass);

$core.addMethod(
$core.method({
selector: "setup",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=self._current();
$recv($1)._setup();
$2=$recv($1)._appendToJQuery_("body"._asJQuery());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setup",{},$globals.HLManager.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setup\x0a\x09self current \x0a\x09\x09setup;\x0a\x09\x09appendToJQuery: 'body' asJQuery",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setup", "current", "appendToJQuery:", "asJQuery"]
}),
$globals.HLManager.klass);


$core.addClass('HLModalWidget', $globals.HLWidget, [], 'Helios-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLModalWidget.comment="I implement an abstract modal widget.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "giveFocusToButton:",
protocol: 'private',
fn: function (aButton){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(aButton)._asJQuery())._focus();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"giveFocusToButton:",{aButton:aButton},$globals.HLModalWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aButton"],
source: "giveFocusToButton: aButton\x0a\x09aButton asJQuery focus",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["focus", "asJQuery"]
}),
$globals.HLModalWidget);

$core.addMethod(
$core.method({
selector: "hasButtons",
protocol: 'rendering',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hasButtons\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLModalWidget);

$core.addMethod(
$core.method({
selector: "remove",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=".dialog"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($1)._removeClass_("active");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2="#overlay"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asJQuery"]=2;
//>>excludeEnd("ctx");
$recv($2)._remove();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["remove"]=1;
//>>excludeEnd("ctx");
return $recv($recv(self["@wrapper"])._asJQuery())._remove();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._valueWithTimeout_((300));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"remove",{},$globals.HLModalWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "remove\x0a\x09'.dialog' asJQuery removeClass: 'active'.\x0a\x09[ \x0a\x09\x09'#overlay' asJQuery remove.\x0a\x09\x09wrapper asJQuery remove\x0a\x09] valueWithTimeout: 300",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeClass:", "asJQuery", "valueWithTimeout:", "remove"]
}),
$globals.HLModalWidget);

$core.addMethod(
$core.method({
selector: "renderButtonsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderButtonsOn: html",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLModalWidget);

$core.addMethod(
$core.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var confirmButton;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$4,$3;
$1=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["div"]=1;
//>>excludeEnd("ctx");
$recv($1)._id_("overlay");
$2=$recv(html)._div();
$recv($2)._class_("dialog ".__comma(self._cssClass()));
$3=$recv($2)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._renderMainOn_(html);
$4=self._hasButtons();
if($core.assert($4)){
return self._renderButtonsOn_(html);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(".dialog"._asJQuery())._addClass_("active");
self._setupKeyBindings();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html,confirmButton:confirmButton},$globals.HLModalWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderContentOn: html\x0a\x09| confirmButton |\x0a\x09\x0a\x09html div id: 'overlay'.\x0a\x09\x0a\x09html div \x0a\x09\x09class: 'dialog ', self cssClass;\x0a\x09\x09with: [\x0a\x09\x09\x09self renderMainOn: html.\x0a\x09\x09\x09self hasButtons ifTrue: [ \x0a\x09\x09\x09\x09self renderButtonsOn: html ] ].\x0a\x0a\x09'.dialog' asJQuery addClass: 'active'.\x0a\x09self setupKeyBindings",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["id:", "div", "class:", ",", "cssClass", "with:", "renderMainOn:", "ifTrue:", "hasButtons", "renderButtonsOn:", "addClass:", "asJQuery", "setupKeyBindings"]
}),
$globals.HLModalWidget);

$core.addMethod(
$core.method({
selector: "renderMainOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderMainOn: html",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLModalWidget);

$core.addMethod(
$core.method({
selector: "setupKeyBindings",
protocol: 'rendering',
fn: function (){
var self=this;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$recv(".dialog"._asJQuery())._keyup_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv($recv(e)._keyCode()).__eq($recv($recv($String())._esc())._asciiValue());
if($core.assert($1)){
return self._cancel();
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupKeyBindings",{},$globals.HLModalWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupKeyBindings\x0a\x09'.dialog' asJQuery keyup: [ :e |\x0a\x09\x09e keyCode = String esc asciiValue ifTrue: [ self cancel ] ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["keyup:", "asJQuery", "ifTrue:", "=", "keyCode", "asciiValue", "esc", "cancel"]
}),
$globals.HLModalWidget);

$core.addMethod(
$core.method({
selector: "show",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._appendToJQuery_("body"._asJQuery());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"show",{},$globals.HLModalWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "show\x0a\x09self appendToJQuery: 'body' asJQuery",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["appendToJQuery:", "asJQuery"]
}),
$globals.HLModalWidget);



$core.addClass('HLConfirmationWidget', $globals.HLModalWidget, ['cancelButtonLabel', 'confirmButtonLabel', 'confirmationString', 'actionBlock', 'cancelBlock'], 'Helios-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLConfirmationWidget.comment="I display confirmation dialog. \x0a\x0a## API\x0a\x0aHLWidget contains convenience methods like `HLWidget >> #confirm:ifTrue:` for creating confirmation dialogs.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "actionBlock",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@actionBlock"];
if(($receiver = $2) == null || $receiver.isNil){
$1=(function(){

});
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"actionBlock",{},$globals.HLConfirmationWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "actionBlock\x0a\x09^ actionBlock ifNil: [ [] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.HLConfirmationWidget);

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
$globals.HLConfirmationWidget);

$core.addMethod(
$core.method({
selector: "cancel",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._cancelBlock())._value();
self._remove();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cancel",{},$globals.HLConfirmationWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cancel\x0a\x09self cancelBlock value.\x0a\x09self remove",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value", "cancelBlock", "remove"]
}),
$globals.HLConfirmationWidget);

$core.addMethod(
$core.method({
selector: "cancelBlock",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@cancelBlock"];
if(($receiver = $2) == null || $receiver.isNil){
$1=(function(){

});
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cancelBlock",{},$globals.HLConfirmationWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cancelBlock\x0a\x09^ cancelBlock ifNil: [ [] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.HLConfirmationWidget);

$core.addMethod(
$core.method({
selector: "cancelBlock:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@cancelBlock"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "cancelBlock: aBlock\x0a\x09cancelBlock := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLConfirmationWidget);

$core.addMethod(
$core.method({
selector: "cancelButtonLabel",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@cancelButtonLabel"];
if(($receiver = $2) == null || $receiver.isNil){
$1="Cancel";
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cancelButtonLabel",{},$globals.HLConfirmationWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cancelButtonLabel\x0a\x09^ cancelButtonLabel ifNil: [ 'Cancel' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.HLConfirmationWidget);

$core.addMethod(
$core.method({
selector: "cancelButtonLabel:",
protocol: 'accessing',
fn: function (aString){
var self=this;
var $1;
self["@cancelButtonLabel"]=aString;
$1=self["@cancelButtonLabel"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "cancelButtonLabel: aString\x0a\x09^ cancelButtonLabel := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLConfirmationWidget);

$core.addMethod(
$core.method({
selector: "confirm",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._remove();
$recv(self._actionBlock())._value();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"confirm",{},$globals.HLConfirmationWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "confirm\x0a\x09self remove.\x0a\x09self actionBlock value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove", "value", "actionBlock"]
}),
$globals.HLConfirmationWidget);

$core.addMethod(
$core.method({
selector: "confirmButtonLabel",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@confirmButtonLabel"];
if(($receiver = $2) == null || $receiver.isNil){
$1="Confirm";
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"confirmButtonLabel",{},$globals.HLConfirmationWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "confirmButtonLabel\x0a\x09^ confirmButtonLabel ifNil: [ 'Confirm' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.HLConfirmationWidget);

$core.addMethod(
$core.method({
selector: "confirmButtonLabel:",
protocol: 'accessing',
fn: function (aString){
var self=this;
var $1;
self["@confirmButtonLabel"]=aString;
$1=self["@confirmButtonLabel"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "confirmButtonLabel: aString\x0a\x09^ confirmButtonLabel := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLConfirmationWidget);

$core.addMethod(
$core.method({
selector: "confirmationString",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@confirmationString"];
if(($receiver = $2) == null || $receiver.isNil){
$1="Confirm";
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"confirmationString",{},$globals.HLConfirmationWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "confirmationString\x0a\x09^ confirmationString ifNil: [ 'Confirm' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.HLConfirmationWidget);

$core.addMethod(
$core.method({
selector: "confirmationString:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@confirmationString"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "confirmationString: aString\x0a\x09confirmationString := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLConfirmationWidget);

$core.addMethod(
$core.method({
selector: "renderButtonsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var confirmButton;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$4,$5,$6,$2;
$1=$recv(html)._div();
$recv($1)._class_("buttons");
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
$recv($3)._class_("button");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=2;
//>>excludeEnd("ctx");
$recv($3)._with_(self._cancelButtonLabel());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$4=$recv($3)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._cancel();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["onClick:"]=1;
//>>excludeEnd("ctx");
$4;
$5=$recv(html)._button();
$recv($5)._class_("button default");
$recv($5)._with_(self._confirmButtonLabel());
$6=$recv($5)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._confirm();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
confirmButton=$6;
return confirmButton;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
self._giveFocusToButton_(confirmButton);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html,confirmButton:confirmButton},$globals.HLConfirmationWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderButtonsOn: html\x0a\x09| confirmButton |\x0a\x09\x0a\x09html div \x0a\x09\x09class: 'buttons';\x0a\x09\x09with: [\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09class: 'button';\x0a\x09\x09\x09\x09with: self cancelButtonLabel;\x0a\x09\x09\x09\x09onClick: [ self cancel ].\x0a\x09\x09\x09confirmButton := html button\x0a\x09\x09\x09\x09class: 'button default';\x0a\x09\x09\x09\x09with: self confirmButtonLabel;\x0a\x09\x09\x09\x09onClick: [ self confirm ] ].\x0a\x0a\x09self giveFocusToButton:confirmButton",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "button", "cancelButtonLabel", "onClick:", "cancel", "confirmButtonLabel", "confirm", "giveFocusToButton:"]
}),
$globals.HLConfirmationWidget);

$core.addMethod(
$core.method({
selector: "renderMainOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._span();
$recv($1)._class_("head");
$2=$recv($1)._with_(self._confirmationString());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderMainOn:",{html:html},$globals.HLConfirmationWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderMainOn: html\x0a\x09html span \x0a\x09\x09class: 'head'; \x0a\x09\x09with: self confirmationString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "span", "with:", "confirmationString"]
}),
$globals.HLConfirmationWidget);



$core.addClass('HLRequestWidget', $globals.HLConfirmationWidget, ['input', 'multiline', 'value'], 'Helios-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLRequestWidget.comment="I display a modal window requesting user input.\x0a\x0a## API\x0a\x0a`HLWidget >> #request:do:` and `#request:value:do:` are convenience methods for creating modal request dialogs.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "beMultiline",
protocol: 'accessing',
fn: function (){
var self=this;
self["@multiline"]=true;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "beMultiline\x0a\x09multiline := true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLRequestWidget);

$core.addMethod(
$core.method({
selector: "beSingleline",
protocol: 'accessing',
fn: function (){
var self=this;
self["@multiline"]=false;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "beSingleline\x0a\x09multiline := false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLRequestWidget);

$core.addMethod(
$core.method({
selector: "confirm",
protocol: 'actions',
fn: function (){
var self=this;
var val;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
val=$recv($recv(self["@input"])._asJQuery())._val();
self._remove();
$recv(self._actionBlock())._value_(val);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"confirm",{val:val},$globals.HLRequestWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "confirm\x0a\x09| val |\x0a\x09val := input asJQuery val.\x0a\x09self remove.\x0a\x09self actionBlock value: val",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["val", "asJQuery", "remove", "value:", "actionBlock"]
}),
$globals.HLRequestWidget);

$core.addMethod(
$core.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "large";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cssClass\x0a\x09^ 'large'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLRequestWidget);

$core.addMethod(
$core.method({
selector: "giveFocusToButton:",
protocol: 'private',
fn: function (aButton){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aButton"],
source: "giveFocusToButton: aButton",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLRequestWidget);

$core.addMethod(
$core.method({
selector: "isMultiline",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@multiline"];
if(($receiver = $2) == null || $receiver.isNil){
$1=true;
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isMultiline",{},$globals.HLRequestWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isMultiline\x0a\x09^ multiline ifNil: [ true ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.HLRequestWidget);

$core.addMethod(
$core.method({
selector: "renderMainOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.HLRequestWidget.superclass.fn.prototype._renderMainOn_.apply($recv(self), [html]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=self._isMultiline();
if($core.assert($1)){
self["@input"]=$recv(html)._textarea();
self["@input"];
} else {
$2=$recv(html)._input();
$recv($2)._type_("text");
$recv($2)._onKeyDown_((function(event){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv($recv(event)._keyCode()).__eq((13));
if($core.assert($3)){
return self._confirm();
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$4=$recv($2)._yourself();
self["@input"]=$4;
self["@input"];
};
$5=$recv(self["@input"])._asJQuery();
$recv($5)._val_(self._value());
$6=$recv($5)._focus();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderMainOn:",{html:html},$globals.HLRequestWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderMainOn: html\x0a\x09super renderMainOn: html.\x0a\x09self isMultiline\x0a\x09\x09ifTrue: [ input := html textarea ]\x0a\x09\x09ifFalse: [ input := html input \x0a\x09\x09\x09type: 'text';\x0a\x09\x09\x09onKeyDown: [ :event |\x0a\x09\x09\x09\x09event keyCode = 13 ifTrue: [\x0a\x09\x09\x09\x09\x09self confirm ] ];\x0a\x09\x09\x09yourself ].\x0a\x09input asJQuery \x0a\x09\x09val: self value;\x0a\x09\x09focus",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["renderMainOn:", "ifTrue:ifFalse:", "isMultiline", "textarea", "type:", "input", "onKeyDown:", "ifTrue:", "=", "keyCode", "confirm", "yourself", "val:", "asJQuery", "value", "focus"]
}),
$globals.HLRequestWidget);

$core.addMethod(
$core.method({
selector: "value",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@value"];
if(($receiver = $2) == null || $receiver.isNil){
$1="";
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value",{},$globals.HLRequestWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "value\x0a\x09^ value ifNil: [ '' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.HLRequestWidget);

$core.addMethod(
$core.method({
selector: "value:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@value"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "value: aString\x0a\x09value := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLRequestWidget);



$core.addClass('HLProgressWidget', $globals.HLModalWidget, ['progressBars', 'visible'], 'Helios-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLProgressWidget.comment="I am a widget used to display progress modal dialogs.\x0a\x0aMy default instance is accessed with `HLProgressWidget class >> #default`.\x0a\x0aSee `HLProgressHandler` for usage.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addProgressBar:",
protocol: 'actions',
fn: function (aProgressBar){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._show();
$recv(self._progressBars())._add_(aProgressBar);
$recv(aProgressBar)._appendToJQuery_($recv($recv(self._wrapper())._asJQuery())._find_(".dialog"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addProgressBar:",{aProgressBar:aProgressBar},$globals.HLProgressWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aProgressBar"],
source: "addProgressBar: aProgressBar\x0a\x09self show.\x0a\x09self progressBars add: aProgressBar.\x0a\x09aProgressBar appendToJQuery: (self wrapper asJQuery find: '.dialog')",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["show", "add:", "progressBars", "appendToJQuery:", "find:", "asJQuery", "wrapper"]
}),
$globals.HLProgressWidget);

$core.addMethod(
$core.method({
selector: "do:on:displaying:",
protocol: 'actions',
fn: function (aBlock,aCollection,aString){
var self=this;
var progressBar;
function $HLProgressBarWidget(){return $globals.HLProgressBarWidget||(typeof HLProgressBarWidget=="undefined"?nil:HLProgressBarWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($HLProgressBarWidget())._new();
$recv($1)._parent_(self);
$recv($1)._label_(aString);
$recv($1)._workBlock_(aBlock);
$recv($1)._collection_(aCollection);
$2=$recv($1)._yourself();
progressBar=$2;
self._addProgressBar_(progressBar);
$recv(progressBar)._start();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"do:on:displaying:",{aBlock:aBlock,aCollection:aCollection,aString:aString,progressBar:progressBar},$globals.HLProgressWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "aCollection", "aString"],
source: "do: aBlock on: aCollection displaying: aString\x0a\x09| progressBar |\x0a\x09\x0a\x09progressBar := HLProgressBarWidget new\x0a\x09\x09parent: self;\x0a\x09\x09label: aString;\x0a\x09\x09workBlock: aBlock;\x0a\x09\x09collection: aCollection;\x0a\x09\x09yourself.\x0a\x09\x0a\x09self addProgressBar: progressBar.\x0a\x09progressBar start",
referencedClasses: ["HLProgressBarWidget"],
//>>excludeEnd("ide");
messageSends: ["parent:", "new", "label:", "workBlock:", "collection:", "yourself", "addProgressBar:", "start"]
}),
$globals.HLProgressWidget);

$core.addMethod(
$core.method({
selector: "flush",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._progressBars())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._removeProgressBar_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"flush",{},$globals.HLProgressWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "flush\x0a\x09self progressBars do: [ :each |\x0a\x09\x09self removeProgressBar: each ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "progressBars", "removeProgressBar:"]
}),
$globals.HLProgressWidget);

$core.addMethod(
$core.method({
selector: "hasButtons",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hasButtons\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLProgressWidget);

$core.addMethod(
$core.method({
selector: "isVisible",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@visible"];
if(($receiver = $2) == null || $receiver.isNil){
$1=false;
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isVisible",{},$globals.HLProgressWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isVisible\x0a\x09^ visible ifNil: [ false ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.HLProgressWidget);

$core.addMethod(
$core.method({
selector: "progressBars",
protocol: 'accessing',
fn: function (){
var self=this;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@progressBars"];
if(($receiver = $2) == null || $receiver.isNil){
self["@progressBars"]=$recv($OrderedCollection())._new();
$1=self["@progressBars"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"progressBars",{},$globals.HLProgressWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "progressBars\x0a\x09^ progressBars ifNil: [ progressBars := OrderedCollection new ]",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.HLProgressWidget);

$core.addMethod(
$core.method({
selector: "remove",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._isVisible();
if($core.assert($1)){
self["@visible"]=false;
self["@visible"];
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.HLProgressWidget.superclass.fn.prototype._remove.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"remove",{},$globals.HLProgressWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "remove\x0a\x09self isVisible ifTrue: [\x0a\x09\x09visible := false.\x0a\x09\x09super remove ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "isVisible", "remove"]
}),
$globals.HLProgressWidget);

$core.addMethod(
$core.method({
selector: "removeProgressBar:",
protocol: 'actions',
fn: function (aProgressBar){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._progressBars();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["progressBars"]=1;
//>>excludeEnd("ctx");
$recv($1)._remove_ifAbsent_(aProgressBar,(function(){

}));
$recv($recv($recv(aProgressBar)._wrapper())._asJQuery())._remove();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["remove"]=1;
//>>excludeEnd("ctx");
$recv(self._progressBars())._ifEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._remove();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeProgressBar:",{aProgressBar:aProgressBar},$globals.HLProgressWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aProgressBar"],
source: "removeProgressBar: aProgressBar\x0a\x09self progressBars remove: aProgressBar ifAbsent: [].\x0a\x09aProgressBar wrapper asJQuery remove.\x0a\x09\x0a\x09self progressBars ifEmpty: [ self remove ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove:ifAbsent:", "progressBars", "remove", "asJQuery", "wrapper", "ifEmpty:"]
}),
$globals.HLProgressWidget);

$core.addMethod(
$core.method({
selector: "renderMainOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._progressBars())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(html)._with_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderMainOn:",{html:html},$globals.HLProgressWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderMainOn: html\x0a\x09self progressBars do: [ :each |\x0a\x09\x09html with: each ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "progressBars", "with:"]
}),
$globals.HLProgressWidget);

$core.addMethod(
$core.method({
selector: "show",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._isVisible();
if(!$core.assert($1)){
self["@visible"]=true;
self["@visible"];
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.HLProgressWidget.superclass.fn.prototype._show.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"show",{},$globals.HLProgressWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "show\x0a\x09self isVisible ifFalse: [\x0a\x09\x09visible := true.\x0a\x09\x09super show ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "isVisible", "show"]
}),
$globals.HLProgressWidget);


$globals.HLProgressWidget.klass.iVarNames = ['default'];
$core.addMethod(
$core.method({
selector: "default",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@default"];
if(($receiver = $2) == null || $receiver.isNil){
self["@default"]=self._new();
$1=self["@default"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"default",{},$globals.HLProgressWidget.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "default\x0a\x09^ default ifNil: [ default := self new ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.HLProgressWidget.klass);


$core.addClass('HLTabSelectionWidget', $globals.HLModalWidget, ['tabs', 'tabList', 'selectedTab', 'selectCallback', 'cancelCallback', 'confirmCallback'], 'Helios-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLTabSelectionWidget.comment="I am a modal window used to select or create tabs.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "cancel",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._remove();
$recv(self._cancelCallback())._value();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cancel",{},$globals.HLTabSelectionWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cancel\x0a\x09self remove.\x0a\x09self cancelCallback value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove", "value", "cancelCallback"]
}),
$globals.HLTabSelectionWidget);

$core.addMethod(
$core.method({
selector: "cancelCallback",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@cancelCallback"];
if(($receiver = $2) == null || $receiver.isNil){
$1=(function(){

});
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cancelCallback",{},$globals.HLTabSelectionWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cancelCallback\x0a\x09^ cancelCallback ifNil: [ [] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.HLTabSelectionWidget);

$core.addMethod(
$core.method({
selector: "cancelCallback:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@cancelCallback"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "cancelCallback: aBlock\x0a\x09cancelCallback := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLTabSelectionWidget);

$core.addMethod(
$core.method({
selector: "confirm",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._remove();
$recv(self._confirmCallback())._value_(self._selectedTab());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"confirm",{},$globals.HLTabSelectionWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "confirm\x0a\x09self remove.\x0a\x09self confirmCallback value: self selectedTab",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove", "value:", "confirmCallback", "selectedTab"]
}),
$globals.HLTabSelectionWidget);

$core.addMethod(
$core.method({
selector: "confirmCallback",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@confirmCallback"];
if(($receiver = $2) == null || $receiver.isNil){
$1=(function(){

});
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"confirmCallback",{},$globals.HLTabSelectionWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "confirmCallback\x0a\x09^ confirmCallback ifNil: [ [] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.HLTabSelectionWidget);

$core.addMethod(
$core.method({
selector: "confirmCallback:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@confirmCallback"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "confirmCallback: aBlock\x0a\x09confirmCallback := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLTabSelectionWidget);

$core.addMethod(
$core.method({
selector: "renderButtonsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var confirmButton;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$4,$5,$6,$2;
$1=$recv(html)._div();
$recv($1)._class_("buttons");
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
$recv($3)._class_("button");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=2;
//>>excludeEnd("ctx");
$recv($3)._with_("Cancel");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$4=$recv($3)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._cancel();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["onClick:"]=1;
//>>excludeEnd("ctx");
$4;
$5=$recv(html)._button();
$recv($5)._class_("button default");
$recv($5)._with_("Select tab");
$6=$recv($5)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._confirm();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
confirmButton=$6;
return confirmButton;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
self._giveFocusToButton_(confirmButton);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html,confirmButton:confirmButton},$globals.HLTabSelectionWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderButtonsOn: html\x0a\x09| confirmButton |\x0a\x09\x0a\x09html div \x0a\x09\x09class: 'buttons';\x0a\x09\x09with: [\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09class: 'button';\x0a\x09\x09\x09\x09with: 'Cancel';\x0a\x09\x09\x09\x09onClick: [ self cancel ].\x0a\x09\x09\x09confirmButton := html button\x0a\x09\x09\x09\x09class: 'button default';\x0a\x09\x09\x09\x09with: 'Select tab';\x0a\x09\x09\x09\x09onClick: [ self confirm ] ].\x0a\x0a\x09self giveFocusToButton:confirmButton",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "button", "onClick:", "cancel", "confirm", "giveFocusToButton:"]
}),
$globals.HLTabSelectionWidget);

$core.addMethod(
$core.method({
selector: "renderContentOn:",
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
$globals.HLTabSelectionWidget.superclass.fn.prototype._renderContentOn_.apply($recv(self), [html]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(self._tabList())._focus();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},$globals.HLTabSelectionWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderContentOn: html\x0a\x09super renderContentOn: html.\x0a\x09self tabList focus",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["renderContentOn:", "focus", "tabList"]
}),
$globals.HLTabSelectionWidget);

$core.addMethod(
$core.method({
selector: "renderMainOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._div();
$recv($1)._class_("title");
$2=$recv($1)._with_("Tab selection");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$recv(html)._with_(self._tabList());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderMainOn:",{html:html},$globals.HLTabSelectionWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderMainOn: html\x0a\x09html div \x0a\x09\x09class: 'title'; \x0a\x09\x09with: 'Tab selection'.\x0a\x09\x0a\x09html with: self tabList",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "tabList"]
}),
$globals.HLTabSelectionWidget);

$core.addMethod(
$core.method({
selector: "renderTab:on:",
protocol: 'rendering',
fn: function (aTab,html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._span();
$recv($1)._class_($recv(aTab)._cssClass());
$2=$recv($1)._with_($recv(aTab)._label());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderTab:on:",{aTab:aTab,html:html},$globals.HLTabSelectionWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTab", "html"],
source: "renderTab: aTab on: html\x0a\x09html \x0a\x09\x09span \x0a\x09\x09\x09class: aTab cssClass;\x0a\x09\x09\x09with: aTab label",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "span", "cssClass", "with:", "label"]
}),
$globals.HLTabSelectionWidget);

$core.addMethod(
$core.method({
selector: "renderTabsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$recv(self._tabs())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(html)._li())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$1=$recv(html)._a();
$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return self._renderTab_on_(each,html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)});
//>>excludeEnd("ctx");
}));
$2=$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return self._selectTab_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)});
//>>excludeEnd("ctx");
}));
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderTabsOn:",{html:html},$globals.HLTabSelectionWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderTabsOn: html\x0a\x09self tabs do: [ :each |\x0a\x09\x09html li with: [ \x0a\x09\x09\x09html a \x0a\x09\x09\x09\x09with: [ \x0a\x09\x09\x09\x09\x09self renderTab: each on: html ];\x0a\x09\x09\x09\x09onClick: [ self selectTab: each ] ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "tabs", "with:", "li", "a", "renderTab:on:", "onClick:", "selectTab:"]
}),
$globals.HLTabSelectionWidget);

$core.addMethod(
$core.method({
selector: "selectCallback",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@selectCallback"];
if(($receiver = $2) == null || $receiver.isNil){
$1=(function(){

});
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectCallback",{},$globals.HLTabSelectionWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selectCallback\x0a\x09^ selectCallback ifNil: [ [] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.HLTabSelectionWidget);

$core.addMethod(
$core.method({
selector: "selectCallback:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@selectCallback"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "selectCallback: aBlock\x0a\x09selectCallback := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLTabSelectionWidget);

$core.addMethod(
$core.method({
selector: "selectTab:",
protocol: 'actions',
fn: function (aTab){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._selectedTab_(aTab);
$recv(self._selectCallback())._value_(aTab);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectTab:",{aTab:aTab},$globals.HLTabSelectionWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTab"],
source: "selectTab: aTab\x0a\x09self selectedTab: aTab.\x0a\x09self selectCallback value: aTab",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selectedTab:", "value:", "selectCallback"]
}),
$globals.HLTabSelectionWidget);

$core.addMethod(
$core.method({
selector: "selectedTab",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@selectedTab"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selectedTab\x0a\x09^ selectedTab",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLTabSelectionWidget);

$core.addMethod(
$core.method({
selector: "selectedTab:",
protocol: 'accessing',
fn: function (aTab){
var self=this;
self["@selectedTab"]=aTab;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTab"],
source: "selectedTab: aTab\x0a\x09selectedTab := aTab",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLTabSelectionWidget);

$core.addMethod(
$core.method({
selector: "setupKeyBindings",
protocol: 'actions',
fn: function (){
var self=this;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.HLTabSelectionWidget.superclass.fn.prototype._setupKeyBindings.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(".dialog"._asJQuery())._keyup_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv($recv(e)._keyCode()).__eq($recv($recv($String())._cr())._asciiValue());
if($core.assert($1)){
return self._confirm();
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupKeyBindings",{},$globals.HLTabSelectionWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupKeyBindings\x0a\x09super setupKeyBindings.\x0a\x09'.dialog' asJQuery keyup: [ :e |\x0a\x09\x09e keyCode = String cr asciiValue ifTrue: [ self confirm ] ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["setupKeyBindings", "keyup:", "asJQuery", "ifTrue:", "=", "keyCode", "asciiValue", "cr", "confirm"]
}),
$globals.HLTabSelectionWidget);

$core.addMethod(
$core.method({
selector: "tabList",
protocol: 'rendering',
fn: function (){
var self=this;
function $HLTabListWidget(){return $globals.HLTabListWidget||(typeof HLTabListWidget=="undefined"?nil:HLTabListWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$receiver;
$1=self["@tabList"];
if(($receiver = $1) == null || $receiver.isNil){
self["@tabList"]=$recv($HLTabListWidget())._new();
self["@tabList"];
$2=self["@tabList"];
$recv($2)._callback_((function(tab){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._selectTab_(tab);
return $recv(self["@tabList"])._focus();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({tab:tab},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv($2)._selectedItem_(self._selectedTab());
$3=$recv($2)._items_(self._tabs());
$3;
} else {
$1;
};
$4=self["@tabList"];
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tabList",{},$globals.HLTabSelectionWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tabList\x0a\x09tabList ifNil: [ \x0a\x09\x09tabList := HLTabListWidget new.\x0a\x09\x09tabList\x0a\x09\x09\x09callback: [ :tab | self selectTab: tab. tabList focus ];\x0a\x09\x09\x09selectedItem: self selectedTab;\x0a\x09\x09\x09items: self tabs ].\x0a\x09\x0a\x09^ tabList",
referencedClasses: ["HLTabListWidget"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new", "callback:", "selectTab:", "focus", "selectedItem:", "selectedTab", "items:", "tabs"]
}),
$globals.HLTabSelectionWidget);

$core.addMethod(
$core.method({
selector: "tabs",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@tabs"];
if(($receiver = $2) == null || $receiver.isNil){
$1=[];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tabs",{},$globals.HLTabSelectionWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tabs\x0a\x09^ tabs ifNil: [ #() ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.HLTabSelectionWidget);

$core.addMethod(
$core.method({
selector: "tabs:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
self["@tabs"]=aCollection;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "tabs: aCollection\x0a\x09tabs := aCollection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLTabSelectionWidget);



$core.addClass('HLProgressBarWidget', $globals.HLWidget, ['label', 'parent', 'workBlock', 'collection', 'bar'], 'Helios-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLProgressBarWidget.comment="I am a widget used to display a progress bar while iterating over a collection.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "collection",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@collection"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collection\x0a\x09^ collection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLProgressBarWidget);

$core.addMethod(
$core.method({
selector: "collection:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
self["@collection"]=aCollection;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "collection: aCollection\x0a\x09collection := aCollection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLProgressBarWidget);

$core.addMethod(
$core.method({
selector: "evaluateAt:",
protocol: 'actions',
fn: function (anInteger){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $4,$3,$2,$1,$7,$6,$5;
$4=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$2=$recv(anInteger).__slash($3);
$1=$recv($2).__star((100));
self._updateProgress_($1);
$7=self._collection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collection"]=2;
//>>excludeEnd("ctx");
$6=$recv($7)._size();
$5=$recv(anInteger).__lt_eq($6);
if($core.assert($5)){
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(self._workBlock())._value_($recv(self._collection())._at_(anInteger));
return self._evaluateAt_($recv(anInteger).__plus((1)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}))._valueWithTimeout_((10));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["valueWithTimeout:"]=1;
//>>excludeEnd("ctx");
} else {
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._remove();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
}))._valueWithTimeout_((500));
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"evaluateAt:",{anInteger:anInteger},$globals.HLProgressBarWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "evaluateAt: anInteger\x0a\x09self updateProgress: (anInteger / self collection size) * 100.\x0a\x09anInteger <= self collection size\x0a\x09\x09ifTrue: [ \x0a\x09\x09\x09[ \x0a\x09\x09\x09\x09self workBlock value: (self collection at: anInteger).\x0a\x09\x09\x09\x09self evaluateAt: anInteger + 1 ] valueWithTimeout: 10 ]\x0a\x09\x09ifFalse: [ [ self remove ] valueWithTimeout: 500 ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["updateProgress:", "*", "/", "size", "collection", "ifTrue:ifFalse:", "<=", "valueWithTimeout:", "value:", "workBlock", "at:", "evaluateAt:", "+", "remove"]
}),
$globals.HLProgressBarWidget);

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
$globals.HLProgressBarWidget);

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
$globals.HLProgressBarWidget);

$core.addMethod(
$core.method({
selector: "parent",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@parent"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "parent\x0a\x09^ parent",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLProgressBarWidget);

$core.addMethod(
$core.method({
selector: "parent:",
protocol: 'accessing',
fn: function (aProgress){
var self=this;
self["@parent"]=aProgress;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aProgress"],
source: "parent: aProgress\x0a\x09parent := aProgress",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLProgressBarWidget);

$core.addMethod(
$core.method({
selector: "remove",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._parent())._removeProgressBar_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"remove",{},$globals.HLProgressBarWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "remove\x0a\x09self parent removeProgressBar: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeProgressBar:", "parent"]
}),
$globals.HLProgressBarWidget);

$core.addMethod(
$core.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$4,$2;
$recv($recv(html)._span())._with_(self._label());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$1=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["div"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_("progress");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._div();
$recv($3)._class_("bar");
$4=$recv($3)._style_("width: 0%");
self["@bar"]=$4;
return self["@bar"];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},$globals.HLProgressBarWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderContentOn: html\x0a\x09html span with: self label.\x0a\x09html div \x0a\x09\x09class: 'progress';\x0a\x09\x09with: [\x0a\x09\x09\x09bar := html div \x0a\x09\x09\x09\x09class: 'bar';\x0a\x09\x09\x09\x09style: 'width: 0%' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "span", "label", "class:", "div", "style:"]
}),
$globals.HLProgressBarWidget);

$core.addMethod(
$core.method({
selector: "start",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._evaluateAt_((1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.HLProgressBarWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09\x22Make sure the UI has some time to update itself between each iteration\x22\x0a\x09\x0a\x09self evaluateAt: 1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["evaluateAt:"]
}),
$globals.HLProgressBarWidget);

$core.addMethod(
$core.method({
selector: "updateProgress:",
protocol: 'actions',
fn: function (anInteger){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(self["@bar"])._asJQuery())._css_put_("width",$recv($recv(anInteger)._asString()).__comma("%"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateProgress:",{anInteger:anInteger},$globals.HLProgressBarWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "updateProgress: anInteger\x0a\x09bar asJQuery css: 'width' put: anInteger asString, '%'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["css:put:", "asJQuery", ",", "asString"]
}),
$globals.HLProgressBarWidget);

$core.addMethod(
$core.method({
selector: "workBlock",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@workBlock"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "workBlock\x0a\x09^ workBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLProgressBarWidget);

$core.addMethod(
$core.method({
selector: "workBlock:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@workBlock"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "workBlock: aBlock\x0a\x09workBlock := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLProgressBarWidget);


$globals.HLProgressBarWidget.klass.iVarNames = ['default'];
$core.addMethod(
$core.method({
selector: "default",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@default"];
if(($receiver = $2) == null || $receiver.isNil){
self["@default"]=self._new();
$1=self["@default"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"default",{},$globals.HLProgressBarWidget.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "default\x0a\x09^ default ifNil: [ default := self new ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.HLProgressBarWidget.klass);


$core.addClass('HLTabWidget', $globals.HLWidget, ['widget', 'label', 'root'], 'Helios-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLTabWidget.comment="I am a widget specialized into building another widget as an Helios tab.\x0a\x0aI should not be used directly, `HLWidget class >> #openAsTab` should be used instead.\x0a\x0a## Example\x0a\x0a    HLWorkspace openAsTab";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "activate",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._manager())._activate_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"activate",{},$globals.HLTabWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "activate\x0a\x09self manager activate: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["activate:", "manager"]
}),
$globals.HLTabWidget);

$core.addMethod(
$core.method({
selector: "add",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._manager())._addTab_(self);
self._observeManager();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"add",{},$globals.HLTabWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "add\x0a\x09self manager addTab: self.\x0a\x09self observeManager",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["addTab:", "manager", "observeManager"]
}),
$globals.HLTabWidget);

$core.addMethod(
$core.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._widget())._tabClass();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},$globals.HLTabWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cssClass\x0a\x09^ self widget tabClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tabClass", "widget"]
}),
$globals.HLTabWidget);

$core.addMethod(
$core.method({
selector: "focus",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=self._widget();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["widget"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._canHaveFocus();
if($core.assert($1)){
$recv(self._widget())._focus();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"focus",{},$globals.HLTabWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "focus\x0a\x09self widget canHaveFocus ifTrue: [\x0a\x09\x09self widget focus ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "canHaveFocus", "widget", "focus"]
}),
$globals.HLTabWidget);

$core.addMethod(
$core.method({
selector: "hide",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@root"];
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$recv($recv(self["@root"])._asJQuery())._css_put_("visibility","hidden");
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hide",{},$globals.HLTabWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hide\x0a\x09root ifNotNil: [ root asJQuery css: 'visibility' put: 'hidden' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "css:put:", "asJQuery"]
}),
$globals.HLTabWidget);

$core.addMethod(
$core.method({
selector: "isActive",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._manager())._activeTab()).__eq(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isActive",{},$globals.HLTabWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isActive\x0a\x09^ self manager activeTab = self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["=", "activeTab", "manager"]
}),
$globals.HLTabWidget);

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
$1="";
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"label",{},$globals.HLTabWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ label ifNil: [ '' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.HLTabWidget);

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
$globals.HLTabWidget);

$core.addMethod(
$core.method({
selector: "manager",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLManager(){return $globals.HLManager||(typeof HLManager=="undefined"?nil:HLManager)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($HLManager())._current();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"manager",{},$globals.HLTabWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "manager\x0a\x09^ HLManager current",
referencedClasses: ["HLManager"],
//>>excludeEnd("ide");
messageSends: ["current"]
}),
$globals.HLTabWidget);

$core.addMethod(
$core.method({
selector: "observeManager",
protocol: 'actions',
fn: function (){
var self=this;
function $HLTabLabelChanged(){return $globals.HLTabLabelChanged||(typeof HLTabLabelChanged=="undefined"?nil:HLTabLabelChanged)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(self._manager())._announcer())._on_send_to_($HLTabLabelChanged(),"onTabLabelChanged:",self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeManager",{},$globals.HLTabWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeManager\x0a\x09self manager announcer \x0a\x09\x09on: HLTabLabelChanged\x0a\x09\x09send: #onTabLabelChanged:\x0a\x09\x09to: self",
referencedClasses: ["HLTabLabelChanged"],
//>>excludeEnd("ide");
messageSends: ["on:send:to:", "announcer", "manager"]
}),
$globals.HLTabWidget);

$core.addMethod(
$core.method({
selector: "onTabLabelChanged:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$4,$5,$3;
$2=$recv(anAnnouncement)._widget();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["widget"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq(self._widget());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
$4=self._label();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["label"]=1;
//>>excludeEnd("ctx");
$5=$recv(anAnnouncement)._label();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["label"]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__eq($5);
if(!$core.assert($3)){
self._label_($recv(anAnnouncement)._label());
$recv(self._manager())._refresh();
};
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onTabLabelChanged:",{anAnnouncement:anAnnouncement},$globals.HLTabWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onTabLabelChanged: anAnnouncement\x0a\x09anAnnouncement widget = self widget ifTrue: [\x0a\x09\x09self label = anAnnouncement label ifFalse: [\x0a\x09\x09\x09self label: anAnnouncement label.\x0a\x09\x09\x09self manager refresh ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "=", "widget", "ifFalse:", "label", "label:", "refresh", "manager"]
}),
$globals.HLTabWidget);

$core.addMethod(
$core.method({
selector: "registerBindings",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._widget())._registerBindings();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"registerBindings",{},$globals.HLTabWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "registerBindings\x0a\x09self widget registerBindings",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["registerBindings", "widget"]
}),
$globals.HLTabWidget);

$core.addMethod(
$core.method({
selector: "remove",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$receiver;
self._unregister();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["unregister"]=1;
//>>excludeEnd("ctx");
$recv(self._widget())._unregister();
$1=self["@root"];
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$recv($recv(self["@root"])._asJQuery())._remove();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"remove",{},$globals.HLTabWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "remove\x0a\x09self unregister.\x0a\x09self widget unregister.\x0a\x09root ifNotNil: [ root asJQuery remove ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["unregister", "widget", "ifNotNil:", "remove", "asJQuery"]
}),
$globals.HLTabWidget);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._div();
$recv($1)._class_("tab");
$2=$recv($1)._yourself();
self["@root"]=$2;
self._renderTab();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.HLTabWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09root := html div\x0a\x09\x09class: 'tab';\x0a\x09\x09yourself.\x0a\x09self renderTab",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "yourself", "renderTab"]
}),
$globals.HLTabWidget);

$core.addMethod(
$core.method({
selector: "renderTab",
protocol: 'rendering',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$recv(self["@root"])._contents_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(html)._div();
$recv($1)._class_("amber_box");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(self._widget())._renderOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderTab",{},$globals.HLTabWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "renderTab\x0a\x09root contents: [ :html |\x0a\x09\x09html div\x0a\x09\x09\x09class: 'amber_box';\x0a\x09\x09\x09with: [ self widget renderOn: html ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["contents:", "class:", "div", "with:", "renderOn:", "widget"]
}),
$globals.HLTabWidget);

$core.addMethod(
$core.method({
selector: "show",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=self["@root"];
if(($receiver = $1) == null || $receiver.isNil){
$2="body"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
self._appendToJQuery_($2);
} else {
$recv($recv(self["@root"])._asJQuery())._css_put_("visibility","visible");
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"show",{},$globals.HLTabWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "show\x0a\x09root\x0a\x09\x09ifNil: [ self appendToJQuery: 'body' asJQuery ]\x0a\x09\x09ifNotNil: [ root asJQuery css: 'visibility' put: 'visible' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:ifNotNil:", "appendToJQuery:", "asJQuery", "css:put:"]
}),
$globals.HLTabWidget);

$core.addMethod(
$core.method({
selector: "unregister",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(self._manager())._announcer())._unsubscribe_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"unregister",{},$globals.HLTabWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "unregister\x0a\x09self manager announcer unsubscribe: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["unsubscribe:", "announcer", "manager"]
}),
$globals.HLTabWidget);

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
$globals.HLTabWidget);

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
$globals.HLTabWidget);


$core.addMethod(
$core.method({
selector: "on:labelled:",
protocol: 'instance creation',
fn: function (aWidget,aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._widget_(aWidget);
$recv($2)._label_(aString);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:labelled:",{aWidget:aWidget,aString:aString},$globals.HLTabWidget.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aWidget", "aString"],
source: "on: aWidget labelled: aString\x0a\x09^ self new\x0a\x09\x09widget: aWidget;\x0a\x09\x09label: aString;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["widget:", "new", "label:", "yourself"]
}),
$globals.HLTabWidget.klass);


$core.addClass('HLTabsWidget', $globals.HLWidget, ['tabs', 'activeTab', 'history', 'selectionDisabled'], 'Helios-Core');
$core.addMethod(
$core.method({
selector: "activate:",
protocol: 'actions',
fn: function (aTab){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=self._isSelectionDisabled();
if($core.assert($1)){
return self;
};
$recv($recv(self._manager())._keyBinder())._flushBindings();
$recv(aTab)._registerBindings();
self["@activeTab"]=aTab;
self._refresh();
self._addToHistory_(aTab);
$2=self._show_(aTab);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"activate:",{aTab:aTab},$globals.HLTabsWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTab"],
source: "activate: aTab\x0a\x09self isSelectionDisabled ifTrue: [ ^ self ].\x0a\x0a\x09self manager keyBinder flushBindings.\x0a\x09aTab registerBindings.\x0a\x09activeTab := aTab.\x0a\x09\x0a\x09self \x0a\x09\x09refresh;\x0a\x09\x09addToHistory: aTab;\x0a\x09\x09show: aTab",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "isSelectionDisabled", "flushBindings", "keyBinder", "manager", "registerBindings", "refresh", "addToHistory:", "show:"]
}),
$globals.HLTabsWidget);

$core.addMethod(
$core.method({
selector: "activateNextTab",
protocol: 'actions',
fn: function (){
var self=this;
var nextTab;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$5,$4,$3;
var $early={};
try {
$1=self._tabs();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["tabs"]=1;
//>>excludeEnd("ctx");
$recv($1)._ifEmpty_((function(){
throw $early=[self];

}));
$2=self._tabs();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["tabs"]=2;
//>>excludeEnd("ctx");
$5=self._tabs();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["tabs"]=3;
//>>excludeEnd("ctx");
$4=$recv($5)._indexOf_(self._activeTab());
$3=$recv($4).__plus((1));
nextTab=$recv($2)._at_ifAbsent_($3,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._tabs())._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
self._activate_(nextTab);
return self;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"activateNextTab",{nextTab:nextTab},$globals.HLTabsWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "activateNextTab\x0a\x09| nextTab |\x0a\x09\x0a\x09self tabs ifEmpty: [ ^ self ].\x0a\x09\x0a\x09nextTab := self tabs \x0a\x09\x09at: (self tabs indexOf: self activeTab) + 1 \x0a\x09\x09ifAbsent: [ self tabs first ].\x0a\x09\x09\x0a\x09self activate: nextTab",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifEmpty:", "tabs", "at:ifAbsent:", "+", "indexOf:", "activeTab", "first", "activate:"]
}),
$globals.HLTabsWidget);

$core.addMethod(
$core.method({
selector: "activatePreviousTab",
protocol: 'actions',
fn: function (){
var self=this;
var previousTab;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$5,$4,$3;
var $early={};
try {
$1=self._tabs();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["tabs"]=1;
//>>excludeEnd("ctx");
$recv($1)._ifEmpty_((function(){
throw $early=[self];

}));
$2=self._tabs();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["tabs"]=2;
//>>excludeEnd("ctx");
$5=self._tabs();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["tabs"]=3;
//>>excludeEnd("ctx");
$4=$recv($5)._indexOf_(self._activeTab());
$3=$recv($4).__minus((1));
previousTab=$recv($2)._at_ifAbsent_($3,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._tabs())._last();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
self._activate_(previousTab);
return self;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"activatePreviousTab",{previousTab:previousTab},$globals.HLTabsWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "activatePreviousTab\x0a\x09| previousTab |\x0a\x09\x0a\x09self tabs ifEmpty: [ ^ self ].\x0a\x09\x0a\x09previousTab := self tabs \x0a\x09\x09at: (self tabs indexOf: self activeTab) - 1 \x0a\x09\x09ifAbsent: [ self tabs last ].\x0a\x09\x09\x0a\x09self activate: previousTab",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifEmpty:", "tabs", "at:ifAbsent:", "-", "indexOf:", "activeTab", "last", "activate:"]
}),
$globals.HLTabsWidget);

$core.addMethod(
$core.method({
selector: "activeTab",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@activeTab"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "activeTab\x0a\x09^ activeTab",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLTabsWidget);

$core.addMethod(
$core.method({
selector: "addTab:",
protocol: 'actions',
fn: function (aTab){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._tabs())._add_(aTab);
self._activate_(aTab);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addTab:",{aTab:aTab},$globals.HLTabsWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTab"],
source: "addTab: aTab\x0a\x09self tabs add: aTab.\x0a    self activate: aTab",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "tabs", "activate:"]
}),
$globals.HLTabsWidget);

$core.addMethod(
$core.method({
selector: "addToHistory:",
protocol: 'actions',
fn: function (aTab){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._removeFromHistory_(aTab);
$recv(self._history())._add_(aTab);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addToHistory:",{aTab:aTab},$globals.HLTabsWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTab"],
source: "addToHistory: aTab\x0a\x09self removeFromHistory: aTab.\x0a\x09self history add: aTab",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeFromHistory:", "add:", "history"]
}),
$globals.HLTabsWidget);

$core.addMethod(
$core.method({
selector: "disableSelection",
protocol: 'actions',
fn: function (){
var self=this;
self["@selectionDisabled"]=true;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "disableSelection\x0a\x09selectionDisabled := true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLTabsWidget);

$core.addMethod(
$core.method({
selector: "enableSelection",
protocol: 'actions',
fn: function (){
var self=this;
self["@selectionDisabled"]=false;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "enableSelection\x0a\x09selectionDisabled := false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLTabsWidget);

$core.addMethod(
$core.method({
selector: "history",
protocol: 'accessing',
fn: function (){
var self=this;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@history"];
if(($receiver = $2) == null || $receiver.isNil){
self["@history"]=$recv($OrderedCollection())._new();
$1=self["@history"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"history",{},$globals.HLTabsWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "history\x0a\x09^ history ifNil: [ history := OrderedCollection new ]",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.HLTabsWidget);

$core.addMethod(
$core.method({
selector: "history:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
self["@history"]=aCollection;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "history: aCollection\x0a\x09history := aCollection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLTabsWidget);

$core.addMethod(
$core.method({
selector: "isSelectionDisabled",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@selectionDisabled"];
if(($receiver = $2) == null || $receiver.isNil){
$1=false;
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isSelectionDisabled",{},$globals.HLTabsWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isSelectionDisabled\x0a\x09^ selectionDisabled ifNil: [ false ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.HLTabsWidget);

$core.addMethod(
$core.method({
selector: "removeActiveTab",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._removeTab_(self._activeTab());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeActiveTab",{},$globals.HLTabsWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeActiveTab\x0a\x09self removeTab: self activeTab",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeTab:", "activeTab"]
}),
$globals.HLTabsWidget);

$core.addMethod(
$core.method({
selector: "removeFromHistory:",
protocol: 'actions',
fn: function (aTab){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._history_($recv(self._history())._reject_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each).__eq_eq(aTab);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
})));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeFromHistory:",{aTab:aTab},$globals.HLTabsWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTab"],
source: "removeFromHistory: aTab\x0a\x09self history: (self history reject: [ :each | each == aTab ])",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["history:", "reject:", "history", "=="]
}),
$globals.HLTabsWidget);

$core.addMethod(
$core.method({
selector: "removeTab:",
protocol: 'actions',
fn: function (aTab){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$3;
$2=self._tabs();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["tabs"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._includes_(aTab);
if(!$core.assert($1)){
return self;
};
self._removeFromHistory_(aTab);
$recv(self._tabs())._remove_(aTab);
$recv($recv(self._manager())._keyBinder())._flushBindings();
$recv(aTab)._remove();
self._refresh();
$3=self._history();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["history"]=1;
//>>excludeEnd("ctx");
$recv($3)._ifNotEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(self._history())._last())._activate();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeTab:",{aTab:aTab},$globals.HLTabsWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTab"],
source: "removeTab: aTab\x0a\x09(self tabs includes: aTab) ifFalse: [ ^ self ].\x0a\x0a\x09self removeFromHistory: aTab.\x0a\x09self tabs remove: aTab.\x0a\x09self manager keyBinder flushBindings.\x0a\x09aTab remove.\x0a\x09self refresh.\x0a\x09self history ifNotEmpty: [\x0a\x09\x09self history last activate ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "includes:", "tabs", "removeFromHistory:", "remove:", "flushBindings", "keyBinder", "manager", "remove", "refresh", "ifNotEmpty:", "history", "activate", "last"]
}),
$globals.HLTabsWidget);

$core.addMethod(
$core.method({
selector: "removeTabForWidget:",
protocol: 'actions',
fn: function (aWidget){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $early={};
try {
self._removeTab_($recv(self._tabs())._detect_ifNone_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(each)._widget()).__eq(aWidget);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
throw $early=[self];

})));
return self;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeTabForWidget:",{aWidget:aWidget},$globals.HLTabsWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aWidget"],
source: "removeTabForWidget: aWidget\x0a\x09self removeTab: (self tabs \x0a\x09\x09detect: [ :each | each widget = aWidget ]\x0a\x09\x09ifNone: [ ^ self ])",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeTab:", "detect:ifNone:", "tabs", "=", "widget"]
}),
$globals.HLTabsWidget);

$core.addMethod(
$core.method({
selector: "renderAddOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $HLWidget(){return $globals.HLWidget||(typeof HLWidget=="undefined"?nil:HLWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$4,$5,$7,$8,$9,$6,$2;
$1=$recv(html)._div();
$recv($1)._class_("dropdown new_tab");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._a();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["a"]=1;
//>>excludeEnd("ctx");
$recv($3)._class_("dropdown-toggle");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=2;
//>>excludeEnd("ctx");
$recv($3)._at_put_("data-toggle","dropdown");
$4=$recv($3)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(html)._tag_("b"))._class_("caret");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["class:"]=3;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$4;
$5=$recv(html)._ul();
$recv($5)._class_("dropdown-menu");
$6=$recv($5)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv($recv($recv($HLWidget())._withAllSubclasses())._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv(each)._canBeOpenAsTab();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({each:each},$ctx3,4)});
//>>excludeEnd("ctx");
})))._sorted_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$7=$recv(a)._tabPriority();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["tabPriority"]=1;
//>>excludeEnd("ctx");
return $recv($7).__lt($recv(b)._tabPriority());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({a:a,b:b},$ctx3,5)});
//>>excludeEnd("ctx");
})))._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv($recv(html)._li())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx5) {
//>>excludeEnd("ctx");
$8=$recv(html)._a();
$recv($8)._with_($recv(each)._tabLabel());
$9=$recv($8)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx6) {
//>>excludeEnd("ctx");
return $recv(each)._openAsTab();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx6) {$ctx6.fillBlock({},$ctx5,8)});
//>>excludeEnd("ctx");
}));
return $9;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,7)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({each:each},$ctx3,6)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
return $6;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderAddOn:",{html:html},$globals.HLTabsWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderAddOn: html\x0a    html div \x0a    \x09class: 'dropdown new_tab';\x0a        with: [ \x0a\x09\x09\x09html a \x0a        \x09\x09class: 'dropdown-toggle';\x0a           \x09 \x09at: 'data-toggle' put: 'dropdown';\x0a            \x09with: [\x0a  \x09\x09\x09\x09\x09(html tag: 'b') class: 'caret' ].\x0a           html ul \x0a           \x09\x09class: 'dropdown-menu';\x0a                with: [\x0a                  \x09((HLWidget withAllSubclasses\x0a                    \x09select: [ :each | each canBeOpenAsTab ])\x0a                        sorted: [ :a :b | a tabPriority < b tabPriority ])\x0a                        do: [ :each |\x0a  \x09\x09\x09\x09\x09\x09\x09html li with: [\x0a                      \x09\x09\x09html a \x0a                                \x09with: each tabLabel;\x0a      \x09\x09\x09\x09\x09\x09\x09\x09onClick: [ each openAsTab ] ] ] ] ]",
referencedClasses: ["HLWidget"],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "a", "at:put:", "tag:", "ul", "do:", "sorted:", "select:", "withAllSubclasses", "canBeOpenAsTab", "<", "tabPriority", "li", "tabLabel", "onClick:", "openAsTab"]
}),
$globals.HLTabsWidget);

$core.addMethod(
$core.method({
selector: "renderContentOn:",
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
$recv($1)._class_("navbar navbar-fixed-top");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._div();
$recv($3)._class_("navbar-inner");
$4=$recv($3)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._renderTabsOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
self._renderAddOn_(html);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},$globals.HLTabsWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderContentOn: html\x0a\x09html div \x0a\x09\x09class: 'navbar navbar-fixed-top';\x0a\x09\x09with: [ html div \x0a\x09\x09\x09class: 'navbar-inner';\x0a\x09\x09\x09with: [ self renderTabsOn: html ] ].\x0a\x09\x09\x09\x0a\x09self renderAddOn: html",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "renderTabsOn:", "renderAddOn:"]
}),
$globals.HLTabsWidget);

$core.addMethod(
$core.method({
selector: "renderTab:on:",
protocol: 'rendering',
fn: function (aTab,html){
var self=this;
var li;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$6,$5,$7,$8,$9,$10,$11,$12;
$1=$recv(html)._li();
$2=$1;
$3=$recv("width: ".__comma($recv(self._tabWidth())._asString())).__comma("px");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($2)._style_($3);
$4=$1;
$6=$recv(aTab)._isActive();
if($core.assert($6)){
$5="tab active";
} else {
$5="tab inactive";
};
$recv($4)._class_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(html)._a())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$7=$recv($recv(html)._tag_("i"))._class_("close");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["class:"]=2;
//>>excludeEnd("ctx");
$recv($7)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return self._removeTab_(aTab);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["onClick:"]=1;
//>>excludeEnd("ctx");
$8=$recv(html)._span();
$recv($8)._class_($recv(aTab)._cssClass());
$9=$8;
$10=$recv(aTab)._label();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["label"]=1;
//>>excludeEnd("ctx");
$recv($9)._title_($10);
$11=$recv($8)._with_($recv(aTab)._label());
return $11;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$12=$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aTab)._activate();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,6)});
//>>excludeEnd("ctx");
}));
li=$12;
$recv($recv($recv(li)._asJQuery())._get_((0)))._at_put_("tab-data",aTab);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderTab:on:",{aTab:aTab,html:html,li:li},$globals.HLTabsWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTab", "html"],
source: "renderTab: aTab on: html\x0a\x09| li |\x0a\x09li := html li \x0a\x09\x09style: 'width: ', self tabWidth asString, 'px';\x0a\x09\x09class: (aTab isActive ifTrue: [ 'tab active' ] ifFalse: [ 'tab inactive' ]);\x0a\x09\x09with: [\x0a\x09\x09\x09html a\x0a\x09\x09\x09with: [\x0a\x09\x09\x09\x09((html tag: 'i') class: 'close')\x0a\x09\x09\x09\x09\x09onClick: [ self removeTab: aTab ].\x0a\x09\x09\x09\x09html span \x0a\x09\x09\x09\x09\x09class: aTab cssClass;\x0a\x09\x09\x09\x09\x09title: aTab label;\x0a\x09\x09\x09\x09\x09with: aTab label ] ];\x0a\x09\x09onClick: [ aTab activate ].\x0a\x09\x0a\x09(li asJQuery get: 0) at: 'tab-data' put: aTab",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["style:", "li", ",", "asString", "tabWidth", "class:", "ifTrue:ifFalse:", "isActive", "with:", "a", "onClick:", "tag:", "removeTab:", "span", "cssClass", "title:", "label", "activate", "at:put:", "get:", "asJQuery"]
}),
$globals.HLTabsWidget);

$core.addMethod(
$core.method({
selector: "renderTabsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var ul;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._ul();
$recv($1)._class_("nav main-tabs");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._tabs())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._renderTab_on_(each,html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
ul=$2;
$recv($recv(ul)._asJQuery())._sortable_($globals.HashedCollection._newFromPairs_(["containment","parent","start",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._disableSelection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}),"stop",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._enableSelection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)});
//>>excludeEnd("ctx");
}))._valueWithTimeout_((300));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
}),"update",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._updateTabsOrder();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,6)});
//>>excludeEnd("ctx");
})]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderTabsOn:",{html:html,ul:ul},$globals.HLTabsWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderTabsOn: html\x0a\x09| ul |\x0a\x09ul := html ul \x0a\x09\x09class: 'nav main-tabs';\x0a\x09\x09with: [ \x0a        \x09self tabs do: [ :each |\x0a\x09\x09\x09\x09self renderTab: each on: html ] ].\x0a\x09\x09\x0a\x09ul asJQuery sortable: #{\x0a\x09\x09'containment' -> 'parent'.\x0a\x09\x09'start' -> [ self disableSelection ].\x0a\x09\x09'stop' -> [ [ self enableSelection] valueWithTimeout: 300 ].\x0a\x09\x09'update' -> [ self updateTabsOrder ]\x0a\x09}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "ul", "with:", "do:", "tabs", "renderTab:on:", "sortable:", "asJQuery", "disableSelection", "valueWithTimeout:", "enableSelection", "updateTabsOrder"]
}),
$globals.HLTabsWidget);

$core.addMethod(
$core.method({
selector: "setupEvents",
protocol: 'private',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1,$4;
$recv("body"._asJQuery())._keydown_((function(event){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(event)._ctrlKey();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["ctrlKey"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$3=$recv(event)._which();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["which"]=1;
//>>excludeEnd("ctx");
return $recv($3).__eq((188));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["="]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["and:"]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
self._activatePreviousTab();
$recv(event)._preventDefault();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["preventDefault"]=1;
//>>excludeEnd("ctx");
};
$4=$recv($recv(event)._ctrlKey())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(event)._which()).__eq((190));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)});
//>>excludeEnd("ctx");
}));
if($core.assert($4)){
self._activateNextTab();
return $recv(event)._preventDefault();
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupEvents",{},$globals.HLTabsWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupEvents\x0a\x09'body' asJQuery keydown: [ :event |\x0a\x09\x0a\x09\x09\x22ctrl+> and ctrl+<\x22\x0a\x09\x09(event ctrlKey and: [ event which = 188 ]) ifTrue: [\x0a\x09\x09\x09self activatePreviousTab.\x0a\x09\x09\x09event preventDefault ].\x0a\x09\x09(event ctrlKey and: [ event which = 190 ]) ifTrue: [\x0a\x09\x09\x09self activateNextTab.\x0a\x09\x09\x09event preventDefault ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["keydown:", "asJQuery", "ifTrue:", "and:", "ctrlKey", "=", "which", "activatePreviousTab", "preventDefault", "activateNextTab"]
}),
$globals.HLTabsWidget);

$core.addMethod(
$core.method({
selector: "show:",
protocol: 'rendering',
fn: function (aTab){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$recv(self._tabs())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._hide();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(aTab)._show();
$1=$recv(aTab)._focus();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"show:",{aTab:aTab},$globals.HLTabsWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTab"],
source: "show: aTab\x0a\x09self tabs do: [ :each | each hide ].\x0a\x09aTab show; focus",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "tabs", "hide", "show", "focus"]
}),
$globals.HLTabsWidget);

$core.addMethod(
$core.method({
selector: "tabWidth",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($recv($recv(window)._asJQuery())._width()).__minus((90))).__slash($recv(self._tabs())._size());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tabWidth",{},$globals.HLTabsWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tabWidth\x0a\x09^ (window asJQuery width - 90) / self tabs size",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["/", "-", "width", "asJQuery", "size", "tabs"]
}),
$globals.HLTabsWidget);

$core.addMethod(
$core.method({
selector: "tabs",
protocol: 'accessing',
fn: function (){
var self=this;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@tabs"];
if(($receiver = $2) == null || $receiver.isNil){
self["@tabs"]=$recv($OrderedCollection())._new();
$1=self["@tabs"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tabs",{},$globals.HLTabsWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tabs\x0a\x09^ tabs ifNil: [ tabs := OrderedCollection new ]",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.HLTabsWidget);

$core.addMethod(
$core.method({
selector: "updateTabsOrder",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@tabs"]=$recv($recv(".main-tabs li"._asJQuery())._toArray())._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._at_("tab-data");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateTabsOrder",{},$globals.HLTabsWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateTabsOrder\x0a\x09tabs := '.main-tabs li' asJQuery toArray \x0a\x09\x09collect: [ :each | each at: 'tab-data' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["collect:", "toArray", "asJQuery", "at:"]
}),
$globals.HLTabsWidget);


$globals.HLTabsWidget.klass.iVarNames = ['current'];

$core.addClass('HLWelcomeWidget', $globals.HLWidget, [], 'Helios-Core');
$core.addMethod(
$core.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "welcome";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cssClass\x0a\x09^ 'welcome'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLWelcomeWidget);

$core.addMethod(
$core.method({
selector: "openClassBrowser",
protocol: 'actions',
fn: function (){
var self=this;
function $HLBrowser(){return $globals.HLBrowser||(typeof HLBrowser=="undefined"?nil:HLBrowser)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($HLBrowser())._openAsTab();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"openClassBrowser",{},$globals.HLWelcomeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "openClassBrowser\x0a\x09HLBrowser openAsTab",
referencedClasses: ["HLBrowser"],
//>>excludeEnd("ide");
messageSends: ["openAsTab"]
}),
$globals.HLWelcomeWidget);

$core.addMethod(
$core.method({
selector: "openHelp",
protocol: 'actions',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "openHelp",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLWelcomeWidget);

$core.addMethod(
$core.method({
selector: "openTestRunner",
protocol: 'actions',
fn: function (){
var self=this;
function $HLSUnit(){return $globals.HLSUnit||(typeof HLSUnit=="undefined"?nil:HLSUnit)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($HLSUnit())._openAsTab();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"openTestRunner",{},$globals.HLWelcomeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "openTestRunner\x0a\x09HLSUnit openAsTab",
referencedClasses: ["HLSUnit"],
//>>excludeEnd("ide");
messageSends: ["openAsTab"]
}),
$globals.HLWelcomeWidget);

$core.addMethod(
$core.method({
selector: "openWorkspace",
protocol: 'actions',
fn: function (){
var self=this;
function $HLWorkspace(){return $globals.HLWorkspace||(typeof HLWorkspace=="undefined"?nil:HLWorkspace)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($HLWorkspace())._openAsTab();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"openWorkspace",{},$globals.HLWelcomeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "openWorkspace\x0a\x09HLWorkspace openAsTab",
referencedClasses: ["HLWorkspace"],
//>>excludeEnd("ide");
messageSends: ["openAsTab"]
}),
$globals.HLWelcomeWidget);

$core.addMethod(
$core.method({
selector: "renderButtonsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6;
$1=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["button"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_("button");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$recv($1)._with_("Class Browser");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._openClassBrowser();
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
$recv($3)._with_("Workspace");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$4=$recv($3)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._openWorkspace();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["onClick:"]=2;
//>>excludeEnd("ctx");
$5=$recv(html)._button();
$recv($5)._class_("button");
$recv($5)._with_("Test Runner");
$6=$recv($5)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._openTestRunner();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},$globals.HLWelcomeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderButtonsOn: html\x0a\x09html button\x0a\x09\x09class: 'button';\x0a\x09\x09with: 'Class Browser';\x0a\x09\x09onClick: [ self openClassBrowser ].\x0a\x09html button\x0a\x09\x09class: 'button';\x0a\x09\x09with: 'Workspace';\x0a\x09\x09onClick: [ self openWorkspace ].\x0a\x09html button\x0a\x09\x09class: 'button';\x0a\x09\x09with: 'Test Runner';\x0a\x09\x09onClick: [ self openTestRunner ].\x0a\x09\x22html button\x0a\x09\x09class: 'button';\x0a\x09\x09with: 'Help';\x0a\x09\x09onClick: [ self openHelp ]\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "button", "with:", "onClick:", "openClassBrowser", "openWorkspace", "openTestRunner"]
}),
$globals.HLWelcomeWidget);

$core.addMethod(
$core.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._renderHelpOn_(html);
$1=self._renderButtonsOn_(html);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},$globals.HLWelcomeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderContentOn: html\x0a\x09self\x0a\x09\x09renderHelpOn: html;\x0a\x09\x09renderButtonsOn: html",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["renderHelpOn:", "renderButtonsOn:"]
}),
$globals.HLWelcomeWidget);

$core.addMethod(
$core.method({
selector: "renderHelpOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$recv($recv(html)._h2())._with_("No tools are open");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$recv($recv(html)._ul())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(html)._li();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["li"]=1;
//>>excludeEnd("ctx");
$recv($1)._with_("Perform actions with  ctrl + space");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
return $recv($recv(html)._li())._with_("Open one of the common tools:");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderHelpOn:",{html:html},$globals.HLWelcomeWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderHelpOn: html\x0a\x09html h2 with: 'No tools are open'.\x0a\x09html ul with: [\x0a\x09\x09html li with: 'Perform actions with  ctrl + space'.\x0a\x09\x09html li with: 'Open one of the common tools:' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "h2", "ul", "li"]
}),
$globals.HLWelcomeWidget);


});
