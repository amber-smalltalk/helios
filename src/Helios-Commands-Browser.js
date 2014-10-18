define("helios/Helios-Commands-Browser", ["amber/boot", "helios/Helios-Commands-Tools"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Helios-Commands-Browser');
$core.packages["Helios-Commands-Browser"].transport = {"type":"amd","amdNamespace":"helios"};

$core.addClass('HLBrowserCommand', $globals.HLToolCommand, [], 'Helios-Commands-Browser');

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
$1=$recv(aModel)._isBrowserModel();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isValidFor:",{aModel:aModel},$globals.HLBrowserCommand.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aModel"],
source: "isValidFor: aModel\x0a\x09^ aModel isBrowserModel",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["isBrowserModel"]
}),
$globals.HLBrowserCommand.klass);


$core.addClass('HLBrowserGoToCommand', $globals.HLBrowserCommand, [], 'Helios-Commands-Browser');

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
$1=$recv(aModel)._isBrowserModel();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isValidFor:",{aModel:aModel},$globals.HLBrowserGoToCommand.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aModel"],
source: "isValidFor: aModel\x0a\x09^ aModel isBrowserModel",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["isBrowserModel"]
}),
$globals.HLBrowserGoToCommand.klass);

$core.addMethod(
$core.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "g";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09^ 'g'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLBrowserGoToCommand.klass);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Go to";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'Go to'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLBrowserGoToCommand.klass);


$core.addClass('HLGoToClassesCommand', $globals.HLBrowserGoToCommand, [], 'Helios-Commands-Browser');
$core.addMethod(
$core.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._model())._focusOnClasses();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"execute",{},$globals.HLGoToClassesCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "execute\x0a\x09self model focusOnClasses",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["focusOnClasses", "model"]
}),
$globals.HLGoToClassesCommand);


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
$globals.HLGoToClassesCommand.klass);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Classes";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'Classes'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLGoToClassesCommand.klass);


$core.addClass('HLGoToDocumentationCommand', $globals.HLBrowserGoToCommand, [], 'Helios-Commands-Browser');
$core.addMethod(
$core.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._model())._focusOnDocumentation();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"execute",{},$globals.HLGoToDocumentationCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "execute\x0a\x09self model focusOnDocumentation",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["focusOnDocumentation", "model"]
}),
$globals.HLGoToDocumentationCommand);


$core.addMethod(
$core.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "d";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09^ 'd'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLGoToDocumentationCommand.klass);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Documentation";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'Documentation'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLGoToDocumentationCommand.klass);


$core.addClass('HLGoToMethodsCommand', $globals.HLBrowserGoToCommand, [], 'Helios-Commands-Browser');
$core.addMethod(
$core.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._model())._focusOnMethods();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"execute",{},$globals.HLGoToMethodsCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "execute\x0a\x09self model focusOnMethods",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["focusOnMethods", "model"]
}),
$globals.HLGoToMethodsCommand);


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
$globals.HLGoToMethodsCommand.klass);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Methods";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'Methods'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLGoToMethodsCommand.klass);


$core.addClass('HLGoToPackagesCommand', $globals.HLBrowserGoToCommand, [], 'Helios-Commands-Browser');
$core.addMethod(
$core.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._model())._focusOnPackages();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"execute",{},$globals.HLGoToPackagesCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "execute\x0a\x09self model focusOnPackages",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["focusOnPackages", "model"]
}),
$globals.HLGoToPackagesCommand);


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
$globals.HLGoToPackagesCommand.klass);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Packages";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'Packages'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLGoToPackagesCommand.klass);


$core.addClass('HLGoToProtocolsCommand', $globals.HLBrowserGoToCommand, [], 'Helios-Commands-Browser');
$core.addMethod(
$core.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._model())._focusOnProtocols();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"execute",{},$globals.HLGoToProtocolsCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "execute\x0a\x09self model focusOnProtocols",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["focusOnProtocols", "model"]
}),
$globals.HLGoToProtocolsCommand);


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
$globals.HLGoToProtocolsCommand.klass);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Protocols";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'Protocols'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLGoToProtocolsCommand.klass);


$core.addClass('HLGoToSourceCodeCommand', $globals.HLBrowserGoToCommand, [], 'Helios-Commands-Browser');
$core.addMethod(
$core.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._model())._focusOnSourceCode();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"execute",{},$globals.HLGoToSourceCodeCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "execute\x0a\x09self model focusOnSourceCode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["focusOnSourceCode", "model"]
}),
$globals.HLGoToSourceCodeCommand);


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
$globals.HLGoToSourceCodeCommand.klass);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Source code";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'Source code'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLGoToSourceCodeCommand.klass);


