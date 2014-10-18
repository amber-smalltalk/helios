define("helios/Helios-Commands-SUnit", ["amber/boot", "helios/Helios-Commands-Tools"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Helios-Commands-SUnit');
$core.packages["Helios-Commands-SUnit"].transport = {"type":"amd","amdNamespace":"helios"};

$core.addClass('HLSUnitCommand', $globals.HLToolCommand, [], 'Helios-Commands-SUnit');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLSUnitCommand.comment="I group the commands pertaining to Helios-SUnit (`HLSUnitModel`)";
//>>excludeEnd("ide");

$core.addMethod(
$core.method({
selector: "isValidFor:",
protocol: 'testing',
fn: function (aModel){
var self=this;
function $HLSUnitModel(){return $globals.HLSUnitModel||(typeof HLSUnitModel=="undefined"?nil:HLSUnitModel)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aModel)._isKindOf_($HLSUnitModel());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isValidFor:",{aModel:aModel},$globals.HLSUnitCommand.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aModel"],
source: "isValidFor: aModel\x0a\x09^ aModel isKindOf: HLSUnitModel",
referencedClasses: ["HLSUnitModel"],
//>>excludeEnd("ide");
messageSends: ["isKindOf:"]
}),
$globals.HLSUnitCommand.klass);


$core.addClass('HLSUnitInvertSelectedCommand', $globals.HLSUnitCommand, [], 'Helios-Commands-SUnit');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLSUnitInvertSelectedCommand.comment="I group the commands that invert selections";
//>>excludeEnd("ide");

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
$globals.HLSUnitInvertSelectedCommand.klass);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Invert selection";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^'Invert selection'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLSUnitInvertSelectedCommand.klass);


$core.addClass('HLSUnitInvertSelectedClassesCommand', $globals.HLSUnitInvertSelectedCommand, [], 'Helios-Commands-SUnit');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLSUnitInvertSelectedClassesCommand.comment="Invert the currently selected classes on a `HLSUnitModel`";
//>>excludeEnd("ide");
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
source: "category\x0a\x09^'Classes'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLSUnitInvertSelectedClassesCommand);

$core.addMethod(
$core.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._model())._invertSelectedClasses();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"execute",{},$globals.HLSUnitInvertSelectedClassesCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "execute\x0a\x09self model invertSelectedClasses",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["invertSelectedClasses", "model"]
}),
$globals.HLSUnitInvertSelectedClassesCommand);

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
$1=$recv($recv(self["@model"])._selectedPackages())._notEmpty();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isActive",{},$globals.HLSUnitInvertSelectedClassesCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isActive\x0a\x09^model selectedPackages notEmpty",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notEmpty", "selectedPackages"]
}),
$globals.HLSUnitInvertSelectedClassesCommand);


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
$globals.HLSUnitInvertSelectedClassesCommand.klass);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Invert selected classes";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'Invert selected classes'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLSUnitInvertSelectedClassesCommand.klass);


$core.addClass('HLSUnitInvertSelectedPackagesCommand', $globals.HLSUnitInvertSelectedCommand, [], 'Helios-Commands-SUnit');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLSUnitInvertSelectedPackagesCommand.comment="Invert the currently selected packages on a `HLSUnitModel`";
//>>excludeEnd("ide");
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
source: "category\x0a\x09^'Packages'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLSUnitInvertSelectedPackagesCommand);

$core.addMethod(
$core.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._model())._invertSelectedPackages();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"execute",{},$globals.HLSUnitInvertSelectedPackagesCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "execute\x0a\x09self model invertSelectedPackages",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["invertSelectedPackages", "model"]
}),
$globals.HLSUnitInvertSelectedPackagesCommand);

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
source: "isActive\x0a\x09^true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLSUnitInvertSelectedPackagesCommand);


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
$globals.HLSUnitInvertSelectedPackagesCommand.klass);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Invert selected packages";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'Invert selected packages'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLSUnitInvertSelectedPackagesCommand.klass);


$core.addClass('HLSUnitRunTests', $globals.HLSUnitCommand, [], 'Helios-Commands-SUnit');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLSUnitRunTests.comment="Run the test cases in the currently selected classes on a `HLSUnitModel`";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._model())._runTests();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"execute",{},$globals.HLSUnitRunTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "execute\x0a\x09self model runTests",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["runTests", "model"]
}),
$globals.HLSUnitRunTests);

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
source: "isActive\x0a\x09^true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLSUnitRunTests);


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
source: "key\x0a\x09^'r'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLSUnitRunTests.klass);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Run Tests";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^'Run Tests'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLSUnitRunTests.klass);


$core.addClass('HLSUnitSelectAllCommand', $globals.HLSUnitCommand, [], 'Helios-Commands-SUnit');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLSUnitSelectAllCommand.comment="I group the select all commands";
//>>excludeEnd("ide");

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
$globals.HLSUnitSelectAllCommand.klass);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Select all";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'Select all'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLSUnitSelectAllCommand.klass);


$core.addClass('HLSUnitSelectAllClassesCommand', $globals.HLSUnitSelectAllCommand, [], 'Helios-Commands-SUnit');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLSUnitSelectAllClassesCommand.comment="Select all available test classes based on what packages are selected on a `HLSUnitModel`";
//>>excludeEnd("ide");
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
source: "category\x0a\x09^'Classes'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLSUnitSelectAllClassesCommand);

$core.addMethod(
$core.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._model())._selectAllClasses();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"execute",{},$globals.HLSUnitSelectAllClassesCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "execute\x0a\x09self model selectAllClasses",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selectAllClasses", "model"]
}),
$globals.HLSUnitSelectAllClassesCommand);

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
$1=$recv($recv(self["@model"])._selectedPackages())._notEmpty();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isActive",{},$globals.HLSUnitSelectAllClassesCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isActive\x0a\x09^model selectedPackages notEmpty",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notEmpty", "selectedPackages"]
}),
$globals.HLSUnitSelectAllClassesCommand);


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
$globals.HLSUnitSelectAllClassesCommand.klass);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Select all classes";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'Select all classes'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLSUnitSelectAllClassesCommand.klass);


$core.addClass('HLSUnitSelectAllPackagesCommand', $globals.HLSUnitSelectAllCommand, [], 'Helios-Commands-SUnit');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLSUnitSelectAllPackagesCommand.comment="Select all packages with test cases on a `HLSUnitModel`";
//>>excludeEnd("ide");
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
source: "category\x0a\x09^'Packages'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLSUnitSelectAllPackagesCommand);

$core.addMethod(
$core.method({
selector: "execute",
protocol: 'executing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._model())._selectAllPackages();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"execute",{},$globals.HLSUnitSelectAllPackagesCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "execute\x0a\x09self model selectAllPackages",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selectAllPackages", "model"]
}),
$globals.HLSUnitSelectAllPackagesCommand);

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
source: "isActive\x0a\x09^true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLSUnitSelectAllPackagesCommand);


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
$globals.HLSUnitSelectAllPackagesCommand.klass);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Select all packages";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^ 'Select all packages'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLSUnitSelectAllPackagesCommand.klass);

});
