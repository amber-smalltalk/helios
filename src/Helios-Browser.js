define("helios/Helios-Browser", ["amber/boot", "helios/Helios-Core", "amber_core/Kernel-Objects"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Helios-Browser');
$core.packages["Helios-Browser"].transport = {"type":"amd","amdNamespace":"helios"};

$core.addClass('HLBrowser', $globals.HLWidget, ['model', 'packagesListWidget', 'classesListWidget', 'protocolsListWidget', 'methodsListWidget', 'sourceWidget', 'bottomDiv'], 'Helios-Browser');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLBrowser.comment="I render a system browser with 4 panes (Packages, Classes, Protocols, Methods) and a source area.";
//>>excludeEnd("ide");
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
$globals.HLBrowser);

$core.addMethod(
$core.method({
selector: "classesListWidget",
protocol: 'widgets',
fn: function (){
var self=this;
function $HLClassesListWidget(){return $globals.HLClassesListWidget||(typeof HLClassesListWidget=="undefined"?nil:HLClassesListWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@classesListWidget"];
if(($receiver = $2) == null || $receiver.isNil){
self["@classesListWidget"]=$recv($HLClassesListWidget())._on_(self._model());
self["@classesListWidget"];
$1=$recv(self["@classesListWidget"])._next_(self._protocolsListWidget());
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classesListWidget",{},$globals.HLBrowser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classesListWidget\x0a\x09^ classesListWidget ifNil: [\x0a      \x09classesListWidget := HLClassesListWidget on: self model.\x0a\x09\x09classesListWidget next: self protocolsListWidget ]",
referencedClasses: ["HLClassesListWidget"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "on:", "model", "next:", "protocolsListWidget"]
}),
$globals.HLBrowser);

$core.addMethod(
$core.method({
selector: "environment",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._model())._environment();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"environment",{},$globals.HLBrowser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "environment\x0a\x09^ self model environment",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["environment", "model"]
}),
$globals.HLBrowser);

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
$1=$recv(self._packagesListWidget())._focus();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"focus",{},$globals.HLBrowser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "focus\x0a\x09^ self packagesListWidget focus",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["focus", "packagesListWidget"]
}),
$globals.HLBrowser);

$core.addMethod(
$core.method({
selector: "methodsListWidget",
protocol: 'widgets',
fn: function (){
var self=this;
function $HLMethodsListWidget(){return $globals.HLMethodsListWidget||(typeof HLMethodsListWidget=="undefined"?nil:HLMethodsListWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@methodsListWidget"];
if(($receiver = $2) == null || $receiver.isNil){
self["@methodsListWidget"]=$recv($HLMethodsListWidget())._on_(self._model());
self["@methodsListWidget"];
$1=$recv(self["@methodsListWidget"])._next_(self._sourceWidget());
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"methodsListWidget",{},$globals.HLBrowser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "methodsListWidget\x0a\x09^ methodsListWidget ifNil: [\x0a      \x09methodsListWidget := HLMethodsListWidget on: self model.\x0a\x09\x09methodsListWidget next: self sourceWidget ]",
referencedClasses: ["HLMethodsListWidget"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "on:", "model", "next:", "sourceWidget"]
}),
$globals.HLBrowser);

$core.addMethod(
$core.method({
selector: "model",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLBrowserModel(){return $globals.HLBrowserModel||(typeof HLBrowserModel=="undefined"?nil:HLBrowserModel)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@model"];
if(($receiver = $2) == null || $receiver.isNil){
self._model_($recv($HLBrowserModel())._new());
$1=self["@model"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"model",{},$globals.HLBrowser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "model\x0a\x09^ model ifNil: [ self model: HLBrowserModel new. model ]",
referencedClasses: ["HLBrowserModel"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "model:", "new"]
}),
$globals.HLBrowser);

$core.addMethod(
$core.method({
selector: "model:",
protocol: 'accessing',
fn: function (aModel){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@model"]=aModel;
self._observeModel();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"model:",{aModel:aModel},$globals.HLBrowser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aModel"],
source: "model: aModel\x0a\x09model := aModel.\x0a\x09self observeModel",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["observeModel"]
}),
$globals.HLBrowser);

$core.addMethod(
$core.method({
selector: "observeModel",
protocol: 'actions',
fn: function (){
var self=this;
function $HLPackageSelected(){return $globals.HLPackageSelected||(typeof HLPackageSelected=="undefined"?nil:HLPackageSelected)}
function $HLClassSelected(){return $globals.HLClassSelected||(typeof HLClassSelected=="undefined"?nil:HLClassSelected)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=self._model();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["model"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._announcer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["announcer"]=1;
//>>excludeEnd("ctx");
$recv($1)._on_send_to_($HLPackageSelected(),"onPackageSelected:",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=1;
//>>excludeEnd("ctx");
$recv($recv(self._model())._announcer())._on_send_to_($HLClassSelected(),"onClassSelected:",self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeModel",{},$globals.HLBrowser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeModel\x0a\x09self model announcer\x0a\x09\x09on: HLPackageSelected\x0a\x09\x09send: #onPackageSelected:\x0a\x09\x09to: self.\x0a\x09\x09\x0a\x09self model announcer\x0a\x09\x09on: HLClassSelected\x0a\x09\x09send: #onClassSelected:\x0a\x09\x09to: self",
referencedClasses: ["HLPackageSelected", "HLClassSelected"],
//>>excludeEnd("ide");
messageSends: ["on:send:to:", "announcer", "model"]
}),
$globals.HLBrowser);

$core.addMethod(
$core.method({
selector: "onClassSelected:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$2,$receiver;
$1=$recv(anAnnouncement)._item();
if(($receiver = $1) == null || $receiver.isNil){
$3=$recv(self._model())._selectedPackage();
if(($receiver = $3) == null || $receiver.isNil){
$2=self._defaultTabLabel();
} else {
var package_;
package_=$receiver;
$2=$recv(package_)._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["name"]=1;
//>>excludeEnd("ctx");
};
self._setTabLabel_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["setTabLabel:"]=1;
//>>excludeEnd("ctx");
} else {
var item;
item=$receiver;
self._setTabLabel_($recv(item)._name());
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onClassSelected:",{anAnnouncement:anAnnouncement},$globals.HLBrowser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onClassSelected: anAnnouncement\x0a\x09anAnnouncement item \x0a\x09\x09ifNil: [ self setTabLabel: (self model selectedPackage \x0a\x09\x09\x09ifNil: [ self defaultTabLabel ]\x0a\x09\x09\x09ifNotNil: [ :package | package name ]) ] \x0a\x09\x09ifNotNil: [ :item | self setTabLabel: item name ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:ifNotNil:", "item", "setTabLabel:", "selectedPackage", "model", "defaultTabLabel", "name"]
}),
$globals.HLBrowser);

$core.addMethod(
$core.method({
selector: "onPackageSelected:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$recv(anAnnouncement)._item();
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
var item;
item=$receiver;
self._setTabLabel_($recv(item)._name());
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onPackageSelected:",{anAnnouncement:anAnnouncement},$globals.HLBrowser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onPackageSelected: anAnnouncement\x0a\x09anAnnouncement item ifNotNil: [ :item |\x0a\x09self setTabLabel: item name ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "item", "setTabLabel:", "name"]
}),
$globals.HLBrowser);

$core.addMethod(
$core.method({
selector: "openClassNamed:",
protocol: 'actions',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._model())._openClassNamed_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"openClassNamed:",{aString:aString},$globals.HLBrowser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "openClassNamed: aString\x0a\x09self model openClassNamed: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["openClassNamed:", "model"]
}),
$globals.HLBrowser);

$core.addMethod(
$core.method({
selector: "openMethod:",
protocol: 'actions',
fn: function (aCompiledMethod){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$4,$3,$5;
$1=self._model();
$recv($1)._focusOnSourceCode();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["focusOnSourceCode"]=1;
//>>excludeEnd("ctx");
$2=$1;
$4=$recv(aCompiledMethod)._methodClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["methodClass"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._package();
$recv($2)._selectedPackage_($3);
$recv($1)._selectedClass_($recv(aCompiledMethod)._methodClass());
$recv($1)._selectedProtocol_($recv(aCompiledMethod)._protocol());
$recv($1)._selectedMethod_(aCompiledMethod);
$5=$recv($1)._focusOnSourceCode();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"openMethod:",{aCompiledMethod:aCompiledMethod},$globals.HLBrowser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCompiledMethod"],
source: "openMethod: aCompiledMethod\x0a\x09self model\x0a\x09\x09\x22Workaround for the package selection announcement when the package list is focused\x22\x09\x0a\x09\x09focusOnSourceCode;\x0a\x09\x09selectedPackage: aCompiledMethod methodClass package;\x0a\x09\x09selectedClass: aCompiledMethod methodClass;\x0a\x09\x09selectedProtocol: aCompiledMethod protocol;\x0a\x09\x09selectedMethod: aCompiledMethod;\x0a\x09\x09focusOnSourceCode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["focusOnSourceCode", "model", "selectedPackage:", "package", "methodClass", "selectedClass:", "selectedProtocol:", "protocol", "selectedMethod:"]
}),
$globals.HLBrowser);

$core.addMethod(
$core.method({
selector: "packagesListWidget",
protocol: 'widgets',
fn: function (){
var self=this;
function $HLPackagesListWidget(){return $globals.HLPackagesListWidget||(typeof HLPackagesListWidget=="undefined"?nil:HLPackagesListWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@packagesListWidget"];
if(($receiver = $2) == null || $receiver.isNil){
self["@packagesListWidget"]=$recv($HLPackagesListWidget())._on_(self._model());
self["@packagesListWidget"];
$1=$recv(self["@packagesListWidget"])._next_(self._classesListWidget());
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"packagesListWidget",{},$globals.HLBrowser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "packagesListWidget\x0a\x09^ packagesListWidget ifNil: [\x0a      \x09packagesListWidget := HLPackagesListWidget on: self model.\x0a\x09\x09packagesListWidget next: self classesListWidget ]",
referencedClasses: ["HLPackagesListWidget"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "on:", "model", "next:", "classesListWidget"]
}),
$globals.HLBrowser);

$core.addMethod(
$core.method({
selector: "protocolsListWidget",
protocol: 'widgets',
fn: function (){
var self=this;
function $HLProtocolsListWidget(){return $globals.HLProtocolsListWidget||(typeof HLProtocolsListWidget=="undefined"?nil:HLProtocolsListWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@protocolsListWidget"];
if(($receiver = $2) == null || $receiver.isNil){
self["@protocolsListWidget"]=$recv($HLProtocolsListWidget())._on_(self._model());
self["@protocolsListWidget"];
$1=$recv(self["@protocolsListWidget"])._next_(self._methodsListWidget());
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"protocolsListWidget",{},$globals.HLBrowser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "protocolsListWidget\x0a\x09^ protocolsListWidget ifNil: [\x0a      \x09protocolsListWidget := HLProtocolsListWidget on: self model.\x0a\x09\x09protocolsListWidget next: self methodsListWidget ]",
referencedClasses: ["HLProtocolsListWidget"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "on:", "model", "next:", "methodsListWidget"]
}),
$globals.HLBrowser);

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
}, function($ctx1) {$ctx1.fill(self,"registerBindingsOn:",{aBindingGroup:aBindingGroup},$globals.HLBrowser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBindingGroup"],
source: "registerBindingsOn: aBindingGroup\x0a\x09HLToolCommand \x0a\x09\x09registerConcreteClassesOn: aBindingGroup \x0a\x09\x09for: self model",
referencedClasses: ["HLToolCommand"],
//>>excludeEnd("ide");
messageSends: ["registerConcreteClassesOn:for:", "model"]
}),
$globals.HLBrowser);

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
var $5,$4,$3,$2,$1;
$5=self._packagesListWidget();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["packagesListWidget"]=1;
//>>excludeEnd("ctx");
$4=$recv($HLVerticalSplitter())._with_with_($5,self._classesListWidget());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:with:"]=3;
//>>excludeEnd("ctx");
$3=$recv($HLVerticalSplitter())._with_with_($4,$recv($HLVerticalSplitter())._with_with_(self._protocolsListWidget(),self._methodsListWidget()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:with:"]=2;
//>>excludeEnd("ctx");
$2=$recv($HLHorizontalSplitter())._with_with_($3,self._sourceWidget());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:with:"]=1;
//>>excludeEnd("ctx");
$1=$recv($HLContainer())._with_($2);
$recv(html)._with_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$recv(self._packagesListWidget())._focus();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},$globals.HLBrowser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderContentOn: html\x0a\x09html with: (HLContainer with: (HLHorizontalSplitter \x0a    \x09with: (HLVerticalSplitter\x0a        \x09with: (HLVerticalSplitter\x0a            \x09with: self packagesListWidget\x0a                with: self classesListWidget)\x0a            with: (HLVerticalSplitter\x0a            \x09with: self protocolsListWidget\x0a                with: self methodsListWidget)) \x0a        with: self sourceWidget)).\x0a\x09\x0a\x09self packagesListWidget focus",
referencedClasses: ["HLContainer", "HLHorizontalSplitter", "HLVerticalSplitter"],
//>>excludeEnd("ide");
messageSends: ["with:", "with:with:", "packagesListWidget", "classesListWidget", "protocolsListWidget", "methodsListWidget", "sourceWidget", "focus"]
}),
$globals.HLBrowser);

$core.addMethod(
$core.method({
selector: "sourceWidget",
protocol: 'widgets',
fn: function (){
var self=this;
function $HLBrowserBottomWidget(){return $globals.HLBrowserBottomWidget||(typeof HLBrowserBottomWidget=="undefined"?nil:HLBrowserBottomWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$4,$1,$receiver;
$2=self["@sourceWidget"];
if(($receiver = $2) == null || $receiver.isNil){
$3=$recv($HLBrowserBottomWidget())._new();
$recv($3)._model_(self._model());
$4=$recv($3)._yourself();
self["@sourceWidget"]=$4;
$1=self["@sourceWidget"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sourceWidget",{},$globals.HLBrowser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sourceWidget\x0a\x09^ sourceWidget ifNil: [\x0a      \x09sourceWidget := HLBrowserBottomWidget new\x0a\x09\x09\x09model: self model;\x0a\x09\x09\x09yourself ]",
referencedClasses: ["HLBrowserBottomWidget"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "model:", "new", "model", "yourself"]
}),
$globals.HLBrowser);

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
$globals.HLBrowser.superclass.fn.prototype._unregister.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["unregister"]=1;
//>>excludeEnd("ctx");
$recv([self._packagesListWidget(),self._classesListWidget(),self._protocolsListWidget(),self._methodsListWidget(),self._sourceWidget()])._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._unregister();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"unregister",{},$globals.HLBrowser)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "unregister\x0a\x09super unregister.\x0a\x0a\x09{ \x0a\x09\x09self packagesListWidget.\x0a\x09\x09self classesListWidget.\x0a\x09\x09self protocolsListWidget.\x0a\x09\x09self methodsListWidget.\x0a\x09\x09self sourceWidget\x0a\x09} \x0a\x09\x09do: [ :each | each unregister ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["unregister", "do:", "packagesListWidget", "classesListWidget", "protocolsListWidget", "methodsListWidget", "sourceWidget"]
}),
$globals.HLBrowser);


$globals.HLBrowser.klass.iVarNames = ['nextId'];
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
$globals.HLBrowser.klass);

$core.addMethod(
$core.method({
selector: "nextId",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=self["@nextId"];
if(($receiver = $1) == null || $receiver.isNil){
self["@nextId"]=(0);
self["@nextId"];
} else {
$1;
};
$2="browser_".__comma($recv($recv(self["@nextId"]).__plus((1)))._asString());
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextId",{},$globals.HLBrowser.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nextId\x0a\x09nextId ifNil: [ nextId := 0 ].\x0a    ^ 'browser_', (nextId + 1) asString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", ",", "asString", "+"]
}),
$globals.HLBrowser.klass);

$core.addMethod(
$core.method({
selector: "tabClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "browser";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tabClass\x0a\x09^ 'browser'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLBrowser.klass);

$core.addMethod(
$core.method({
selector: "tabLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "Browser";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tabLabel\x0a\x09^ 'Browser'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLBrowser.klass);

$core.addMethod(
$core.method({
selector: "tabPriority",
protocol: 'accessing',
fn: function (){
var self=this;
return (0);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tabPriority\x0a\x09^ 0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLBrowser.klass);


$core.addClass('HLBrowserBottomWidget', $globals.HLWidget, ['model', 'codeWidget', 'documentationWidget'], 'Helios-Browser');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLBrowserBottomWidget.comment="I render the code area of a browser and optionally the documentation for the selected class.";
//>>excludeEnd("ide");
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
$globals.HLBrowserBottomWidget);

$core.addMethod(
$core.method({
selector: "codeWidget",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLBrowserCodeWidget(){return $globals.HLBrowserCodeWidget||(typeof HLBrowserCodeWidget=="undefined"?nil:HLBrowserCodeWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$4,$1,$receiver;
$2=self["@codeWidget"];
if(($receiver = $2) == null || $receiver.isNil){
$3=$recv($HLBrowserCodeWidget())._new();
$recv($3)._browserModel_(self._model());
$4=$recv($3)._yourself();
self["@codeWidget"]=$4;
$1=self["@codeWidget"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"codeWidget",{},$globals.HLBrowserBottomWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "codeWidget\x0a\x09^ codeWidget ifNil: [ codeWidget := HLBrowserCodeWidget new\x0a\x09\x09browserModel: self model;\x0a\x09\x09yourself ]",
referencedClasses: ["HLBrowserCodeWidget"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "browserModel:", "new", "model", "yourself"]
}),
$globals.HLBrowserBottomWidget);

$core.addMethod(
$core.method({
selector: "documentationWidget",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLDocumentationWidget(){return $globals.HLDocumentationWidget||(typeof HLDocumentationWidget=="undefined"?nil:HLDocumentationWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$4,$1,$receiver;
$2=self["@documentationWidget"];
if(($receiver = $2) == null || $receiver.isNil){
$3=$recv($HLDocumentationWidget())._new();
$recv($3)._model_(self._model());
$4=$recv($3)._yourself();
self["@documentationWidget"]=$4;
$1=self["@documentationWidget"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"documentationWidget",{},$globals.HLBrowserBottomWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "documentationWidget\x0a\x09^ documentationWidget ifNil: [ documentationWidget := HLDocumentationWidget new\x0a\x09\x09model: self model;\x0a\x09\x09yourself ]",
referencedClasses: ["HLDocumentationWidget"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "model:", "new", "model", "yourself"]
}),
$globals.HLBrowserBottomWidget);

$core.addMethod(
$core.method({
selector: "focus",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._codeWidget())._focus();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"focus",{},$globals.HLBrowserBottomWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "focus\x0a\x09self codeWidget focus",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["focus", "codeWidget"]
}),
$globals.HLBrowserBottomWidget);

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
$globals.HLBrowserBottomWidget);

$core.addMethod(
$core.method({
selector: "model:",
protocol: 'accessing',
fn: function (aModel){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@model"]=aModel;
self._observeModel();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"model:",{aModel:aModel},$globals.HLBrowserBottomWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aModel"],
source: "model: aModel\x0a\x09model := aModel.\x0a\x09self observeModel",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["observeModel"]
}),
$globals.HLBrowserBottomWidget);

$core.addMethod(
$core.method({
selector: "observeModel",
protocol: 'actions',
fn: function (){
var self=this;
function $HLShowInstanceToggled(){return $globals.HLShowInstanceToggled||(typeof HLShowInstanceToggled=="undefined"?nil:HLShowInstanceToggled)}
function $HLShowCommentToggled(){return $globals.HLShowCommentToggled||(typeof HLShowCommentToggled=="undefined"?nil:HLShowCommentToggled)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(self._model())._announcer();
$recv($1)._on_send_to_($HLShowInstanceToggled(),"onShowInstanceToggled",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._on_send_to_($HLShowCommentToggled(),"onShowCommentToggled",self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeModel",{},$globals.HLBrowserBottomWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeModel\x0a\x09self model announcer \x0a\x09\x09on: HLShowInstanceToggled\x0a\x09\x09send: #onShowInstanceToggled\x0a\x09\x09to: self;\x0a\x09\x09on: HLShowCommentToggled\x0a\x09\x09send: #onShowCommentToggled\x0a\x09\x09to: self",
referencedClasses: ["HLShowInstanceToggled", "HLShowCommentToggled"],
//>>excludeEnd("ide");
messageSends: ["on:send:to:", "announcer", "model"]
}),
$globals.HLBrowserBottomWidget);

$core.addMethod(
$core.method({
selector: "onShowCommentToggled",
protocol: 'reactions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onShowCommentToggled",{},$globals.HLBrowserBottomWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onShowCommentToggled\x0a\x09self refresh",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["refresh"]
}),
$globals.HLBrowserBottomWidget);

$core.addMethod(
$core.method({
selector: "onShowInstanceToggled",
protocol: 'reactions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onShowInstanceToggled",{},$globals.HLBrowserBottomWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onShowInstanceToggled\x0a\x09self refresh",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["refresh"]
}),
$globals.HLBrowserBottomWidget);

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
source: "previous\x0a\x09\x22For navigation\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLBrowserBottomWidget);

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
source: "previous: aWidget\x0a\x09\x22For navigation\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLBrowserBottomWidget);

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
$1=$recv(self._model())._showComment();
if($core.assert($1)){
self._renderPanesOn_(html);
} else {
$recv(html)._with_(self._codeWidget());
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},$globals.HLBrowserBottomWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderContentOn: html\x0a\x09self model showComment \x0a\x09\x09ifTrue: [ self renderPanesOn: html ]\x0a\x09\x09ifFalse: [ html with: self codeWidget ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "showComment", "model", "renderPanesOn:", "with:", "codeWidget"]
}),
$globals.HLBrowserBottomWidget);

$core.addMethod(
$core.method({
selector: "renderPanesOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $HLVerticalSplitter(){return $globals.HLVerticalSplitter||(typeof HLVerticalSplitter=="undefined"?nil:HLVerticalSplitter)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(html)._with_($recv($HLVerticalSplitter())._with_with_(self._codeWidget(),self._documentationWidget()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderPanesOn:",{html:html},$globals.HLBrowserBottomWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderPanesOn: html\x0a\x09html with: (HLVerticalSplitter\x0a\x09\x09with: self codeWidget\x0a\x09\x09with: self documentationWidget)",
referencedClasses: ["HLVerticalSplitter"],
//>>excludeEnd("ide");
messageSends: ["with:", "with:with:", "codeWidget", "documentationWidget"]
}),
$globals.HLBrowserBottomWidget);



$core.addClass('HLBrowserModel', $globals.HLToolModel, ['showInstance', 'showComment'], 'Helios-Browser');
$core.addMethod(
$core.method({
selector: "editComment",
protocol: 'commands actions',
fn: function (){
var self=this;
function $HLEditComment(){return $globals.HLEditComment||(typeof HLEditComment=="undefined"?nil:HLEditComment)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._announcer())._announce_($recv($HLEditComment())._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"editComment",{},$globals.HLBrowserModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "editComment\x0a\x09self announcer announce: HLEditComment new",
referencedClasses: ["HLEditComment"],
//>>excludeEnd("ide");
messageSends: ["announce:", "announcer", "new"]
}),
$globals.HLBrowserModel);

$core.addMethod(
$core.method({
selector: "focusOnClasses",
protocol: 'actions',
fn: function (){
var self=this;
function $HLClassesFocusRequested(){return $globals.HLClassesFocusRequested||(typeof HLClassesFocusRequested=="undefined"?nil:HLClassesFocusRequested)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._announcer())._announce_($recv($HLClassesFocusRequested())._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"focusOnClasses",{},$globals.HLBrowserModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "focusOnClasses\x0a\x09self announcer announce: HLClassesFocusRequested new",
referencedClasses: ["HLClassesFocusRequested"],
//>>excludeEnd("ide");
messageSends: ["announce:", "announcer", "new"]
}),
$globals.HLBrowserModel);

$core.addMethod(
$core.method({
selector: "focusOnDocumentation",
protocol: 'actions',
fn: function (){
var self=this;
function $HLDocumentationFocusRequested(){return $globals.HLDocumentationFocusRequested||(typeof HLDocumentationFocusRequested=="undefined"?nil:HLDocumentationFocusRequested)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._announcer())._announce_($recv($HLDocumentationFocusRequested())._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"focusOnDocumentation",{},$globals.HLBrowserModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "focusOnDocumentation\x0a\x09self announcer announce: HLDocumentationFocusRequested new",
referencedClasses: ["HLDocumentationFocusRequested"],
//>>excludeEnd("ide");
messageSends: ["announce:", "announcer", "new"]
}),
$globals.HLBrowserModel);

$core.addMethod(
$core.method({
selector: "focusOnMethods",
protocol: 'actions',
fn: function (){
var self=this;
function $HLMethodsFocusRequested(){return $globals.HLMethodsFocusRequested||(typeof HLMethodsFocusRequested=="undefined"?nil:HLMethodsFocusRequested)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._announcer())._announce_($recv($HLMethodsFocusRequested())._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"focusOnMethods",{},$globals.HLBrowserModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "focusOnMethods\x0a\x09self announcer announce: HLMethodsFocusRequested new",
referencedClasses: ["HLMethodsFocusRequested"],
//>>excludeEnd("ide");
messageSends: ["announce:", "announcer", "new"]
}),
$globals.HLBrowserModel);

$core.addMethod(
$core.method({
selector: "focusOnPackages",
protocol: 'actions',
fn: function (){
var self=this;
function $HLPackagesFocusRequested(){return $globals.HLPackagesFocusRequested||(typeof HLPackagesFocusRequested=="undefined"?nil:HLPackagesFocusRequested)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._announcer())._announce_($recv($HLPackagesFocusRequested())._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"focusOnPackages",{},$globals.HLBrowserModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "focusOnPackages\x0a\x09self announcer announce: HLPackagesFocusRequested new",
referencedClasses: ["HLPackagesFocusRequested"],
//>>excludeEnd("ide");
messageSends: ["announce:", "announcer", "new"]
}),
$globals.HLBrowserModel);

$core.addMethod(
$core.method({
selector: "focusOnProtocols",
protocol: 'actions',
fn: function (){
var self=this;
function $HLProtocolsFocusRequested(){return $globals.HLProtocolsFocusRequested||(typeof HLProtocolsFocusRequested=="undefined"?nil:HLProtocolsFocusRequested)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._announcer())._announce_($recv($HLProtocolsFocusRequested())._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"focusOnProtocols",{},$globals.HLBrowserModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "focusOnProtocols\x0a\x09self announcer announce: HLProtocolsFocusRequested new",
referencedClasses: ["HLProtocolsFocusRequested"],
//>>excludeEnd("ide");
messageSends: ["announce:", "announcer", "new"]
}),
$globals.HLBrowserModel);

$core.addMethod(
$core.method({
selector: "focusOnSourceCode",
protocol: 'actions',
fn: function (){
var self=this;
function $HLSourceCodeFocusRequested(){return $globals.HLSourceCodeFocusRequested||(typeof HLSourceCodeFocusRequested=="undefined"?nil:HLSourceCodeFocusRequested)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._announcer())._announce_($recv($HLSourceCodeFocusRequested())._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"focusOnSourceCode",{},$globals.HLBrowserModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "focusOnSourceCode\x0a\x09self announcer announce: HLSourceCodeFocusRequested new",
referencedClasses: ["HLSourceCodeFocusRequested"],
//>>excludeEnd("ide");
messageSends: ["announce:", "announcer", "new"]
}),
$globals.HLBrowserModel);

$core.addMethod(
$core.method({
selector: "isBrowserModel",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBrowserModel\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLBrowserModel);

$core.addMethod(
$core.method({
selector: "setClassComment:",
protocol: 'actions',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._environment())._setClassCommentOf_to_($recv(self._selectedClass())._theNonMetaClass(),aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setClassComment:",{aString:aString},$globals.HLBrowserModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "setClassComment: aString\x0a\x09self environment\x0a\x09\x09setClassCommentOf: self selectedClass theNonMetaClass\x0a\x09\x09to: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setClassCommentOf:to:", "environment", "theNonMetaClass", "selectedClass"]
}),
$globals.HLBrowserModel);

$core.addMethod(
$core.method({
selector: "showClassTemplate",
protocol: 'actions',
fn: function (){
var self=this;
function $HLShowTemplate(){return $globals.HLShowTemplate||(typeof HLShowTemplate=="undefined"?nil:HLShowTemplate)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$receiver;
$1=self._selectedPackage();
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
var package_;
package_=$receiver;
$2=$recv($HLShowTemplate())._new();
$recv($2)._template_($recv(package_)._classTemplate());
$3=$recv($2)._yourself();
$recv(self._announcer())._announce_($3);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showClassTemplate",{},$globals.HLBrowserModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "showClassTemplate\x0a\x09self selectedPackage ifNotNil: [ :package |\x0a\x09\x09self announcer announce: (HLShowTemplate new\x0a\x09\x09\x09template: package classTemplate;\x0a\x09\x09\x09yourself) ]",
referencedClasses: ["HLShowTemplate"],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "selectedPackage", "announce:", "announcer", "template:", "new", "classTemplate", "yourself"]
}),
$globals.HLBrowserModel);

$core.addMethod(
$core.method({
selector: "showComment",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@showComment"];
if(($receiver = $2) == null || $receiver.isNil){
$1=true;
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showComment",{},$globals.HLBrowserModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "showComment\x0a\x09^ showComment ifNil: [ true ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.HLBrowserModel);

$core.addMethod(
$core.method({
selector: "showComment:",
protocol: 'accessing',
fn: function (aBoolean){
var self=this;
function $HLShowCommentToggled(){return $globals.HLShowCommentToggled||(typeof HLShowCommentToggled=="undefined"?nil:HLShowCommentToggled)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._withChangesDo_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self["@showComment"]=aBoolean;
self["@showComment"];
return $recv(self._announcer())._announce_($recv($HLShowCommentToggled())._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showComment:",{aBoolean:aBoolean},$globals.HLBrowserModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoolean"],
source: "showComment: aBoolean\x0a\x09self withChangesDo: [\x0a\x09\x09showComment := aBoolean.\x0a\x09\x09self announcer announce: HLShowCommentToggled new ]",
referencedClasses: ["HLShowCommentToggled"],
//>>excludeEnd("ide");
messageSends: ["withChangesDo:", "announce:", "announcer", "new"]
}),
$globals.HLBrowserModel);

$core.addMethod(
$core.method({
selector: "showInstance",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@showInstance"];
if(($receiver = $2) == null || $receiver.isNil){
$1=true;
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showInstance",{},$globals.HLBrowserModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "showInstance\x0a\x09^ showInstance ifNil: [ true ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.HLBrowserModel);

$core.addMethod(
$core.method({
selector: "showInstance:",
protocol: 'accessing',
fn: function (aBoolean){
var self=this;
function $HLShowInstanceToggled(){return $globals.HLShowInstanceToggled||(typeof HLShowInstanceToggled=="undefined"?nil:HLShowInstanceToggled)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$2,$receiver;
self._withChangesDo_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self["@showInstance"]=aBoolean;
self["@showInstance"];
$1=self._selectedClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["selectedClass"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
if($core.assert(aBoolean)){
$3=self._selectedClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["selectedClass"]=2;
//>>excludeEnd("ctx");
$2=$recv($3)._theNonMetaClass();
} else {
$2=$recv(self._selectedClass())._theMetaClass();
};
self._selectedClass_($2);
};
return $recv(self._announcer())._announce_($recv($HLShowInstanceToggled())._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showInstance:",{aBoolean:aBoolean},$globals.HLBrowserModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoolean"],
source: "showInstance: aBoolean\x0a\x0a\x09self withChangesDo: [\x0a\x09\x09showInstance := aBoolean.\x0a\x0a    \x09self selectedClass ifNotNil: [\x0a    \x09\x09self selectedClass: (aBoolean\x0a    \x09\x09\x09ifTrue: [ self selectedClass theNonMetaClass ]\x0a\x09    \x09  \x09ifFalse: [ self selectedClass theMetaClass ]) ].\x0a    \x0a\x09\x09self announcer announce: HLShowInstanceToggled new ]",
referencedClasses: ["HLShowInstanceToggled"],
//>>excludeEnd("ide");
messageSends: ["withChangesDo:", "ifNotNil:", "selectedClass", "selectedClass:", "ifTrue:ifFalse:", "theNonMetaClass", "theMetaClass", "announce:", "announcer", "new"]
}),
$globals.HLBrowserModel);

$core.addMethod(
$core.method({
selector: "showMethodTemplate",
protocol: 'actions',
fn: function (){
var self=this;
function $HLShowTemplate(){return $globals.HLShowTemplate||(typeof HLShowTemplate=="undefined"?nil:HLShowTemplate)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$receiver;
$1=self._selectedClass();
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
var theClass;
theClass=$receiver;
$2=$recv($HLShowTemplate())._new();
$recv($2)._template_($recv(theClass)._methodTemplate());
$3=$recv($2)._yourself();
$recv(self._announcer())._announce_($3);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showMethodTemplate",{},$globals.HLBrowserModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "showMethodTemplate\x0a\x09self selectedClass ifNotNil: [ :theClass |\x0a\x09\x09self announcer announce: (HLShowTemplate new\x0a\x09\x09\x09template: theClass methodTemplate;\x0a\x09\x09\x09yourself) ]",
referencedClasses: ["HLShowTemplate"],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "selectedClass", "announce:", "announcer", "template:", "new", "methodTemplate", "yourself"]
}),
$globals.HLBrowserModel);


$core.addMethod(
$core.method({
selector: "on:",
protocol: 'instance creation',
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
}, function($ctx1) {$ctx1.fill(self,"on:",{anEnvironment:anEnvironment},$globals.HLBrowserModel.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anEnvironment"],
source: "on: anEnvironment\x0a\x0a\x09^ self new\x0a    \x09environment: anEnvironment;\x0a        yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["environment:", "new", "yourself"]
}),
$globals.HLBrowserModel.klass);


$core.addClass('HLClassCache', $globals.Object, ['class', 'selectorsCache', 'overrideCache', 'overriddenCache'], 'Helios-Browser');
$core.addMethod(
$core.method({
selector: "invalidateChildrenSelector:",
protocol: 'actions',
fn: function (aSelector){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$recv($recv(self._theClass())._subclasses())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(self._selectorsCache())._cacheFor_(each);
$recv($1)._removeSelector_(aSelector);
$2=$recv($1)._invalidateChildrenSelector_(aSelector);
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"invalidateChildrenSelector:",{aSelector:aSelector},$globals.HLClassCache)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSelector"],
source: "invalidateChildrenSelector: aSelector\x0a\x09self theClass subclasses do: [ :each |\x0a    \x09(self selectorsCache cacheFor: each)\x0a        \x09removeSelector: aSelector;\x0a        \x09invalidateChildrenSelector: aSelector ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "subclasses", "theClass", "removeSelector:", "cacheFor:", "selectorsCache", "invalidateChildrenSelector:"]
}),
$globals.HLClassCache);

$core.addMethod(
$core.method({
selector: "invalidateParentSelector:",
protocol: 'actions',
fn: function (aSelector){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$3,$4,$receiver;
$2=self._theClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["theClass"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._superclass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["superclass"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$3=$recv(self._selectorsCache())._cacheFor_($recv(self._theClass())._superclass());
$recv($3)._removeSelector_(aSelector);
$4=$recv($3)._invalidateParentSelector_(aSelector);
$4;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"invalidateParentSelector:",{aSelector:aSelector},$globals.HLClassCache)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSelector"],
source: "invalidateParentSelector: aSelector\x0a\x09self theClass superclass ifNotNil: [\x0a    \x09(self selectorsCache cacheFor: self theClass superclass)\x0a        \x09removeSelector: aSelector;\x0a\x09\x09\x09invalidateParentSelector: aSelector ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "superclass", "theClass", "removeSelector:", "cacheFor:", "selectorsCache", "invalidateParentSelector:"]
}),
$globals.HLClassCache);

$core.addMethod(
$core.method({
selector: "invalidateSelector:",
protocol: 'actions',
fn: function (aSelector){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._invalidateParentSelector_(aSelector);
self._invalidateChildrenSelector_(aSelector);
$1=self._removeSelector_(aSelector);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"invalidateSelector:",{aSelector:aSelector},$globals.HLClassCache)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSelector"],
source: "invalidateSelector: aSelector\x0a\x09self \x0a    \x09invalidateParentSelector: aSelector;\x0a        invalidateChildrenSelector: aSelector;\x0a        removeSelector: aSelector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["invalidateParentSelector:", "invalidateChildrenSelector:", "removeSelector:"]
}),
$globals.HLClassCache);

$core.addMethod(
$core.method({
selector: "isOverridden:",
protocol: 'testing',
fn: function (aMethod){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._overriddenCache())._at_ifAbsentPut_($recv(aMethod)._selector(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aMethod)._isOverridden();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isOverridden:",{aMethod:aMethod},$globals.HLClassCache)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod"],
source: "isOverridden: aMethod\x0a\x09^ self overriddenCache \x0a    \x09at: aMethod selector\x0a      \x09ifAbsentPut: [ aMethod isOverridden ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsentPut:", "overriddenCache", "selector", "isOverridden"]
}),
$globals.HLClassCache);

$core.addMethod(
$core.method({
selector: "isOverride:",
protocol: 'testing',
fn: function (aMethod){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._overrideCache())._at_ifAbsentPut_($recv(aMethod)._selector(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aMethod)._isOverride();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isOverride:",{aMethod:aMethod},$globals.HLClassCache)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod"],
source: "isOverride: aMethod\x0a\x09^ self overrideCache\x0a    \x09at: aMethod selector\x0a      \x09ifAbsentPut: [ aMethod isOverride ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsentPut:", "overrideCache", "selector", "isOverride"]
}),
$globals.HLClassCache);

$core.addMethod(
$core.method({
selector: "overriddenCache",
protocol: 'accessing',
fn: function (){
var self=this;
function $HashedCollection(){return $globals.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@overriddenCache"];
if(($receiver = $2) == null || $receiver.isNil){
self["@overriddenCache"]=$recv($HashedCollection())._new();
$1=self["@overriddenCache"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"overriddenCache",{},$globals.HLClassCache)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "overriddenCache\x0a\x09^ overriddenCache ifNil: [ overriddenCache := HashedCollection new ]",
referencedClasses: ["HashedCollection"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.HLClassCache);

$core.addMethod(
$core.method({
selector: "overrideCache",
protocol: 'accessing',
fn: function (){
var self=this;
function $HashedCollection(){return $globals.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@overrideCache"];
if(($receiver = $2) == null || $receiver.isNil){
self["@overrideCache"]=$recv($HashedCollection())._new();
$1=self["@overrideCache"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"overrideCache",{},$globals.HLClassCache)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "overrideCache\x0a\x09^ overrideCache ifNil: [ overrideCache := HashedCollection new ]",
referencedClasses: ["HashedCollection"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.HLClassCache);

$core.addMethod(
$core.method({
selector: "removeSelector:",
protocol: 'private',
fn: function (aSelector){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._overriddenCache())._removeKey_ifAbsent_(aSelector,(function(){

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["removeKey:ifAbsent:"]=1;
//>>excludeEnd("ctx");
$recv(self._overrideCache())._removeKey_ifAbsent_(aSelector,(function(){

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeSelector:",{aSelector:aSelector},$globals.HLClassCache)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSelector"],
source: "removeSelector: aSelector\x0a\x09self overriddenCache \x0a    \x09removeKey: aSelector\x0a        ifAbsent: [ ].\x0a    self overrideCache \x0a    \x09removeKey: aSelector\x0a        ifAbsent: [ ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeKey:ifAbsent:", "overriddenCache", "overrideCache"]
}),
$globals.HLClassCache);

$core.addMethod(
$core.method({
selector: "selectorsCache",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@selectorsCache"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selectorsCache\x0a\x09^ selectorsCache",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLClassCache);

$core.addMethod(
$core.method({
selector: "selectorsCache:",
protocol: 'accessing',
fn: function (aCache){
var self=this;
self["@selectorsCache"]=aCache;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCache"],
source: "selectorsCache: aCache\x0a\x09selectorsCache := aCache",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLClassCache);

$core.addMethod(
$core.method({
selector: "theClass",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@class"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "theClass\x0a\x09^ class",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLClassCache);

$core.addMethod(
$core.method({
selector: "theClass:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
self["@class"]=aClass;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "theClass: aClass\x0a\x09class := aClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLClassCache);


$core.addMethod(
$core.method({
selector: "on:selectorsCache:",
protocol: 'instance creation',
fn: function (aClass,aSelectorsCache){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._theClass_(aClass);
$recv($2)._selectorsCache_(aSelectorsCache);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:selectorsCache:",{aClass:aClass,aSelectorsCache:aSelectorsCache},$globals.HLClassCache.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aSelectorsCache"],
source: "on: aClass selectorsCache: aSelectorsCache\x0a\x09^ self new\x0a    \x09theClass: aClass;\x0a        selectorsCache: aSelectorsCache;\x0a        yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["theClass:", "new", "selectorsCache:", "yourself"]
}),
$globals.HLClassCache.klass);


$core.addClass('HLClassesListWidget', $globals.HLToolListWidget, [], 'Helios-Browser');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLClassesListWidget.comment="I render a list of classes in the selected package.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "cssClassForItem:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(aClass)._theNonMetaClass())._heliosClass();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cssClassForItem:",{aClass:aClass},$globals.HLClassesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "cssClassForItem: aClass\x0a\x09^ aClass theNonMetaClass heliosClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["heliosClass", "theNonMetaClass"]
}),
$globals.HLClassesListWidget);

$core.addMethod(
$core.method({
selector: "focus",
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
$globals.HLClassesListWidget.superclass.fn.prototype._focus.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=self._selectedItem();
if(($receiver = $1) == null || $receiver.isNil){
$recv(self._model())._showClassTemplate();
} else {
$1;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"focus",{},$globals.HLClassesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "focus\x0a\x09super focus.\x0a\x09\x0a\x09self selectedItem \x0a\x09\x09ifNil: [ self model showClassTemplate ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["focus", "ifNil:", "selectedItem", "showClassTemplate", "model"]
}),
$globals.HLClassesListWidget);

$core.addMethod(
$core.method({
selector: "focusMethodsListWidget",
protocol: 'actions',
fn: function (){
var self=this;
function $HLMethodsListFocus(){return $globals.HLMethodsListFocus||(typeof HLMethodsListFocus=="undefined"?nil:HLMethodsListFocus)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(self._model())._announcer())._announce_($recv($HLMethodsListFocus())._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"focusMethodsListWidget",{},$globals.HLClassesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "focusMethodsListWidget\x0a\x09self model announcer announce: HLMethodsListFocus new",
referencedClasses: ["HLMethodsListFocus"],
//>>excludeEnd("ide");
messageSends: ["announce:", "announcer", "model", "new"]
}),
$globals.HLClassesListWidget);

$core.addMethod(
$core.method({
selector: "focusProtocolsListWidget",
protocol: 'actions',
fn: function (){
var self=this;
function $HLProtocolsListFocus(){return $globals.HLProtocolsListFocus||(typeof HLProtocolsListFocus=="undefined"?nil:HLProtocolsListFocus)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(self._model())._announcer())._announce_($recv($HLProtocolsListFocus())._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"focusProtocolsListWidget",{},$globals.HLClassesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "focusProtocolsListWidget\x0a\x09self model announcer announce: HLProtocolsListFocus new",
referencedClasses: ["HLProtocolsListFocus"],
//>>excludeEnd("ide");
messageSends: ["announce:", "announcer", "model", "new"]
}),
$globals.HLClassesListWidget);

$core.addMethod(
$core.method({
selector: "getChildrenOf:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._items())._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(each)._superclass()).__eq(aClass);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getChildrenOf:",{aClass:aClass},$globals.HLClassesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "getChildrenOf: aClass\x0a\x09^ self items select: [ :each | each superclass = aClass ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["select:", "items", "=", "superclass"]
}),
$globals.HLClassesListWidget);

$core.addMethod(
$core.method({
selector: "getRootClassesOf:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aCollection)._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(aCollection)._includes_($recv(each)._superclass()))._not();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getRootClassesOf:",{aCollection:aCollection},$globals.HLClassesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "getRootClassesOf: aCollection\x0a\x09^ aCollection select: [ :each |\x0a    \x09\x09(aCollection includes: each superclass) not ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["select:", "not", "includes:", "superclass"]
}),
$globals.HLClassesListWidget);

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
$globals.HLClassesListWidget);

$core.addMethod(
$core.method({
selector: "observeModel",
protocol: 'actions',
fn: function (){
var self=this;
function $HLPackageSelected(){return $globals.HLPackageSelected||(typeof HLPackageSelected=="undefined"?nil:HLPackageSelected)}
function $HLShowInstanceToggled(){return $globals.HLShowInstanceToggled||(typeof HLShowInstanceToggled=="undefined"?nil:HLShowInstanceToggled)}
function $HLShowCommentToggled(){return $globals.HLShowCommentToggled||(typeof HLShowCommentToggled=="undefined"?nil:HLShowCommentToggled)}
function $HLClassSelected(){return $globals.HLClassSelected||(typeof HLClassSelected=="undefined"?nil:HLClassSelected)}
function $HLClassesFocusRequested(){return $globals.HLClassesFocusRequested||(typeof HLClassesFocusRequested=="undefined"?nil:HLClassesFocusRequested)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(self._model())._announcer();
$recv($1)._on_send_to_($HLPackageSelected(),"onPackageSelected:",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=1;
//>>excludeEnd("ctx");
$recv($1)._on_send_to_($HLShowInstanceToggled(),"onShowInstanceToggled",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=2;
//>>excludeEnd("ctx");
$recv($1)._on_send_to_($HLShowCommentToggled(),"onShowCommentToggled",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=3;
//>>excludeEnd("ctx");
$recv($1)._on_send_to_($HLClassSelected(),"onClassSelected:",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=4;
//>>excludeEnd("ctx");
$2=$recv($1)._on_send_to_($HLClassesFocusRequested(),"onClassesFocusRequested",self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeModel",{},$globals.HLClassesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeModel\x0a\x09self model announcer \x0a    \x09on: HLPackageSelected\x0a\x09\x09send: #onPackageSelected:\x0a\x09\x09to: self;\x0a\x09\x09\x0a    \x09on: HLShowInstanceToggled \x0a\x09\x09send: #onShowInstanceToggled\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLShowCommentToggled\x0a\x09\x09send: #onShowCommentToggled\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLClassSelected\x0a\x09\x09send: #onClassSelected:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLClassesFocusRequested\x0a\x09\x09send: #onClassesFocusRequested\x0a\x09\x09to: self",
referencedClasses: ["HLPackageSelected", "HLShowInstanceToggled", "HLShowCommentToggled", "HLClassSelected", "HLClassesFocusRequested"],
//>>excludeEnd("ide");
messageSends: ["on:send:to:", "announcer", "model"]
}),
$globals.HLClassesListWidget);

$core.addMethod(
$core.method({
selector: "observeSystem",
protocol: 'actions',
fn: function (){
var self=this;
function $ClassAdded(){return $globals.ClassAdded||(typeof ClassAdded=="undefined"?nil:ClassAdded)}
function $ClassRemoved(){return $globals.ClassRemoved||(typeof ClassRemoved=="undefined"?nil:ClassRemoved)}
function $ClassMoved(){return $globals.ClassMoved||(typeof ClassMoved=="undefined"?nil:ClassMoved)}
function $ClassRenamed(){return $globals.ClassRenamed||(typeof ClassRenamed=="undefined"?nil:ClassRenamed)}
function $ClassMigrated(){return $globals.ClassMigrated||(typeof ClassMigrated=="undefined"?nil:ClassMigrated)}
function $ClassCommentChanged(){return $globals.ClassCommentChanged||(typeof ClassCommentChanged=="undefined"?nil:ClassCommentChanged)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(self._model())._systemAnnouncer();
$recv($1)._on_send_to_($ClassAdded(),"onClassAdded:",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=1;
//>>excludeEnd("ctx");
$recv($1)._on_send_to_($ClassRemoved(),"onClassRemoved:",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=2;
//>>excludeEnd("ctx");
$recv($1)._on_send_to_($ClassMoved(),"onClassMoved:",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=3;
//>>excludeEnd("ctx");
$recv($1)._on_send_to_($ClassRenamed(),"onClassRenamed:",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=4;
//>>excludeEnd("ctx");
$recv($1)._on_send_to_($ClassMigrated(),"onClassMigrated:",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=5;
//>>excludeEnd("ctx");
$2=$recv($1)._on_send_to_($ClassCommentChanged(),"onClassCommentChanged:",self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeSystem",{},$globals.HLClassesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeSystem\x0a\x09self model systemAnnouncer\x0a    \x09on: ClassAdded\x0a\x09\x09send: #onClassAdded:\x0a\x09\x09to: self;\x0a\x09\x09\x0a        on: ClassRemoved\x0a        send: #onClassRemoved:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: ClassMoved\x0a\x09\x09send: #onClassMoved:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: ClassRenamed\x0a\x09\x09send: #onClassRenamed:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: ClassMigrated\x0a\x09\x09send: #onClassMigrated:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: ClassCommentChanged\x0a        send: #onClassCommentChanged:\x0a\x09\x09to: self",
referencedClasses: ["ClassAdded", "ClassRemoved", "ClassMoved", "ClassRenamed", "ClassMigrated", "ClassCommentChanged"],
//>>excludeEnd("ide");
messageSends: ["on:send:to:", "systemAnnouncer", "model"]
}),
$globals.HLClassesListWidget);

$core.addMethod(
$core.method({
selector: "onClassAdded:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
var class_;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
class_=$recv(anAnnouncement)._theClass();
$1=$recv($recv($recv(class_)._package()).__eq($recv(self._model())._selectedPackage()))._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._items())._includes_(class_);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if(!$core.assert($1)){
return self;
};
self._setItemsForSelectedPackage();
self._refresh();
$2=self._focus();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onClassAdded:",{anAnnouncement:anAnnouncement,class_:class_},$globals.HLClassesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onClassAdded: anAnnouncement\x0a\x09| class |\x0a\x09\x0a\x09class := anAnnouncement theClass.\x0a\x09\x0a\x09(class package = self model selectedPackage or: [\x0a\x09\x09self items includes: class ]) ifFalse: [ ^ self ].\x0a    \x0a    self \x0a\x09\x09setItemsForSelectedPackage;\x0a\x09\x09refresh;\x0a\x09\x09focus",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["theClass", "ifFalse:", "or:", "=", "package", "selectedPackage", "model", "includes:", "items", "setItemsForSelectedPackage", "refresh", "focus"]
}),
$globals.HLClassesListWidget);

$core.addMethod(
$core.method({
selector: "onClassCommentChanged:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
var class_;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
class_=$recv(anAnnouncement)._theClass();
$1=$recv($recv(class_)._package()).__eq($recv(self._model())._selectedPackage());
if(!$core.assert($1)){
return self;
};
self._refresh();
$2=self._focus();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onClassCommentChanged:",{anAnnouncement:anAnnouncement,class_:class_},$globals.HLClassesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onClassCommentChanged: anAnnouncement\x0a\x09| class |\x0a\x09class := anAnnouncement theClass.\x0a\x0a\x09class package = self model selectedPackage ifFalse: [ ^ self ].\x0a    \x0a    self \x0a\x09\x09refresh;\x0a\x09\x09focus",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["theClass", "ifFalse:", "=", "package", "selectedPackage", "model", "refresh", "focus"]
}),
$globals.HLClassesListWidget);

$core.addMethod(
$core.method({
selector: "onClassMigrated:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
var class_,oldClass;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$4,$3,$2,$5;
class_=$recv(anAnnouncement)._theClass();
oldClass=$recv(anAnnouncement)._oldClass();
$1=$recv(self._items())._includes_(oldClass);
if(!$core.assert($1)){
return self;
};
$4=self._model();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["model"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._selectedClass();
$2=$recv($3).__eq(oldClass);
if($core.assert($2)){
$recv(self._model())._selectedClass_(class_);
};
self._setItemsForSelectedPackage();
self._refresh();
$5=self._focus();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onClassMigrated:",{anAnnouncement:anAnnouncement,class_:class_,oldClass:oldClass},$globals.HLClassesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onClassMigrated: anAnnouncement\x0a\x09| class oldClass |\x0a\x09\x0a\x09class := anAnnouncement theClass.\x0a\x09oldClass := anAnnouncement oldClass.\x0a\x0a\x09(self items includes: oldClass) ifFalse: [ ^ self ].\x0a\x0a\x09self model selectedClass = oldClass ifTrue: [\x0a\x09\x09self model selectedClass: class ].\x0a    \x0a    self setItemsForSelectedPackage.\x0a    self \x0a\x09\x09refresh;\x0a\x09\x09focus",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["theClass", "oldClass", "ifFalse:", "includes:", "items", "ifTrue:", "=", "selectedClass", "model", "selectedClass:", "setItemsForSelectedPackage", "refresh", "focus"]
}),
$globals.HLClassesListWidget);

$core.addMethod(
$core.method({
selector: "onClassMoved:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
var class_,oldPackage;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$5,$4,$2,$6,$8,$7,$1,$9,$10,$11;
class_=$recv(anAnnouncement)._theClass();
oldPackage=$recv(anAnnouncement)._oldPackage();
$3=oldPackage;
$5=self._model();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["model"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._selectedPackage();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selectedPackage"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__eq($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$6=$recv(class_)._package();
$8=self._model();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["model"]=2;
//>>excludeEnd("ctx");
$7=$recv($8)._selectedPackage();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["selectedPackage"]=2;
//>>excludeEnd("ctx");
return $recv($6).__eq($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if(!$core.assert($1)){
return self;
};
$9=$recv(oldPackage).__eq($recv(self._model())._selectedPackage());
if($core.assert($9)){
self._selectedItem_(nil);
$10=self._selectItem_(nil);
$10;
};
self._setItemsForSelectedPackage();
self._refresh();
$11=self._focus();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onClassMoved:",{anAnnouncement:anAnnouncement,class_:class_,oldPackage:oldPackage},$globals.HLClassesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onClassMoved: anAnnouncement\x0a\x09| class oldPackage |\x0a\x09\x0a\x09class := anAnnouncement theClass.\x0a\x09oldPackage := anAnnouncement oldPackage.\x0a\x09\x0a\x09(oldPackage = self model selectedPackage or: [\x0a\x09\x09class package = self model selectedPackage ])\x0a\x09\x09\x09ifFalse: [ ^ self ].\x0a\x09\x0a\x09oldPackage = self model selectedPackage ifTrue: [ \x0a\x09\x09self \x0a\x09\x09\x09selectedItem: nil;\x0a\x09\x09\x09selectItem: nil ].\x0a    \x0a    self setItemsForSelectedPackage.\x0a    self \x09\x0a\x09\x09refresh;\x0a\x09\x09focus",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["theClass", "oldPackage", "ifFalse:", "or:", "=", "selectedPackage", "model", "package", "ifTrue:", "selectedItem:", "selectItem:", "setItemsForSelectedPackage", "refresh", "focus"]
}),
$globals.HLClassesListWidget);

$core.addMethod(
$core.method({
selector: "onClassRemoved:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
var class_;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3;
class_=$recv(anAnnouncement)._theClass();
$1=$recv($recv(class_)._package()).__eq($recv(self._model())._selectedPackage());
if(!$core.assert($1)){
return self;
};
self._selectItem_(nil);
$2=self._selectedItem_(nil);
self._setItemsForSelectedPackage();
self._refresh();
$3=self._focus();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onClassRemoved:",{anAnnouncement:anAnnouncement,class_:class_},$globals.HLClassesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onClassRemoved: anAnnouncement\x0a\x09| class |\x0a\x09class := anAnnouncement theClass.\x0a\x0a\x09class package = self model selectedPackage ifFalse: [ ^ self ].\x0a    \x0a\x09self \x0a\x09\x09selectItem: nil;\x0a\x09\x09selectedItem: nil.\x0a    self setItemsForSelectedPackage.\x0a    self \x0a\x09\x09refresh;\x0a\x09\x09focus",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["theClass", "ifFalse:", "=", "package", "selectedPackage", "model", "selectItem:", "selectedItem:", "setItemsForSelectedPackage", "refresh", "focus"]
}),
$globals.HLClassesListWidget);

$core.addMethod(
$core.method({
selector: "onClassRenamed:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($recv($recv(anAnnouncement)._theClass())._package()).__eq($recv(self._model())._selectedPackage());
if(!$core.assert($1)){
return self;
};
self._setItemsForSelectedPackage();
self._refresh();
$2=self._focus();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onClassRenamed:",{anAnnouncement:anAnnouncement},$globals.HLClassesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onClassRenamed: anAnnouncement\x0a\x09anAnnouncement theClass package = self model selectedPackage ifFalse: [ ^ self ].\x0a    \x0a    self setItemsForSelectedPackage.\x0a    self \x0a\x09\x09refresh;\x0a\x09\x09focus",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "=", "package", "theClass", "selectedPackage", "model", "setItemsForSelectedPackage", "refresh", "focus"]
}),
$globals.HLClassesListWidget);

$core.addMethod(
$core.method({
selector: "onClassSelected:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
var selectedClass;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$receiver;
$1=$recv(anAnnouncement)._item();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["item"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
return self;
} else {
$1;
};
selectedClass=$recv($recv(anAnnouncement)._item())._theNonMetaClass();
self._selectedItem_(selectedClass);
$2=self._hasFocus();
if(!$core.assert($2)){
self._activateItem_(selectedClass);
$3=self._focus();
$3;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onClassSelected:",{anAnnouncement:anAnnouncement,selectedClass:selectedClass},$globals.HLClassesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onClassSelected: anAnnouncement\x0a\x09| selectedClass |\x0a\x09\x0a\x09anAnnouncement item ifNil: [ ^ self ].\x0a\x09\x0a\x09selectedClass := anAnnouncement item theNonMetaClass.\x0a\x09self selectedItem: selectedClass.\x0a\x0a\x09self hasFocus ifFalse: [\x0a\x09\x09self \x0a\x09\x09\x09activateItem: selectedClass;\x0a\x09\x09\x09focus ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "item", "theNonMetaClass", "selectedItem:", "ifFalse:", "hasFocus", "activateItem:", "focus"]
}),
$globals.HLClassesListWidget);

$core.addMethod(
$core.method({
selector: "onClassesFocusRequested",
protocol: 'reactions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._focus();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onClassesFocusRequested",{},$globals.HLClassesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onClassesFocusRequested\x0a\x09self focus",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["focus"]
}),
$globals.HLClassesListWidget);

$core.addMethod(
$core.method({
selector: "onPackageSelected:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._selectedItem_(nil);
self._setItemsForSelectedPackage();
self._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onPackageSelected:",{anAnnouncement:anAnnouncement},$globals.HLClassesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onPackageSelected: anAnnouncement\x0a    self selectedItem: nil.\x0a    \x0a    self setItemsForSelectedPackage.\x0a    self refresh",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selectedItem:", "setItemsForSelectedPackage", "refresh"]
}),
$globals.HLClassesListWidget);

$core.addMethod(
$core.method({
selector: "onShowCommentToggled",
protocol: 'reactions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onShowCommentToggled",{},$globals.HLClassesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onShowCommentToggled\x0a\x09self refresh",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["refresh"]
}),
$globals.HLClassesListWidget);

$core.addMethod(
$core.method({
selector: "onShowInstanceToggled",
protocol: 'reactions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onShowInstanceToggled",{},$globals.HLClassesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onShowInstanceToggled\x0a\x09self refresh",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["refresh"]
}),
$globals.HLClassesListWidget);

$core.addMethod(
$core.method({
selector: "renderButtonsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var checkbox;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$4,$6,$5,$7,$8,$9,$10,$2,$11,$13,$14,$12,$15;
$1=$recv(html)._div();
$recv($1)._class_("btn-group");
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
$4=$3;
$5=$recv($String())._streamContents_((function(str){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv(str)._nextPutAll_("btn");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$6=self._showInstance();
if($core.assert($6)){
return $recv(str)._nextPutAll_(" active");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({str:str},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["streamContents:"]=1;
//>>excludeEnd("ctx");
$recv($4)._class_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=2;
//>>excludeEnd("ctx");
$recv($3)._with_("Instance");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$7=$recv($3)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._showInstance_(true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["showInstance:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["onClick:"]=1;
//>>excludeEnd("ctx");
$7;
$8=$recv(html)._button();
$recv($8)._class_($recv($String())._streamContents_((function(str){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv(str)._nextPutAll_("btn");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["nextPutAll:"]=3;
//>>excludeEnd("ctx");
$9=self._showClass();
if($core.assert($9)){
return $recv(str)._nextPutAll_(" active");
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({str:str},$ctx2,5)});
//>>excludeEnd("ctx");
})));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=3;
//>>excludeEnd("ctx");
$recv($8)._with_("Class");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$10=$recv($8)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._showInstance_(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,7)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["onClick:"]=2;
//>>excludeEnd("ctx");
return $10;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$11=$recv(html)._label();
$recv($11)._class_("checkbox");
$12=$recv($11)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$13=$recv(html)._input();
$recv($13)._type_("checkbox");
$14=$recv($13)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._toggleShowComment();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,9)});
//>>excludeEnd("ctx");
}));
checkbox=$14;
checkbox;
return $recv(html)._with_("Doc");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,8)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
$15=self._showComment();
if($core.assert($15)){
$recv(checkbox)._at_put_("checked","checked");
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html,checkbox:checkbox},$globals.HLClassesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderButtonsOn: html\x0a\x09| checkbox |\x0a\x09\x0a\x09html div \x0a        class: 'btn-group';\x0a\x09\x09with: [ \x0a           \x09html button \x0a                class: (String streamContents: [ :str |\x0a                \x09str nextPutAll: 'btn'.\x0a                    self showInstance ifTrue: [ \x0a                    \x09str nextPutAll: ' active' ] ]);\x0a  \x09\x09\x09\x09with: 'Instance';\x0a                onClick: [ self showInstance: true ].\x0a  \x09\x09\x09html button\x0a  \x09\x09\x09\x09class: (String streamContents: [ :str |\x0a                \x09str nextPutAll: 'btn'.\x0a                    self showClass ifTrue: [ \x0a                    \x09str nextPutAll: ' active' ] ]);\x0a  \x09\x09\x09\x09with: 'Class';\x0a\x09\x09\x09\x09onClick: [ self showInstance: false ] ].\x0a\x09\x09html label \x0a\x09\x09\x09class: 'checkbox';\x0a\x09\x09\x09with: [\x0a\x09\x09\x09\x09checkbox := html input\x0a\x09\x09\x09\x09\x09type: 'checkbox';\x0a\x09\x09\x09\x09\x09onClick: [ self toggleShowComment ].\x0a\x09\x09\x09\x09html with: 'Doc' ].\x0a\x09\x09\x09\x09\x0a\x09\x09self showComment ifTrue: [\x0a\x09\x09\x09checkbox at: 'checked' put: 'checked' ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "button", "streamContents:", "nextPutAll:", "ifTrue:", "showInstance", "onClick:", "showInstance:", "showClass", "label", "type:", "input", "toggleShowComment", "showComment", "at:put:"]
}),
$globals.HLClassesListWidget);

$core.addMethod(
$core.method({
selector: "renderItem:level:on:",
protocol: 'rendering',
fn: function (aClass,anInteger,html){
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
$recv($1)._data_put_("item",aClass);
$2=li;
$recv($2)._class_(self._listCssClassForItem_(aClass));
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
$recv($recv(html)._tag_("i"))._class_(self._cssClassForItem_(aClass));
return self._renderItemLabel_level_on_(aClass,anInteger,html);
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
$recv(self._getChildrenOf_(aClass))._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._renderItem_level_on_(each,$recv(anInteger).__plus((1)),html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,4)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderItem:level:on:",{aClass:aClass,anInteger:anInteger,html:html,li:li},$globals.HLClassesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "anInteger", "html"],
source: "renderItem: aClass level: anInteger on: html\x0a\x09| li |\x0a    \x0a\x09li := html li.\x0a\x09li asJQuery data: 'item' put: aClass.\x0a    li\x0a\x09\x09class: (self listCssClassForItem: aClass);\x0a\x09\x09with: [ \x0a        \x09html a\x0a            \x09with: [ \x0a            \x09\x09(html tag: 'i') class: (self cssClassForItem: aClass).\x0a  \x09\x09\x09\x09\x09self renderItemLabel: aClass level: anInteger on: html ];\x0a\x09\x09\x09\x09onClick: [\x0a                  \x09self reactivateListItem: li asJQuery ] ].\x0a                    \x0a    (self getChildrenOf: aClass) do: [ :each |\x0a    \x09self renderItem: each level: anInteger + 1 on: html ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["li", "data:put:", "asJQuery", "class:", "listCssClassForItem:", "with:", "a", "tag:", "cssClassForItem:", "renderItemLabel:level:on:", "onClick:", "reactivateListItem:", "do:", "getChildrenOf:", "renderItem:level:on:", "+"]
}),
$globals.HLClassesListWidget);

$core.addMethod(
$core.method({
selector: "renderItem:on:",
protocol: 'rendering',
fn: function (aClass,html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.HLClassesListWidget.superclass.fn.prototype._renderItem_on_.apply($recv(self), [aClass,html]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(self._getChildrenOf_(aClass))._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._renderItem_level_on_(each,(1),html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderItem:on:",{aClass:aClass,html:html},$globals.HLClassesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "html"],
source: "renderItem: aClass on: html\x0a\x09super renderItem: aClass on: html.\x0a    (self getChildrenOf: aClass) do: [ :each |\x0a    \x09self renderItem: each level: 1 on: html ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["renderItem:on:", "do:", "getChildrenOf:", "renderItem:level:on:"]
}),
$globals.HLClassesListWidget);

$core.addMethod(
$core.method({
selector: "renderItemLabel:level:on:",
protocol: 'rendering',
fn: function (aClass,anInteger,html){
var self=this;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv($recv(html)._span())._asJQuery())._html_($recv($String())._streamContents_((function(str){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(anInteger)._timesRepeat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(str)._nextPutAll_("&nbsp;&nbsp;&nbsp;&nbsp;");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
return $recv(str)._nextPutAll_($recv(aClass)._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({str:str},$ctx1,1)});
//>>excludeEnd("ctx");
})));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderItemLabel:level:on:",{aClass:aClass,anInteger:anInteger,html:html},$globals.HLClassesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "anInteger", "html"],
source: "renderItemLabel: aClass level: anInteger on: html\x0a\x09html span asJQuery html: (String streamContents: [ :str |\x0a\x09\x09anInteger timesRepeat: [\x0a\x09\x09\x09str nextPutAll: '&nbsp;&nbsp;&nbsp;&nbsp;' ].\x0a\x09\x09\x09str nextPutAll: aClass name ])",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["html:", "asJQuery", "span", "streamContents:", "timesRepeat:", "nextPutAll:", "name"]
}),
$globals.HLClassesListWidget);

$core.addMethod(
$core.method({
selector: "renderItemLabel:on:",
protocol: 'rendering',
fn: function (aClass,html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._renderItemLabel_level_on_(aClass,(0),html);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderItemLabel:on:",{aClass:aClass,html:html},$globals.HLClassesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "html"],
source: "renderItemLabel: aClass on: html\x0a\x09self renderItemLabel: aClass level: 0 on: html",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["renderItemLabel:level:on:"]
}),
$globals.HLClassesListWidget);

$core.addMethod(
$core.method({
selector: "renderListOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._getRootClassesOf_(self._items()))._do_((function(each){
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
}, function($ctx1) {$ctx1.fill(self,"renderListOn:",{html:html},$globals.HLClassesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderListOn: html\x0a\x09(self getRootClassesOf: self items)\x0a    \x09do: [ :each | self renderItem: each on: html ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "getRootClassesOf:", "items", "renderItem:on:"]
}),
$globals.HLClassesListWidget);

$core.addMethod(
$core.method({
selector: "reselectItem:",
protocol: 'actions',
fn: function (anItem){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._model())._forceSelectedClass_(anItem);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reselectItem:",{anItem:anItem},$globals.HLClassesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anItem"],
source: "reselectItem: anItem\x0a\x09self model forceSelectedClass: anItem",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["forceSelectedClass:", "model"]
}),
$globals.HLClassesListWidget);

$core.addMethod(
$core.method({
selector: "selectItem:",
protocol: 'actions',
fn: function (aClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._model())._selectedClass_(aClass);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectItem:",{aClass:aClass},$globals.HLClassesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "selectItem: aClass\x0a    self model selectedClass: aClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selectedClass:", "model"]
}),
$globals.HLClassesListWidget);

$core.addMethod(
$core.method({
selector: "setItemsForPackage:",
protocol: 'private',
fn: function (aPackage){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
if(($receiver = aPackage) == null || $receiver.isNil){
$1=[];
} else {
$1=$recv($recv($recv(aPackage)._classes())._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._theNonMetaClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)});
//>>excludeEnd("ctx");
})))._sort_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(a)._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["name"]=1;
//>>excludeEnd("ctx");
return $recv($2).__lt($recv(b)._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,4)});
//>>excludeEnd("ctx");
}));
};
self._items_($1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setItemsForPackage:",{aPackage:aPackage},$globals.HLClassesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "setItemsForPackage: aPackage\x0a\x09self items: (aPackage \x0a    \x09ifNil: [ #() ]\x0a  \x09\x09ifNotNil: [ (aPackage classes \x0a        \x09collect: [ :each | each theNonMetaClass ]) \x0a            \x09sort: [ :a :b | a name < b name ] ]).",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["items:", "ifNil:ifNotNil:", "sort:", "collect:", "classes", "theNonMetaClass", "<", "name"]
}),
$globals.HLClassesListWidget);

$core.addMethod(
$core.method({
selector: "setItemsForSelectedPackage",
protocol: 'private',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._setItemsForPackage_($recv(self._model())._selectedPackage());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setItemsForSelectedPackage",{},$globals.HLClassesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setItemsForSelectedPackage\x0a\x09self setItemsForPackage: self model selectedPackage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setItemsForPackage:", "selectedPackage", "model"]
}),
$globals.HLClassesListWidget);

$core.addMethod(
$core.method({
selector: "showClass",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._model())._showInstance())._not();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showClass",{},$globals.HLClassesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "showClass\x0a\x09^ self model showInstance not",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["not", "showInstance", "model"]
}),
$globals.HLClassesListWidget);

$core.addMethod(
$core.method({
selector: "showComment",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._model())._showComment();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showComment",{},$globals.HLClassesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "showComment\x0a\x09^ self model showComment",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["showComment", "model"]
}),
$globals.HLClassesListWidget);

$core.addMethod(
$core.method({
selector: "showComment:",
protocol: 'actions',
fn: function (aBoolean){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._model())._showComment_(aBoolean);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showComment:",{aBoolean:aBoolean},$globals.HLClassesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoolean"],
source: "showComment: aBoolean\x0a\x09self model showComment: aBoolean",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["showComment:", "model"]
}),
$globals.HLClassesListWidget);

$core.addMethod(
$core.method({
selector: "showInstance",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._model())._showInstance();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showInstance",{},$globals.HLClassesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "showInstance\x0a\x09^ self model showInstance",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["showInstance", "model"]
}),
$globals.HLClassesListWidget);

$core.addMethod(
$core.method({
selector: "showInstance:",
protocol: 'actions',
fn: function (aBoolean){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._model())._showInstance_(aBoolean);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showInstance:",{aBoolean:aBoolean},$globals.HLClassesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoolean"],
source: "showInstance: aBoolean\x0a\x09self model showInstance: aBoolean",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["showInstance:", "model"]
}),
$globals.HLClassesListWidget);

$core.addMethod(
$core.method({
selector: "toggleShowComment",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._model())._showComment_($recv(self._showComment())._not());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toggleShowComment",{},$globals.HLClassesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "toggleShowComment\x0a\x09self model showComment: self showComment not",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["showComment:", "model", "not", "showComment"]
}),
$globals.HLClassesListWidget);



$core.addClass('HLDocumentationWidget', $globals.HLFocusableWidget, ['model'], 'Helios-Browser');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLDocumentationWidget.comment="I render the documentation for the selected class";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "defaultDocumentation",
protocol: 'defaults',
fn: function (){
var self=this;
return "No documentation is available for this class.";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultDocumentation\x0a\x09^ 'No documentation is available for this class.'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLDocumentationWidget);

$core.addMethod(
$core.method({
selector: "defaultHead",
protocol: 'defaults',
fn: function (){
var self=this;
return "No class selected";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultHead\x0a\x09^ 'No class selected'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLDocumentationWidget);

$core.addMethod(
$core.method({
selector: "documentation",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self._selectedItem();
if(($receiver = $2) == null || $receiver.isNil){
$1="";
} else {
var item;
item=$receiver;
$1=$recv($recv(item)._comment())._ifEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._defaultDocumentation();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"documentation",{},$globals.HLDocumentationWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "documentation\x0a\x09^ self selectedItem \x0a\x09\x09ifNil: [ '' ]\x0a\x09\x09ifNotNil: [ :item | item comment ifEmpty: [ self defaultDocumentation ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:ifNotNil:", "selectedItem", "ifEmpty:", "comment", "defaultDocumentation"]
}),
$globals.HLDocumentationWidget);

$core.addMethod(
$core.method({
selector: "editDocumentation",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._model())._editComment();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"editDocumentation",{},$globals.HLDocumentationWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "editDocumentation\x0a\x09self model editComment",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["editComment", "model"]
}),
$globals.HLDocumentationWidget);

$core.addMethod(
$core.method({
selector: "head",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self._selectedItem();
if(($receiver = $2) == null || $receiver.isNil){
$1=self._defaultHead();
} else {
var item;
item=$receiver;
$1=$recv(item)._name();
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"head",{},$globals.HLDocumentationWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "head\x0a\x09^ self selectedItem \x0a\x09\x09ifNil: [ self defaultHead ]\x0a\x09\x09ifNotNil: [ :item | item name ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:ifNotNil:", "selectedItem", "defaultHead", "name"]
}),
$globals.HLDocumentationWidget);

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
$globals.HLDocumentationWidget);

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
self._observeSystem();
$1=self._observeModel();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"model:",{aModel:aModel},$globals.HLDocumentationWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aModel"],
source: "model: aModel\x0a\x09model := aModel.\x0a\x09self \x0a\x09\x09observeSystem;\x0a\x09\x09observeModel",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["observeSystem", "observeModel"]
}),
$globals.HLDocumentationWidget);

$core.addMethod(
$core.method({
selector: "observeModel",
protocol: 'actions',
fn: function (){
var self=this;
function $HLClassSelected(){return $globals.HLClassSelected||(typeof HLClassSelected=="undefined"?nil:HLClassSelected)}
function $HLEditComment(){return $globals.HLEditComment||(typeof HLEditComment=="undefined"?nil:HLEditComment)}
function $HLDocumentationFocusRequested(){return $globals.HLDocumentationFocusRequested||(typeof HLDocumentationFocusRequested=="undefined"?nil:HLDocumentationFocusRequested)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(self._model())._announcer();
$recv($1)._on_send_to_($HLClassSelected(),"onClassSelected:",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=1;
//>>excludeEnd("ctx");
$recv($1)._on_send_to_($HLEditComment(),"onEditDocumentation",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=2;
//>>excludeEnd("ctx");
$2=$recv($1)._on_send_to_($HLDocumentationFocusRequested(),"onDocumentationFocusRequested",self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeModel",{},$globals.HLDocumentationWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeModel\x0a\x09self model announcer \x0a\x09\x09on: HLClassSelected\x0a\x09\x09send: #onClassSelected:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLEditComment\x0a\x09\x09send: #onEditDocumentation\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLDocumentationFocusRequested\x0a\x09\x09send: #onDocumentationFocusRequested\x0a\x09\x09to: self",
referencedClasses: ["HLClassSelected", "HLEditComment", "HLDocumentationFocusRequested"],
//>>excludeEnd("ide");
messageSends: ["on:send:to:", "announcer", "model"]
}),
$globals.HLDocumentationWidget);

$core.addMethod(
$core.method({
selector: "observeSystem",
protocol: 'actions',
fn: function (){
var self=this;
function $ClassCommentChanged(){return $globals.ClassCommentChanged||(typeof ClassCommentChanged=="undefined"?nil:ClassCommentChanged)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(self._model())._systemAnnouncer())._on_send_to_($ClassCommentChanged(),"onClassCommentChanged:",self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeSystem",{},$globals.HLDocumentationWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeSystem\x0a\x09self model systemAnnouncer \x0a\x09\x09on: ClassCommentChanged\x0a\x09\x09send: #onClassCommentChanged:\x0a\x09\x09to: self",
referencedClasses: ["ClassCommentChanged"],
//>>excludeEnd("ide");
messageSends: ["on:send:to:", "systemAnnouncer", "model"]
}),
$globals.HLDocumentationWidget);

$core.addMethod(
$core.method({
selector: "onClassCommentChanged:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$3,$receiver;
$2=self._model();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["model"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._selectedClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selectedClass"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
return self;
} else {
$1;
};
$3=$recv($recv(anAnnouncement)._theClass()).__eq($recv($recv(self._model())._selectedClass())._theNonMetaClass());
if($core.assert($3)){
self._refresh();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onClassCommentChanged:",{anAnnouncement:anAnnouncement},$globals.HLDocumentationWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onClassCommentChanged: anAnnouncement\x0a\x09self model selectedClass ifNil: [ ^ self ].\x0a\x09\x0a\x09anAnnouncement theClass = self model selectedClass theNonMetaClass\x0a\x09\x09ifTrue: [ self refresh ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "selectedClass", "model", "ifTrue:", "=", "theClass", "theNonMetaClass", "refresh"]
}),
$globals.HLDocumentationWidget);

$core.addMethod(
$core.method({
selector: "onClassSelected:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onClassSelected:",{anAnnouncement:anAnnouncement},$globals.HLDocumentationWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onClassSelected: anAnnouncement\x0a\x09self refresh",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["refresh"]
}),
$globals.HLDocumentationWidget);

$core.addMethod(
$core.method({
selector: "onDocumentationFocusRequested",
protocol: 'reactions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._focus();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onDocumentationFocusRequested",{},$globals.HLDocumentationWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onDocumentationFocusRequested\x0a\x09self focus",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["focus"]
}),
$globals.HLDocumentationWidget);

$core.addMethod(
$core.method({
selector: "onEditDocumentation",
protocol: 'reactions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $5,$4,$3,$2,$1;
$5=self._model();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["model"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._selectedClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selectedClass"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._theNonMetaClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["theNonMetaClass"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._name();
$1=$recv($2).__comma(" comment");
self._request_value_do_($1,$recv($recv($recv(self._model())._selectedClass())._theNonMetaClass())._comment(),(function(comment){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._setClassComment_(comment);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({comment:comment},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onEditDocumentation",{},$globals.HLDocumentationWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onEditDocumentation\x0a\x09self \x0a\x09\x09request: self model selectedClass theNonMetaClass name, ' comment'\x0a\x09\x09value: self model selectedClass theNonMetaClass comment\x0a\x09\x09do: [ :comment | self setClassComment: comment ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["request:value:do:", ",", "name", "theNonMetaClass", "selectedClass", "model", "comment", "setClassComment:"]
}),
$globals.HLDocumentationWidget);

$core.addMethod(
$core.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$2;
$1=$recv(html)._div();
$recv($1)._class_("doc");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._renderHeadOn_(html);
$3=self._renderDocOn_(html);
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},$globals.HLDocumentationWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderContentOn: html\x0a\x09html div \x0a\x09\x09class: 'doc';\x0a\x09\x09with: [\x0a\x09\x09\x09self \x0a\x09\x09\x09\x09renderHeadOn: html;\x0a\x09\x09\x09\x09renderDocOn: html ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "renderHeadOn:", "renderDocOn:"]
}),
$globals.HLDocumentationWidget);

$core.addMethod(
$core.method({
selector: "renderDocOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $Showdown(){return $globals.Showdown||(typeof Showdown=="undefined"?nil:Showdown)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$4,$5,$3,$6,$7,$receiver;
$1=self._selectedItem();
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
self._renderInheritanceOn_(html);
$2=$recv(html)._h1();
$recv($2)._with_("Overview");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$3=$recv($2)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=$recv(html)._button();
$recv($4)._class_("button default");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$recv($4)._with_("Edit");
$5=$recv($4)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._editDocumentation();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
return $5;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$3;
$6=$recv(html)._div();
$recv($6)._class_("markdown");
$7=$recv($6)._asJQuery();
$recv($7)._html_($recv($recv($recv($Showdown())._at_("converter"))._new())._makeHtml_(self._documentation()));
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderDocOn:",{html:html},$globals.HLDocumentationWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderDocOn: html\x0a\x09self selectedItem ifNotNil: [\x0a\x09\x09self renderInheritanceOn: html.\x0a\x09\x09html h1 \x0a\x09\x09\x09with: 'Overview';\x0a\x09\x09\x09with: [ \x0a\x09\x09\x09\x09html button\x0a\x09\x09\x09\x09\x09class: 'button default';\x0a\x09\x09\x09\x09\x09with: 'Edit';\x0a\x09\x09\x09\x09\x09onClick: [ self editDocumentation ] ].\x0a\x09\x09(html div \x0a\x09\x09\x09class: 'markdown';\x0a\x09\x09\x09asJQuery) html: ((Showdown at: 'converter') new makeHtml: self documentation) ]",
referencedClasses: ["Showdown"],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "selectedItem", "renderInheritanceOn:", "with:", "h1", "class:", "button", "onClick:", "editDocumentation", "html:", "div", "asJQuery", "makeHtml:", "new", "at:", "documentation"]
}),
$globals.HLDocumentationWidget);

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
$2=$recv($1)._with_(self._head());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderHeadOn:",{html:html},$globals.HLDocumentationWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderHeadOn: html\x0a\x09html div \x0a\x09\x09class: 'head';\x0a\x09\x09with: self head",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "head"]
}),
$globals.HLDocumentationWidget);

$core.addMethod(
$core.method({
selector: "renderInheritanceOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$4,$3,$5,$6,$9,$8,$7,$10,$2,$receiver;
$1=$recv(html)._div();
$recv($1)._class_("inheritance");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(html)._with_("Subclass of ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$4=self._selectedItem();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["selectedItem"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._superclass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["superclass"]=1;
//>>excludeEnd("ctx");
if(($receiver = $3) == null || $receiver.isNil){
return $recv($recv(html)._em())._with_("nil");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
} else {
$5=$recv(html)._a();
$6=$5;
$9=self._selectedItem();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["selectedItem"]=2;
//>>excludeEnd("ctx");
$8=$recv($9)._superclass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["superclass"]=2;
//>>excludeEnd("ctx");
$7=$recv($8)._name();
$recv($6)._with_($7);
$10=$recv($5)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._selectClass_($recv(self._selectedItem())._superclass());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)});
//>>excludeEnd("ctx");
}));
return $10;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderInheritanceOn:",{html:html},$globals.HLDocumentationWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderInheritanceOn: html\x0a\x09html div \x09\x0a\x09\x09class: 'inheritance';\x0a\x09\x09with: [\x0a\x09\x09\x09html with: 'Subclass of '.\x0a\x09\x09\x09self selectedItem superclass \x0a\x09\x09\x09\x09ifNil: [ html em with: 'nil' ]\x0a\x09\x09\x09\x09ifNotNil: [\x0a\x09\x09\x09\x09\x09html a \x0a\x09\x09\x09\x09\x09\x09with: self selectedItem superclass name;\x0a\x09\x09\x09\x09\x09\x09onClick: [ self selectClass: self selectedItem superclass ] ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "ifNil:ifNotNil:", "superclass", "selectedItem", "em", "a", "name", "onClick:", "selectClass:"]
}),
$globals.HLDocumentationWidget);

$core.addMethod(
$core.method({
selector: "selectClass:",
protocol: 'actions',
fn: function (aClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._model())._selectedClass_(aClass);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectClass:",{aClass:aClass},$globals.HLDocumentationWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "selectClass: aClass\x0a\x09self model selectedClass: aClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selectedClass:", "model"]
}),
$globals.HLDocumentationWidget);

$core.addMethod(
$core.method({
selector: "selectedItem",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=$recv(self._model())._selectedClass();
if(($receiver = $2) == null || $receiver.isNil){
$1=$2;
} else {
var class_;
class_=$receiver;
$1=$recv(class_)._theNonMetaClass();
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectedItem",{},$globals.HLDocumentationWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selectedItem\x0a\x09^ self model selectedClass ifNotNil: [ :class | class theNonMetaClass ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "selectedClass", "model", "theNonMetaClass"]
}),
$globals.HLDocumentationWidget);

$core.addMethod(
$core.method({
selector: "setClassComment:",
protocol: 'reactions',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._model())._setClassComment_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setClassComment:",{aString:aString},$globals.HLDocumentationWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "setClassComment: aString\x0a\x09self model setClassComment: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setClassComment:", "model"]
}),
$globals.HLDocumentationWidget);

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
$globals.HLDocumentationWidget.superclass.fn.prototype._unregister.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv($recv(self._model())._announcer())._unregister_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"unregister",{},$globals.HLDocumentationWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "unregister\x0a\x09super unregister.\x0a\x09self model announcer unregister: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["unregister", "unregister:", "announcer", "model"]
}),
$globals.HLDocumentationWidget);



$core.addClass('HLMethodsListWidget', $globals.HLToolListWidget, ['selectorsCache'], 'Helios-Browser');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLMethodsListWidget.comment="I render a list of methods for the selected protocol.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "allProtocol",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._model())._allProtocol();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allProtocol",{},$globals.HLMethodsListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "allProtocol\x0a\x09^ self model allProtocol",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["allProtocol", "model"]
}),
$globals.HLMethodsListWidget);

$core.addMethod(
$core.method({
selector: "cssClassForItem:",
protocol: 'accessing',
fn: function (aSelector){
var self=this;
var override,overriden,method;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$4,$1;
method=self._methodForSelector_(aSelector);
override=self._isOverride_(method);
overriden=self._isOverridden_(method);
$2=override;
if($core.assert($2)){
$3=overriden;
if($core.assert($3)){
$1="override-overridden";
} else {
$1="override";
};
} else {
$4=overriden;
if($core.assert($4)){
$1="overridden";
} else {
$1="";
};
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cssClassForItem:",{aSelector:aSelector,override:override,overriden:overriden,method:method},$globals.HLMethodsListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSelector"],
source: "cssClassForItem: aSelector\x0a\x09| override overriden method |\x0a    \x0a    method := self methodForSelector: aSelector.\x0a    override := self isOverride: method.\x0a    overriden := self isOverridden: method.\x0a    \x0a\x09^ override\x0a    \x09ifTrue: [ overriden\x0a\x09\x09\x09ifTrue: [ 'override-overridden' ]\x0a\x09\x09\x09ifFalse: [ 'override' ] ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09overriden\x0a\x09\x09\x09ifTrue: [ 'overridden' ]\x0a\x09\x09\x09ifFalse: [ '' ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["methodForSelector:", "isOverride:", "isOverridden:", "ifTrue:ifFalse:"]
}),
$globals.HLMethodsListWidget);

$core.addMethod(
$core.method({
selector: "focus",
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
$globals.HLMethodsListWidget.superclass.fn.prototype._focus.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=self._selectedItem();
if(($receiver = $1) == null || $receiver.isNil){
$recv(self._model())._showMethodTemplate();
} else {
$1;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"focus",{},$globals.HLMethodsListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "focus\x0a\x09super focus.\x0a\x09\x0a\x09self selectedItem ifNil: [\x0a\x09\x09self model showMethodTemplate ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["focus", "ifNil:", "selectedItem", "showMethodTemplate", "model"]
}),
$globals.HLMethodsListWidget);

$core.addMethod(
$core.method({
selector: "isOverridden:",
protocol: 'testing',
fn: function (aMethod){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._selectorsCache())._isOverridden_(aMethod);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isOverridden:",{aMethod:aMethod},$globals.HLMethodsListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod"],
source: "isOverridden: aMethod\x0a   ^ self selectorsCache isOverridden: aMethod",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["isOverridden:", "selectorsCache"]
}),
$globals.HLMethodsListWidget);

$core.addMethod(
$core.method({
selector: "isOverride:",
protocol: 'testing',
fn: function (aMethod){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._selectorsCache())._isOverride_(aMethod);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isOverride:",{aMethod:aMethod},$globals.HLMethodsListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod"],
source: "isOverride: aMethod\x0a   ^ self selectorsCache isOverride: aMethod",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["isOverride:", "selectorsCache"]
}),
$globals.HLMethodsListWidget);

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
$globals.HLMethodsListWidget);

$core.addMethod(
$core.method({
selector: "methodForSelector:",
protocol: 'accessing',
fn: function (aSelector){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($recv(self._model())._selectedClass())._methodDictionary())._at_(aSelector);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"methodForSelector:",{aSelector:aSelector},$globals.HLMethodsListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSelector"],
source: "methodForSelector: aSelector\x0a\x09^ self model selectedClass\x0a    \x09methodDictionary at: aSelector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "methodDictionary", "selectedClass", "model"]
}),
$globals.HLMethodsListWidget);

$core.addMethod(
$core.method({
selector: "methodsInProtocol:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$3,$5,$7,$6,$4,$receiver;
$2=self._model();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["model"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._selectedClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selectedClass"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
$3=[];
return $3;
} else {
$1;
};
$5=$recv(aString).__eq(self._allProtocol());
if($core.assert($5)){
$7=self._model();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["model"]=2;
//>>excludeEnd("ctx");
$6=$recv($7)._selectedClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selectedClass"]=2;
//>>excludeEnd("ctx");
$4=$recv($6)._methods();
} else {
$4=$recv($recv(self._model())._selectedClass())._methodsInProtocol_(aString);
};
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"methodsInProtocol:",{aString:aString},$globals.HLMethodsListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "methodsInProtocol: aString\x0a\x09self model selectedClass ifNil: [ ^ #() ].\x0a    \x0a\x09^ aString = self allProtocol\x0a    \x09ifTrue: [ self model selectedClass methods ]\x0a      \x09ifFalse: [ self model selectedClass methodsInProtocol: aString ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "selectedClass", "model", "ifTrue:ifFalse:", "=", "allProtocol", "methods", "methodsInProtocol:"]
}),
$globals.HLMethodsListWidget);

$core.addMethod(
$core.method({
selector: "observeModel",
protocol: 'actions',
fn: function (){
var self=this;
function $HLProtocolSelected(){return $globals.HLProtocolSelected||(typeof HLProtocolSelected=="undefined"?nil:HLProtocolSelected)}
function $HLShowInstanceToggled(){return $globals.HLShowInstanceToggled||(typeof HLShowInstanceToggled=="undefined"?nil:HLShowInstanceToggled)}
function $HLMethodSelected(){return $globals.HLMethodSelected||(typeof HLMethodSelected=="undefined"?nil:HLMethodSelected)}
function $HLMethodsFocusRequested(){return $globals.HLMethodsFocusRequested||(typeof HLMethodsFocusRequested=="undefined"?nil:HLMethodsFocusRequested)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(self._model())._announcer();
$recv($1)._on_send_to_($HLProtocolSelected(),"onProtocolSelected:",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=1;
//>>excludeEnd("ctx");
$recv($1)._on_send_to_($HLShowInstanceToggled(),"onShowInstanceToggled",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=2;
//>>excludeEnd("ctx");
$recv($1)._on_send_to_($HLMethodSelected(),"onMethodSelected:",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=3;
//>>excludeEnd("ctx");
$2=$recv($1)._on_send_to_($HLMethodsFocusRequested(),"onMethodsFocusRequested",self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeModel",{},$globals.HLMethodsListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeModel\x0a\x09self model announcer \x0a\x09\x09on: HLProtocolSelected \x0a\x09\x09send: #onProtocolSelected: \x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLShowInstanceToggled \x0a\x09\x09send: #onShowInstanceToggled\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLMethodSelected \x0a\x09\x09send: #onMethodSelected:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLMethodsFocusRequested \x0a\x09\x09send: #onMethodsFocusRequested\x0a\x09\x09to: self",
referencedClasses: ["HLProtocolSelected", "HLShowInstanceToggled", "HLMethodSelected", "HLMethodsFocusRequested"],
//>>excludeEnd("ide");
messageSends: ["on:send:to:", "announcer", "model"]
}),
$globals.HLMethodsListWidget);

$core.addMethod(
$core.method({
selector: "observeSystem",
protocol: 'actions',
fn: function (){
var self=this;
function $ProtocolAdded(){return $globals.ProtocolAdded||(typeof ProtocolAdded=="undefined"?nil:ProtocolAdded)}
function $ProtocolRemoved(){return $globals.ProtocolRemoved||(typeof ProtocolRemoved=="undefined"?nil:ProtocolRemoved)}
function $MethodAdded(){return $globals.MethodAdded||(typeof MethodAdded=="undefined"?nil:MethodAdded)}
function $MethodRemoved(){return $globals.MethodRemoved||(typeof MethodRemoved=="undefined"?nil:MethodRemoved)}
function $MethodMoved(){return $globals.MethodMoved||(typeof MethodMoved=="undefined"?nil:MethodMoved)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(self._model())._systemAnnouncer();
$recv($1)._on_send_to_($ProtocolAdded(),"onProtocolAdded:",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=1;
//>>excludeEnd("ctx");
$recv($1)._on_send_to_($ProtocolRemoved(),"onProtocolRemoved:",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=2;
//>>excludeEnd("ctx");
$recv($1)._on_send_to_($MethodAdded(),"onMethodAdded:",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=3;
//>>excludeEnd("ctx");
$recv($1)._on_send_to_($MethodRemoved(),"onMethodRemoved:",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=4;
//>>excludeEnd("ctx");
$2=$recv($1)._on_send_to_($MethodMoved(),"onMethodMoved:",self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeSystem",{},$globals.HLMethodsListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeSystem\x0a\x09self model systemAnnouncer \x0a    \x09on: ProtocolAdded\x0a        send: #onProtocolAdded:\x0a\x09\x09to: self;\x0a    \x09\x0a\x09\x09on: ProtocolRemoved\x0a        send: #onProtocolRemoved:\x0a\x09\x09to: self;\x0a\x09\x09\x0a    \x09on: MethodAdded \x0a        send: #onMethodAdded:\x0a\x09\x09to: self;\x0a\x09\x09\x0a        on: MethodRemoved \x0a        send: #onMethodRemoved:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: MethodMoved \x0a        send: #onMethodMoved:\x0a\x09\x09to: self",
referencedClasses: ["ProtocolAdded", "ProtocolRemoved", "MethodAdded", "MethodRemoved", "MethodMoved"],
//>>excludeEnd("ide");
messageSends: ["on:send:to:", "systemAnnouncer", "model"]
}),
$globals.HLMethodsListWidget);

$core.addMethod(
$core.method({
selector: "onMethodAdded:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._model())._selectedClass()).__eq($recv($recv(anAnnouncement)._method())._methodClass());
if(!$core.assert($1)){
return self;
};
self._setItemsForSelectedProtocol();
self._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onMethodAdded:",{anAnnouncement:anAnnouncement},$globals.HLMethodsListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onMethodAdded: anAnnouncement\x0a\x09self model selectedClass = anAnnouncement method methodClass ifFalse: [ ^ self ].\x0a    \x0a    self setItemsForSelectedProtocol.\x0a    self refresh",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "=", "selectedClass", "model", "methodClass", "method", "setItemsForSelectedProtocol", "refresh"]
}),
$globals.HLMethodsListWidget);

$core.addMethod(
$core.method({
selector: "onMethodMoved:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$1,$6,$5,$4,$7;
$3=self._model();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["model"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._selectedMethod();
$1=$recv($2).__eq($recv(anAnnouncement)._method());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
if(!$core.assert($1)){
return self;
};
$6=self._model();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["model"]=2;
//>>excludeEnd("ctx");
$5=$recv($6)._selectedProtocol();
$4=$recv($5).__eq($recv(self._model())._allProtocol());
if(!$core.assert($4)){
self._selectedItem_(nil);
self._selectItem_(nil);
self._setItemsForSelectedProtocol();
$7=self._refresh();
$7;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onMethodMoved:",{anAnnouncement:anAnnouncement},$globals.HLMethodsListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onMethodMoved: anAnnouncement\x0a\x09self model selectedMethod = anAnnouncement method ifFalse: [ ^ self ].\x0a    \x0a\x09self model selectedProtocol = self model allProtocol ifFalse: [\x0a\x09\x09self \x0a\x09\x09\x09selectedItem: nil; \x0a\x09\x09\x09selectItem: nil;\x0a\x09\x09\x09setItemsForSelectedProtocol;\x0a    \x09\x09refresh ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "=", "selectedMethod", "model", "method", "selectedProtocol", "allProtocol", "selectedItem:", "selectItem:", "setItemsForSelectedProtocol", "refresh"]
}),
$globals.HLMethodsListWidget);

$core.addMethod(
$core.method({
selector: "onMethodRemoved:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
var method;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$4,$3,$5,$6,$receiver;
var $early={};
try {
method=$recv(anAnnouncement)._method();
$recv(self._items())._detect_ifNone_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(method)._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["selector"]=1;
//>>excludeEnd("ctx");
return $recv(each).__eq($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
throw $early=[self];

}));
$2=self._selectedItem();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selectedItem"]=1;
//>>excludeEnd("ctx");
if(($receiver = $2) == null || $receiver.isNil){
$2;
} else {
$4=$recv($recv(method)._methodClass()).__eq($recv(self._model())._selectedClass());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=2;
//>>excludeEnd("ctx");
$3=$recv($4)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(method)._selector()).__eq(self._selectedItem());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
}));
if($core.assert($3)){
self._selectedItem_(nil);
$5=self._selectItem_(nil);
$5;
};
};
self._setItemsForSelectedProtocol();
self._refresh();
$6=self._focus();
return self;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onMethodRemoved:",{anAnnouncement:anAnnouncement,method:method},$globals.HLMethodsListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onMethodRemoved: anAnnouncement\x0a\x09| method |\x0a\x09\x0a\x09method := anAnnouncement method.\x0a\x09\x0a\x09self items detect: [ :each | each = method selector ] ifNone: [ ^ self ].\x0a\x0a    self selectedItem ifNotNil: [\x0a      \x09(method methodClass = self model selectedClass and: [ method selector = self selectedItem ])\x0a  \x09\x09\x09ifTrue: [ \x0a\x09\x09\x09\x09self selectedItem: nil; \x0a\x09\x09\x09\x09selectItem: nil ] ].\x0a\x0a    self setItemsForSelectedProtocol.\x0a\x09self \x0a\x09\x09refresh;\x0a\x09\x09focus",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["method", "detect:ifNone:", "items", "=", "selector", "ifNotNil:", "selectedItem", "ifTrue:", "and:", "methodClass", "selectedClass", "model", "selectedItem:", "selectItem:", "setItemsForSelectedProtocol", "refresh", "focus"]
}),
$globals.HLMethodsListWidget);

$core.addMethod(
$core.method({
selector: "onMethodSelected:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
var selector,method;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
method=$recv(anAnnouncement)._item();
$1=$recv(method)._isCompiledMethod();
if($core.assert($1)){
selector=$recv(method)._selector();
} else {
selector=nil;
};
self._selectedItem_(selector);
$2=self._activateItem_(selector);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onMethodSelected:",{anAnnouncement:anAnnouncement,selector:selector,method:method},$globals.HLMethodsListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onMethodSelected: anAnnouncement\x0a\x09| selector method |\x0a\x09\x0a\x09method := anAnnouncement item.\x0a\x09\x0a\x09selector := method isCompiledMethod \x0a\x09\x09ifTrue: [ method selector ]\x0a\x09\x09ifFalse: [ nil ].\x0a\x09\x09\x0a\x09self \x0a\x09\x09selectedItem: selector;\x0a\x09\x09activateItem: selector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["item", "ifTrue:ifFalse:", "isCompiledMethod", "selector", "selectedItem:", "activateItem:"]
}),
$globals.HLMethodsListWidget);

$core.addMethod(
$core.method({
selector: "onMethodsFocusRequested",
protocol: 'reactions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._focus();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onMethodsFocusRequested",{},$globals.HLMethodsListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onMethodsFocusRequested\x0a\x09self focus",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["focus"]
}),
$globals.HLMethodsListWidget);

$core.addMethod(
$core.method({
selector: "onProtocolAdded:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._model())._selectedClass()).__eq($recv(anAnnouncement)._theClass());
if(!$core.assert($1)){
return self;
};
self._setItemsForSelectedProtocol();
self._refresh();
self._focus();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onProtocolAdded:",{anAnnouncement:anAnnouncement},$globals.HLMethodsListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onProtocolAdded: anAnnouncement\x0a\x09self model selectedClass = anAnnouncement theClass ifFalse: [ ^ self ].\x0a\x09\x0a\x09self setItemsForSelectedProtocol.\x0a    self refresh.\x0a\x09self focus",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "=", "selectedClass", "model", "theClass", "setItemsForSelectedProtocol", "refresh", "focus"]
}),
$globals.HLMethodsListWidget);

$core.addMethod(
$core.method({
selector: "onProtocolRemoved:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._model())._selectedClass()).__eq($recv(anAnnouncement)._theClass());
if(!$core.assert($1)){
return self;
};
self._setItemsForSelectedProtocol();
self._refresh();
self._focus();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onProtocolRemoved:",{anAnnouncement:anAnnouncement},$globals.HLMethodsListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onProtocolRemoved: anAnnouncement\x0a\x09self model selectedClass = anAnnouncement theClass ifFalse: [ ^ self ].\x0a\x09\x0a\x09self setItemsForSelectedProtocol.\x0a    self refresh.\x0a\x09self focus",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "=", "selectedClass", "model", "theClass", "setItemsForSelectedProtocol", "refresh", "focus"]
}),
$globals.HLMethodsListWidget);

$core.addMethod(
$core.method({
selector: "onProtocolSelected:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._selectedItem_(nil);
self._setItemsForSelectedProtocol();
self._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onProtocolSelected:",{anAnnouncement:anAnnouncement},$globals.HLMethodsListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onProtocolSelected: anAnnouncement\x0a    self selectedItem: nil.\x0a    \x0a\x09self setItemsForSelectedProtocol.\x0a    self refresh",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selectedItem:", "setItemsForSelectedProtocol", "refresh"]
}),
$globals.HLMethodsListWidget);

$core.addMethod(
$core.method({
selector: "onShowInstanceToggled",
protocol: 'reactions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._onProtocolSelected_(nil);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onShowInstanceToggled",{},$globals.HLMethodsListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onShowInstanceToggled\x0a\x09self onProtocolSelected: nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["onProtocolSelected:"]
}),
$globals.HLMethodsListWidget);

$core.addMethod(
$core.method({
selector: "overrideSelectors",
protocol: 'accessing',
fn: function (){
var self=this;
function $Set(){return $globals.Set||(typeof Set=="undefined"?nil:Set)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$1=$recv(self._selectorsCache())._at_ifAbsentPut_("override",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($recv(self._model())._selectedClass())._allSuperclasses())._inject_into_($recv($Set())._new(),(function(acc,each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv(acc)._addAll_($recv(each)._selectors());
$2=$recv(acc)._yourself();
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({acc:acc,each:each},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"overrideSelectors",{},$globals.HLMethodsListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "overrideSelectors\x0a\x09^ self selectorsCache \x0a    \x09at: 'override'\x0a        ifAbsentPut: [ \x0a        \x09self model selectedClass allSuperclasses\x0a\x09\x09\x09\x09inject: Set new into: [ :acc :each | acc addAll: each selectors; yourself ] ]",
referencedClasses: ["Set"],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsentPut:", "selectorsCache", "inject:into:", "allSuperclasses", "selectedClass", "model", "new", "addAll:", "selectors", "yourself"]
}),
$globals.HLMethodsListWidget);

$core.addMethod(
$core.method({
selector: "overridenSelectors",
protocol: 'accessing',
fn: function (){
var self=this;
function $Set(){return $globals.Set||(typeof Set=="undefined"?nil:Set)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$1=$recv(self._selectorsCache())._at_ifAbsentPut_("overriden",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($recv(self._model())._selectedClass())._allSubclasses())._inject_into_($recv($Set())._new(),(function(acc,each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv(acc)._addAll_($recv(each)._selectors());
$2=$recv(acc)._yourself();
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({acc:acc,each:each},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"overridenSelectors",{},$globals.HLMethodsListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "overridenSelectors\x0a\x09^ self selectorsCache \x0a    \x09at: 'overriden'\x0a        ifAbsentPut: [ \x0a        \x09self model selectedClass allSubclasses\x0a\x09\x09\x09\x09inject: Set new into: [ :acc :each | acc addAll: each selectors; yourself ] ]",
referencedClasses: ["Set"],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsentPut:", "selectorsCache", "inject:into:", "allSubclasses", "selectedClass", "model", "new", "addAll:", "selectors", "yourself"]
}),
$globals.HLMethodsListWidget);

$core.addMethod(
$core.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3;
$1=$recv(self._model())._showInstance();
if($core.assert($1)){
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.HLMethodsListWidget.superclass.fn.prototype._renderContentOn_.apply($recv(self), [html]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
} else {
$2=$recv(html)._div();
$recv($2)._class_("class_side");
$3=$recv($2)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.supercall = true, 
//>>excludeEnd("ctx");
$globals.HLMethodsListWidget.superclass.fn.prototype._renderContentOn_.apply($recv(self), [html]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.supercall = false;
//>>excludeEnd("ctx");;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["renderContentOn:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$3;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},$globals.HLMethodsListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderContentOn: html\x0a\x09self model showInstance\x0a    \x09ifFalse: [ html div \x0a        \x09class: 'class_side'; \x0a            with: [ super renderContentOn: html ] ]\x0a      \x09ifTrue: [ super renderContentOn: html ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:ifTrue:", "showInstance", "model", "class:", "div", "with:", "renderContentOn:"]
}),
$globals.HLMethodsListWidget);

$core.addMethod(
$core.method({
selector: "renderItemLabel:on:",
protocol: 'rendering',
fn: function (aSelector,html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(html)._with_(aSelector);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderItemLabel:on:",{aSelector:aSelector,html:html},$globals.HLMethodsListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSelector", "html"],
source: "renderItemLabel: aSelector on: html\x0a\x09html with: aSelector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:"]
}),
$globals.HLMethodsListWidget);

$core.addMethod(
$core.method({
selector: "reselectItem:",
protocol: 'actions',
fn: function (aSelector){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._model())._forceSelectedMethod_(self._methodForSelector_(aSelector));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reselectItem:",{aSelector:aSelector},$globals.HLMethodsListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSelector"],
source: "reselectItem: aSelector\x0a\x09self model forceSelectedMethod: (self methodForSelector: aSelector)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["forceSelectedMethod:", "model", "methodForSelector:"]
}),
$globals.HLMethodsListWidget);

$core.addMethod(
$core.method({
selector: "selectItem:",
protocol: 'actions',
fn: function (aSelector){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
if(($receiver = aSelector) == null || $receiver.isNil){
$2=self._model();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["model"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._selectedMethod_(nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selectedMethod:"]=1;
//>>excludeEnd("ctx");
return $1;
} else {
aSelector;
};
$recv(self._model())._selectedMethod_(self._methodForSelector_(aSelector));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectItem:",{aSelector:aSelector},$globals.HLMethodsListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSelector"],
source: "selectItem: aSelector\x0a\x09aSelector ifNil: [ ^ self model selectedMethod: nil ].\x0a\x0a   \x09self model selectedMethod: (self methodForSelector: aSelector)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "selectedMethod:", "model", "methodForSelector:"]
}),
$globals.HLMethodsListWidget);

$core.addMethod(
$core.method({
selector: "selectorsCache",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._class())._selectorsCache();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectorsCache",{},$globals.HLMethodsListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selectorsCache\x0a\x09^ self class selectorsCache",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selectorsCache", "class"]
}),
$globals.HLMethodsListWidget);

$core.addMethod(
$core.method({
selector: "selectorsInProtocol:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._methodsInProtocol_(aString))._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
})))._sorted();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectorsInProtocol:",{aString:aString},$globals.HLMethodsListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "selectorsInProtocol: aString\x0a\x09^ ((self methodsInProtocol: aString)\x0a    \x09collect: [ :each | each selector ]) sorted",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["sorted", "collect:", "methodsInProtocol:", "selector"]
}),
$globals.HLMethodsListWidget);

$core.addMethod(
$core.method({
selector: "setItemsForProtocol:",
protocol: 'private',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
if(($receiver = aString) == null || $receiver.isNil){
$2=[];
} else {
$2=self._selectorsInProtocol_(aString);
};
$1=self._items_($2);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setItemsForProtocol:",{aString:aString},$globals.HLMethodsListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "setItemsForProtocol: aString\x0a\x09^ self items: (aString\x0a    \x09ifNil: [ #() ]\x0a      \x09ifNotNil: [ self selectorsInProtocol: aString ])",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["items:", "ifNil:ifNotNil:", "selectorsInProtocol:"]
}),
$globals.HLMethodsListWidget);

$core.addMethod(
$core.method({
selector: "setItemsForSelectedProtocol",
protocol: 'private',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._setItemsForProtocol_($recv(self._model())._selectedProtocol());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setItemsForSelectedProtocol",{},$globals.HLMethodsListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setItemsForSelectedProtocol\x0a\x09self setItemsForProtocol: self model selectedProtocol",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setItemsForProtocol:", "selectedProtocol", "model"]
}),
$globals.HLMethodsListWidget);


$globals.HLMethodsListWidget.klass.iVarNames = ['selectorsCache'];
$core.addMethod(
$core.method({
selector: "selectorsCache",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLSelectorsCache(){return $globals.HLSelectorsCache||(typeof HLSelectorsCache=="undefined"?nil:HLSelectorsCache)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($HLSelectorsCache())._current();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectorsCache",{},$globals.HLMethodsListWidget.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selectorsCache\x0a\x09^ HLSelectorsCache current",
referencedClasses: ["HLSelectorsCache"],
//>>excludeEnd("ide");
messageSends: ["current"]
}),
$globals.HLMethodsListWidget.klass);


$core.addClass('HLPackagesListWidget', $globals.HLToolListWidget, [], 'Helios-Browser');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLPackagesListWidget.comment="I render a list of the system packages.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "cssClassForItem:",
protocol: 'accessing',
fn: function (anItem){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv(anItem)._isDirty();
if($core.assert($2)){
$1="package_dirty";
} else {
$1="package";
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cssClassForItem:",{anItem:anItem},$globals.HLPackagesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anItem"],
source: "cssClassForItem: anItem\x09\x0a\x09^ anItem isDirty \x0a\x09\x09ifTrue: [ 'package_dirty' ]\x0a\x09\x09ifFalse: [ 'package' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "isDirty"]
}),
$globals.HLPackagesListWidget);

$core.addMethod(
$core.method({
selector: "focusClassesListWidget",
protocol: 'actions',
fn: function (){
var self=this;
function $HLClassesListFocus(){return $globals.HLClassesListFocus||(typeof HLClassesListFocus=="undefined"?nil:HLClassesListFocus)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(self._model())._announcer())._announce_($recv($HLClassesListFocus())._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"focusClassesListWidget",{},$globals.HLPackagesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "focusClassesListWidget\x0a\x09self model announcer announce: HLClassesListFocus new",
referencedClasses: ["HLClassesListFocus"],
//>>excludeEnd("ide");
messageSends: ["announce:", "announcer", "model", "new"]
}),
$globals.HLPackagesListWidget);

$core.addMethod(
$core.method({
selector: "initializeItems",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
self["@items"]=$recv($recv(self._model())._packages())._sort_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(a)._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["name"]=1;
//>>excludeEnd("ctx");
return $recv($2).__lt($recv(b)._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=self["@items"];
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeItems",{},$globals.HLPackagesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeItems\x0a\x09^ items := self model packages \x0a\x09\x09sort: [ :a :b | a name < b name ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["sort:", "packages", "model", "<", "name"]
}),
$globals.HLPackagesListWidget);

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
$1=self._initializeItems();
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"items",{},$globals.HLPackagesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "items\x0a\x09^ items ifNil: [ self initializeItems ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "initializeItems"]
}),
$globals.HLPackagesListWidget);

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
$globals.HLPackagesListWidget);

$core.addMethod(
$core.method({
selector: "observeModel",
protocol: 'actions',
fn: function (){
var self=this;
function $HLPackageSelected(){return $globals.HLPackageSelected||(typeof HLPackageSelected=="undefined"?nil:HLPackageSelected)}
function $HLPackagesFocusRequested(){return $globals.HLPackagesFocusRequested||(typeof HLPackagesFocusRequested=="undefined"?nil:HLPackagesFocusRequested)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(self._model())._announcer();
$recv($1)._on_send_to_($HLPackageSelected(),"onPackageSelected:",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._on_send_to_($HLPackagesFocusRequested(),"onPackagesFocusRequested",self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeModel",{},$globals.HLPackagesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeModel\x0a    self model announcer \x0a\x09\x09on: HLPackageSelected\x0a\x09\x09send: #onPackageSelected:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLPackagesFocusRequested \x0a\x09\x09send: #onPackagesFocusRequested\x0a\x09\x09to: self",
referencedClasses: ["HLPackageSelected", "HLPackagesFocusRequested"],
//>>excludeEnd("ide");
messageSends: ["on:send:to:", "announcer", "model"]
}),
$globals.HLPackagesListWidget);

$core.addMethod(
$core.method({
selector: "observeSystem",
protocol: 'actions',
fn: function (){
var self=this;
function $ClassAdded(){return $globals.ClassAdded||(typeof ClassAdded=="undefined"?nil:ClassAdded)}
function $PackageAdded(){return $globals.PackageAdded||(typeof PackageAdded=="undefined"?nil:PackageAdded)}
function $PackageClean(){return $globals.PackageClean||(typeof PackageClean=="undefined"?nil:PackageClean)}
function $PackageDirty(){return $globals.PackageDirty||(typeof PackageDirty=="undefined"?nil:PackageDirty)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$4,$3,$6,$5;
$2=self._model();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["model"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._systemAnnouncer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["systemAnnouncer"]=1;
//>>excludeEnd("ctx");
$recv($1)._on_send_to_($ClassAdded(),"onClassAdded:",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=1;
//>>excludeEnd("ctx");
$4=self._model();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["model"]=2;
//>>excludeEnd("ctx");
$3=$recv($4)._systemAnnouncer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["systemAnnouncer"]=2;
//>>excludeEnd("ctx");
$recv($3)._on_send_to_($PackageAdded(),"onPackageAdded:",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=2;
//>>excludeEnd("ctx");
$6=self._model();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["model"]=3;
//>>excludeEnd("ctx");
$5=$recv($6)._systemAnnouncer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["systemAnnouncer"]=3;
//>>excludeEnd("ctx");
$recv($5)._on_send_to_($PackageClean(),"onPackageStateChanged",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=3;
//>>excludeEnd("ctx");
$recv($recv(self._model())._systemAnnouncer())._on_send_to_($PackageDirty(),"onPackageStateChanged",self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeSystem",{},$globals.HLPackagesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeSystem\x0a    self model systemAnnouncer \x0a\x09\x09on: ClassAdded \x0a\x09\x09send: #onClassAdded:\x0a\x09\x09to: self.\x0a\x09\x09\x0a\x09self model systemAnnouncer\x0a\x09\x09on: PackageAdded\x0a\x09\x09send: #onPackageAdded:\x0a\x09\x09to: self.\x0a\x09\x09\x0a\x09self model systemAnnouncer\x0a\x09\x09on: PackageClean\x0a\x09\x09send: #onPackageStateChanged\x0a\x09\x09to: self.\x0a\x09\x09\x0a\x09self model systemAnnouncer\x0a\x09\x09on: PackageDirty\x0a\x09\x09send: #onPackageStateChanged\x0a\x09\x09to: self.",
referencedClasses: ["ClassAdded", "PackageAdded", "PackageClean", "PackageDirty"],
//>>excludeEnd("ide");
messageSends: ["on:send:to:", "systemAnnouncer", "model"]
}),
$globals.HLPackagesListWidget);

$core.addMethod(
$core.method({
selector: "onClassAdded:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(self._items())._includes_($recv($recv(anAnnouncement)._theClass())._package());
if(!$core.assert($1)){
self._initializeItems();
$2=self._refresh();
$2;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onClassAdded:",{anAnnouncement:anAnnouncement},$globals.HLPackagesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onClassAdded: anAnnouncement\x0a\x09\x22Amber doesn't have yet a global organizer for packages\x22\x0a\x09\x0a\x09(self items includes: anAnnouncement theClass package) ifFalse: [ \x0a\x09\x09self \x0a\x09\x09\x09initializeItems;\x0a\x09\x09\x09refresh ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "includes:", "items", "package", "theClass", "initializeItems", "refresh"]
}),
$globals.HLPackagesListWidget);

$core.addMethod(
$core.method({
selector: "onPackageAdded:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._initializeItems();
$1=self._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onPackageAdded:",{anAnnouncement:anAnnouncement},$globals.HLPackagesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onPackageAdded: anAnnouncement\x0a\x09self \x0a\x09\x09initializeItems;\x0a\x09\x09refresh",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initializeItems", "refresh"]
}),
$globals.HLPackagesListWidget);

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
var $1,$2;
package_=$recv(anAnnouncement)._item();
self._selectedItem_(package_);
$1=self._hasFocus();
if(!$core.assert($1)){
self._activateItem_(package_);
$2=self._focus();
$2;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onPackageSelected:",{anAnnouncement:anAnnouncement,package_:package_},$globals.HLPackagesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onPackageSelected: anAnnouncement\x0a\x09| package |\x0a\x09\x0a\x09package := anAnnouncement item.\x0a\x09\x0a\x09self selectedItem: package.\x0a\x09self hasFocus ifFalse: [\x0a\x09\x09self\x0a\x09\x09\x09activateItem: package;\x0a\x09\x09\x09focus ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["item", "selectedItem:", "ifFalse:", "hasFocus", "activateItem:", "focus"]
}),
$globals.HLPackagesListWidget);

$core.addMethod(
$core.method({
selector: "onPackageStateChanged",
protocol: 'reactions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onPackageStateChanged",{},$globals.HLPackagesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onPackageStateChanged\x0a\x09self refresh",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["refresh"]
}),
$globals.HLPackagesListWidget);

$core.addMethod(
$core.method({
selector: "onPackagesFocusRequested",
protocol: 'reactions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._focus();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onPackagesFocusRequested",{},$globals.HLPackagesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onPackagesFocusRequested\x0a\x09self focus",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["focus"]
}),
$globals.HLPackagesListWidget);

$core.addMethod(
$core.method({
selector: "renderItemLabel:on:",
protocol: 'rendering',
fn: function (aPackage,html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(html)._with_($recv(aPackage)._name());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderItemLabel:on:",{aPackage:aPackage,html:html},$globals.HLPackagesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "html"],
source: "renderItemLabel: aPackage on: html\x0a\x09html with: aPackage name",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "name"]
}),
$globals.HLPackagesListWidget);

$core.addMethod(
$core.method({
selector: "reselectItem:",
protocol: 'actions',
fn: function (anItem){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._model())._forceSelectedPackage_(anItem);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reselectItem:",{anItem:anItem},$globals.HLPackagesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anItem"],
source: "reselectItem: anItem\x0a\x09self model forceSelectedPackage: anItem",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["forceSelectedPackage:", "model"]
}),
$globals.HLPackagesListWidget);

$core.addMethod(
$core.method({
selector: "selectItem:",
protocol: 'actions',
fn: function (aPackage){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.HLPackagesListWidget.superclass.fn.prototype._selectItem_.apply($recv(self), [aPackage]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(self._model())._selectedPackage_(aPackage);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectItem:",{aPackage:aPackage},$globals.HLPackagesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "selectItem: aPackage\x0a\x09super selectItem: aPackage.\x0a\x09self model selectedPackage: aPackage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selectItem:", "selectedPackage:", "model"]
}),
$globals.HLPackagesListWidget);



$core.addClass('HLProtocolsListWidget', $globals.HLToolListWidget, [], 'Helios-Browser');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLProtocolsListWidget.comment="I render a list of protocols for the selected class.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "allProtocol",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._model())._allProtocol();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allProtocol",{},$globals.HLProtocolsListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "allProtocol\x0a\x09^ self model allProtocol",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["allProtocol", "model"]
}),
$globals.HLProtocolsListWidget);

$core.addMethod(
$core.method({
selector: "cssClassForItem:",
protocol: 'accessing',
fn: function (anItem){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
$1=$recv(anItem).__eq(self._allProtocol());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
return "";
};
$2=$recv(anItem).__eq("private");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=2;
//>>excludeEnd("ctx");
if($core.assert($2)){
return "private";
};
$3=$recv(anItem).__eq("initialization");
if($core.assert($3)){
return "initialization";
};
$4=$recv(anItem)._match_("^\x5c*");
if($core.assert($4)){
return "extension";
};
return "";
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cssClassForItem:",{anItem:anItem},$globals.HLProtocolsListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anItem"],
source: "cssClassForItem: anItem\x0a\x09anItem = self allProtocol ifTrue: [ ^ '' ].\x0a\x09anItem = 'private' ifTrue: [ ^ 'private' ].\x0a\x09anItem = 'initialization' ifTrue: [ ^ 'initialization' ].\x0a\x09(anItem match: '^\x5c*') ifTrue: [ ^ 'extension' ].\x0a\x09^ ''",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "=", "allProtocol", "match:"]
}),
$globals.HLProtocolsListWidget);

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
$globals.HLProtocolsListWidget);

$core.addMethod(
$core.method({
selector: "observeModel",
protocol: 'actions',
fn: function (){
var self=this;
function $HLClassSelected(){return $globals.HLClassSelected||(typeof HLClassSelected=="undefined"?nil:HLClassSelected)}
function $HLShowInstanceToggled(){return $globals.HLShowInstanceToggled||(typeof HLShowInstanceToggled=="undefined"?nil:HLShowInstanceToggled)}
function $HLProtocolSelected(){return $globals.HLProtocolSelected||(typeof HLProtocolSelected=="undefined"?nil:HLProtocolSelected)}
function $HLProtocolsFocusRequested(){return $globals.HLProtocolsFocusRequested||(typeof HLProtocolsFocusRequested=="undefined"?nil:HLProtocolsFocusRequested)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(self._model())._announcer();
$recv($1)._on_send_to_($HLClassSelected(),"onClassSelected:",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=1;
//>>excludeEnd("ctx");
$recv($1)._on_send_to_($HLShowInstanceToggled(),"onClassSelected:",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=2;
//>>excludeEnd("ctx");
$recv($1)._on_send_to_($HLProtocolSelected(),"onProtocolSelected:",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=3;
//>>excludeEnd("ctx");
$2=$recv($1)._on_send_to_($HLProtocolsFocusRequested(),"onProtocolsFocusRequested",self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeModel",{},$globals.HLProtocolsListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeModel\x0a    self model announcer \x0a\x09\x09on: HLClassSelected\x0a\x09\x09send: #onClassSelected:\x0a\x09\x09to: self;\x0a\x09\x09\x0a    \x09on: HLShowInstanceToggled \x0a\x09\x09send: #onClassSelected:\x0a\x09\x09to: self;\x0a\x09\x09\x0a    \x09on: HLProtocolSelected\x0a\x09\x09send: #onProtocolSelected:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLProtocolsFocusRequested \x0a\x09\x09send: #onProtocolsFocusRequested\x0a\x09\x09to: self",
referencedClasses: ["HLClassSelected", "HLShowInstanceToggled", "HLProtocolSelected", "HLProtocolsFocusRequested"],
//>>excludeEnd("ide");
messageSends: ["on:send:to:", "announcer", "model"]
}),
$globals.HLProtocolsListWidget);

$core.addMethod(
$core.method({
selector: "observeSystem",
protocol: 'actions',
fn: function (){
var self=this;
function $ProtocolAdded(){return $globals.ProtocolAdded||(typeof ProtocolAdded=="undefined"?nil:ProtocolAdded)}
function $ProtocolRemoved(){return $globals.ProtocolRemoved||(typeof ProtocolRemoved=="undefined"?nil:ProtocolRemoved)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(self._model())._systemAnnouncer();
$recv($1)._on_send_to_($ProtocolAdded(),"onProtocolAdded:",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._on_send_to_($ProtocolRemoved(),"onProtocolRemoved:",self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeSystem",{},$globals.HLProtocolsListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeSystem\x0a\x09self model systemAnnouncer\x0a\x09\x09on: ProtocolAdded \x0a\x09\x09send: #onProtocolAdded:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: ProtocolRemoved\x0a\x09\x09send: #onProtocolRemoved:\x0a\x09\x09to: self",
referencedClasses: ["ProtocolAdded", "ProtocolRemoved"],
//>>excludeEnd("ide");
messageSends: ["on:send:to:", "systemAnnouncer", "model"]
}),
$globals.HLProtocolsListWidget);

$core.addMethod(
$core.method({
selector: "onClassSelected:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._selectedItem_(nil);
self._setItemsForSelectedClass();
self._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onClassSelected:",{anAnnouncement:anAnnouncement},$globals.HLProtocolsListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onClassSelected: anAnnouncement\x0a    self selectedItem: nil.\x0a    \x0a    self setItemsForSelectedClass.\x0a    self refresh",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selectedItem:", "setItemsForSelectedClass", "refresh"]
}),
$globals.HLProtocolsListWidget);

$core.addMethod(
$core.method({
selector: "onProtocolAdded:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
var class_;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
class_=$recv(anAnnouncement)._theClass();
$1=$recv(class_).__eq($recv(self._model())._selectedClass());
if(!$core.assert($1)){
return self;
};
self._setItemsForSelectedClass();
self._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onProtocolAdded:",{anAnnouncement:anAnnouncement,class_:class_},$globals.HLProtocolsListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onProtocolAdded: anAnnouncement\x0a\x09| class |\x0a\x09\x0a\x09class := anAnnouncement theClass.\x0a\x09\x0a\x09class = self model selectedClass ifFalse: [ ^ self ].\x0a    \x0a    self setItemsForSelectedClass.\x0a    self refresh",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["theClass", "ifFalse:", "=", "selectedClass", "model", "setItemsForSelectedClass", "refresh"]
}),
$globals.HLProtocolsListWidget);

$core.addMethod(
$core.method({
selector: "onProtocolRemoved:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
var class_,protocol;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$4,$3,$1,$5,$6;
class_=$recv(anAnnouncement)._theClass();
protocol=$recv(anAnnouncement)._protocol();
$2=class_;
$4=self._model();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["model"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._selectedClass();
$1=$recv($2).__eq($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
if(!$core.assert($1)){
return self;
};
$5=$recv($recv(self._model())._selectedProtocol()).__eq(protocol);
if($core.assert($5)){
self._selectedItem_(nil);
$6=self._selectItem_(nil);
$6;
};
self._setItemsForSelectedClass();
self._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onProtocolRemoved:",{anAnnouncement:anAnnouncement,class_:class_,protocol:protocol},$globals.HLProtocolsListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onProtocolRemoved: anAnnouncement\x0a\x09| class protocol |\x0a\x09\x0a\x09class := anAnnouncement theClass.\x0a\x09protocol := anAnnouncement protocol.\x0a\x09\x0a\x09class = self model selectedClass ifFalse: [ ^ self ].\x0a    \x0a    self model selectedProtocol = protocol \x0a    \x09ifTrue: [ \x0a\x09\x09\x09self \x0a\x09\x09\x09\x09selectedItem: nil;\x0a\x09\x09\x09\x09selectItem: nil ].\x0a        \x0a    self setItemsForSelectedClass.\x0a    self refresh",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["theClass", "protocol", "ifFalse:", "=", "selectedClass", "model", "ifTrue:", "selectedProtocol", "selectedItem:", "selectItem:", "setItemsForSelectedClass", "refresh"]
}),
$globals.HLProtocolsListWidget);

$core.addMethod(
$core.method({
selector: "onProtocolSelected:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
var protocol;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$receiver;
protocol=$recv(anAnnouncement)._item();
self._selectedItem_(protocol);
$1=protocol;
if(($receiver = $1) == null || $receiver.isNil){
return self;
} else {
$1;
};
$2=self._hasFocus();
if(!$core.assert($2)){
self._activateItem_(protocol);
$3=self._focus();
$3;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onProtocolSelected:",{anAnnouncement:anAnnouncement,protocol:protocol},$globals.HLProtocolsListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onProtocolSelected: anAnnouncement\x0a\x09| protocol |\x0a\x09\x0a\x09protocol := anAnnouncement item.\x0a\x09\x0a\x09self selectedItem: protocol.\x0a\x09protocol ifNil: [ ^ self ].\x0a    \x0a\x09self hasFocus ifFalse: [\x0a\x09\x09self \x0a\x09\x09\x09activateItem: protocol;\x0a\x09\x09\x09focus ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["item", "selectedItem:", "ifNil:", "ifFalse:", "hasFocus", "activateItem:", "focus"]
}),
$globals.HLProtocolsListWidget);

$core.addMethod(
$core.method({
selector: "onProtocolsFocusRequested",
protocol: 'reactions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._focus();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onProtocolsFocusRequested",{},$globals.HLProtocolsListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onProtocolsFocusRequested\x0a\x09self focus",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["focus"]
}),
$globals.HLProtocolsListWidget);

$core.addMethod(
$core.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3;
$1=$recv(self._model())._showInstance();
if($core.assert($1)){
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.HLProtocolsListWidget.superclass.fn.prototype._renderContentOn_.apply($recv(self), [html]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
} else {
$2=$recv(html)._div();
$recv($2)._class_("class_side");
$3=$recv($2)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.supercall = true, 
//>>excludeEnd("ctx");
$globals.HLProtocolsListWidget.superclass.fn.prototype._renderContentOn_.apply($recv(self), [html]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.supercall = false;
//>>excludeEnd("ctx");;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["renderContentOn:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$3;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},$globals.HLProtocolsListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderContentOn: html\x0a\x09self model showInstance\x0a    \x09ifFalse: [ html div \x0a        \x09class: 'class_side'; \x0a            with: [ super renderContentOn: html ] ]\x0a      \x09ifTrue: [ super renderContentOn: html ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:ifTrue:", "showInstance", "model", "class:", "div", "with:", "renderContentOn:"]
}),
$globals.HLProtocolsListWidget);

$core.addMethod(
$core.method({
selector: "reselectItem:",
protocol: 'actions',
fn: function (anItem){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._model())._forceSelectedProtocol_(anItem);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reselectItem:",{anItem:anItem},$globals.HLProtocolsListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anItem"],
source: "reselectItem: anItem\x0a\x09self model forceSelectedProtocol: anItem",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["forceSelectedProtocol:", "model"]
}),
$globals.HLProtocolsListWidget);

$core.addMethod(
$core.method({
selector: "selectItem:",
protocol: 'actions',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._model())._selectedProtocol_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectItem:",{aString:aString},$globals.HLProtocolsListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "selectItem: aString\x0a    self model selectedProtocol: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selectedProtocol:", "model"]
}),
$globals.HLProtocolsListWidget);

$core.addMethod(
$core.method({
selector: "selectedItem",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.HLProtocolsListWidget.superclass.fn.prototype._selectedItem.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectedItem",{},$globals.HLProtocolsListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selectedItem\x0a\x09^ super selectedItem\x22 ifNil: [ self allProtocol ]\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selectedItem"]
}),
$globals.HLProtocolsListWidget);

$core.addMethod(
$core.method({
selector: "setItemsForClass:",
protocol: 'private',
fn: function (aClass){
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$4,$1,$receiver;
if(($receiver = aClass) == null || $receiver.isNil){
$2=self._allProtocol();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["allProtocol"]=1;
//>>excludeEnd("ctx");
$1=$recv($Array())._with_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
} else {
$3=$recv($Array())._with_(self._allProtocol());
$recv($3)._addAll_($recv(aClass)._protocols());
$4=$recv($3)._yourself();
$1=$4;
};
self._items_($1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setItemsForClass:",{aClass:aClass},$globals.HLProtocolsListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "setItemsForClass: aClass\x0a\x09self items: (aClass\x0a    \x09ifNil: [ Array with: self allProtocol ]\x0a      \x09ifNotNil: [ \x0a        \x09(Array with: self allProtocol) \x0a            \x09addAll: aClass protocols; \x0a                yourself ])",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["items:", "ifNil:ifNotNil:", "with:", "allProtocol", "addAll:", "protocols", "yourself"]
}),
$globals.HLProtocolsListWidget);

$core.addMethod(
$core.method({
selector: "setItemsForSelectedClass",
protocol: 'private',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._setItemsForClass_($recv(self._model())._selectedClass());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setItemsForSelectedClass",{},$globals.HLProtocolsListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setItemsForSelectedClass\x0a\x09self setItemsForClass: self model selectedClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setItemsForClass:", "selectedClass", "model"]
}),
$globals.HLProtocolsListWidget);



$core.addClass('HLSelectorsCache', $globals.Object, ['classesCache'], 'Helios-Browser');
$core.addMethod(
$core.method({
selector: "cacheFor:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$receiver;
if(($receiver = aClass) == null || $receiver.isNil){
return nil;
} else {
aClass;
};
$1=$recv(self._classesCache())._at_ifAbsentPut_($recv(aClass)._name(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._newCacheFor_(aClass);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cacheFor:",{aClass:aClass},$globals.HLSelectorsCache)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "cacheFor: aClass\x0a\x09aClass ifNil: [ ^ nil ].\x0a    \x0a\x09^ self classesCache\x0a    \x09at: aClass name\x0a        ifAbsentPut: [ self newCacheFor: aClass ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "at:ifAbsentPut:", "classesCache", "name", "newCacheFor:"]
}),
$globals.HLSelectorsCache);

$core.addMethod(
$core.method({
selector: "classesCache",
protocol: 'accessing',
fn: function (){
var self=this;
function $HashedCollection(){return $globals.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@classesCache"];
if(($receiver = $2) == null || $receiver.isNil){
self["@classesCache"]=$recv($HashedCollection())._new();
$1=self["@classesCache"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classesCache",{},$globals.HLSelectorsCache)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classesCache\x0a\x09^ classesCache ifNil: [ classesCache := HashedCollection new ]",
referencedClasses: ["HashedCollection"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.HLSelectorsCache);

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
$globals.HLSelectorsCache.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._observeSystem();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.HLSelectorsCache)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a    self observeSystem",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "observeSystem"]
}),
$globals.HLSelectorsCache);

$core.addMethod(
$core.method({
selector: "invalidateCacheFor:",
protocol: 'private',
fn: function (aMethod){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._cacheFor_($recv(aMethod)._methodClass()))._invalidateSelector_($recv(aMethod)._selector());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"invalidateCacheFor:",{aMethod:aMethod},$globals.HLSelectorsCache)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod"],
source: "invalidateCacheFor: aMethod\x0a\x09(self cacheFor: aMethod methodClass)\x0a    \x09invalidateSelector: aMethod selector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["invalidateSelector:", "cacheFor:", "methodClass", "selector"]
}),
$globals.HLSelectorsCache);

$core.addMethod(
$core.method({
selector: "isOverridden:",
protocol: 'testing',
fn: function (aMethod){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._cacheFor_($recv(aMethod)._methodClass()))._isOverridden_(aMethod);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isOverridden:",{aMethod:aMethod},$globals.HLSelectorsCache)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod"],
source: "isOverridden: aMethod\x0a\x09^ (self cacheFor: aMethod methodClass)\x0a    \x09isOverridden: aMethod",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["isOverridden:", "cacheFor:", "methodClass"]
}),
$globals.HLSelectorsCache);

$core.addMethod(
$core.method({
selector: "isOverride:",
protocol: 'testing',
fn: function (aMethod){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._cacheFor_($recv(aMethod)._methodClass()))._isOverride_(aMethod);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isOverride:",{aMethod:aMethod},$globals.HLSelectorsCache)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod"],
source: "isOverride: aMethod\x0a\x09^ (self cacheFor: aMethod methodClass)\x0a    \x09isOverride: aMethod",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["isOverride:", "cacheFor:", "methodClass"]
}),
$globals.HLSelectorsCache);

$core.addMethod(
$core.method({
selector: "newCacheFor:",
protocol: 'factory',
fn: function (aClass){
var self=this;
function $HLClassCache(){return $globals.HLClassCache||(typeof HLClassCache=="undefined"?nil:HLClassCache)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($HLClassCache())._on_selectorsCache_(aClass,self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newCacheFor:",{aClass:aClass},$globals.HLSelectorsCache)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "newCacheFor: aClass\x0a\x09^ HLClassCache \x0a    \x09on: aClass\x0a        selectorsCache: self",
referencedClasses: ["HLClassCache"],
//>>excludeEnd("ide");
messageSends: ["on:selectorsCache:"]
}),
$globals.HLSelectorsCache);

$core.addMethod(
$core.method({
selector: "observeSystem",
protocol: 'actions',
fn: function (){
var self=this;
function $SystemAnnouncer(){return $globals.SystemAnnouncer||(typeof SystemAnnouncer=="undefined"?nil:SystemAnnouncer)}
function $MethodAdded(){return $globals.MethodAdded||(typeof MethodAdded=="undefined"?nil:MethodAdded)}
function $MethodRemoved(){return $globals.MethodRemoved||(typeof MethodRemoved=="undefined"?nil:MethodRemoved)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($SystemAnnouncer())._current();
$recv($1)._on_send_to_($MethodAdded(),"onMethodAdded:",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._on_send_to_($MethodRemoved(),"onMethodRemoved:",self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeSystem",{},$globals.HLSelectorsCache)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeSystem\x0a\x09SystemAnnouncer current\x0a\x09\x09on: MethodAdded\x0a\x09\x09send: #onMethodAdded:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: MethodRemoved\x0a        send: #onMethodRemoved:\x0a\x09\x09to: self",
referencedClasses: ["SystemAnnouncer", "MethodAdded", "MethodRemoved"],
//>>excludeEnd("ide");
messageSends: ["on:send:to:", "current"]
}),
$globals.HLSelectorsCache);

$core.addMethod(
$core.method({
selector: "onMethodAdded:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._invalidateCacheFor_($recv(anAnnouncement)._method());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onMethodAdded:",{anAnnouncement:anAnnouncement},$globals.HLSelectorsCache)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onMethodAdded: anAnnouncement\x0a\x09self invalidateCacheFor: anAnnouncement method",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["invalidateCacheFor:", "method"]
}),
$globals.HLSelectorsCache);

$core.addMethod(
$core.method({
selector: "onMethodRemoved:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._invalidateCacheFor_($recv(anAnnouncement)._method());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onMethodRemoved:",{anAnnouncement:anAnnouncement},$globals.HLSelectorsCache)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onMethodRemoved: anAnnouncement\x0a\x09self invalidateCacheFor: anAnnouncement method",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["invalidateCacheFor:", "method"]
}),
$globals.HLSelectorsCache);


$globals.HLSelectorsCache.klass.iVarNames = ['current'];
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
self["@current"]=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.HLSelectorsCache.klass.superclass.fn.prototype._new.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=self["@current"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"current",{},$globals.HLSelectorsCache.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "current\x0a\x09^ current ifNil: [ current := super new ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.HLSelectorsCache.klass);

$core.addMethod(
$core.method({
selector: "flush",
protocol: 'accessing',
fn: function (){
var self=this;
self["@current"]=nil;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "flush\x0a\x09current := nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLSelectorsCache.klass);

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
}, function($ctx1) {$ctx1.fill(self,"new",{},$globals.HLSelectorsCache.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "new\x0a\x09self shouldNotImplement",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["shouldNotImplement"]
}),
$globals.HLSelectorsCache.klass);

});