$core.addClass('HLEditCommentCommand', $globals.HLBrowserCommand, [], 'Helios-Commands-Browser');
$core.addMethod(
$core.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._model())._editComment();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"execute",{},$globals.HLEditCommentCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "execute\x0a\x09self model editComment",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["editComment", "model"]
}),
$globals.HLEditCommentCommand);

$core.addMethod(
$core.method({
selector: "isActive",
protocol: 'testing',
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
$2=$recv($3)._showComment();
$1=$recv($2)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(self._model())._selectedClass())._notNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isActive",{},$globals.HLEditCommentCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isActive\x0a\x09^ self model showComment and: [ self model selectedClass notNil ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["and:", "showComment", "model", "notNil", "selectedClass"]
}),
$globals.HLEditCommentCommand);


$core.addMethod(
$core.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "d";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09^ 'd'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLEditCommentCommand.klass);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Edit documentation";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'Edit documentation'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLEditCommentCommand.klass);


$core.addClass('HLGenerateCommand', $globals.HLBrowserCommand, [], 'Helios-Commands-Browser');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLGenerateCommand.comment="I am a group command used to gather all the commands generating code (`accessors`, `initialize`, etc)";
//>>excludeEnd("ide");

$core.addMethod(
$core.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "h";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09^ 'h'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLGenerateCommand.klass);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Generate";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'Generate'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLGenerateCommand.klass);


$core.addClass('HLCategorizeUnclassifiedCommand', $globals.HLGenerateCommand, [], 'Helios-Commands-Browser');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLCategorizeUnclassifiedCommand.comment="I am the command used to categorize unclassified methods";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
var targetClass,unclassified;
function $HLMethodClassifier(){return $globals.HLMethodClassifier||(typeof HLMethodClassifier=="undefined"?nil:HLMethodClassifier)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
targetClass=$recv(self._model())._selectedClass();
unclassified=$recv($recv(targetClass)._methods())._select_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(e)._protocol()).__eq("as yet unclassified");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv($recv($HLMethodClassifier())._new())._classifyAll_(unclassified);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"execute",{targetClass:targetClass,unclassified:unclassified},$globals.HLCategorizeUnclassifiedCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "execute\x0a\x09| targetClass unclassified |\x0a\x09targetClass := self model selectedClass.\x0a\x0a\x09unclassified := targetClass methods select:[ :e | e protocol = 'as yet unclassified' ].\x0a\x09\x09\x0a\x09HLMethodClassifier new\x0a\x09\x09classifyAll: unclassified",
referencedClasses: ["HLMethodClassifier"],
//>>excludeEnd("ide");
messageSends: ["selectedClass", "model", "select:", "methods", "=", "protocol", "classifyAll:", "new"]
}),
$globals.HLCategorizeUnclassifiedCommand);


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
$globals.HLCategorizeUnclassifiedCommand.klass);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Categorize";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'Categorize'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLCategorizeUnclassifiedCommand.klass);


$core.addClass('HLGenerateAccessorsCommand', $globals.HLGenerateCommand, [], 'Helios-Commands-Browser');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLGenerateAccessorsCommand.comment="I am the command used to generate the `getter` and the `setter` methods depending of the selected class";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
var targetClass,output,first;
function $HLInitializeGenerator(){return $globals.HLInitializeGenerator||(typeof HLInitializeGenerator=="undefined"?nil:HLInitializeGenerator)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5;
$1=self._model();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["model"]=1;
//>>excludeEnd("ctx");
targetClass=$recv($1)._selectedClass();
$2=$recv($HLInitializeGenerator())._new();
$recv($2)._class_(targetClass);
$recv($2)._generate();
$3=$recv($2)._output();
output=$3;
$recv(output)._compile();
first=$recv($recv(output)._sourceCodes())._first();
$4=self._model();
$recv($4)._selectedProtocol_($recv(output)._protocol());
$recv($4)._selectedMethod_($recv(targetClass).__gt_gt($recv(first)._selector()));
$5=$recv($4)._focusOnSourceCode();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"execute",{targetClass:targetClass,output:output,first:first},$globals.HLGenerateAccessorsCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "execute\x0a\x09| targetClass output first |\x0a\x09targetClass := self model selectedClass.\x0a\x0a\x09output := HLInitializeGenerator new\x0a\x09\x09class: targetClass;\x0a\x09\x09generate;\x0a\x09\x09output.\x0a\x09\x09\x0a\x09output compile.\x0a\x09first := output sourceCodes first.\x0a\x09self model\x0a\x09\x09selectedProtocol: output protocol;\x0a\x09\x09selectedMethod:(targetClass>>first selector);\x0a\x09\x09focusOnSourceCode",
referencedClasses: ["HLInitializeGenerator"],
//>>excludeEnd("ide");
messageSends: ["selectedClass", "model", "class:", "new", "generate", "output", "compile", "first", "sourceCodes", "selectedProtocol:", "protocol", "selectedMethod:", ">>", "selector", "focusOnSourceCode"]
}),
$globals.HLGenerateAccessorsCommand);


