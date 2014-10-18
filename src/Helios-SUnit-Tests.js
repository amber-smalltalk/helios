define("helios/Helios-SUnit-Tests", ["amber/boot", "amber_core/SUnit"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Helios-SUnit-Tests');
$core.packages["Helios-SUnit-Tests"].transport = {"type":"amd","amdNamespace":"helios"};

$core.addClass('HLSUnitModelTest', $globals.TestCase, ['model'], 'Helios-SUnit-Tests');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLSUnitModelTest.comment="Test cases for the functionality of  `HLSUnitModel`";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "setUp",
protocol: 'initializing',
fn: function (){
var self=this;
function $HLSUnitModel(){return $globals.HLSUnitModel||(typeof HLSUnitModel=="undefined"?nil:HLSUnitModel)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.HLSUnitModelTest.superclass.fn.prototype._setUp.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@model"]=$recv($HLSUnitModel())._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setUp",{},$globals.HLSUnitModelTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setUp\x0a\x09super setUp.\x0a\x09model := HLSUnitModel new",
referencedClasses: ["HLSUnitModel"],
//>>excludeEnd("ide");
messageSends: ["setUp", "new"]
}),
$globals.HLSUnitModelTest);

$core.addMethod(
$core.method({
selector: "testClassBecomesAvailable",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv(self["@model"])._testClasses();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["testClasses"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._isEmpty();
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$recv(self["@model"])._selectPackage_(self._thisPackage());
self._assert_($recv($recv(self["@model"])._testClasses())._includes_(self._class()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testClassBecomesAvailable",{},$globals.HLSUnitModelTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testClassBecomesAvailable\x0a\x09self assert: model testClasses isEmpty.\x0a\x09model selectPackage: self thisPackage.\x0a\x09self assert: (model testClasses includes: self class).",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", "isEmpty", "testClasses", "selectPackage:", "thisPackage", "includes:", "class"]
}),
$globals.HLSUnitModelTest);

$core.addMethod(
$core.method({
selector: "testEmptyTestResults",
protocol: 'tests',
fn: function (){
var self=this;
function $TestResult(){return $globals.TestResult||(typeof TestResult=="undefined"?nil:TestResult)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._assert_($recv($recv(self["@model"])._testResult())._isKindOf_($TestResult()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testEmptyTestResults",{},$globals.HLSUnitModelTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testEmptyTestResults\x0a\x09self assert: (model testResult isKindOf: TestResult)",
referencedClasses: ["TestResult"],
//>>excludeEnd("ide");
messageSends: ["assert:", "isKindOf:", "testResult"]
}),
$globals.HLSUnitModelTest);

$core.addMethod(
$core.method({
selector: "testInvertSelectedClasses",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$4,$3,$6,$5,$8,$7,$10,$9;
$recv(self["@model"])._selectAllPackages();
$recv(self["@model"])._selectAllClasses();
$1=self["@model"];
$2=self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$recv($1)._unselectClass_($2);
$4=$recv(self["@model"])._selectedClasses();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selectedClasses"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._notEmpty();
self._assert_($3);
$6=$recv(self["@model"])._selectedClasses();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selectedClasses"]=2;
//>>excludeEnd("ctx");
$5=$recv($6)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$8=$recv($recv(self["@model"])._testClasses())._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=2;
//>>excludeEnd("ctx");
$7=$recv($8).__minus((1));
self._assert_equals_($5,$7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$recv(self["@model"])._invertSelectedClasses();
$10=$recv(self["@model"])._selectedClasses();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selectedClasses"]=3;
//>>excludeEnd("ctx");
$9=$recv($10)._size();
self._assert_equals_($9,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($recv($recv(self["@model"])._selectedClasses())._anyOne(),self._class());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testInvertSelectedClasses",{},$globals.HLSUnitModelTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testInvertSelectedClasses\x0a\x09model selectAllPackages.\x0a\x09model selectAllClasses.\x0a\x09model unselectClass: self class.\x0a\x09self assert: model selectedClasses notEmpty.\x0a\x09self assert: model selectedClasses size equals: model testClasses size - 1.\x0a\x09model invertSelectedClasses.\x0a\x09self assert: model selectedClasses size equals: 1.\x0a\x09self assert: model selectedClasses anyOne equals: self class.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selectAllPackages", "selectAllClasses", "unselectClass:", "class", "assert:", "notEmpty", "selectedClasses", "assert:equals:", "size", "-", "testClasses", "invertSelectedClasses", "anyOne"]
}),
$globals.HLSUnitModelTest);

$core.addMethod(
$core.method({
selector: "testInvertSelectedPackages",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$4,$3,$6,$5,$8,$7,$10,$9;
$recv(self["@model"])._selectAllPackages();
$1=self["@model"];
$2=self._thisPackage();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["thisPackage"]=1;
//>>excludeEnd("ctx");
$recv($1)._unselectPackage_($2);
$4=$recv(self["@model"])._selectedPackages();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selectedPackages"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._notEmpty();
self._assert_($3);
$6=$recv(self["@model"])._selectedPackages();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selectedPackages"]=2;
//>>excludeEnd("ctx");
$5=$recv($6)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$8=$recv($recv(self["@model"])._testPackages())._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=2;
//>>excludeEnd("ctx");
$7=$recv($8).__minus((1));
self._assert_equals_($5,$7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$recv(self["@model"])._invertSelectedPackages();
$10=$recv(self["@model"])._selectedPackages();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selectedPackages"]=3;
//>>excludeEnd("ctx");
$9=$recv($10)._size();
self._assert_equals_($9,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($recv($recv(self["@model"])._selectedPackages())._anyOne(),self._thisPackage());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testInvertSelectedPackages",{},$globals.HLSUnitModelTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testInvertSelectedPackages\x0a\x09model selectAllPackages.\x0a\x09model unselectPackage: self thisPackage.\x0a\x09self assert: model selectedPackages notEmpty.\x0a\x09self assert: model selectedPackages size equals: model testPackages size - 1.\x0a\x09model invertSelectedPackages.\x0a\x09self assert: model selectedPackages size equals: 1.\x0a\x09self assert: model selectedPackages anyOne equals: self thisPackage.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selectAllPackages", "unselectPackage:", "thisPackage", "assert:", "notEmpty", "selectedPackages", "assert:equals:", "size", "-", "testPackages", "invertSelectedPackages", "anyOne"]
}),
$globals.HLSUnitModelTest);

$core.addMethod(
$core.method({
selector: "testSelectAllClasses",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$3;
$recv(self["@model"])._selectAllPackages();
$2=$recv(self["@model"])._testClasses();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["testClasses"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._notEmpty();
self._assert_($1);
$recv(self["@model"])._selectAllClasses();
$3=$recv($recv(self["@model"])._selectedClasses())._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($3,$recv($recv(self["@model"])._testClasses())._size());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSelectAllClasses",{},$globals.HLSUnitModelTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSelectAllClasses\x0a\x09model selectAllPackages.\x0a\x09self assert: model testClasses notEmpty.\x0a\x09model selectAllClasses.\x0a\x09self assert: model selectedClasses size equals: model testClasses size",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selectAllPackages", "assert:", "notEmpty", "testClasses", "selectAllClasses", "assert:equals:", "size", "selectedClasses"]
}),
$globals.HLSUnitModelTest);

$core.addMethod(
$core.method({
selector: "testSelectAllPackages",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$3;
$2=$recv(self["@model"])._selectedPackages();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selectedPackages"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._isEmpty();
self._assert_($1);
$recv(self["@model"])._selectAllPackages();
$3=$recv($recv(self["@model"])._selectedPackages())._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($3,$recv($recv(self["@model"])._testPackages())._size());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSelectAllPackages",{},$globals.HLSUnitModelTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSelectAllPackages\x0a\x09self assert: model selectedPackages isEmpty.\x0a\x09model selectAllPackages.\x0a\x09self assert: model selectedPackages size equals: model testPackages size",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", "isEmpty", "selectedPackages", "selectAllPackages", "assert:equals:", "size", "testPackages"]
}),
$globals.HLSUnitModelTest);

$core.addMethod(
$core.method({
selector: "testSelectClass",
protocol: 'tests',
fn: function (){
var self=this;
var announcementFired;
function $HLClassSelected(){return $globals.HLClassSelected||(typeof HLClassSelected=="undefined"?nil:HLClassSelected)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$3,$4;
$recv(self["@model"])._selectPackage_(self._thisPackage());
$2=$recv(self["@model"])._selectedClasses();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selectedClasses"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._isEmpty();
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$recv($recv(self["@model"])._announcer())._on_do_for_($HLClassSelected(),(function(){
announcementFired=true;
return announcementFired;

}),self);
$3=self["@model"];
$4=self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$recv($3)._selectClass_($4);
self._assert_equals_($recv($recv(self["@model"])._selectedClasses())._anyOne(),self._class());
self._assert_(announcementFired);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSelectClass",{announcementFired:announcementFired},$globals.HLSUnitModelTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSelectClass\x0a\x09| announcementFired |\x0a\x09model selectPackage: self thisPackage.\x0a\x09self assert: model selectedClasses isEmpty.\x0a\x09model announcer on: HLClassSelected\x0a\x09\x09do: [ announcementFired := true ]\x0a\x09\x09for: self.\x0a\x09model selectClass: self class.\x0a\x09self assert: model selectedClasses anyOne equals: self class.\x0a\x09self assert: announcementFired.",
referencedClasses: ["HLClassSelected"],
//>>excludeEnd("ide");
messageSends: ["selectPackage:", "thisPackage", "assert:", "isEmpty", "selectedClasses", "on:do:for:", "announcer", "selectClass:", "class", "assert:equals:", "anyOne"]
}),
$globals.HLSUnitModelTest);

$core.addMethod(
$core.method({
selector: "testSelectPackage",
protocol: 'tests',
fn: function (){
var self=this;
var announcementFired;
function $HLPackageSelected(){return $globals.HLPackageSelected||(typeof HLPackageSelected=="undefined"?nil:HLPackageSelected)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$3,$4;
$2=$recv(self["@model"])._selectedPackages();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selectedPackages"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._isEmpty();
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$recv($recv(self["@model"])._announcer())._on_do_for_($HLPackageSelected(),(function(){
announcementFired=true;
return announcementFired;

}),self);
$3=self["@model"];
$4=self._thisPackage();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["thisPackage"]=1;
//>>excludeEnd("ctx");
$recv($3)._selectPackage_($4);
self._assert_equals_($recv($recv(self["@model"])._selectedPackages())._anyOne(),self._thisPackage());
self._assert_(announcementFired);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSelectPackage",{announcementFired:announcementFired},$globals.HLSUnitModelTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSelectPackage\x0a\x09| announcementFired |\x0a\x09self assert: model selectedPackages isEmpty.\x0a\x09model announcer on: HLPackageSelected\x0a\x09\x09do: [ announcementFired := true ]\x0a\x09\x09for: self.\x0a\x09model selectPackage: self thisPackage.\x0a\x09self assert: model selectedPackages anyOne equals: self thisPackage.\x0a\x09self assert: announcementFired",
referencedClasses: ["HLPackageSelected"],
//>>excludeEnd("ide");
messageSends: ["assert:", "isEmpty", "selectedPackages", "on:do:for:", "announcer", "selectPackage:", "thisPackage", "assert:equals:", "anyOne"]
}),
$globals.HLSUnitModelTest);

$core.addMethod(
$core.method({
selector: "testSelectedClassNotListedIfPackageUnselected",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$6,$5;
$1=self["@model"];
$2=self._thisPackage();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["thisPackage"]=1;
//>>excludeEnd("ctx");
$recv($1)._selectPackage_($2);
$3=self["@model"];
$4=self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$recv($3)._selectClass_($4);
$6=$recv(self["@model"])._selectedClasses();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selectedClasses"]=1;
//>>excludeEnd("ctx");
$5=$recv($6)._anyOne();
self._assert_equals_($5,self._class());
$recv(self["@model"])._unselectPackage_(self._thisPackage());
self._assert_($recv($recv(self["@model"])._selectedClasses())._isEmpty());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSelectedClassNotListedIfPackageUnselected",{},$globals.HLSUnitModelTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSelectedClassNotListedIfPackageUnselected\x0a\x09model selectPackage: self thisPackage.\x0a\x09model selectClass: self class.\x0a\x09self assert: model selectedClasses anyOne equals: self class.\x0a\x09model unselectPackage: self thisPackage.\x0a\x09self assert: model selectedClasses isEmpty.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selectPackage:", "thisPackage", "selectClass:", "class", "assert:equals:", "anyOne", "selectedClasses", "unselectPackage:", "assert:", "isEmpty"]
}),
$globals.HLSUnitModelTest);

$core.addMethod(
$core.method({
selector: "testTestClassHasOnlyTestClasses",
protocol: 'tests',
fn: function (){
var self=this;
var notATestClass;
function $Object(){return $globals.Object||(typeof Object=="undefined"?nil:Object)}
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
notATestClass=$recv($Object())._subclass_instanceVariableNames_package_("HLNotATestClass","",$recv(self._class())._category());
$recv(self["@model"])._selectPackage_(self._thisPackage());
self._deny_($recv($recv(self["@model"])._testClasses())._includes_(notATestClass));
$recv($Smalltalk())._removeClass_(notATestClass);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testTestClassHasOnlyTestClasses",{notATestClass:notATestClass},$globals.HLSUnitModelTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testTestClassHasOnlyTestClasses\x0a\x09| notATestClass |\x0a\x09notATestClass := Object subclass: #HLNotATestClass\x0a\x09\x09instanceVariableNames: ''\x0a\x09\x09package: self class category.\x0a\x09model selectPackage: self thisPackage.\x0a\x09self deny: (model testClasses includes: notATestClass).\x0a\x09Smalltalk removeClass: notATestClass.",
referencedClasses: ["Object", "Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["subclass:instanceVariableNames:package:", "category", "class", "selectPackage:", "thisPackage", "deny:", "includes:", "testClasses", "removeClass:"]
}),
$globals.HLSUnitModelTest);

$core.addMethod(
$core.method({
selector: "testTestPackages",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv(self["@model"])._testPackages();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["testPackages"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._notEmpty();
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
self._assert_($recv($recv(self["@model"])._testPackages())._anySatisfy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each).__eq(self._thisPackage());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
})));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testTestPackages",{},$globals.HLSUnitModelTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testTestPackages\x0a\x09self assert: model testPackages notEmpty.\x0a\x09self assert: (model testPackages anySatisfy: [:each | each = self thisPackage]).",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", "notEmpty", "testPackages", "anySatisfy:", "=", "thisPackage"]
}),
$globals.HLSUnitModelTest);

$core.addMethod(
$core.method({
selector: "testUnselectClass",
protocol: 'tests',
fn: function (){
var self=this;
var announcementFired;
function $HLClassUnselected(){return $globals.HLClassUnselected||(typeof HLClassUnselected=="undefined"?nil:HLClassUnselected)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$recv(self["@model"])._selectPackage_(self._thisPackage());
$1=self["@model"];
$2=self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$recv($1)._selectClass_($2);
$recv($recv(self["@model"])._announcer())._on_do_for_($HLClassUnselected(),(function(){
announcementFired=true;
return announcementFired;

}),self);
$recv(self["@model"])._unselectClass_(self._class());
self._assert_($recv($recv(self["@model"])._selectedClasses())._isEmpty());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
self._assert_(announcementFired);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testUnselectClass",{announcementFired:announcementFired},$globals.HLSUnitModelTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testUnselectClass\x0a\x09| announcementFired |\x0a\x09model selectPackage: self thisPackage.\x0a\x09model selectClass: self class.\x0a\x09model announcer on: HLClassUnselected\x0a\x09\x09do: [ announcementFired := true ]\x0a\x09\x09for: self.\x0a\x09model unselectClass: self class.\x0a\x09self assert: model selectedClasses isEmpty.\x0a\x09self assert: announcementFired",
referencedClasses: ["HLClassUnselected"],
//>>excludeEnd("ide");
messageSends: ["selectPackage:", "thisPackage", "selectClass:", "class", "on:do:for:", "announcer", "unselectClass:", "assert:", "isEmpty", "selectedClasses"]
}),
$globals.HLSUnitModelTest);

$core.addMethod(
$core.method({
selector: "testUnselectPackage",
protocol: 'tests',
fn: function (){
var self=this;
var announcementFired;
function $HLPackageUnselected(){return $globals.HLPackageUnselected||(typeof HLPackageUnselected=="undefined"?nil:HLPackageUnselected)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=self["@model"];
$2=self._thisPackage();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["thisPackage"]=1;
//>>excludeEnd("ctx");
$recv($1)._selectPackage_($2);
$recv($recv(self["@model"])._announcer())._on_do_for_($HLPackageUnselected(),(function(){
announcementFired=true;
return announcementFired;

}),self);
$recv(self["@model"])._unselectPackage_(self._thisPackage());
self._assert_($recv($recv(self["@model"])._selectedPackages())._isEmpty());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
self._assert_(announcementFired);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testUnselectPackage",{announcementFired:announcementFired},$globals.HLSUnitModelTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testUnselectPackage\x0a\x09| announcementFired |\x0a\x09model selectPackage: self thisPackage.\x0a\x09model announcer on: HLPackageUnselected\x0a\x09\x09do: [ announcementFired := true ]\x0a\x09\x09for: self.\x0a\x09model unselectPackage: self thisPackage.\x0a\x09self assert: model selectedPackages isEmpty.\x0a\x09self assert: announcementFired.",
referencedClasses: ["HLPackageUnselected"],
//>>excludeEnd("ide");
messageSends: ["selectPackage:", "thisPackage", "on:do:for:", "announcer", "unselectPackage:", "assert:", "isEmpty", "selectedPackages"]
}),
$globals.HLSUnitModelTest);

$core.addMethod(
$core.method({
selector: "thisPackage",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._class())._package();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"thisPackage",{},$globals.HLSUnitModelTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "thisPackage\x0a\x09^self class package",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["package", "class"]
}),
$globals.HLSUnitModelTest);


});
