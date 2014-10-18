define("helios/Helios-SUnit", ["amber/boot", "helios/Helios-Core"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Helios-SUnit');
$core.packages["Helios-SUnit"].transport = {"type":"amd","amdNamespace":"helios"};

$core.addClass('HLMultiSelectToolListWidget', $globals.HLToolListWidget, [], 'Helios-SUnit');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLMultiSelectToolListWidget.comment="This is a list that handles multiple selection";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "activeItemCssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "selector";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "activeItemCssClass\x0a\x09^'selector'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLMultiSelectToolListWidget);

$core.addMethod(
$core.method({
selector: "isSelected:",
protocol: 'testing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isSelected:",{anObject:anObject},$globals.HLMultiSelectToolListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "isSelected: anObject\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.HLMultiSelectToolListWidget);

$core.addMethod(
$core.method({
selector: "listCssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "nav nav-multiselect nav-pills nav-stacked";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "listCssClass \x0a\x09^'nav nav-multiselect nav-pills nav-stacked'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLMultiSelectToolListWidget);

$core.addMethod(
$core.method({
selector: "listCssClassForItem:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$4,$3,$1;
$2=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.HLMultiSelectToolListWidget.superclass.fn.prototype._listCssClassForItem_.apply($recv(self), [anObject]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$4=self._isSelected_(anObject);
if($core.assert($4)){
$3=" active";
} else {
$3="";
};
$1=$recv($2).__comma($3);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"listCssClassForItem:",{anObject:anObject},$globals.HLMultiSelectToolListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "listCssClassForItem: anObject\x0a\x09^(super listCssClassForItem: anObject), ((self isSelected: anObject)\x0a\x09\x09ifTrue: [' active']\x0a\x09\x09ifFalse: ['']).",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "listCssClassForItem:", "ifTrue:ifFalse:", "isSelected:"]
}),
$globals.HLMultiSelectToolListWidget);

$core.addMethod(
$core.method({
selector: "reselectItem:",
protocol: 'rendering',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $receiver;
if(($receiver = anObject) == null || $receiver.isNil){
return self;
} else {
anObject;
};
self._toggleSelection_(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reselectItem:",{anObject:anObject},$globals.HLMultiSelectToolListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "reselectItem: anObject\x0a\x09anObject ifNil: [^self].\x0a\x09self toggleSelection: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "toggleSelection:"]
}),
$globals.HLMultiSelectToolListWidget);

$core.addMethod(
$core.method({
selector: "select:",
protocol: 'actions',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"select:",{anObject:anObject},$globals.HLMultiSelectToolListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "select: anObject\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.HLMultiSelectToolListWidget);

$core.addMethod(
$core.method({
selector: "toggleListItem:",
protocol: 'actions',
fn: function (aListItem){
var self=this;
var item;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$recv(aListItem)._get_((0));
if(($receiver = $1) == null || $receiver.isNil){
return self;
} else {
$1;
};
item=$recv(aListItem)._data_("item");
self._toggleSelection_(item);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toggleListItem:",{aListItem:aListItem,item:item},$globals.HLMultiSelectToolListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aListItem"],
source: "toggleListItem: aListItem\x0a\x09| item |\x0a\x09\x0a\x09(aListItem get: 0) ifNil: [ ^ self ].\x0a\x09\x22Find item\x22\x0a\x09item := aListItem data: 'item'.\x0a\x09self toggleSelection: item",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "get:", "data:", "toggleSelection:"]
}),
$globals.HLMultiSelectToolListWidget);

$core.addMethod(
$core.method({
selector: "toggleSelection:",
protocol: 'actions',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._isSelected_(anObject);
if($core.assert($1)){
self._unselect_(anObject);
} else {
self._select_(anObject);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toggleSelection:",{anObject:anObject},$globals.HLMultiSelectToolListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "toggleSelection: anObject\x0a\x09(self isSelected: anObject) \x0a\x09\x09ifTrue: [ self unselect: anObject ]\x0a\x09\x09ifFalse: [self select: anObject ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "isSelected:", "unselect:", "select:"]
}),
$globals.HLMultiSelectToolListWidget);

$core.addMethod(
$core.method({
selector: "unselect:",
protocol: 'actions',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"unselect:",{anObject:anObject},$globals.HLMultiSelectToolListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "unselect: anObject\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.HLMultiSelectToolListWidget);



$core.addClass('HLSUnitClassesListWidget', $globals.HLMultiSelectToolListWidget, [], 'Helios-SUnit');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLSUnitClassesListWidget.comment="I display a list of  classes (subclasses of `TestCase`).";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "buttonsDivCssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "buttons_bar";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "buttonsDivCssClass\x0a\x09^ 'buttons_bar'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLSUnitClassesListWidget);

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
}, function($ctx1) {$ctx1.fill(self,"cssClassForItem:",{aClass:aClass},$globals.HLSUnitClassesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "cssClassForItem: aClass\x09\x0a\x09^ aClass theNonMetaClass heliosClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["heliosClass", "theNonMetaClass"]
}),
$globals.HLSUnitClassesListWidget);

$core.addMethod(
$core.method({
selector: "initializeItems",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self["@items"]=$recv(self["@model"])._testClasses();
$1=self["@items"];
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeItems",{},$globals.HLSUnitClassesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeItems\x0a\x09^items := model testClasses",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["testClasses"]
}),
$globals.HLSUnitClassesListWidget);

$core.addMethod(
$core.method({
selector: "isSelected:",
protocol: 'testing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self["@model"])._selectedClasses())._includes_(anObject);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isSelected:",{anObject:anObject},$globals.HLSUnitClassesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "isSelected: anObject\x0a\x09^model selectedClasses includes: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["includes:", "selectedClasses"]
}),
$globals.HLSUnitClassesListWidget);

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
}, function($ctx1) {$ctx1.fill(self,"items",{},$globals.HLSUnitClassesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "items\x0a\x09^ items ifNil: [ self initializeItems ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "initializeItems"]
}),
$globals.HLSUnitClassesListWidget);

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
$globals.HLSUnitClassesListWidget);

$core.addMethod(
$core.method({
selector: "observeModel",
protocol: 'actions',
fn: function (){
var self=this;
function $HLPackageSelected(){return $globals.HLPackageSelected||(typeof HLPackageSelected=="undefined"?nil:HLPackageSelected)}
function $HLPackageUnselected(){return $globals.HLPackageUnselected||(typeof HLPackageUnselected=="undefined"?nil:HLPackageUnselected)}
function $HLClassSelected(){return $globals.HLClassSelected||(typeof HLClassSelected=="undefined"?nil:HLClassSelected)}
function $HLClassUnselected(){return $globals.HLClassUnselected||(typeof HLClassUnselected=="undefined"?nil:HLClassUnselected)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(self._model())._announcer();
$recv($1)._on_send_to_($HLPackageSelected(),"onPackageSelected:",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=1;
//>>excludeEnd("ctx");
$recv($1)._on_send_to_($HLPackageUnselected(),"onPackageUnselected:",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=2;
//>>excludeEnd("ctx");
$recv($1)._on_send_to_($HLClassSelected(),"onClassSelected:",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=3;
//>>excludeEnd("ctx");
$2=$recv($1)._on_send_to_($HLClassUnselected(),"onClassUnselected:",self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeModel",{},$globals.HLSUnitClassesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeModel\x0a    self model announcer \x0a\x09\x09on: HLPackageSelected\x0a\x09\x09send: #onPackageSelected:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLPackageUnselected\x0a\x09\x09send: #onPackageUnselected:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLClassSelected\x0a\x09\x09send: #onClassSelected:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLClassUnselected\x0a\x09\x09send: #onClassUnselected:\x0a\x09\x09to: self.",
referencedClasses: ["HLPackageSelected", "HLPackageUnselected", "HLClassSelected", "HLClassUnselected"],
//>>excludeEnd("ide");
messageSends: ["on:send:to:", "announcer", "model"]
}),
$globals.HLSUnitClassesListWidget);

$core.addMethod(
$core.method({
selector: "observeSystem",
protocol: 'actions',
fn: function (){
var self=this;
function $ClassAdded(){return $globals.ClassAdded||(typeof ClassAdded=="undefined"?nil:ClassAdded)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(self._model())._systemAnnouncer())._on_send_to_($ClassAdded(),"onClassAdded:",self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeSystem",{},$globals.HLSUnitClassesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeSystem\x0a    self model systemAnnouncer \x0a\x09\x09on: ClassAdded \x0a\x09\x09send: #onClassAdded:\x0a\x09\x09to: self.",
referencedClasses: ["ClassAdded"],
//>>excludeEnd("ide");
messageSends: ["on:send:to:", "systemAnnouncer", "model"]
}),
$globals.HLSUnitClassesListWidget);

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
$1=$recv($recv(self._model())._selectedPackages())._includes_($recv($recv(anAnnouncement)._theClass())._package());
if($core.assert($1)){
self._initializeItems();
$2=self._refresh();
$2;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onClassAdded:",{anAnnouncement:anAnnouncement},$globals.HLSUnitClassesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onClassAdded: anAnnouncement\x09\x0a\x09(self model selectedPackages includes: anAnnouncement theClass package)\x0a\x09\x09ifTrue: [ \x0a\x09\x09\x09self \x0a\x09\x09\x09\x09initializeItems;\x0a\x09\x09\x09\x09refresh ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "includes:", "selectedPackages", "model", "package", "theClass", "initializeItems", "refresh"]
}),
$globals.HLSUnitClassesListWidget);

$core.addMethod(
$core.method({
selector: "onClassSelected:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
var listItem;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
listItem=self._findListItemFor_($recv(anAnnouncement)._item());
$recv(listItem)._addClass_("active");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onClassSelected:",{anAnnouncement:anAnnouncement,listItem:listItem},$globals.HLSUnitClassesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onClassSelected: anAnnouncement\x0a\x09| listItem |\x0a\x09listItem := self findListItemFor: anAnnouncement item.\x0a\x09listItem addClass: 'active'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["findListItemFor:", "item", "addClass:"]
}),
$globals.HLSUnitClassesListWidget);

$core.addMethod(
$core.method({
selector: "onClassUnselected:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
var listItem;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
listItem=self._findListItemFor_($recv(anAnnouncement)._item());
$recv(listItem)._removeClass_("active");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onClassUnselected:",{anAnnouncement:anAnnouncement,listItem:listItem},$globals.HLSUnitClassesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onClassUnselected: anAnnouncement\x0a\x09| listItem |\x0a\x09listItem := self findListItemFor: anAnnouncement item.\x0a\x09listItem removeClass: 'active'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["findListItemFor:", "item", "removeClass:"]
}),
$globals.HLSUnitClassesListWidget);

$core.addMethod(
$core.method({
selector: "onPackageSelected:",
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
}, function($ctx1) {$ctx1.fill(self,"onPackageSelected:",{anAnnouncement:anAnnouncement},$globals.HLSUnitClassesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onPackageSelected: anAnnouncement\x0a\x09self initializeItems;\x0a\x09\x09refresh",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initializeItems", "refresh"]
}),
$globals.HLSUnitClassesListWidget);

$core.addMethod(
$core.method({
selector: "onPackageUnselected:",
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
}, function($ctx1) {$ctx1.fill(self,"onPackageUnselected:",{anAnnouncement:anAnnouncement},$globals.HLSUnitClassesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onPackageUnselected: anAnnouncement\x0a\x09self initializeItems;\x0a\x09\x09refresh",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initializeItems", "refresh"]
}),
$globals.HLSUnitClassesListWidget);

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
$recv($1)._class_("button");
$recv($1)._with_("Select all");
$2=$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._model())._selectAllClasses();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},$globals.HLSUnitClassesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderButtonsOn: html\x0a\x09html button\x0a\x09\x09class: 'button'; \x0a\x09\x09with: 'Select all';\x0a\x09\x09onClick: [ self model selectAllClasses ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "button", "with:", "onClick:", "selectAllClasses", "model"]
}),
$globals.HLSUnitClassesListWidget);

$core.addMethod(
$core.method({
selector: "renderItemLabel:on:",
protocol: 'rendering',
fn: function (aClass,html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(html)._with_($recv(aClass)._name());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderItemLabel:on:",{aClass:aClass,html:html},$globals.HLSUnitClassesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "html"],
source: "renderItemLabel: aClass on: html\x0a\x09html with: aClass name",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "name"]
}),
$globals.HLSUnitClassesListWidget);

$core.addMethod(
$core.method({
selector: "select:",
protocol: 'actions',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@model"])._selectClass_(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"select:",{anObject:anObject},$globals.HLSUnitClassesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "select: anObject\x0a\x09model selectClass: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selectClass:"]
}),
$globals.HLSUnitClassesListWidget);

$core.addMethod(
$core.method({
selector: "unselect:",
protocol: 'actions',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@model"])._unselectClass_(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"unselect:",{anObject:anObject},$globals.HLSUnitClassesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "unselect: anObject\x0a\x09model unselectClass: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["unselectClass:"]
}),
$globals.HLSUnitClassesListWidget);



$core.addClass('HLSUnitPackagesListWidget', $globals.HLMultiSelectToolListWidget, [], 'Helios-SUnit');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLSUnitPackagesListWidget.comment="I display a list of packages for which unit tests are associated (packages containing subclasses of `TestCase`).";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "buttonsDivCssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "buttons_bar";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "buttonsDivCssClass\x0a\x09^ 'buttons_bar'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLSUnitPackagesListWidget);

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
}, function($ctx1) {$ctx1.fill(self,"cssClassForItem:",{anItem:anItem},$globals.HLSUnitPackagesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anItem"],
source: "cssClassForItem: anItem\x09\x0a\x09^ anItem isDirty \x0a\x09\x09ifTrue: [ 'package_dirty' ]\x0a\x09\x09ifFalse: [ 'package' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "isDirty"]
}),
$globals.HLSUnitPackagesListWidget);

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
self["@items"]=$recv($recv(self["@model"])._testPackages())._sort_((function(a,b){
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
}, function($ctx1) {$ctx1.fill(self,"initializeItems",{},$globals.HLSUnitPackagesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeItems\x0a\x09^items := model testPackages \x0a\x09\x09sort: [:a :b | a name < b name]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["sort:", "testPackages", "<", "name"]
}),
$globals.HLSUnitPackagesListWidget);

$core.addMethod(
$core.method({
selector: "isSelected:",
protocol: 'testing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self["@model"])._selectedPackages())._includes_(anObject);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isSelected:",{anObject:anObject},$globals.HLSUnitPackagesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "isSelected: anObject\x0a\x09^model selectedPackages includes: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["includes:", "selectedPackages"]
}),
$globals.HLSUnitPackagesListWidget);

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
}, function($ctx1) {$ctx1.fill(self,"items",{},$globals.HLSUnitPackagesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "items\x0a\x09^ items ifNil: [ self initializeItems ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "initializeItems"]
}),
$globals.HLSUnitPackagesListWidget);

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
$globals.HLSUnitPackagesListWidget);

$core.addMethod(
$core.method({
selector: "observeModel",
protocol: 'actions',
fn: function (){
var self=this;
function $HLPackageSelected(){return $globals.HLPackageSelected||(typeof HLPackageSelected=="undefined"?nil:HLPackageSelected)}
function $HLPackageUnselected(){return $globals.HLPackageUnselected||(typeof HLPackageUnselected=="undefined"?nil:HLPackageUnselected)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(self._model())._announcer();
$recv($1)._on_send_to_($HLPackageSelected(),"onPackageSelected:",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._on_send_to_($HLPackageUnselected(),"onPackageUnselected:",self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeModel",{},$globals.HLSUnitPackagesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeModel\x0a    self model announcer \x0a\x09\x09on: HLPackageSelected\x0a\x09\x09send: #onPackageSelected:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: HLPackageUnselected\x0a\x09\x09send: #onPackageUnselected:\x0a\x09\x09to: self",
referencedClasses: ["HLPackageSelected", "HLPackageUnselected"],
//>>excludeEnd("ide");
messageSends: ["on:send:to:", "announcer", "model"]
}),
$globals.HLSUnitPackagesListWidget);

$core.addMethod(
$core.method({
selector: "observeSystem",
protocol: 'actions',
fn: function (){
var self=this;
function $ClassAdded(){return $globals.ClassAdded||(typeof ClassAdded=="undefined"?nil:ClassAdded)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(self._model())._systemAnnouncer())._on_send_to_($ClassAdded(),"onClassAdded:",self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeSystem",{},$globals.HLSUnitPackagesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeSystem\x0a    self model systemAnnouncer \x0a\x09\x09on: ClassAdded \x0a\x09\x09send: #onClassAdded:\x0a\x09\x09to: self.",
referencedClasses: ["ClassAdded"],
//>>excludeEnd("ide");
messageSends: ["on:send:to:", "systemAnnouncer", "model"]
}),
$globals.HLSUnitPackagesListWidget);

$core.addMethod(
$core.method({
selector: "onClassAdded:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $4,$6,$5,$3,$2,$1,$7;
$4=self._items();
$6=$recv(anAnnouncement)._theClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["theClass"]=1;
//>>excludeEnd("ctx");
$5=$recv($6)._package();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["package"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._includes_($5);
$2=$recv($3)._not();
$1=$recv($2)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($recv(anAnnouncement)._theClass())._package())._isTestPackage();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if($core.assert($1)){
self._initializeItems();
$7=self._refresh();
$7;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onClassAdded:",{anAnnouncement:anAnnouncement},$globals.HLSUnitPackagesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onClassAdded: anAnnouncement\x0a\x09((self items includes: anAnnouncement theClass package) not and: [anAnnouncement theClass package isTestPackage])\x0a\x09\x09ifTrue: [ \x0a\x09\x09\x09self \x0a\x09\x09\x09\x09initializeItems;\x0a\x09\x09\x09\x09refresh ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "and:", "not", "includes:", "items", "package", "theClass", "isTestPackage", "initializeItems", "refresh"]
}),
$globals.HLSUnitPackagesListWidget);

$core.addMethod(
$core.method({
selector: "onPackageSelected:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
var listItem;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
listItem=self._findListItemFor_($recv(anAnnouncement)._item());
$recv(listItem)._addClass_("active");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onPackageSelected:",{anAnnouncement:anAnnouncement,listItem:listItem},$globals.HLSUnitPackagesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onPackageSelected: anAnnouncement\x0a\x09| listItem |\x0a\x09listItem := self findListItemFor: anAnnouncement item.\x0a\x09listItem addClass: 'active'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["findListItemFor:", "item", "addClass:"]
}),
$globals.HLSUnitPackagesListWidget);

$core.addMethod(
$core.method({
selector: "onPackageUnselected:",
protocol: 'reactions',
fn: function (anAnnouncement){
var self=this;
var listItem;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
listItem=self._findListItemFor_($recv(anAnnouncement)._item());
$recv(listItem)._removeClass_("active");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onPackageUnselected:",{anAnnouncement:anAnnouncement,listItem:listItem},$globals.HLSUnitPackagesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onPackageUnselected: anAnnouncement\x0a\x09| listItem |\x0a\x09listItem := self findListItemFor: anAnnouncement item.\x0a\x09listItem removeClass: 'active'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["findListItemFor:", "item", "removeClass:"]
}),
$globals.HLSUnitPackagesListWidget);

$core.addMethod(
$core.method({
selector: "renderButtonsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$2,$4,$5;
$1=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["button"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_("button");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$recv($1)._with_("Run Tests");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=self._model();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["model"]=1;
//>>excludeEnd("ctx");
return $recv($3)._runTests();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["onClick:"]=1;
//>>excludeEnd("ctx");
$4=$recv(html)._button();
$recv($4)._class_("button");
$recv($4)._with_("Select all");
$5=$recv($4)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._model())._selectAllPackages();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},$globals.HLSUnitPackagesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderButtonsOn: html\x0a\x09html button\x0a\x09\x09class: 'button';\x0a\x09\x09with: 'Run Tests';\x0a\x09\x09onClick: [ self model runTests ].\x0a\x09html button\x0a\x09\x09class: 'button';\x0a\x09\x09with: 'Select all';\x0a\x09\x09onClick: [ self model selectAllPackages ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "button", "with:", "onClick:", "runTests", "model", "selectAllPackages"]
}),
$globals.HLSUnitPackagesListWidget);

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
}, function($ctx1) {$ctx1.fill(self,"renderItemLabel:on:",{aPackage:aPackage,html:html},$globals.HLSUnitPackagesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "html"],
source: "renderItemLabel: aPackage on: html\x0a\x09html with: aPackage name",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "name"]
}),
$globals.HLSUnitPackagesListWidget);

$core.addMethod(
$core.method({
selector: "select:",
protocol: 'actions',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@model"])._selectPackage_(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"select:",{anObject:anObject},$globals.HLSUnitPackagesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "select: anObject\x0a\x09model selectPackage: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selectPackage:"]
}),
$globals.HLSUnitPackagesListWidget);

$core.addMethod(
$core.method({
selector: "unselect:",
protocol: 'actions',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@model"])._unselectPackage_(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"unselect:",{anObject:anObject},$globals.HLSUnitPackagesListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "unselect: anObject\x0a\x09model unselectPackage: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["unselectPackage:"]
}),
$globals.HLSUnitPackagesListWidget);



$core.addClass('HLSUnit', $globals.HLWidget, ['model', 'packagesListWidget', 'classesListWidget', 'resultWidget', 'failuresWidget', 'errorsWidget'], 'Helios-SUnit');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLSUnit.comment="I am the main widget for running unit tests in Helios.\x0a\x0aI provide the ability to select set of tests to run per package, and a detailed result log with passed tests, failed tests and errors.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "classesListWidget",
protocol: 'widgets',
fn: function (){
var self=this;
function $HLSUnitClassesListWidget(){return $globals.HLSUnitClassesListWidget||(typeof HLSUnitClassesListWidget=="undefined"?nil:HLSUnitClassesListWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@classesListWidget"];
if(($receiver = $2) == null || $receiver.isNil){
self["@classesListWidget"]=$recv($HLSUnitClassesListWidget())._on_(self._model());
self["@classesListWidget"];
$1=$recv(self["@classesListWidget"])._next_(self._failuresWidget());
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classesListWidget",{},$globals.HLSUnit)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classesListWidget\x0a\x09^ classesListWidget ifNil: [ \x0a\x09\x09classesListWidget := HLSUnitClassesListWidget on: self model.\x0a\x09\x09classesListWidget next: self failuresWidget ]",
referencedClasses: ["HLSUnitClassesListWidget"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "on:", "model", "next:", "failuresWidget"]
}),
$globals.HLSUnit);

$core.addMethod(
$core.method({
selector: "errorsWidget",
protocol: 'widgets',
fn: function (){
var self=this;
function $HLSUnitErrorsListWidget(){return $globals.HLSUnitErrorsListWidget||(typeof HLSUnitErrorsListWidget=="undefined"?nil:HLSUnitErrorsListWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@errorsWidget"];
if(($receiver = $2) == null || $receiver.isNil){
self["@errorsWidget"]=$recv($HLSUnitErrorsListWidget())._on_(self._model());
$1=self["@errorsWidget"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"errorsWidget",{},$globals.HLSUnit)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "errorsWidget\x0a\x09^ errorsWidget ifNil: [errorsWidget := HLSUnitErrorsListWidget on: self model]",
referencedClasses: ["HLSUnitErrorsListWidget"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "on:", "model"]
}),
$globals.HLSUnit);

$core.addMethod(
$core.method({
selector: "failuresWidget",
protocol: 'widgets',
fn: function (){
var self=this;
function $HLSUnitFailuresListWidget(){return $globals.HLSUnitFailuresListWidget||(typeof HLSUnitFailuresListWidget=="undefined"?nil:HLSUnitFailuresListWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@failuresWidget"];
if(($receiver = $2) == null || $receiver.isNil){
self["@failuresWidget"]=$recv($HLSUnitFailuresListWidget())._on_(self._model());
self["@failuresWidget"];
$1=$recv(self["@failuresWidget"])._next_(self._errorsWidget());
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"failuresWidget",{},$globals.HLSUnit)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "failuresWidget\x0a\x09^ failuresWidget ifNil: [\x0a\x09\x09failuresWidget := HLSUnitFailuresListWidget on: self model.\x0a\x09\x09failuresWidget next: self errorsWidget]",
referencedClasses: ["HLSUnitFailuresListWidget"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "on:", "model", "next:", "errorsWidget"]
}),
$globals.HLSUnit);

$core.addMethod(
$core.method({
selector: "model",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLSUnitModel(){return $globals.HLSUnitModel||(typeof HLSUnitModel=="undefined"?nil:HLSUnitModel)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@model"];
if(($receiver = $2) == null || $receiver.isNil){
self["@model"]=$recv($HLSUnitModel())._new();
$1=self["@model"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"model",{},$globals.HLSUnit)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "model\x0a\x09^ model ifNil: [ model := HLSUnitModel new ]",
referencedClasses: ["HLSUnitModel"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.HLSUnit);

$core.addMethod(
$core.method({
selector: "packagesListWidget",
protocol: 'widgets',
fn: function (){
var self=this;
function $HLSUnitPackagesListWidget(){return $globals.HLSUnitPackagesListWidget||(typeof HLSUnitPackagesListWidget=="undefined"?nil:HLSUnitPackagesListWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@packagesListWidget"];
if(($receiver = $2) == null || $receiver.isNil){
self["@packagesListWidget"]=$recv($HLSUnitPackagesListWidget())._on_(self._model());
self["@packagesListWidget"];
$1=$recv(self["@packagesListWidget"])._next_(self._classesListWidget());
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"packagesListWidget",{},$globals.HLSUnit)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "packagesListWidget\x0a\x09^ packagesListWidget ifNil: [ \x0a\x09\x09packagesListWidget := HLSUnitPackagesListWidget on: self model.\x0a\x09\x09packagesListWidget next: self classesListWidget]",
referencedClasses: ["HLSUnitPackagesListWidget"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "on:", "model", "next:", "classesListWidget"]
}),
$globals.HLSUnit);

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
}, function($ctx1) {$ctx1.fill(self,"registerBindingsOn:",{aBindingGroup:aBindingGroup},$globals.HLSUnit)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBindingGroup"],
source: "registerBindingsOn: aBindingGroup\x0a\x09HLToolCommand \x0a\x09\x09registerConcreteClassesOn: aBindingGroup \x0a\x09\x09for: self model",
referencedClasses: ["HLToolCommand"],
//>>excludeEnd("ide");
messageSends: ["registerConcreteClassesOn:for:", "model"]
}),
$globals.HLSUnit);

$core.addMethod(
$core.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var resultSection;
function $HLContainer(){return $globals.HLContainer||(typeof HLContainer=="undefined"?nil:HLContainer)}
function $HLVerticalSplitter(){return $globals.HLVerticalSplitter||(typeof HLVerticalSplitter=="undefined"?nil:HLVerticalSplitter)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $4,$3,$5,$2,$1;
$4=self._packagesListWidget();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["packagesListWidget"]=1;
//>>excludeEnd("ctx");
$3=$recv($HLVerticalSplitter())._with_with_($4,self._classesListWidget());
resultSection=self._resultSection();
$5=resultSection;
$2=$recv($HLVerticalSplitter())._with_with_($3,$5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:with:"]=1;
//>>excludeEnd("ctx");
$1=$recv($HLContainer())._with_($2);
$recv(html)._with_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(resultSection)._resize_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._valueWithTimeout_((100));
$recv(self._packagesListWidget())._focus();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html,resultSection:resultSection},$globals.HLSUnit)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderContentOn: html\x0a\x09| resultSection |\x0a\x09html with: (HLContainer with:  (\x0a\x09\x09HLVerticalSplitter \x0a\x09\x09\x09with: (HLVerticalSplitter\x0a\x09\x09\x09\x09with: self packagesListWidget \x0a        \x09\x09with: self classesListWidget)\x0a\x09\x09\x09with: (resultSection := self resultSection))).\x0a\x09\x0a\x09[resultSection resize: 0] valueWithTimeout: 100.\x0a\x09\x0a\x09self packagesListWidget focus",
referencedClasses: ["HLContainer", "HLVerticalSplitter"],
//>>excludeEnd("ide");
messageSends: ["with:", "with:with:", "packagesListWidget", "classesListWidget", "resultSection", "valueWithTimeout:", "resize:", "focus"]
}),
$globals.HLSUnit);

$core.addMethod(
$core.method({
selector: "resultSection",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLHorizontalSplitter(){return $globals.HLHorizontalSplitter||(typeof HLHorizontalSplitter=="undefined"?nil:HLHorizontalSplitter)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($HLHorizontalSplitter())._with_with_(self._resultWidget(),$recv($HLHorizontalSplitter())._with_with_(self._failuresWidget(),self._errorsWidget()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:with:"]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"resultSection",{},$globals.HLSUnit)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "resultSection\x0a\x09^HLHorizontalSplitter \x0a\x09\x09with: self resultWidget\x0a\x09\x09with: (HLHorizontalSplitter \x0a\x09\x09\x09with: self failuresWidget\x0a\x09\x09\x09with: self errorsWidget)",
referencedClasses: ["HLHorizontalSplitter"],
//>>excludeEnd("ide");
messageSends: ["with:with:", "resultWidget", "failuresWidget", "errorsWidget"]
}),
$globals.HLSUnit);

$core.addMethod(
$core.method({
selector: "resultWidget",
protocol: 'widgets',
fn: function (){
var self=this;
function $HLSUnitResults(){return $globals.HLSUnitResults||(typeof HLSUnitResults=="undefined"?nil:HLSUnitResults)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$4,$1,$receiver;
$2=self["@resultWidget"];
if(($receiver = $2) == null || $receiver.isNil){
$3=$recv($HLSUnitResults())._new();
$recv($3)._model_(self._model());
$4=$recv($3)._yourself();
self["@resultWidget"]=$4;
$1=self["@resultWidget"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"resultWidget",{},$globals.HLSUnit)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "resultWidget\x0a\x09^ resultWidget ifNil: [\x0a\x09\x09resultWidget := HLSUnitResults new\x0a\x09\x09\x09model: self model;\x0a\x09\x09\x09yourself]",
referencedClasses: ["HLSUnitResults"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "model:", "new", "model", "yourself"]
}),
$globals.HLSUnit);

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
$globals.HLSUnit.superclass.fn.prototype._unregister.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["unregister"]=1;
//>>excludeEnd("ctx");
$recv([self._packagesListWidget(),self._classesListWidget(),self._resultWidget(),self._errorsWidget(),self._failuresWidget()])._do_((function(each){
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
}, function($ctx1) {$ctx1.fill(self,"unregister",{},$globals.HLSUnit)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "unregister\x0a\x09super unregister.\x0a\x0a\x09{ \x0a\x09\x09self packagesListWidget.\x0a\x09\x09self classesListWidget.\x0a\x09\x09self resultWidget.\x0a\x09\x09self errorsWidget.\x0a\x09\x09self failuresWidget\x0a\x09} \x0a\x09\x09do: [ :each | each unregister ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["unregister", "do:", "packagesListWidget", "classesListWidget", "resultWidget", "errorsWidget", "failuresWidget"]
}),
$globals.HLSUnit);


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
$globals.HLSUnit.klass);

$core.addMethod(
$core.method({
selector: "tabClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "sunit";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tabClass\x0a\x09^ 'sunit'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLSUnit.klass);

$core.addMethod(
$core.method({
selector: "tabLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "SUnit";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tabLabel\x0a\x09^ 'SUnit'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLSUnit.klass);

$core.addMethod(
$core.method({
selector: "tabPriority",
protocol: 'accessing',
fn: function (){
var self=this;
return (1000);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tabPriority\x0a\x09^ 1000",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLSUnit.klass);


$core.addClass('HLSUnitModel', $globals.HLModel, ['selectedPackages', 'selectedClasses', 'testResult', 'currentSuite'], 'Helios-SUnit');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLSUnitModel.comment="I am the model for running unit tests in Helios.\x0a\x0aI provide the ability to select set of tests to run per package, and a detailed result log with passed tests, failed tests and errors.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "currentSuite",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@currentSuite"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "currentSuite\x0a\x09^currentSuite",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLSUnitModel);

$core.addMethod(
$core.method({
selector: "invertSelectedClasses",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$recv(self._testClasses())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(self._unfilteredSelectedClasses())._includes_(each);
if($core.assert($1)){
return self._unselectClass_(each);
} else {
return self._selectClass_(each);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"invertSelectedClasses",{},$globals.HLSUnitModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "invertSelectedClasses\x0a\x09self testClasses do: [:each | \x0a\x09\x09(self unfilteredSelectedClasses includes: each)\x0a\x09\x09\x09ifTrue: [ self unselectClass: each ]\x0a\x09\x09\x09ifFalse: [ self selectClass: each ]].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "testClasses", "ifTrue:ifFalse:", "includes:", "unfilteredSelectedClasses", "unselectClass:", "selectClass:"]
}),
$globals.HLSUnitModel);

$core.addMethod(
$core.method({
selector: "invertSelectedPackages",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$recv(self._testPackages())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(self._selectedPackages())._includes_(each);
if($core.assert($1)){
return self._unselectPackage_(each);
} else {
return self._selectPackage_(each);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"invertSelectedPackages",{},$globals.HLSUnitModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "invertSelectedPackages\x0a\x09self testPackages do: [:each | \x0a\x09\x09(self selectedPackages includes: each)\x0a\x09\x09\x09ifTrue: [ self unselectPackage: each ]\x0a\x09\x09\x09ifFalse: [ self selectPackage: each ]].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "testPackages", "ifTrue:ifFalse:", "includes:", "selectedPackages", "unselectPackage:", "selectPackage:"]
}),
$globals.HLSUnitModel);

$core.addMethod(
$core.method({
selector: "onResultAnnouncement:",
protocol: 'reacting',
fn: function (announcement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._announcer())._announce_(announcement);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onResultAnnouncement:",{announcement:announcement},$globals.HLSUnitModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["announcement"],
source: "onResultAnnouncement: announcement\x0a\x09\x22Propogate announcement\x22\x0a\x09self announcer announce: announcement.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["announce:", "announcer"]
}),
$globals.HLSUnitModel);

$core.addMethod(
$core.method({
selector: "runTests",
protocol: 'actions',
fn: function (){
var self=this;
var worker;
function $TestSuiteRunner(){return $globals.TestSuiteRunner||(typeof TestSuiteRunner=="undefined"?nil:TestSuiteRunner)}
function $HLRunTests(){return $globals.HLRunTests||(typeof HLRunTests=="undefined"?nil:HLRunTests)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
worker=$recv($TestSuiteRunner())._on_(self._testCases());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:"]=1;
//>>excludeEnd("ctx");
self["@testResult"]=$recv(worker)._result();
$recv(self._announcer())._announce_($recv($HLRunTests())._on_(worker));
self._subscribeToTestSuite_(worker);
$recv(worker)._run();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"runTests",{worker:worker},$globals.HLSUnitModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "runTests\x0a\x09| worker |\x0a\x09worker := TestSuiteRunner on: self testCases.\x0a\x09testResult := worker result.\x0a\x09self announcer announce: (HLRunTests on: worker).\x0a\x09self subscribeToTestSuite: worker.\x0a\x09worker run",
referencedClasses: ["TestSuiteRunner", "HLRunTests"],
//>>excludeEnd("ide");
messageSends: ["on:", "testCases", "result", "announce:", "announcer", "subscribeToTestSuite:", "run"]
}),
$globals.HLSUnitModel);

$core.addMethod(
$core.method({
selector: "selectAllClasses",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._testClasses())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._selectClass_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectAllClasses",{},$globals.HLSUnitModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selectAllClasses\x0a\x09self testClasses do: [:each | self selectClass: each].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "testClasses", "selectClass:"]
}),
$globals.HLSUnitModel);

$core.addMethod(
$core.method({
selector: "selectAllPackages",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._testPackages())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._selectPackage_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectAllPackages",{},$globals.HLSUnitModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selectAllPackages\x0a\x09self testPackages do: [:each | self selectPackage: each].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "testPackages", "selectPackage:"]
}),
$globals.HLSUnitModel);

$core.addMethod(
$core.method({
selector: "selectClass:",
protocol: 'actions',
fn: function (aClass){
var self=this;
function $HLClassSelected(){return $globals.HLClassSelected||(typeof HLClassSelected=="undefined"?nil:HLClassSelected)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._unfilteredSelectedClasses())._add_(aClass);
$recv(self._announcer())._announce_($recv($HLClassSelected())._on_(aClass));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectClass:",{aClass:aClass},$globals.HLSUnitModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "selectClass: aClass\x0a\x09self unfilteredSelectedClasses add: aClass.\x0a\x09self announcer announce: (HLClassSelected on: aClass).",
referencedClasses: ["HLClassSelected"],
//>>excludeEnd("ide");
messageSends: ["add:", "unfilteredSelectedClasses", "announce:", "announcer", "on:"]
}),
$globals.HLSUnitModel);

$core.addMethod(
$core.method({
selector: "selectPackage:",
protocol: 'actions',
fn: function (aPackage){
var self=this;
function $HLPackageSelected(){return $globals.HLPackageSelected||(typeof HLPackageSelected=="undefined"?nil:HLPackageSelected)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._selectedPackages())._add_(aPackage);
$recv(self._announcer())._announce_($recv($HLPackageSelected())._on_(aPackage));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectPackage:",{aPackage:aPackage},$globals.HLSUnitModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "selectPackage: aPackage\x0a\x09self selectedPackages add: aPackage.\x0a\x09self announcer announce: (HLPackageSelected on: aPackage).",
referencedClasses: ["HLPackageSelected"],
//>>excludeEnd("ide");
messageSends: ["add:", "selectedPackages", "announce:", "announcer", "on:"]
}),
$globals.HLSUnitModel);

$core.addMethod(
$core.method({
selector: "selectedClasses",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._unfilteredSelectedClasses())._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._selectedPackages())._includes_($recv(each)._package());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectedClasses",{},$globals.HLSUnitModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selectedClasses\x0a\x09^ (self unfilteredSelectedClasses) select: [ :each |\x0a\x09\x09self selectedPackages includes: each package ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["select:", "unfilteredSelectedClasses", "includes:", "selectedPackages", "package"]
}),
$globals.HLSUnitModel);

$core.addMethod(
$core.method({
selector: "selectedPackages",
protocol: 'accessing',
fn: function (){
var self=this;
function $Set(){return $globals.Set||(typeof Set=="undefined"?nil:Set)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@selectedPackages"];
if(($receiver = $2) == null || $receiver.isNil){
self["@selectedPackages"]=$recv($Set())._new();
$1=self["@selectedPackages"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectedPackages",{},$globals.HLSUnitModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selectedPackages\x0a\x09^ selectedPackages ifNil: [ selectedPackages := Set new ]",
referencedClasses: ["Set"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.HLSUnitModel);

$core.addMethod(
$core.method({
selector: "subscribeToTestSuite:",
protocol: 'actions',
fn: function (aTestSuiteRunner){
var self=this;
function $ResultAnnouncement(){return $globals.ResultAnnouncement||(typeof ResultAnnouncement=="undefined"?nil:ResultAnnouncement)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=self["@currentSuite"];
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$2=$recv(self["@currentSuite"])._announcer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["announcer"]=1;
//>>excludeEnd("ctx");
$recv($2)._unsubscribe_(self);
};
self["@currentSuite"]=aTestSuiteRunner;
$recv($recv(self["@currentSuite"])._announcer())._on_send_to_($ResultAnnouncement(),"onResultAnnouncement:",self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subscribeToTestSuite:",{aTestSuiteRunner:aTestSuiteRunner},$globals.HLSUnitModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTestSuiteRunner"],
source: "subscribeToTestSuite: aTestSuiteRunner\x0a\x09currentSuite ifNotNil: [ currentSuite announcer unsubscribe: self].\x0a\x09currentSuite := aTestSuiteRunner.\x0a\x09currentSuite announcer \x0a\x09\x09on: ResultAnnouncement\x0a\x09\x09send: #onResultAnnouncement:\x0a\x09\x09to: self",
referencedClasses: ["ResultAnnouncement"],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "unsubscribe:", "announcer", "on:send:to:"]
}),
$globals.HLSUnitModel);

$core.addMethod(
$core.method({
selector: "testCases",
protocol: 'accessing',
fn: function (){
var self=this;
var testCases;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
testCases=[];
$recv(self._selectedClasses())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(testCases)._addAll_($recv(each)._buildSuite());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=testCases;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCases",{testCases:testCases},$globals.HLSUnitModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCases\x0a\x09| testCases |\x0a\x09testCases := #().\x0a\x09self selectedClasses\x0a\x09\x09do: [ :each | testCases addAll: each buildSuite ].\x0a\x09^ testCases",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "selectedClasses", "addAll:", "buildSuite"]
}),
$globals.HLSUnitModel);

$core.addMethod(
$core.method({
selector: "testClasses",
protocol: 'accessing',
fn: function (){
var self=this;
var stream;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
stream=$recv($recv($Array())._new())._writeStream();
$recv(self._selectedPackages())._do_((function(package_){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(stream)._nextPutAll_($recv($recv(package_)._classes())._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(each)._isTestClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)});
//>>excludeEnd("ctx");
})));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({package_:package_},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=$recv(stream)._contents();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testClasses",{stream:stream},$globals.HLSUnitModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testClasses\x0a\x09\x22Answer all concrete subclasses of TestCase in selected packages\x22\x0a\x09\x0a\x09| stream |\x0a\x09stream := Array new writeStream.\x0a\x09self selectedPackages do: [ :package |\x0a\x09\x09stream nextPutAll: (package classes select:  [ :each |\x0a\x09\x09\x09each isTestClass ] ) ].\x0a\x09^ stream contents",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["writeStream", "new", "do:", "selectedPackages", "nextPutAll:", "select:", "classes", "isTestClass", "contents"]
}),
$globals.HLSUnitModel);

$core.addMethod(
$core.method({
selector: "testPackages",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._environment())._packages())._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._isTestPackage();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testPackages",{},$globals.HLSUnitModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testPackages\x0a\x09\x22Answer all packages containing concrete subclasses of TestCase\x22\x0a\x09\x0a\x09^ self environment packages \x0a\x09\x09select: [ :each | each isTestPackage ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["select:", "packages", "environment", "isTestPackage"]
}),
$globals.HLSUnitModel);

$core.addMethod(
$core.method({
selector: "testResult",
protocol: 'accessing',
fn: function (){
var self=this;
function $TestResult(){return $globals.TestResult||(typeof TestResult=="undefined"?nil:TestResult)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@testResult"];
if(($receiver = $2) == null || $receiver.isNil){
self["@testResult"]=$recv($TestResult())._new();
$1=self["@testResult"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testResult",{},$globals.HLSUnitModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testResult\x0a\x09^testResult ifNil: [testResult := TestResult new]",
referencedClasses: ["TestResult"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.HLSUnitModel);

$core.addMethod(
$core.method({
selector: "unfilteredSelectedClasses",
protocol: 'private',
fn: function (){
var self=this;
function $Set(){return $globals.Set||(typeof Set=="undefined"?nil:Set)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@selectedClasses"];
if(($receiver = $2) == null || $receiver.isNil){
self["@selectedClasses"]=$recv($Set())._new();
$1=self["@selectedClasses"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"unfilteredSelectedClasses",{},$globals.HLSUnitModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "unfilteredSelectedClasses\x0a\x09^ (selectedClasses ifNil: [ selectedClasses := Set new ])",
referencedClasses: ["Set"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.HLSUnitModel);

$core.addMethod(
$core.method({
selector: "unselectClass:",
protocol: 'actions',
fn: function (aClass){
var self=this;
function $HLClassUnselected(){return $globals.HLClassUnselected||(typeof HLClassUnselected=="undefined"?nil:HLClassUnselected)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $early={};
try {
$recv(self._unfilteredSelectedClasses())._remove_ifAbsent_(aClass,(function(){
throw $early=[self];

}));
$recv(self._announcer())._announce_($recv($HLClassUnselected())._on_(aClass));
return self;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"unselectClass:",{aClass:aClass},$globals.HLSUnitModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "unselectClass: aClass\x0a\x09self unfilteredSelectedClasses remove: aClass ifAbsent: [^self].\x0a\x09self announcer announce: (HLClassUnselected on: aClass).",
referencedClasses: ["HLClassUnselected"],
//>>excludeEnd("ide");
messageSends: ["remove:ifAbsent:", "unfilteredSelectedClasses", "announce:", "announcer", "on:"]
}),
$globals.HLSUnitModel);

$core.addMethod(
$core.method({
selector: "unselectPackage:",
protocol: 'actions',
fn: function (aPackage){
var self=this;
function $HLPackageUnselected(){return $globals.HLPackageUnselected||(typeof HLPackageUnselected=="undefined"?nil:HLPackageUnselected)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $early={};
try {
$recv(self._selectedPackages())._remove_ifAbsent_(aPackage,(function(){
throw $early=[self];

}));
$recv(self._announcer())._announce_($recv($HLPackageUnselected())._on_(aPackage));
return self;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"unselectPackage:",{aPackage:aPackage},$globals.HLSUnitModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "unselectPackage: aPackage\x0a\x09self selectedPackages remove: aPackage ifAbsent: [^self].\x0a\x09self announcer announce: (HLPackageUnselected on: aPackage).",
referencedClasses: ["HLPackageUnselected"],
//>>excludeEnd("ide");
messageSends: ["remove:ifAbsent:", "selectedPackages", "announce:", "announcer", "on:"]
}),
$globals.HLSUnitModel);



$core.addClass('HLSUnitResultListWidget', $globals.HLToolListWidget, [], 'Helios-SUnit');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLSUnitResultListWidget.comment="I group the lists that display test results";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "observeModel",
protocol: 'initialization',
fn: function (){
var self=this;
function $ResultAnnouncement(){return $globals.ResultAnnouncement||(typeof ResultAnnouncement=="undefined"?nil:ResultAnnouncement)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(self._model())._announcer())._on_send_to_($ResultAnnouncement(),"onResultAnnouncement:",self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeModel",{},$globals.HLSUnitResultListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeModel\x0a\x09self model announcer \x0a\x09\x09on: ResultAnnouncement\x0a\x09\x09send: #onResultAnnouncement:\x0a\x09\x09to: self",
referencedClasses: ["ResultAnnouncement"],
//>>excludeEnd("ide");
messageSends: ["on:send:to:", "announcer", "model"]
}),
$globals.HLSUnitResultListWidget);

$core.addMethod(
$core.method({
selector: "onResultAnnouncement:",
protocol: 'reacting',
fn: function (announcement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onResultAnnouncement:",{announcement:announcement},$globals.HLSUnitResultListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["announcement"],
source: "onResultAnnouncement: announcement\x0a\x09self refresh.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["refresh"]
}),
$globals.HLSUnitResultListWidget);

$core.addMethod(
$core.method({
selector: "performFailure:",
protocol: 'actions',
fn: function (aTestCase){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(aTestCase)._runCase();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"performFailure:",{aTestCase:aTestCase},$globals.HLSUnitResultListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTestCase"],
source: "performFailure: aTestCase\x0a\x09aTestCase runCase",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["runCase"]
}),
$globals.HLSUnitResultListWidget);

$core.addMethod(
$core.method({
selector: "renderItemLabel:on:",
protocol: 'rendering',
fn: function (anObject,html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($recv($recv(anObject)._class())._name()).__comma(" >> ")).__comma($recv(anObject)._selector());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv(html)._with_($1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderItemLabel:on:",{anObject:anObject,html:html},$globals.HLSUnitResultListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "html"],
source: "renderItemLabel: anObject on: html\x0a\x09html with: anObject class name, ' >> ', anObject selector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", ",", "name", "class", "selector"]
}),
$globals.HLSUnitResultListWidget);

$core.addMethod(
$core.method({
selector: "reselectItem:",
protocol: 'rendering',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._performFailure_(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reselectItem:",{anObject:anObject},$globals.HLSUnitResultListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "reselectItem: anObject\x0a\x09self performFailure: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["performFailure:"]
}),
$globals.HLSUnitResultListWidget);



$core.addClass('HLSUnitErrorsListWidget', $globals.HLSUnitResultListWidget, [], 'Helios-SUnit');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLSUnitErrorsListWidget.comment="I display a list of tests that have errors";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "items",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._model())._testResult())._errors();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"items",{},$globals.HLSUnitErrorsListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "items\x0a\x09^self model testResult errors",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["errors", "testResult", "model"]
}),
$globals.HLSUnitErrorsListWidget);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Errors";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^'Errors'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLSUnitErrorsListWidget);



$core.addClass('HLSUnitFailuresListWidget', $globals.HLSUnitResultListWidget, [], 'Helios-SUnit');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLSUnitFailuresListWidget.comment="I display a list of tests that have failures";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "items",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._model())._testResult())._failures();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"items",{},$globals.HLSUnitFailuresListWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "items\x0a\x09^self model testResult failures",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["failures", "testResult", "model"]
}),
$globals.HLSUnitFailuresListWidget);

$core.addMethod(
$core.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return "Failures";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "label\x0a\x09^'Failures'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLSUnitFailuresListWidget);



$core.addClass('HLSUnitResultStatus', $globals.HLWidget, ['model'], 'Helios-SUnit');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLSUnitResultStatus.comment="I display the status of the previous test run\x0a\x0a1. How many tests where run.\x0a* How many tests passed.\x0a* How many tests failed.\x0a* How many tests resulted in an error.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "model",
protocol: 'accessing',
fn: function (){
var self=this;
function $TestResult(){return $globals.TestResult||(typeof TestResult=="undefined"?nil:TestResult)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@model"];
if(($receiver = $2) == null || $receiver.isNil){
self["@model"]=$recv($TestResult())._new();
$1=self["@model"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"model",{},$globals.HLSUnitResultStatus)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "model\x0a\x09^ model ifNil: [model := TestResult new]",
referencedClasses: ["TestResult"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.HLSUnitResultStatus);

$core.addMethod(
$core.method({
selector: "model:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@model"]=anObject;
self._observeModel();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"model:",{anObject:anObject},$globals.HLSUnitResultStatus)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "model: anObject\x0a\x09model := anObject.\x0a\x09self observeModel.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["observeModel"]
}),
$globals.HLSUnitResultStatus);

$core.addMethod(
$core.method({
selector: "observeModel",
protocol: 'actions',
fn: function (){
var self=this;
function $ResultAnnouncement(){return $globals.ResultAnnouncement||(typeof ResultAnnouncement=="undefined"?nil:ResultAnnouncement)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(self._model())._announcer())._on_send_to_($ResultAnnouncement(),"onResultAnnouncement:",self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeModel",{},$globals.HLSUnitResultStatus)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeModel\x0a\x09self model announcer \x0a\x09\x09on: ResultAnnouncement\x0a\x09\x09send: #onResultAnnouncement:\x0a\x09\x09to: self",
referencedClasses: ["ResultAnnouncement"],
//>>excludeEnd("ide");
messageSends: ["on:send:to:", "announcer", "model"]
}),
$globals.HLSUnitResultStatus);

$core.addMethod(
$core.method({
selector: "onResultAnnouncement:",
protocol: 'reacting',
fn: function (announcement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onResultAnnouncement:",{announcement:announcement},$globals.HLSUnitResultStatus)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["announcement"],
source: "onResultAnnouncement: announcement\x0a\x09self refresh.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["refresh"]
}),
$globals.HLSUnitResultStatus);

$core.addMethod(
$core.method({
selector: "printErrors",
protocol: 'printing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($recv($recv(self._result())._errors())._size())._asString()).__comma(" errors, ");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printErrors",{},$globals.HLSUnitResultStatus)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "printErrors\x0a\x09^ self result errors size asString , ' errors, '",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "asString", "size", "errors", "result"]
}),
$globals.HLSUnitResultStatus);

$core.addMethod(
$core.method({
selector: "printFailures",
protocol: 'printing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($recv($recv(self._result())._failures())._size())._asString()).__comma(" failures");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printFailures",{},$globals.HLSUnitResultStatus)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "printFailures\x0a\x09^ self result failures size asString, ' failures'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "asString", "size", "failures", "result"]
}),
$globals.HLSUnitResultStatus);

$core.addMethod(
$core.method({
selector: "printPasses",
protocol: 'printing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $6,$5,$9,$8,$7,$4,$3,$2,$1;
$6=self._result();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["result"]=1;
//>>excludeEnd("ctx");
$5=$recv($6)._runs();
$9=self._result();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["result"]=2;
//>>excludeEnd("ctx");
$8=$recv($9)._errors();
$7=$recv($8)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$4=$recv($5).__minus($7);
$3=$recv($4).__minus($recv($recv(self._result())._failures())._size());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._asString();
$1=$recv($2).__comma(" passes, ");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printPasses",{},$globals.HLSUnitResultStatus)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "printPasses\x0a\x09^ (self result runs - self result errors size - self result failures size) asString , ' passes, '",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "asString", "-", "runs", "result", "size", "errors", "failures"]
}),
$globals.HLSUnitResultStatus);

$core.addMethod(
$core.method({
selector: "printTotal",
protocol: 'printing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($recv(self._result())._total())._asString()).__comma(" runs, ");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printTotal",{},$globals.HLSUnitResultStatus)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "printTotal\x0a\x09^ self result total asString, ' runs, '",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "asString", "total", "result"]
}),
$globals.HLSUnitResultStatus);

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
$recv($1)._class_(self._statusCssClass());
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(html)._span())._with_(self._statusInfo());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},$globals.HLSUnitResultStatus)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderContentOn: html\x0a\x09html div\x0a\x09\x09class: self statusCssClass;\x0a\x09\x09with: [ html span with: self statusInfo ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "statusCssClass", "with:", "span", "statusInfo"]
}),
$globals.HLSUnitResultStatus);

$core.addMethod(
$core.method({
selector: "result",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._model())._testResult();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"result",{},$globals.HLSUnitResultStatus)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "result\x0a\x09^ self model testResult",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["testResult", "model"]
}),
$globals.HLSUnitResultStatus);

$core.addMethod(
$core.method({
selector: "statusCssClass",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1="sunit status ".__comma($recv(self._result())._status());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"statusCssClass",{},$globals.HLSUnitResultStatus)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "statusCssClass\x0a\x09^'sunit status ', self result status",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "status", "result"]
}),
$globals.HLSUnitResultStatus);

$core.addMethod(
$core.method({
selector: "statusInfo",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv($recv(self._printTotal()).__comma(self._printPasses())).__comma(self._printErrors());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__comma(self._printFailures());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"statusInfo",{},$globals.HLSUnitResultStatus)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "statusInfo\x0a\x09^ self printTotal, self printPasses, self printErrors, self printFailures",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "printTotal", "printPasses", "printErrors", "printFailures"]
}),
$globals.HLSUnitResultStatus);

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
$globals.HLSUnitResultStatus.superclass.fn.prototype._unregister.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv($recv(self._model())._announcer())._unsubscribe_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"unregister",{},$globals.HLSUnitResultStatus)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "unregister\x0a\x09super unregister.\x0a\x09self model announcer unsubscribe: self.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["unregister", "unsubscribe:", "announcer", "model"]
}),
$globals.HLSUnitResultStatus);



$core.addClass('HLSUnitResults', $globals.HLWidget, ['model', 'progressBarWidget', 'resultStatusWidget'], 'Helios-SUnit');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLSUnitResults.comment="I am the widget that displays the test results for a previous test run in Helios.\x0a\x0aI display.\x0a\x0a1. The status of the tests.\x0a* Progress of the currently running test suite.";
//>>excludeEnd("ide");
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
source: "model\x0a\x09^model",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLSUnitResults);

$core.addMethod(
$core.method({
selector: "model:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@model"]=anObject;
self._observeModel();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"model:",{anObject:anObject},$globals.HLSUnitResults)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "model: anObject\x0a\x09model := anObject.\x0a\x09self observeModel",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["observeModel"]
}),
$globals.HLSUnitResults);

$core.addMethod(
$core.method({
selector: "observeModel",
protocol: 'initialization',
fn: function (){
var self=this;
function $HLRunTests(){return $globals.HLRunTests||(typeof HLRunTests=="undefined"?nil:HLRunTests)}
function $ResultAnnouncement(){return $globals.ResultAnnouncement||(typeof ResultAnnouncement=="undefined"?nil:ResultAnnouncement)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(self._model())._announcer();
$recv($1)._on_send_to_($HLRunTests(),"onRunTests:",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._on_send_to_($ResultAnnouncement(),"onResultAnnouncement:",self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeModel",{},$globals.HLSUnitResults)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeModel\x0a    self model announcer \x0a\x09\x09on: HLRunTests\x0a\x09\x09send: #onRunTests:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: ResultAnnouncement\x0a\x09\x09send: #onResultAnnouncement:\x0a\x09\x09to: self",
referencedClasses: ["HLRunTests", "ResultAnnouncement"],
//>>excludeEnd("ide");
messageSends: ["on:send:to:", "announcer", "model"]
}),
$globals.HLSUnitResults);

$core.addMethod(
$core.method({
selector: "onResultAnnouncement:",
protocol: 'reacting',
fn: function (announcement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$7,$6,$5,$4,$3,$2;
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=self._progressBarWidget();
$7=self._model();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["model"]=1;
//>>excludeEnd("ctx");
$6=$recv($7)._testResult();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["testResult"]=1;
//>>excludeEnd("ctx");
$5=$recv($6)._runs();
$4=$recv($5).__slash($recv($recv(self._model())._testResult())._total());
$3=$recv($4).__star((100));
$2=$recv($3)._rounded();
return $recv($1)._updateProgress_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._valueWithTimeout_((10));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onResultAnnouncement:",{announcement:announcement},$globals.HLSUnitResults)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["announcement"],
source: "onResultAnnouncement: announcement\x0a\x09[self progressBarWidget \x0a\x09\x09updateProgress: (self model testResult runs / self model testResult total * 100) rounded] valueWithTimeout: 10",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["valueWithTimeout:", "updateProgress:", "progressBarWidget", "rounded", "*", "/", "runs", "testResult", "model", "total"]
}),
$globals.HLSUnitResults);

$core.addMethod(
$core.method({
selector: "onRunTests:",
protocol: 'reacting',
fn: function (announcement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=self._progressBarWidget();
$recv($1)._updateProgress_((0));
$2=$recv($1)._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onRunTests:",{announcement:announcement},$globals.HLSUnitResults)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["announcement"],
source: "onRunTests: announcement\x0a\x09self progressBarWidget updateProgress: 0;\x0a\x09\x09refresh.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["updateProgress:", "progressBarWidget", "refresh"]
}),
$globals.HLSUnitResults);

$core.addMethod(
$core.method({
selector: "progressBarWidget",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLProgressBarWidget(){return $globals.HLProgressBarWidget||(typeof HLProgressBarWidget=="undefined"?nil:HLProgressBarWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$4,$1,$receiver;
$2=self["@progressBarWidget"];
if(($receiver = $2) == null || $receiver.isNil){
$3=$recv($HLProgressBarWidget())._new();
$recv($3)._label_("");
$4=$recv($3)._yourself();
self["@progressBarWidget"]=$4;
$1=self["@progressBarWidget"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"progressBarWidget",{},$globals.HLSUnitResults)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "progressBarWidget\x0a\x09^progressBarWidget ifNil: [progressBarWidget := HLProgressBarWidget new\x0a\x09\x09label: '';\x0a\x09\x09yourself]",
referencedClasses: ["HLProgressBarWidget"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "label:", "new", "yourself"]
}),
$globals.HLSUnitResults);

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
$recv(html)._with_(self._resultStatusWidget());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$1=$recv(html)._with_(self._progressBarWidget());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},$globals.HLSUnitResults)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderContentOn: html\x0a\x09html with: self resultStatusWidget;\x0a\x09\x09with: self progressBarWidget",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "resultStatusWidget", "progressBarWidget"]
}),
$globals.HLSUnitResults);

$core.addMethod(
$core.method({
selector: "resultStatusWidget",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLSUnitResultStatus(){return $globals.HLSUnitResultStatus||(typeof HLSUnitResultStatus=="undefined"?nil:HLSUnitResultStatus)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$4,$1,$receiver;
$2=self["@resultStatusWidget"];
if(($receiver = $2) == null || $receiver.isNil){
$3=$recv($HLSUnitResultStatus())._new();
$recv($3)._model_(self._model());
$4=$recv($3)._yourself();
self["@resultStatusWidget"]=$4;
$1=self["@resultStatusWidget"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"resultStatusWidget",{},$globals.HLSUnitResults)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "resultStatusWidget\x0a\x09^resultStatusWidget ifNil: [resultStatusWidget := HLSUnitResultStatus new\x0a\x09\x09model: self model;\x0a\x09\x09yourself]",
referencedClasses: ["HLSUnitResultStatus"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "model:", "new", "model", "yourself"]
}),
$globals.HLSUnitResults);

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
$globals.HLSUnitResults.superclass.fn.prototype._unregister.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["unregister"]=1;
//>>excludeEnd("ctx");
$recv($recv(self._model())._announcer())._unsubscribe_(self);
$recv(self._resultStatusWidget())._unregister();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"unregister",{},$globals.HLSUnitResults)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "unregister\x0a\x09super unregister.\x0a\x09self model announcer unsubscribe: self.\x0a\x09self resultStatusWidget unregister.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["unregister", "unsubscribe:", "announcer", "model", "resultStatusWidget"]
}),
$globals.HLSUnitResults);


});