$core.addMethod(
$core.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "i";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09^ 'i'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLGenerateAccessorsCommand.klass);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Initialize";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'Initialize'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLGenerateAccessorsCommand.klass);


$core.addClass('HLGenerateInitializeCommand', $globals.HLGenerateCommand, [], 'Helios-Commands-Browser');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLGenerateInitializeCommand.comment="I am the command used to generate the `initialize` method depending of the selected class";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
var targetClass,output;
function $HLAccessorsGenerator(){return $globals.HLAccessorsGenerator||(typeof HLAccessorsGenerator=="undefined"?nil:HLAccessorsGenerator)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3;
$1=self._model();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["model"]=1;
//>>excludeEnd("ctx");
targetClass=$recv($1)._selectedClass();
$2=$recv($HLAccessorsGenerator())._new();
$recv($2)._class_(targetClass);
$recv($2)._generate();
$3=$recv($2)._output();
output=$3;
$recv(output)._compile();
$recv(self._model())._selectedProtocol_($recv(output)._protocol());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"execute",{targetClass:targetClass,output:output},$globals.HLGenerateInitializeCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "execute\x0a\x09| targetClass output |\x0a\x09targetClass := self model selectedClass.\x0a\x0a\x09output := HLAccessorsGenerator new\x0a\x09\x09class: targetClass;\x0a\x09\x09generate;\x0a\x09\x09output.\x0a\x09\x09\x0a\x09output compile.\x0a\x09self model selectedProtocol: output protocol",
referencedClasses: ["HLAccessorsGenerator"],
//>>excludeEnd("ide");
messageSends: ["selectedClass", "model", "class:", "new", "generate", "output", "compile", "selectedProtocol:", "protocol"]
}),
$globals.HLGenerateInitializeCommand);


$core.addMethod(
$core.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "a";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09^ 'a'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLGenerateInitializeCommand.klass);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Accessors";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'Accessors'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLGenerateInitializeCommand.klass);


$core.addClass('HLToggleCommand', $globals.HLBrowserCommand, [], 'Helios-Commands-Browser');

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
$globals.HLToggleCommand.klass);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Toggle";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'Toggle'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLToggleCommand.klass);


$core.addClass('HLToggleClassCommentCommand', $globals.HLToggleCommand, [], 'Helios-Commands-Browser');
$core.addMethod(
$core.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._model();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["model"]=1;
//>>excludeEnd("ctx");
$recv($1)._showComment_($recv($recv(self._model())._showComment())._not());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"execute",{},$globals.HLToggleClassCommentCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "execute\x0a\x09self model showComment: self model showComment not",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["showComment:", "model", "not", "showComment"]
}),
$globals.HLToggleClassCommentCommand);


$core.addMethod(
$core.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
return "d";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09^ 'd'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLToggleClassCommentCommand.klass);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Documentation";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'Documentation'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLToggleClassCommentCommand.klass);


$core.addClass('HLToggleClassSideCommand', $globals.HLToggleCommand, [], 'Helios-Commands-Browser');
$core.addMethod(
$core.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._model();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["model"]=1;
//>>excludeEnd("ctx");
$recv($1)._showInstance_($recv($recv(self._model())._showInstance())._not());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"execute",{},$globals.HLToggleClassSideCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "execute\x0a\x09self model showInstance: self model showInstance not",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["showInstance:", "model", "not", "showInstance"]
}),
$globals.HLToggleClassSideCommand);


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
$globals.HLToggleClassSideCommand.klass);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Class side";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'Class side'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLToggleClassSideCommand.klass);

});
