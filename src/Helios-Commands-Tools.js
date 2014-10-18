define("helios/Helios-Commands-Tools", ["amber/boot", "helios/Helios-Commands-Core"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Helios-Commands-Tools');
$core.packages["Helios-Commands-Tools"].transport = {"type":"amd","amdNamespace":"helios"};

$core.addClass('HLToolCommand', $globals.HLModelCommand, [], 'Helios-Commands-Tools');
$core.addMethod(
$core.method({
selector: "category",
protocol: 'accessing',
fn: function (){
var self=this;
return nil;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "category\x0a\x09^ nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLToolCommand);


$core.addMethod(
$core.method({
selector: "for:",
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
}, function($ctx1) {$ctx1.fill(self,"for:",{aToolModel:aToolModel},$globals.HLToolCommand.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aToolModel"],
source: "for: aToolModel\x0a\x09^ self new\x0a    \x09model: aToolModel;\x0a        yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["model:", "new", "yourself"]
}),
$globals.HLToolCommand.klass);

$core.addMethod(
$core.method({
selector: "isValidFor:",
protocol: 'testing',
fn: function (aModel){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aModel)._isToolModel();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isValidFor:",{aModel:aModel},$globals.HLToolCommand.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aModel"],
source: "isValidFor: aModel\x0a\x09^ aModel isToolModel",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["isToolModel"]
}),
$globals.HLToolCommand.klass);


$core.addClass('HLBrowseMethodCommand', $globals.HLToolCommand, [], 'Helios-Commands-Tools');
$core.addMethod(
$core.method({
selector: "displayLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "browse method";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "displayLabel\x0a\x09^ 'browse method'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLBrowseMethodCommand);

$core.addMethod(
$core.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._model())._openMethod();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"execute",{},$globals.HLBrowseMethodCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "execute\x0a\x09self model openMethod",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["openMethod", "model"]
}),
$globals.HLBrowseMethodCommand);


$core.addMethod(
$core.method({
selector: "isValidFor:",
protocol: 'testing',
fn: function (aModel){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aModel)._isReferencesModel();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isValidFor:",{aModel:aModel},$globals.HLBrowseMethodCommand.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aModel"],
source: "isValidFor: aModel\x0a\x09^ aModel isReferencesModel",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["isReferencesModel"]
}),
$globals.HLBrowseMethodCommand.klass);

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
$globals.HLBrowseMethodCommand.klass);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "browse method";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'browse method'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLBrowseMethodCommand.klass);


$core.addClass('HLCommitPackageCommand', $globals.HLToolCommand, [], 'Helios-Commands-Tools');
$core.addMethod(
$core.method({
selector: "category",
protocol: 'accessing',
fn: function (){
var self=this;
return "Packages";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "category\x0a\x09^ 'Packages'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLCommitPackageCommand);

$core.addMethod(
$core.method({
selector: "commitPackage",
protocol: 'executing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._model())._commitPackageOnSuccess_onError_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._informSuccess();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(error){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._onPackageCommitError_(error);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({error:error},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commitPackage",{},$globals.HLCommitPackageCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "commitPackage\x0a\x09self model \x0a\x09\x09commitPackageOnSuccess: [ self informSuccess ]\x0a\x09\x09onError: [ :error | self onPackageCommitError: error ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["commitPackageOnSuccess:onError:", "model", "informSuccess", "onPackageCommitError:"]
}),
$globals.HLCommitPackageCommand);

$core.addMethod(
$core.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._commitPackage();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"execute",{},$globals.HLCommitPackageCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "execute\x0a\x09self commitPackage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["commitPackage"]
}),
$globals.HLCommitPackageCommand);

$core.addMethod(
$core.method({
selector: "informSuccess",
protocol: 'executing',
fn: function (){
var self=this;
function $HLInformationWidget(){return $globals.HLInformationWidget||(typeof HLInformationWidget=="undefined"?nil:HLInformationWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($HLInformationWidget())._new();
$recv($1)._informationString_("Commit successful!");
$2=$recv($1)._show();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"informSuccess",{},$globals.HLCommitPackageCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "informSuccess\x0a\x09HLInformationWidget new\x0a\x09\x09informationString: 'Commit successful!';\x0a\x09\x09show",
referencedClasses: ["HLInformationWidget"],
//>>excludeEnd("ide");
messageSends: ["informationString:", "new", "show"]
}),
$globals.HLCommitPackageCommand);

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
source: "isActive\x0a\x09^ true\x0a\x09\x22self model isPackageDirty\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLCommitPackageCommand);

$core.addMethod(
$core.method({
selector: "onPackageCommitError:",
protocol: 'error handling',
fn: function (anError){
var self=this;
function $HLPackageCommitErrorHelper(){return $globals.HLPackageCommitErrorHelper||(typeof HLPackageCommitErrorHelper=="undefined"?nil:HLPackageCommitErrorHelper)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv($HLPackageCommitErrorHelper())._on_(self._model()))._showHelp();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onPackageCommitError:",{anError:anError},$globals.HLCommitPackageCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anError"],
source: "onPackageCommitError: anError\x0a\x09(HLPackageCommitErrorHelper on: self model)\x0a\x09\x09showHelp",
referencedClasses: ["HLPackageCommitErrorHelper"],
//>>excludeEnd("ide");
messageSends: ["showHelp", "on:", "model"]
}),
$globals.HLCommitPackageCommand);


$core.addMethod(
$core.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "k";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09^ 'k'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLCommitPackageCommand.klass);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Commit package";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'Commit package'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLCommitPackageCommand.klass);


$core.addClass('HLCopyCommand', $globals.HLToolCommand, [], 'Helios-Commands-Tools');

$core.addMethod(
$core.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "c";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09^ 'c'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLCopyCommand.klass);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Copy";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'Copy'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLCopyCommand.klass);


$core.addClass('HLCopyClassCommand', $globals.HLCopyCommand, [], 'Helios-Commands-Tools');
$core.addMethod(
$core.method({
selector: "category",
protocol: 'accessing',
fn: function (){
var self=this;
return "Classes";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "category\x0a\x09^ 'Classes'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLCopyClassCommand);

$core.addMethod(
$core.method({
selector: "defaultInput",
protocol: 'defaults',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($recv(self._model())._selectedClass())._theNonMetaClass())._name();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultInput",{},$globals.HLCopyClassCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultInput\x0a\x09^ self model selectedClass theNonMetaClass name",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["name", "theNonMetaClass", "selectedClass", "model"]
}),
$globals.HLCopyClassCommand);

$core.addMethod(
$core.method({
selector: "displayLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "New class name:";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "displayLabel\x0a\x09^ 'New class name:'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLCopyClassCommand);

$core.addMethod(
$core.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._model())._copyClassTo_(self._input());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"execute",{},$globals.HLCopyClassCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "execute\x0a\x09self model copyClassTo: self input",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["copyClassTo:", "model", "input"]
}),
$globals.HLCopyClassCommand);

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
$1=$recv($recv(self._model())._selectedClass())._notNil();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isActive",{},$globals.HLCopyClassCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isActive\x0a\x09^ self model selectedClass notNil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notNil", "selectedClass", "model"]
}),
$globals.HLCopyClassCommand);

$core.addMethod(
$core.method({
selector: "isInputRequired",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isInputRequired\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLCopyClassCommand);


$core.addMethod(
$core.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "c";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09^ 'c'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLCopyClassCommand.klass);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Copy class";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'Copy class'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLCopyClassCommand.klass);

$core.addMethod(
$core.method({
selector: "menuLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "Copy class...";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "menuLabel\x0a\x09^ 'Copy class...'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLCopyClassCommand.klass);


$core.addClass('HLFindCommand', $globals.HLToolCommand, [], 'Helios-Commands-Tools');

$core.addMethod(
$core.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "f";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09^ 'f'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLFindCommand.klass);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Find";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'Find'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLFindCommand.klass);


$core.addClass('HLFindClassCommand', $globals.HLFindCommand, [], 'Helios-Commands-Tools');
$core.addMethod(
$core.method({
selector: "displayLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "select a class";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "displayLabel\x0a\x09^ 'select a class'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLFindClassCommand);

$core.addMethod(
$core.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._model())._openClassNamed_(self._input());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"execute",{},$globals.HLFindClassCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "execute\x0a\x09self model openClassNamed: self input",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["openClassNamed:", "model", "input"]
}),
$globals.HLFindClassCommand);

$core.addMethod(
$core.method({
selector: "inputCompletion",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._model())._availableClassNames();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inputCompletion",{},$globals.HLFindClassCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inputCompletion\x0a\x09^ self model availableClassNames",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["availableClassNames", "model"]
}),
$globals.HLFindClassCommand);

$core.addMethod(
$core.method({
selector: "inputLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "Find a class";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inputLabel\x0a\x09^ 'Find a class'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLFindClassCommand);

$core.addMethod(
$core.method({
selector: "isInputRequired",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isInputRequired\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLFindClassCommand);


$core.addMethod(
$core.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "c";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09^ 'c'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLFindClassCommand.klass);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Find class";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'Find class'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLFindClassCommand.klass);


$core.addClass('HLFindReferencesCommand', $globals.HLFindCommand, [], 'Helios-Commands-Tools');
$core.addMethod(
$core.method({
selector: "defaultInput",
protocol: 'defaults',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$4,$1,$receiver;
$3=self._model();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["model"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._selectedMethod();
if(($receiver = $2) == null || $receiver.isNil){
$4=$recv(self._model())._selectedClass();
if(($receiver = $4) == null || $receiver.isNil){
$1="";
} else {
var class_;
class_=$receiver;
$1=$recv($recv(class_)._theNonMetaClass())._name();
};
} else {
var method;
method=$receiver;
$1=$recv(method)._selector();
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultInput",{},$globals.HLFindReferencesCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultInput\x0a\x09^ self model selectedMethod \x0a\x09\x09ifNil: [\x0a\x09\x09\x09self model selectedClass\x0a\x09\x09\x09\x09ifNil: [ '' ]\x0a\x09\x09\x09\x09ifNotNil: [ :class | class theNonMetaClass name ] ]\x0a\x09\x09ifNotNil: [ :method | method selector ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:ifNotNil:", "selectedMethod", "model", "selectedClass", "name", "theNonMetaClass", "selector"]
}),
$globals.HLFindReferencesCommand);

$core.addMethod(
$core.method({
selector: "displayLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "find references";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "displayLabel\x0a\x09^ 'find references'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLFindReferencesCommand);

$core.addMethod(
$core.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
function $HLReferences(){return $globals.HLReferences||(typeof HLReferences=="undefined"?nil:HLReferences)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($HLReferences())._new();
$recv($1)._openAsTab();
$2=$recv($1)._search_(self._input());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"execute",{},$globals.HLFindReferencesCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "execute\x0a\x09HLReferences new \x0a\x09\x09openAsTab;\x0a\x09\x09search: self input",
referencedClasses: ["HLReferences"],
//>>excludeEnd("ide");
messageSends: ["openAsTab", "new", "search:", "input"]
}),
$globals.HLFindReferencesCommand);

$core.addMethod(
$core.method({
selector: "inputCompletion",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$1;
$3=self._model();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["model"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._availableClassNames();
$1=$recv($2).__comma($recv(self._model())._allSelectors());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inputCompletion",{},$globals.HLFindReferencesCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inputCompletion\x0a\x09^ self model availableClassNames, self model allSelectors",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "availableClassNames", "model", "allSelectors"]
}),
$globals.HLFindReferencesCommand);

$core.addMethod(
$core.method({
selector: "inputLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "Find references of";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inputLabel\x0a\x09^ 'Find references of'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLFindReferencesCommand);

$core.addMethod(
$core.method({
selector: "isInputRequired",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isInputRequired\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLFindReferencesCommand);


$core.addMethod(
$core.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "r";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09^ 'r'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLFindReferencesCommand.klass);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Find references";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'Find references'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLFindReferencesCommand.klass);


$core.addClass('HLMoveToCommand', $globals.HLToolCommand, [], 'Helios-Commands-Tools');

$core.addMethod(
$core.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "m";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09^ 'm'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLMoveToCommand.klass);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Move";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'Move'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLMoveToCommand.klass);


$core.addClass('HLMoveClassToCommand', $globals.HLMoveToCommand, [], 'Helios-Commands-Tools');
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
$1=$recv($recv(self._model())._selectedClass())._notNil();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isActive",{},$globals.HLMoveClassToCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isActive\x0a\x09^ self model selectedClass notNil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notNil", "selectedClass", "model"]
}),
$globals.HLMoveClassToCommand);


$core.addMethod(
$core.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "c";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09^ 'c'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLMoveClassToCommand.klass);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Move class";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'Move class'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLMoveClassToCommand.klass);


$core.addClass('HLMoveClassToPackageCommand', $globals.HLMoveClassToCommand, [], 'Helios-Commands-Tools');
$core.addMethod(
$core.method({
selector: "category",
protocol: 'accessing',
fn: function (){
var self=this;
return "Classes";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "category\x0a\x09^ 'Classes'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLMoveClassToPackageCommand);

$core.addMethod(
$core.method({
selector: "displayLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "select a package";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "displayLabel\x0a\x09^ 'select a package'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLMoveClassToPackageCommand);

$core.addMethod(
$core.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._model())._moveClassToPackage_(self._input());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"execute",{},$globals.HLMoveClassToPackageCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "execute\x0a\x09self model moveClassToPackage: self input",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["moveClassToPackage:", "model", "input"]
}),
$globals.HLMoveClassToPackageCommand);

$core.addMethod(
$core.method({
selector: "inputCompletion",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._model())._availablePackageNames();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inputCompletion",{},$globals.HLMoveClassToPackageCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inputCompletion\x0a\x09^ self model availablePackageNames",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["availablePackageNames", "model"]
}),
$globals.HLMoveClassToPackageCommand);

$core.addMethod(
$core.method({
selector: "inputLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "Move class to package:";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inputLabel\x0a\x09^ 'Move class to package:'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLMoveClassToPackageCommand);

$core.addMethod(
$core.method({
selector: "isInputRequired",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isInputRequired\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLMoveClassToPackageCommand);


$core.addMethod(
$core.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "p";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09^ 'p'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLMoveClassToPackageCommand.klass);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Move class to package";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'Move class to package'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLMoveClassToPackageCommand.klass);

$core.addMethod(
$core.method({
selector: "menuLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "Move to package...";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "menuLabel\x09\x0a\x09^ 'Move to package...'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLMoveClassToPackageCommand.klass);


$core.addClass('HLMoveMethodToCommand', $globals.HLMoveToCommand, [], 'Helios-Commands-Tools');
$core.addMethod(
$core.method({
selector: "category",
protocol: 'accessing',
fn: function (){
var self=this;
return "Methods";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "category\x0a\x09^ 'Methods'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLMoveMethodToCommand);

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
$1=$recv($recv(self._model())._selectedMethod())._notNil();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isActive",{},$globals.HLMoveMethodToCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isActive\x0a\x09^ self model selectedMethod notNil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notNil", "selectedMethod", "model"]
}),
$globals.HLMoveMethodToCommand);


$core.addMethod(
$core.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "m";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09^ 'm'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLMoveMethodToCommand.klass);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Move method";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'Move method'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLMoveMethodToCommand.klass);


$core.addClass('HLMoveMethodToClassCommand', $globals.HLMoveMethodToCommand, [], 'Helios-Commands-Tools');
$core.addMethod(
$core.method({
selector: "displayLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "select a class";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "displayLabel\x0a\x09^ 'select a class'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLMoveMethodToClassCommand);

$core.addMethod(
$core.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._model())._moveMethodToClass_(self._input());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"execute",{},$globals.HLMoveMethodToClassCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "execute\x0a\x09self model moveMethodToClass: self input",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["moveMethodToClass:", "model", "input"]
}),
$globals.HLMoveMethodToClassCommand);

$core.addMethod(
$core.method({
selector: "inputCompletion",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._model())._availableClassNames();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inputCompletion",{},$globals.HLMoveMethodToClassCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inputCompletion\x0a\x09^ self model availableClassNames",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["availableClassNames", "model"]
}),
$globals.HLMoveMethodToClassCommand);

$core.addMethod(
$core.method({
selector: "inputLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "Move method to class:";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inputLabel\x0a\x09^ 'Move method to class:'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLMoveMethodToClassCommand);

$core.addMethod(
$core.method({
selector: "isInputRequired",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isInputRequired\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLMoveMethodToClassCommand);


$core.addMethod(
$core.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "c";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09^ 'c'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLMoveMethodToClassCommand.klass);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Move method to class";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x09\x0a\x09^ 'Move method to class'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLMoveMethodToClassCommand.klass);

$core.addMethod(
$core.method({
selector: "menuLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "Move to class...";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "menuLabel\x09\x0a\x09^ 'Move to class...'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLMoveMethodToClassCommand.klass);


$core.addClass('HLMoveMethodToProtocolCommand', $globals.HLMoveMethodToCommand, [], 'Helios-Commands-Tools');
$core.addMethod(
$core.method({
selector: "displayLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "select a protocol";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "displayLabel\x0a\x09^ 'select a protocol'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLMoveMethodToProtocolCommand);

$core.addMethod(
$core.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._model())._moveMethodToProtocol_(self._input());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"execute",{},$globals.HLMoveMethodToProtocolCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "execute\x0a\x09self model moveMethodToProtocol: self input",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["moveMethodToProtocol:", "model", "input"]
}),
$globals.HLMoveMethodToProtocolCommand);

$core.addMethod(
$core.method({
selector: "inputCompletion",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._model())._availableProtocols();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inputCompletion",{},$globals.HLMoveMethodToProtocolCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inputCompletion\x0a\x09^ self model availableProtocols",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["availableProtocols", "model"]
}),
$globals.HLMoveMethodToProtocolCommand);

$core.addMethod(
$core.method({
selector: "inputLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "Move method to a protocol:";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inputLabel\x0a\x09^ 'Move method to a protocol:'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLMoveMethodToProtocolCommand);

$core.addMethod(
$core.method({
selector: "isInputRequired",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isInputRequired\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLMoveMethodToProtocolCommand);


$core.addMethod(
$core.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "t";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09^ 't'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLMoveMethodToProtocolCommand.klass);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Move method to protocol";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'Move method to protocol'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLMoveMethodToProtocolCommand.klass);

$core.addMethod(
$core.method({
selector: "menuLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "Move to protocol...";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "menuLabel\x0a\x09^ 'Move to protocol...'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLMoveMethodToProtocolCommand.klass);


$core.addClass('HLRemoveCommand', $globals.HLToolCommand, [], 'Helios-Commands-Tools');

$core.addMethod(
$core.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "x";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09^ 'x'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLRemoveCommand.klass);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Remove";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'Remove'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLRemoveCommand.klass);


$core.addClass('HLRemoveClassCommand', $globals.HLRemoveCommand, [], 'Helios-Commands-Tools');
$core.addMethod(
$core.method({
selector: "category",
protocol: 'accessing',
fn: function (){
var self=this;
return "Classes";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "category\x0a\x09^ 'Classes'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLRemoveClassCommand);

$core.addMethod(
$core.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._model())._removeClass();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"execute",{},$globals.HLRemoveClassCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "execute\x0a\x09self model removeClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeClass", "model"]
}),
$globals.HLRemoveClassCommand);

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
$1=$recv($recv(self._model())._selectedClass())._notNil();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isActive",{},$globals.HLRemoveClassCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isActive\x0a\x09^ self model selectedClass notNil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notNil", "selectedClass", "model"]
}),
$globals.HLRemoveClassCommand);


$core.addMethod(
$core.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "c";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09^ 'c'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLRemoveClassCommand.klass);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Remove class";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'Remove class'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLRemoveClassCommand.klass);

$core.addMethod(
$core.method({
selector: "menuLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "Remove class";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "menuLabel\x0a\x09^ 'Remove class'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLRemoveClassCommand.klass);


$core.addClass('HLRemoveMethodCommand', $globals.HLRemoveCommand, [], 'Helios-Commands-Tools');
$core.addMethod(
$core.method({
selector: "category",
protocol: 'accessing',
fn: function (){
var self=this;
return "Methods";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "category\x0a\x09^ 'Methods'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLRemoveMethodCommand);

$core.addMethod(
$core.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._model())._removeMethod();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"execute",{},$globals.HLRemoveMethodCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "execute\x0a\x09self model removeMethod",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeMethod", "model"]
}),
$globals.HLRemoveMethodCommand);

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
$1=$recv($recv(self._model())._selectedMethod())._notNil();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isActive",{},$globals.HLRemoveMethodCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isActive\x0a\x09^ self model selectedMethod notNil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notNil", "selectedMethod", "model"]
}),
$globals.HLRemoveMethodCommand);


$core.addMethod(
$core.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "m";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09^ 'm'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLRemoveMethodCommand.klass);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Remove method";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'Remove method'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLRemoveMethodCommand.klass);

$core.addMethod(
$core.method({
selector: "menuLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "Remove method";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "menuLabel\x0a\x09^ 'Remove method'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLRemoveMethodCommand.klass);


$core.addClass('HLRemoveProtocolCommand', $globals.HLRemoveCommand, [], 'Helios-Commands-Tools');
$core.addMethod(
$core.method({
selector: "category",
protocol: 'accessing',
fn: function (){
var self=this;
return "Protocols";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "category\x0a\x09^ 'Protocols'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLRemoveProtocolCommand);

$core.addMethod(
$core.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._model())._removeProtocol();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"execute",{},$globals.HLRemoveProtocolCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "execute\x0a\x09self model removeProtocol",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeProtocol", "model"]
}),
$globals.HLRemoveProtocolCommand);

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
$1=$recv($recv(self._model())._selectedProtocol())._notNil();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isActive",{},$globals.HLRemoveProtocolCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isActive\x0a\x09^ self model selectedProtocol notNil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notNil", "selectedProtocol", "model"]
}),
$globals.HLRemoveProtocolCommand);


$core.addMethod(
$core.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "t";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09^ 't'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLRemoveProtocolCommand.klass);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Remove protocol";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'Remove protocol'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLRemoveProtocolCommand.klass);

$core.addMethod(
$core.method({
selector: "menuLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "Remove protocol";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "menuLabel\x0a\x09^ 'Remove protocol'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLRemoveProtocolCommand.klass);


$core.addClass('HLRenameCommand', $globals.HLToolCommand, [], 'Helios-Commands-Tools');

$core.addMethod(
$core.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "r";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09^ 'r'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLRenameCommand.klass);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Rename";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'Rename'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLRenameCommand.klass);


$core.addClass('HLRenameClassCommand', $globals.HLRenameCommand, [], 'Helios-Commands-Tools');
$core.addMethod(
$core.method({
selector: "category",
protocol: 'accessing',
fn: function (){
var self=this;
return "Classes";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "category\x0a\x09^ 'Classes'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLRenameClassCommand);

$core.addMethod(
$core.method({
selector: "defaultInput",
protocol: 'defaults',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($recv(self._model())._selectedClass())._theNonMetaClass())._name();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultInput",{},$globals.HLRenameClassCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultInput\x0a\x09^ self model selectedClass theNonMetaClass name",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["name", "theNonMetaClass", "selectedClass", "model"]
}),
$globals.HLRenameClassCommand);

$core.addMethod(
$core.method({
selector: "displayLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "Rename class to:";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "displayLabel\x0a\x09^ 'Rename class to:'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLRenameClassCommand);

$core.addMethod(
$core.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._model())._renameClassTo_(self._input());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"execute",{},$globals.HLRenameClassCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "execute\x0a\x09self model renameClassTo: self input",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["renameClassTo:", "model", "input"]
}),
$globals.HLRenameClassCommand);

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
$1=$recv($recv(self._model())._selectedClass())._notNil();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isActive",{},$globals.HLRenameClassCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isActive\x0a\x09^ self model selectedClass notNil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notNil", "selectedClass", "model"]
}),
$globals.HLRenameClassCommand);

$core.addMethod(
$core.method({
selector: "isInputRequired",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isInputRequired\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLRenameClassCommand);


$core.addMethod(
$core.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "c";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09^ 'c'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLRenameClassCommand.klass);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Rename class";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'Rename class'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLRenameClassCommand.klass);

$core.addMethod(
$core.method({
selector: "menuLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "Rename class...";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "menuLabel\x0a\x09^ 'Rename class...'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLRenameClassCommand.klass);


$core.addClass('HLRenameProtocolCommand', $globals.HLRenameCommand, [], 'Helios-Commands-Tools');
$core.addMethod(
$core.method({
selector: "category",
protocol: 'accessing',
fn: function (){
var self=this;
return "Protocols";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "category\x0a\x09^ 'Protocols'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLRenameProtocolCommand);

$core.addMethod(
$core.method({
selector: "defaultInput",
protocol: 'defaults',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._model())._selectedProtocol();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultInput",{},$globals.HLRenameProtocolCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultInput\x0a\x09^ self model selectedProtocol",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selectedProtocol", "model"]
}),
$globals.HLRenameProtocolCommand);

$core.addMethod(
$core.method({
selector: "displayLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "Rename protocol to:";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "displayLabel\x0a\x09^ 'Rename protocol to:'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLRenameProtocolCommand);

$core.addMethod(
$core.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._model())._renameProtocolTo_(self._input());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"execute",{},$globals.HLRenameProtocolCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "execute\x0a\x09self model renameProtocolTo: self input",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["renameProtocolTo:", "model", "input"]
}),
$globals.HLRenameProtocolCommand);

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
$1=$recv($recv(self._model())._selectedProtocol())._notNil();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isActive",{},$globals.HLRenameProtocolCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isActive\x0a\x09^ self model selectedProtocol notNil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notNil", "selectedProtocol", "model"]
}),
$globals.HLRenameProtocolCommand);

$core.addMethod(
$core.method({
selector: "isInputRequired",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isInputRequired\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLRenameProtocolCommand);


$core.addMethod(
$core.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "t";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09^ 't'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLRenameProtocolCommand.klass);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Rename protocol";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'Rename protocol'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLRenameProtocolCommand.klass);

$core.addMethod(
$core.method({
selector: "menuLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "Rename protocol...";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "menuLabel\x0a\x09^ 'Rename protocol...'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLRenameProtocolCommand.klass);

});
