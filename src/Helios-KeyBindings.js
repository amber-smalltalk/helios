define("helios/Helios-KeyBindings", ["amber/boot", "amber_core/Kernel-Objects", "helios/Helios-Core"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Helios-KeyBindings');
$core.packages["Helios-KeyBindings"].transport = {"type":"amd","amdNamespace":"helios"};

$core.addClass('HLBinding', $globals.Object, ['key', 'label'], 'Helios-KeyBindings');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLBinding.comment="I am the abstract representation of a keybinding in Helios. My instances hold a key (integer value) and a label. \x0a\x0aBindings are built into a tree of keys, so pressing a key may result in more key choices (for example, to open a workspace, 'o' is pressed first then 'w' is pressed).\x0a\x0aBinding action handling and selection is handled by the `current` instance of `HLKeyBinder`.\x0a\x0aSubclasses implement specific behavior like evaluating actions or (sub-)grouping other bindings.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "apply",
protocol: 'actions',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "apply",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLBinding);

$core.addMethod(
$core.method({
selector: "atKey:",
protocol: 'accessing',
fn: function (aKey){
var self=this;
return nil;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey"],
source: "atKey: aKey\x0a\x09\x22Answer the sub-binding at key aKey.\x0a\x09Always answer nil here. See HLBindingGroup for more.\x22\x0a\x09\x0a\x09^ nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLBinding);

$core.addMethod(
$core.method({
selector: "displayLabel",
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
}, function($ctx1) {$ctx1.fill(self,"displayLabel",{},$globals.HLBinding)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "displayLabel\x0a\x09^ self label",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["label"]
}),
$globals.HLBinding);

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
$1=self._subclassResponsibility();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isActive",{},$globals.HLBinding)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isActive\x0a\x09^ self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.HLBinding);

$core.addMethod(
$core.method({
selector: "key",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@key"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09^ key",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLBinding);

$core.addMethod(
$core.method({
selector: "key:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
self["@key"]=anInteger;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "key: anInteger\x0a\x09key := anInteger",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLBinding);

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
$globals.HLBinding);

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
$globals.HLBinding);

$core.addMethod(
$core.method({
selector: "release",
protocol: 'actions',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "release",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLBinding);

$core.addMethod(
$core.method({
selector: "renderOn:html:",
protocol: 'rendering',
fn: function (aBindingHelper,html){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBindingHelper", "html"],
source: "renderOn: aBindingHelper html: html",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLBinding);

$core.addMethod(
$core.method({
selector: "shortcut",
protocol: 'accessing',
fn: function (){
var self=this;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($String())._fromCharCode_(self._key());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shortcut",{},$globals.HLBinding)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "shortcut\x0a\x09^ String fromCharCode: self key",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["fromCharCode:", "key"]
}),
$globals.HLBinding);


$core.addMethod(
$core.method({
selector: "on:labelled:",
protocol: 'instance creation',
fn: function (anInteger,aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._key_(anInteger);
$recv($2)._label_(aString);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:labelled:",{anInteger:anInteger,aString:aString},$globals.HLBinding.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger", "aString"],
source: "on: anInteger labelled: aString\x0a\x09^ self new\x0a    \x09key: anInteger;\x0a        label: aString;\x0a        yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["key:", "new", "label:", "yourself"]
}),
$globals.HLBinding.klass);


$core.addClass('HLBindingAction', $globals.HLBinding, ['command'], 'Helios-KeyBindings');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLBindingAction.comment="My instances are the leafs of the binding tree. They evaluate actions through commands, instances of concrete subclasses of `HLCommand`.\x0a\x0aThe `#apply` methods is used to evaluate the `command`. If the command requires user input, an `inputWidget` will be displayed to the user.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "apply",
protocol: 'actions',
fn: function (){
var self=this;
function $HLKeyBinder(){return $globals.HLKeyBinder||(typeof HLKeyBinder=="undefined"?nil:HLKeyBinder)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._command())._isInputRequired();
if($core.assert($1)){
$recv($recv($recv($HLKeyBinder())._current())._helper())._showWidget_(self._inputWidget());
} else {
self._executeCommand();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"apply",{},$globals.HLBindingAction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "apply\x0a\x09self command isInputRequired\x0a\x09\x09ifTrue: [ HLKeyBinder current helper showWidget: self inputWidget ]\x0a\x09\x09ifFalse: [ self executeCommand ]",
referencedClasses: ["HLKeyBinder"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "isInputRequired", "command", "showWidget:", "helper", "current", "inputWidget", "executeCommand"]
}),
$globals.HLBindingAction);

$core.addMethod(
$core.method({
selector: "command",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@command"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "command\x0a\x09^ command",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLBindingAction);

$core.addMethod(
$core.method({
selector: "command:",
protocol: 'accessing',
fn: function (aCommand){
var self=this;
self["@command"]=aCommand;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCommand"],
source: "command: aCommand\x0a\x09command := aCommand",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLBindingAction);

$core.addMethod(
$core.method({
selector: "executeCommand",
protocol: 'actions',
fn: function (){
var self=this;
function $HLKeyBinder(){return $globals.HLKeyBinder||(typeof HLKeyBinder=="undefined"?nil:HLKeyBinder)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._command())._execute();
$recv($recv($HLKeyBinder())._current())._deactivate();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"executeCommand",{},$globals.HLBindingAction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "executeCommand\x0a\x09self command execute.\x0a\x09HLKeyBinder current deactivate",
referencedClasses: ["HLKeyBinder"],
//>>excludeEnd("ide");
messageSends: ["execute", "command", "deactivate", "current"]
}),
$globals.HLBindingAction);

$core.addMethod(
$core.method({
selector: "input:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._command())._input_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"input:",{aString:aString},$globals.HLBindingAction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "input: aString\x0a\x09self command input: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["input:", "command"]
}),
$globals.HLBindingAction);

$core.addMethod(
$core.method({
selector: "inputBinding",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLBindingInput(){return $globals.HLBindingInput||(typeof HLBindingInput=="undefined"?nil:HLBindingInput)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$5,$4,$6,$8,$7,$9,$11,$10,$12,$14,$13,$15,$16,$17,$1;
$2=$recv($HLBindingInput())._new();
$3=$2;
$5=self._command();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["command"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._inputLabel();
$recv($3)._label_($4);
$6=$2;
$8=self._command();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["command"]=2;
//>>excludeEnd("ctx");
$7=$recv($8)._displayLabel();
$recv($6)._ghostText_($7);
$9=$2;
$11=self._command();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["command"]=3;
//>>excludeEnd("ctx");
$10=$recv($11)._defaultInput();
$recv($9)._defaultValue_($10);
$12=$2;
$14=self._command();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["command"]=4;
//>>excludeEnd("ctx");
$13=$recv($14)._inputCompletion();
$recv($12)._inputCompletion_($13);
$recv($2)._callback_((function(val){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$15=self._command();
$recv($15)._input_(val);
$16=$recv($15)._execute();
return $16;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({val:val},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$17=$recv($2)._yourself();
$1=$17;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inputBinding",{},$globals.HLBindingAction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inputBinding\x0a\x09^ HLBindingInput new\x0a\x09\x09label: self command inputLabel;\x0a\x09\x09ghostText: self command displayLabel;\x0a\x09\x09defaultValue: self command defaultInput;\x0a\x09\x09inputCompletion: self command inputCompletion;\x0a\x09\x09callback: [ :val | \x0a\x09\x09\x09self command \x0a\x09\x09\x09\x09input: val;\x0a\x09\x09\x09\x09execute ];\x0a\x09\x09yourself",
referencedClasses: ["HLBindingInput"],
//>>excludeEnd("ide");
messageSends: ["label:", "new", "inputLabel", "command", "ghostText:", "displayLabel", "defaultValue:", "defaultInput", "inputCompletion:", "inputCompletion", "callback:", "input:", "execute", "yourself"]
}),
$globals.HLBindingAction);

$core.addMethod(
$core.method({
selector: "inputWidget",
protocol: 'accessing',
fn: function (){
var self=this;
function $HLBindingActionInputWidget(){return $globals.HLBindingActionInputWidget||(typeof HLBindingActionInputWidget=="undefined"?nil:HLBindingActionInputWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$5,$4,$6,$8,$7,$9,$10,$1;
$2=$recv($HLBindingActionInputWidget())._new();
$3=$2;
$5=self._command();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["command"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._displayLabel();
$recv($3)._ghostText_($4);
$6=$2;
$8=self._command();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["command"]=2;
//>>excludeEnd("ctx");
$7=$recv($8)._defaultInput();
$recv($6)._defaultValue_($7);
$recv($2)._inputCompletion_($recv(self._command())._inputCompletion());
$recv($2)._callback_((function(value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._input_(value);
$9=self._executeCommand();
return $9;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({value:value},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$10=$recv($2)._yourself();
$1=$10;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inputWidget",{},$globals.HLBindingAction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inputWidget\x0a\x09^ HLBindingActionInputWidget new\x0a\x09\x09ghostText: self command displayLabel;\x0a\x09\x09defaultValue: self command defaultInput;\x0a\x09\x09inputCompletion: self command inputCompletion;\x0a\x09\x09callback: [ :value | \x0a\x09\x09\x09self \x0a\x09\x09\x09\x09input: value;\x0a\x09\x09\x09\x09executeCommand ];\x0a\x09\x09yourself",
referencedClasses: ["HLBindingActionInputWidget"],
//>>excludeEnd("ide");
messageSends: ["ghostText:", "new", "displayLabel", "command", "defaultValue:", "defaultInput", "inputCompletion:", "inputCompletion", "callback:", "input:", "executeCommand", "yourself"]
}),
$globals.HLBindingAction);

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
$1=$recv(self._command())._isActive();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isActive",{},$globals.HLBindingAction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isActive\x0a\x09^ self command isActive",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["isActive", "command"]
}),
$globals.HLBindingAction);



$core.addClass('HLBindingGroup', $globals.HLBinding, ['bindings'], 'Helios-KeyBindings');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLBindingGroup.comment="My instances hold other bindings, either actions or groups, and do not have actions by themselves.\x0a\x0aChildren are accessed with `atKey:` and added with the `add*` methods.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "activeBindings",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._bindings())._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._isActive();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"activeBindings",{},$globals.HLBindingGroup)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "activeBindings\x0a\x09^ self bindings select: [ :each | each isActive ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["select:", "bindings", "isActive"]
}),
$globals.HLBindingGroup);

$core.addMethod(
$core.method({
selector: "add:",
protocol: 'adding',
fn: function (aBinding){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._bindings())._add_(aBinding);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"add:",{aBinding:aBinding},$globals.HLBindingGroup)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBinding"],
source: "add: aBinding\x0a\x09^ self bindings add: aBinding",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "bindings"]
}),
$globals.HLBindingGroup);

$core.addMethod(
$core.method({
selector: "addActionKey:labelled:callback:",
protocol: 'adding',
fn: function (anInteger,aString,aBlock){
var self=this;
function $HLBindingAction(){return $globals.HLBindingAction||(typeof HLBindingAction=="undefined"?nil:HLBindingAction)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($HLBindingAction())._on_labelled_(anInteger,aString);
$recv($1)._callback_(aBlock);
$2=$recv($1)._yourself();
self._add_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addActionKey:labelled:callback:",{anInteger:anInteger,aString:aString,aBlock:aBlock},$globals.HLBindingGroup)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger", "aString", "aBlock"],
source: "addActionKey: anInteger labelled: aString callback: aBlock\x0a\x09self add: ((HLBindingAction on: anInteger labelled: aString)\x0a    \x09callback: aBlock;\x0a        yourself)",
referencedClasses: ["HLBindingAction"],
//>>excludeEnd("ide");
messageSends: ["add:", "callback:", "on:labelled:", "yourself"]
}),
$globals.HLBindingGroup);

$core.addMethod(
$core.method({
selector: "addGroupKey:labelled:",
protocol: 'add',
fn: function (anInteger,aString){
var self=this;
function $HLBindingGroup(){return $globals.HLBindingGroup||(typeof HLBindingGroup=="undefined"?nil:HLBindingGroup)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._add_($recv($HLBindingGroup())._on_labelled_(anInteger,aString));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addGroupKey:labelled:",{anInteger:anInteger,aString:aString},$globals.HLBindingGroup)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger", "aString"],
source: "addGroupKey: anInteger labelled: aString\x0a\x09self add: (HLBindingGroup on: anInteger labelled: aString)",
referencedClasses: ["HLBindingGroup"],
//>>excludeEnd("ide");
messageSends: ["add:", "on:labelled:"]
}),
$globals.HLBindingGroup);

$core.addMethod(
$core.method({
selector: "at:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._bindings())._detect_ifNone_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(each)._label()).__eq(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
return nil;

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:",{aString:aString},$globals.HLBindingGroup)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "at: aString\x0a\x09^ self bindings \x0a    \x09detect: [ :each | each label = aString ]\x0a      \x09ifNone: [ nil ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["detect:ifNone:", "bindings", "=", "label"]
}),
$globals.HLBindingGroup);

$core.addMethod(
$core.method({
selector: "at:add:",
protocol: 'accessing',
fn: function (aString,aBinding){
var self=this;
var binding;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$receiver;
binding=self._at_(aString);
$1=binding;
if(($receiver = $1) == null || $receiver.isNil){
return self;
} else {
$1;
};
$recv(binding)._add_(aBinding);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:add:",{aString:aString,aBinding:aBinding,binding:binding},$globals.HLBindingGroup)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aBinding"],
source: "at: aString add: aBinding\x0a\x09| binding |\x0a\x09\x0a\x09binding := self at: aString.\x0a\x09binding ifNil: [ ^ self ].\x0a\x09\x09\x0a\x09binding add: aBinding",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "ifNil:", "add:"]
}),
$globals.HLBindingGroup);

$core.addMethod(
$core.method({
selector: "atKey:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._bindings())._detect_ifNone_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(each)._key()).__eq(anInteger);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
return nil;

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"atKey:",{anInteger:anInteger},$globals.HLBindingGroup)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "atKey: anInteger\x0a\x09^ self bindings \x0a    \x09detect: [ :each | each key = anInteger ]\x0a      \x09ifNone: [ nil ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["detect:ifNone:", "bindings", "=", "key"]
}),
$globals.HLBindingGroup);

$core.addMethod(
$core.method({
selector: "bindings",
protocol: 'accessing',
fn: function (){
var self=this;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@bindings"];
if(($receiver = $2) == null || $receiver.isNil){
self["@bindings"]=$recv($OrderedCollection())._new();
$1=self["@bindings"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bindings",{},$globals.HLBindingGroup)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "bindings\x0a\x09^ bindings ifNil: [ bindings := OrderedCollection new ]",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.HLBindingGroup);

$core.addMethod(
$core.method({
selector: "displayLabel",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.HLBindingGroup.superclass.fn.prototype._displayLabel.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=$recv($2).__comma("...");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"displayLabel",{},$globals.HLBindingGroup)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "displayLabel\x0a\x09^ super displayLabel, '...'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "displayLabel"]
}),
$globals.HLBindingGroup);

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
$1=$recv(self._activeBindings())._notEmpty();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isActive",{},$globals.HLBindingGroup)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isActive\x0a\x09^ self activeBindings notEmpty",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notEmpty", "activeBindings"]
}),
$globals.HLBindingGroup);

$core.addMethod(
$core.method({
selector: "release",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._bindings())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._release();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"release",{},$globals.HLBindingGroup)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "release\x0a\x09self bindings do: [ :each | each release ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "bindings", "release"]
}),
$globals.HLBindingGroup);

$core.addMethod(
$core.method({
selector: "renderOn:html:",
protocol: 'rendering',
fn: function (aBindingHelper,html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._isActive();
if($core.assert($1)){
$recv(aBindingHelper)._renderBindingGroup_on_(self,html);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:html:",{aBindingHelper:aBindingHelper,html:html},$globals.HLBindingGroup)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBindingHelper", "html"],
source: "renderOn: aBindingHelper html: html\x0a\x09self isActive ifTrue: [\x0a\x09\x09aBindingHelper renderBindingGroup: self on: html ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "isActive", "renderBindingGroup:on:"]
}),
$globals.HLBindingGroup);



$core.addClass('HLBindingActionInputWidget', $globals.HLWidget, ['input', 'callback', 'status', 'wrapper', 'ghostText', 'message', 'inputCompletion', 'defaultValue', 'messageTag'], 'Helios-KeyBindings');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLBindingActionInputWidget.comment="My instances are built when a `HLBindingAction` that requires user input is applied.";
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
self["@callback"]=(function(value){

});
$1=self["@callback"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"callback",{},$globals.HLBindingActionInputWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "callback\x0a\x09^ callback ifNil: [ callback := [ :value | ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.HLBindingActionInputWidget);

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
$globals.HLBindingActionInputWidget);

$core.addMethod(
$core.method({
selector: "clearStatus",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._status_("info");
self._message_("");
self._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"clearStatus",{},$globals.HLBindingActionInputWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "clearStatus\x0a\x09self status: 'info'.\x0a\x09self message: ''.\x0a\x09self refresh",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["status:", "message:", "refresh"]
}),
$globals.HLBindingActionInputWidget);

$core.addMethod(
$core.method({
selector: "defaultValue",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@defaultValue"];
if(($receiver = $2) == null || $receiver.isNil){
$1="";
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultValue",{},$globals.HLBindingActionInputWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultValue\x0a\x09^ defaultValue ifNil: [ '' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.HLBindingActionInputWidget);

$core.addMethod(
$core.method({
selector: "defaultValue:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@defaultValue"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "defaultValue: aString\x0a\x09defaultValue := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLBindingActionInputWidget);

$core.addMethod(
$core.method({
selector: "errorStatus",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._status_("error");
self._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"errorStatus",{},$globals.HLBindingActionInputWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "errorStatus\x0a\x09self status: 'error'.\x0a\x09self refresh",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["status:", "refresh"]
}),
$globals.HLBindingActionInputWidget);

$core.addMethod(
$core.method({
selector: "evaluate:",
protocol: 'actions',
fn: function (aString){
var self=this;
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._callback())._value_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._on_do_($Error(),(function(ex){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv($recv(self._input())._asJQuery())._one_do_("keydown",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._clearStatus();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
self._message_($recv(ex)._messageText());
return self._errorStatus();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"evaluate:",{aString:aString},$globals.HLBindingActionInputWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "evaluate: aString\x09\x0a\x09[ self callback value: aString ]\x0a\x09\x09on: Error\x0a\x09\x09do: [ :ex |\x0a\x09\x09\x09self input asJQuery \x0a\x09\x09\x09\x09one: 'keydown' \x0a\x09\x09\x09\x09do: [ self clearStatus ].\x0a\x09\x09\x09self message: ex messageText.\x0a\x09\x09\x09self errorStatus ]",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
messageSends: ["on:do:", "value:", "callback", "one:do:", "asJQuery", "input", "clearStatus", "message:", "messageText", "errorStatus"]
}),
$globals.HLBindingActionInputWidget);

$core.addMethod(
$core.method({
selector: "ghostText",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@ghostText"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ghostText\x0a\x09^ ghostText",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLBindingActionInputWidget);

$core.addMethod(
$core.method({
selector: "ghostText:",
protocol: 'accessing',
fn: function (aText){
var self=this;
self["@ghostText"]=aText;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aText"],
source: "ghostText: aText\x0a\x09ghostText := aText",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLBindingActionInputWidget);

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
$globals.HLBindingActionInputWidget);

$core.addMethod(
$core.method({
selector: "inputCompletion",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@inputCompletion"];
if(($receiver = $2) == null || $receiver.isNil){
$1=[];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inputCompletion",{},$globals.HLBindingActionInputWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inputCompletion\x0a\x09^ inputCompletion ifNil: [ #() ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.HLBindingActionInputWidget);

$core.addMethod(
$core.method({
selector: "inputCompletion:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
self["@inputCompletion"]=aCollection;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "inputCompletion: aCollection\x0a\x09inputCompletion := aCollection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLBindingActionInputWidget);

$core.addMethod(
$core.method({
selector: "message",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@message"];
if(($receiver = $2) == null || $receiver.isNil){
self["@message"]="";
$1=self["@message"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"message",{},$globals.HLBindingActionInputWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "message\x0a\x09^ message ifNil: [ message := '' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.HLBindingActionInputWidget);

$core.addMethod(
$core.method({
selector: "message:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@message"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "message: aString\x0a\x09message := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLBindingActionInputWidget);

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
$1=self["@wrapper"];
if(($receiver = $1) == null || $receiver.isNil){
return self;
} else {
$1;
};
$recv(self["@wrapper"])._class_(self._status());
$recv(self["@messageTag"])._contents_(self._message());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"refresh",{},$globals.HLBindingActionInputWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "refresh\x0a\x09wrapper ifNil: [ ^ self ].\x0a    \x0a\x09wrapper class: self status.\x0a\x09messageTag contents: self message",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "class:", "status", "contents:", "message"]
}),
$globals.HLBindingActionInputWidget);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$4,$6,$8,$10,$9,$7,$5,$11,$12,$13,$3,$14,$15,$receiver;
$1=self["@wrapper"];
if(($receiver = $1) == null || $receiver.isNil){
self["@wrapper"]=$recv(html)._span();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["span"]=1;
//>>excludeEnd("ctx");
self["@wrapper"];
} else {
$1;
};
$2=self["@wrapper"];
$recv($2)._class_(self._status());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$3=$recv($2)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=$recv(html)._input();
$recv($4)._placeholder_(self._ghostText());
$recv($4)._value_(self._defaultValue());
$6=$4;
$7=$recv((function(event){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$8=$recv($recv(event)._which()).__eq((13));
if($core.assert($8)){
$10=$recv(self["@input"])._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$9=$recv($10)._val();
return self._evaluate_($9);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({event:event},$ctx2,3)});
//>>excludeEnd("ctx");
}))._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
$5=$recv($6)._onKeyDown_($7);
self["@input"]=$5;
self["@input"];
$11=$recv(self["@input"])._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asJQuery"]=2;
//>>excludeEnd("ctx");
$recv($11)._typeahead_($globals.HashedCollection._newFromPairs_(["source",self._inputCompletion()]));
$12=$recv(html)._span();
$recv($12)._class_("help-inline");
$recv($12)._with_(self._message());
$13=$recv($12)._yourself();
self["@messageTag"]=$13;
return self["@messageTag"];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$14=$recv(self["@input"])._asJQuery();
$recv($14)._focus();
$15=$recv($14)._select();
return $15;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)});
//>>excludeEnd("ctx");
}))._valueWithTimeout_((10));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.HLBindingActionInputWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09wrapper ifNil: [ wrapper := html span ].\x0a\x0a\x09wrapper \x0a\x09\x09class: self status;\x0a\x09\x09with: [\x0a\x09\x09\x09input := html input\x0a\x09\x09\x09\x09placeholder: self ghostText;\x0a\x09\x09\x09\x09value: self defaultValue;\x0a\x09\x09\x09\x09onKeyDown: [ :event | \x0a\x09\x09\x09\x09\x09event which = 13 ifTrue: [\x0a\x09\x09\x09\x09\x09\x09self evaluate: input asJQuery val ] ]\x0a\x09\x09\x09\x09yourself.\x0a\x09\x09\x09input asJQuery \x0a\x09\x09\x09\x09typeahead: #{ 'source' -> self inputCompletion }.\x0a\x09\x09\x09messageTag := (html span\x0a\x09\x09\x09\x09class: 'help-inline';\x0a\x09\x09\x09\x09with: self message;\x0a\x09\x09\x09\x09yourself) ].\x0a\x09\x0a\x09\x22Evaluate with a timeout to ensure focus.\x0a\x09Commands can be executed from a menu, clicking on the menu to\x0a\x09evaluate the command would give it the focus otherwise\x22\x0a\x09\x0a\x09[ input asJQuery focus; select ] valueWithTimeout: 10",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "span", "class:", "status", "with:", "placeholder:", "input", "ghostText", "value:", "defaultValue", "onKeyDown:", "yourself", "ifTrue:", "=", "which", "evaluate:", "val", "asJQuery", "typeahead:", "inputCompletion", "message", "valueWithTimeout:", "focus", "select"]
}),
$globals.HLBindingActionInputWidget);

$core.addMethod(
$core.method({
selector: "status",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@status"];
if(($receiver = $2) == null || $receiver.isNil){
self["@status"]="info";
$1=self["@status"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"status",{},$globals.HLBindingActionInputWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "status\x0a\x09^ status ifNil: [ status := 'info' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.HLBindingActionInputWidget);

$core.addMethod(
$core.method({
selector: "status:",
protocol: 'accessing',
fn: function (aStatus){
var self=this;
self["@status"]=aStatus;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStatus"],
source: "status: aStatus\x0a\x09status := aStatus",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLBindingActionInputWidget);



$core.addClass('HLKeyBinder', $globals.Object, ['modifierKey', 'helper', 'bindings', 'selectedBinding'], 'Helios-KeyBindings');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLKeyBinder.comment="My `current` instance holds keybindings for Helios actions and evaluate them.\x0a\x0aBindings can be nested by groups. The `bindings` instance variable holds the root of the key bindings tree.\x0a\x0aBindings are instances of a concrete subclass of `HLBinding`.\x0a\x0aI am always either in 'active' or 'inactive' state. In active state I capture key down events and my `helper` widget is displayed at the bottom of the window. My `selectedBinding`, if any, is displayed by the helper.\x0a\x0aBindings are evaluated through `applyBinding:`. If a binding is final (not a group of other bindings), evaluating it will result in deactivating the binder, and hiding the `helper` widget.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "activate",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._helper())._show();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"activate",{},$globals.HLKeyBinder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "activate\x0a\x09self helper show",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["show", "helper"]
}),
$globals.HLKeyBinder);

$core.addMethod(
$core.method({
selector: "activationKey",
protocol: 'accessing',
fn: function (){
var self=this;
return (32);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "activationKey\x0a\x09\x22SPACE\x22\x0a\x09^ 32",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLKeyBinder);

$core.addMethod(
$core.method({
selector: "activationKeyLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "ctrl + space";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "activationKeyLabel\x0a\x09^ 'ctrl + space'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLKeyBinder);

$core.addMethod(
$core.method({
selector: "applyBinding:",
protocol: 'actions',
fn: function (aBinding){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aBinding)._isActive();
if(!$core.assert($1)){
return self;
};
self._selectBinding_(aBinding);
$recv(aBinding)._apply();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"applyBinding:",{aBinding:aBinding},$globals.HLKeyBinder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBinding"],
source: "applyBinding: aBinding\x0a\x09aBinding isActive ifFalse: [ ^ self ].\x0a\x09\x0a\x09self selectBinding: aBinding.\x0a    aBinding apply",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "isActive", "selectBinding:", "apply"]
}),
$globals.HLKeyBinder);

$core.addMethod(
$core.method({
selector: "bindings",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@bindings"];
if(($receiver = $2) == null || $receiver.isNil){
self["@bindings"]=self._defaultBindings();
$1=self["@bindings"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bindings",{},$globals.HLKeyBinder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "bindings\x0a\x09^ bindings ifNil: [ bindings := self defaultBindings ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "defaultBindings"]
}),
$globals.HLKeyBinder);

$core.addMethod(
$core.method({
selector: "deactivate",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@selectedBinding"];
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$recv(self["@selectedBinding"])._release();
};
self["@selectedBinding"]=nil;
$recv(self._helper())._hide();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deactivate",{},$globals.HLKeyBinder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "deactivate\x0a\x09selectedBinding ifNotNil: [ selectedBinding release ].\x0a    selectedBinding := nil.\x0a\x09self helper hide",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "release", "hide", "helper"]
}),
$globals.HLKeyBinder);

$core.addMethod(
$core.method({
selector: "defaultBindings",
protocol: 'defaults',
fn: function (){
var self=this;
var group;
function $HLBindingGroup(){return $globals.HLBindingGroup||(typeof HLBindingGroup=="undefined"?nil:HLBindingGroup)}
function $HLCloseTabCommand(){return $globals.HLCloseTabCommand||(typeof HLCloseTabCommand=="undefined"?nil:HLCloseTabCommand)}
function $HLSwitchTabCommand(){return $globals.HLSwitchTabCommand||(typeof HLSwitchTabCommand=="undefined"?nil:HLSwitchTabCommand)}
function $HLOpenCommand(){return $globals.HLOpenCommand||(typeof HLOpenCommand=="undefined"?nil:HLOpenCommand)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$4,$3,$5,$6;
$1=$recv($HLBindingGroup())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$2=$1;
$4=$recv($HLCloseTabCommand())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
$3=$recv($4)._asBinding();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asBinding"]=1;
//>>excludeEnd("ctx");
$recv($2)._add_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
$recv($1)._add_($recv($recv($HLSwitchTabCommand())._new())._asBinding());
$5=$recv($1)._yourself();
group=$5;
$recv($HLOpenCommand())._registerConcreteClassesOn_(group);
$6=group;
return $6;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultBindings",{group:group},$globals.HLKeyBinder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultBindings\x0a\x09| group |\x0a\x09\x0a\x09group := HLBindingGroup new\x0a\x09\x09add: HLCloseTabCommand new asBinding;\x0a\x09\x09add: HLSwitchTabCommand new asBinding;\x0a\x09\x09yourself.\x0a\x09\x09\x0a\x09HLOpenCommand registerConcreteClassesOn: group.\x0a\x09\x09\x09\x09\x0a\x09^ group",
referencedClasses: ["HLBindingGroup", "HLCloseTabCommand", "HLSwitchTabCommand", "HLOpenCommand"],
//>>excludeEnd("ide");
messageSends: ["add:", "new", "asBinding", "yourself", "registerConcreteClassesOn:"]
}),
$globals.HLKeyBinder);

$core.addMethod(
$core.method({
selector: "escapeKey",
protocol: 'accessing',
fn: function (){
var self=this;
return (27);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "escapeKey\x0a\x09\x22ESC\x22\x0a\x09^ 27",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLKeyBinder);

$core.addMethod(
$core.method({
selector: "flushBindings",
protocol: 'actions',
fn: function (){
var self=this;
self["@bindings"]=nil;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "flushBindings\x0a\x09bindings := nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLKeyBinder);

$core.addMethod(
$core.method({
selector: "handleActiveKeyDown:",
protocol: 'events',
fn: function (event){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$6,$5,$4,$1,$7;
$3=$recv(event)._which();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["which"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__eq(self._escapeKey());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$6=$recv(event)._which();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["which"]=2;
//>>excludeEnd("ctx");
$5=$recv($6).__eq((71));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=2;
//>>excludeEnd("ctx");
$4=$recv($5)._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(event)._which()).__eq(self._activationKey());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
return $recv($4)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(event)._ctrlKey();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["or:"]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
self._deactivate();
$recv(event)._preventDefault();
return false;
};
$7=self._handleBindingFor_(event);
return $7;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleActiveKeyDown:",{event:event},$globals.HLKeyBinder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["event"],
source: "handleActiveKeyDown: event\x0a\x0a\x09\x22ESC, ctrl+g ctrl+space deactivate the keyBinder\x22\x0a\x09(event which = self escapeKey or: [\x0a\x09\x09(event which = 71 or: [ event which = self activationKey ]) \x0a\x09\x09\x09and: [ event ctrlKey ] ])\x0a        \x09\x09ifTrue: [ \x0a           \x09\x09\x09self deactivate.\x0a\x09\x09\x09\x09\x09event preventDefault.\x0a\x09\x09\x09\x09\x09^ false ].\x0a            \x0a    \x22Handle the keybinding\x22\x0a    ^ self handleBindingFor: event",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "or:", "=", "which", "escapeKey", "and:", "activationKey", "ctrlKey", "deactivate", "preventDefault", "handleBindingFor:"]
}),
$globals.HLKeyBinder);

$core.addMethod(
$core.method({
selector: "handleBindingFor:",
protocol: 'events',
fn: function (anEvent){
var self=this;
var binding;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$receiver;
binding=$recv(self._selectedBinding())._atKey_($recv(anEvent)._which());
$1=binding;
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
self._applyBinding_(binding);
$recv(anEvent)._preventDefault();
return false;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleBindingFor:",{anEvent:anEvent,binding:binding},$globals.HLKeyBinder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anEvent"],
source: "handleBindingFor: anEvent\x0a\x09| binding |\x0a    binding := self selectedBinding atKey: anEvent which.\x0a    \x0a    binding ifNotNil: [ \x0a    \x09self applyBinding: binding.\x0a\x09\x09anEvent preventDefault.\x0a\x09\x09^ false ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["atKey:", "selectedBinding", "which", "ifNotNil:", "applyBinding:", "preventDefault"]
}),
$globals.HLKeyBinder);

$core.addMethod(
$core.method({
selector: "handleInactiveKeyDown:",
protocol: 'events',
fn: function (event){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($recv(event)._which()).__eq(self._activationKey());
if($core.assert($1)){
$2=$recv(event)._ctrlKey();
if($core.assert($2)){
self._activate();
$recv(event)._preventDefault();
return false;
};
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleInactiveKeyDown:",{event:event},$globals.HLKeyBinder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["event"],
source: "handleInactiveKeyDown: event\x0a\x09event which = self activationKey ifTrue: [\x0a    \x09event ctrlKey ifTrue: [\x0a\x09\x09\x09self activate. \x0a            event preventDefault. \x0a            ^ false ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "=", "which", "activationKey", "ctrlKey", "activate", "preventDefault"]
}),
$globals.HLKeyBinder);

$core.addMethod(
$core.method({
selector: "handleKeyDown:",
protocol: 'events',
fn: function (event){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=self._isActive();
if($core.assert($2)){
$1=self._handleActiveKeyDown_(event);
} else {
$1=self._handleInactiveKeyDown_(event);
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleKeyDown:",{event:event},$globals.HLKeyBinder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["event"],
source: "handleKeyDown: event\x0a\x09^ self isActive\x0a    \x09ifTrue: [ self handleActiveKeyDown: event ]\x0a      \x09ifFalse: [ self handleInactiveKeyDown: event ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "isActive", "handleActiveKeyDown:", "handleInactiveKeyDown:"]
}),
$globals.HLKeyBinder);

$core.addMethod(
$core.method({
selector: "helper",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@helper"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "helper\x0a\x09^ helper",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLKeyBinder);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $HLKeyBinderHelperWidget(){return $globals.HLKeyBinderHelperWidget||(typeof HLKeyBinderHelperWidget=="undefined"?nil:HLKeyBinderHelperWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.HLKeyBinder.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@helper"]=$recv($HLKeyBinderHelperWidget())._on_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.HLKeyBinder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09helper := HLKeyBinderHelperWidget on: self",
referencedClasses: ["HLKeyBinderHelperWidget"],
//>>excludeEnd("ide");
messageSends: ["initialize", "on:"]
}),
$globals.HLKeyBinder);

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
$1=$recv($recv(".".__comma($recv(self._helper())._cssClass()))._asJQuery())._is_(":visible");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isActive",{},$globals.HLKeyBinder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isActive\x0a\x09^ ('.', self helper cssClass) asJQuery is: ':visible'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["is:", "asJQuery", ",", "cssClass", "helper"]
}),
$globals.HLKeyBinder);

$core.addMethod(
$core.method({
selector: "selectBinding:",
protocol: 'actions',
fn: function (aBinding){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aBinding).__eq(self["@selectedBinding"]);
if($core.assert($1)){
return self;
};
self["@selectedBinding"]=aBinding;
$recv(self._helper())._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectBinding:",{aBinding:aBinding},$globals.HLKeyBinder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBinding"],
source: "selectBinding: aBinding\x0a\x09aBinding = selectedBinding ifTrue: [ ^ self ].\x0a\x09\x0a\x09selectedBinding := aBinding.\x0a\x09self helper refresh",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "=", "refresh", "helper"]
}),
$globals.HLKeyBinder);

$core.addMethod(
$core.method({
selector: "selectedBinding",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@selectedBinding"];
if(($receiver = $2) == null || $receiver.isNil){
$1=self._bindings();
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectedBinding",{},$globals.HLKeyBinder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selectedBinding\x0a\x09^ selectedBinding ifNil: [ self bindings ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "bindings"]
}),
$globals.HLKeyBinder);

$core.addMethod(
$core.method({
selector: "setupEvents",
protocol: 'events',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv("body"._asJQuery())._keydown_((function(event){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._handleKeyDown_(event);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupEvents",{},$globals.HLKeyBinder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupEvents\x0a\x09'body' asJQuery keydown: [ :event | self handleKeyDown: event ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["keydown:", "asJQuery", "handleKeyDown:"]
}),
$globals.HLKeyBinder);

$core.addMethod(
$core.method({
selector: "systemIsMac",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(navigator)._platform())._match_("Mac");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"systemIsMac",{},$globals.HLKeyBinder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "systemIsMac\x0a\x09^ navigator platform match: 'Mac'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["match:", "platform"]
}),
$globals.HLKeyBinder);


$globals.HLKeyBinder.klass.iVarNames = ['current'];
$core.addMethod(
$core.method({
selector: "current",
protocol: 'instance creation',
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
$globals.HLKeyBinder.klass.superclass.fn.prototype._new.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=self["@current"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"current",{},$globals.HLKeyBinder.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "current\x0a\x09^ current ifNil: [ current := super new ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.HLKeyBinder.klass);

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
}, function($ctx1) {$ctx1.fill(self,"new",{},$globals.HLKeyBinder.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "new\x0a\x09self shouldNotImplement",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["shouldNotImplement"]
}),
$globals.HLKeyBinder.klass);


$core.addClass('HLKeyBinderHelperWidget', $globals.HLWidget, ['keyBinder'], 'Helios-KeyBindings');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLKeyBinderHelperWidget.comment="I am the widget responsible for displaying active keybindings in a bar at the bottom of the window. Each keybinding is an instance of `HLBinding`. \x0a\x0aRendering is done through a double dispatch, see `#renderSelectedBindingOn:`.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "key_helper";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cssClass\x0a\x09^ 'key_helper'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLKeyBinderHelperWidget);

$core.addMethod(
$core.method({
selector: "deactivate",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._keyBinder())._deactivate();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deactivate",{},$globals.HLKeyBinderHelperWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "deactivate\x0a\x09self keyBinder deactivate",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["deactivate", "keyBinder"]
}),
$globals.HLKeyBinderHelperWidget);

$core.addMethod(
$core.method({
selector: "hide",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(".".__comma(self._cssClass()))._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($1)._remove();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["remove"]=1;
//>>excludeEnd("ctx");
$recv(".helper_overlay"._asJQuery())._remove();
self._showCog();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hide",{},$globals.HLKeyBinderHelperWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hide\x0a\x09('.', self cssClass) asJQuery remove.\x0a\x09'.helper_overlay' asJQuery remove.\x0a\x09self showCog",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove", "asJQuery", ",", "cssClass", "showCog"]
}),
$globals.HLKeyBinderHelperWidget);

$core.addMethod(
$core.method({
selector: "hideCog",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv("#cog-helper"._asJQuery())._hide();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hideCog",{},$globals.HLKeyBinderHelperWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hideCog\x0a\x09'#cog-helper' asJQuery hide",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["hide", "asJQuery"]
}),
$globals.HLKeyBinderHelperWidget);

$core.addMethod(
$core.method({
selector: "keyBinder",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@keyBinder"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "keyBinder\x0a\x09^ keyBinder",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLKeyBinderHelperWidget);

$core.addMethod(
$core.method({
selector: "keyBinder:",
protocol: 'accessing',
fn: function (aKeyBinder){
var self=this;
self["@keyBinder"]=aKeyBinder;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKeyBinder"],
source: "keyBinder: aKeyBinder\x0a\x09keyBinder := aKeyBinder",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLKeyBinderHelperWidget);

$core.addMethod(
$core.method({
selector: "mainId",
protocol: 'accessing',
fn: function (){
var self=this;
return "binding-helper-main";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "mainId\x0a\x09^ 'binding-helper-main'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLKeyBinderHelperWidget);

$core.addMethod(
$core.method({
selector: "renderBindingActionFor:on:",
protocol: 'rendering',
fn: function (aBinding,html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$4,$5,$6,$2;
$1=$recv(html)._span();
$recv($1)._class_("command");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._strong();
$recv($3)._class_("label");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=2;
//>>excludeEnd("ctx");
$4=$recv($3)._with_($recv($recv(aBinding)._shortcut())._asLowercase());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$4;
$5=$recv(html)._a();
$recv($5)._class_("action");
$recv($5)._with_($recv(aBinding)._displayLabel());
$6=$recv($5)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(self._keyBinder())._applyBinding_(aBinding);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
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
}, function($ctx1) {$ctx1.fill(self,"renderBindingActionFor:on:",{aBinding:aBinding,html:html},$globals.HLKeyBinderHelperWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBinding", "html"],
source: "renderBindingActionFor: aBinding on: html\x0a\x09html span class: 'command'; with: [\x0a\x09\x09html strong \x0a\x09\x09\x09class: 'label'; \x0a\x09\x09\x09with: aBinding shortcut asLowercase.\x0a  \x09\x09html a \x0a        \x09class: 'action'; \x0a            with: aBinding displayLabel;\x0a  \x09\x09\x09onClick: [ self keyBinder applyBinding: aBinding ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "span", "with:", "strong", "asLowercase", "shortcut", "a", "displayLabel", "onClick:", "applyBinding:", "keyBinder"]
}),
$globals.HLKeyBinderHelperWidget);

$core.addMethod(
$core.method({
selector: "renderBindingGroup:on:",
protocol: 'rendering',
fn: function (aBindingGroup,html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$recv($recv($recv(aBindingGroup)._activeBindings())._sorted_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(a)._key();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["key"]=1;
//>>excludeEnd("ctx");
return $recv($1).__lt($recv(b)._key());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,1)});
//>>excludeEnd("ctx");
})))._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._renderBindingActionFor_on_(each,html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderBindingGroup:on:",{aBindingGroup:aBindingGroup,html:html},$globals.HLKeyBinderHelperWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBindingGroup", "html"],
source: "renderBindingGroup: aBindingGroup on: html\x0a\x09(aBindingGroup activeBindings \x0a    \x09sorted: [ :a :b | a key < b key ])\x0a        do: [ :each | self renderBindingActionFor: each on: html ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "sorted:", "activeBindings", "<", "key", "renderBindingActionFor:on:"]
}),
$globals.HLKeyBinderHelperWidget);

$core.addMethod(
$core.method({
selector: "renderCloseOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._a();
$recv($1)._class_("close");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(html)._tag_("i"))._class_("icon-remove");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._keyBinder())._deactivate();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderCloseOn:",{html:html},$globals.HLKeyBinderHelperWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderCloseOn: html\x0a\x09html a\x0a\x09\x09class: 'close';\x0a\x09\x09with: [ (html tag: 'i') class: 'icon-remove' ];\x0a\x09\x09onClick: [ self keyBinder deactivate ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "a", "with:", "tag:", "onClick:", "deactivate", "keyBinder"]
}),
$globals.HLKeyBinderHelperWidget);

$core.addMethod(
$core.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$5,$6,$4;
$1=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["div"]=1;
//>>excludeEnd("ctx");
$recv($1)._id_("overlay");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["id:"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_("helper_overlay");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._deactivate();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$3=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["div"]=2;
//>>excludeEnd("ctx");
$recv($3)._class_(self._cssClass());
$4=$recv($3)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._renderLabelOn_(html);
$5=$recv(html)._div();
$recv($5)._id_(self._mainId());
$6=$recv($5)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._renderSelectedBindingOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
$6;
return self._renderCloseOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$recv(":focus"._asJQuery())._blur();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},$globals.HLKeyBinderHelperWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderContentOn: html\x0a\x09html div \x0a\x09\x09id: 'overlay';\x0a\x09\x09class: 'helper_overlay';\x0a\x09\x09onClick: [ self deactivate ].\x0a\x09\x0a\x09html div class: self cssClass; with: [\x0a      \x09self renderLabelOn: html.\x0a\x09\x09html div\x0a\x09\x09\x09id: self mainId;\x0a\x09\x09\x09with: [ self renderSelectedBindingOn: html ].\x0a\x09\x09self renderCloseOn: html ].\x0a\x09\x09\x0a\x09':focus' asJQuery blur",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["id:", "div", "class:", "onClick:", "deactivate", "cssClass", "with:", "renderLabelOn:", "mainId", "renderSelectedBindingOn:", "renderCloseOn:", "blur", "asJQuery"]
}),
$globals.HLKeyBinderHelperWidget);

$core.addMethod(
$core.method({
selector: "renderLabelOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$5,$4,$2,$receiver;
$1=$recv(html)._span();
$recv($1)._class_("selected");
$3=$1;
$5=$recv(self._selectedBinding())._label();
if(($receiver = $5) == null || $receiver.isNil){
$4="Action";
} else {
$4=$5;
};
$2=$recv($3)._with_($4);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderLabelOn:",{html:html},$globals.HLKeyBinderHelperWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderLabelOn: html\x0a\x09\x09html span \x0a        \x09class: 'selected'; \x0a            with: (self selectedBinding label ifNil: [ 'Action' ])",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "span", "with:", "ifNil:", "label", "selectedBinding"]
}),
$globals.HLKeyBinderHelperWidget);

$core.addMethod(
$core.method({
selector: "renderSelectedBindingOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._selectedBinding())._renderOn_html_(self,html);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderSelectedBindingOn:",{html:html},$globals.HLKeyBinderHelperWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderSelectedBindingOn: html\x0a\x09self selectedBinding renderOn: self html: html",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["renderOn:html:", "selectedBinding"]
}),
$globals.HLKeyBinderHelperWidget);

$core.addMethod(
$core.method({
selector: "selectedBinding",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._keyBinder())._selectedBinding();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectedBinding",{},$globals.HLKeyBinderHelperWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selectedBinding\x0a\x09^ self keyBinder selectedBinding",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selectedBinding", "keyBinder"]
}),
$globals.HLKeyBinderHelperWidget);

$core.addMethod(
$core.method({
selector: "show",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._hideCog();
self._appendToJQuery_("body"._asJQuery());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"show",{},$globals.HLKeyBinderHelperWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "show\x0a\x09self hideCog.\x0a\x09self appendToJQuery: 'body' asJQuery",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["hideCog", "appendToJQuery:", "asJQuery"]
}),
$globals.HLKeyBinderHelperWidget);

$core.addMethod(
$core.method({
selector: "showCog",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv("#cog-helper"._asJQuery())._show();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showCog",{},$globals.HLKeyBinderHelperWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "showCog\x0a\x09'#cog-helper' asJQuery show",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["show", "asJQuery"]
}),
$globals.HLKeyBinderHelperWidget);

$core.addMethod(
$core.method({
selector: "showWidget:",
protocol: 'actions',
fn: function (aWidget){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$1;
$3=self._mainId();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["mainId"]=1;
//>>excludeEnd("ctx");
$2="#".__comma($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($1)._empty();
$recv(aWidget)._appendToJQuery_($recv("#".__comma(self._mainId()))._asJQuery());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showWidget:",{aWidget:aWidget},$globals.HLKeyBinderHelperWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aWidget"],
source: "showWidget: aWidget\x0a\x09\x22Some actions need to display more info to the user or request input.\x0a\x09This method is the right place for that\x22\x0a\x09\x0a\x09('#', self mainId) asJQuery empty.\x0a\x09aWidget appendToJQuery: ('#', self mainId) asJQuery",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["empty", "asJQuery", ",", "mainId", "appendToJQuery:"]
}),
$globals.HLKeyBinderHelperWidget);


$core.addMethod(
$core.method({
selector: "on:",
protocol: 'instance creation',
fn: function (aKeyBinder){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._keyBinder_(aKeyBinder);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aKeyBinder:aKeyBinder},$globals.HLKeyBinderHelperWidget.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKeyBinder"],
source: "on: aKeyBinder\x0a\x09^ self new\x0a    \x09keyBinder: aKeyBinder;\x0a        yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["keyBinder:", "new", "yourself"]
}),
$globals.HLKeyBinderHelperWidget.klass);


$core.addClass('HLRepeatedKeyDownHandler', $globals.Object, ['repeatInterval', 'delay', 'interval', 'keyBindings', 'widget', 'keyDown'], 'Helios-KeyBindings');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLRepeatedKeyDownHandler.comment="I am responsible for handling repeated key down actions for widgets.\x0a\x0a##Usage\x0a\x0a    (self on: aWidget)\x0a        whileKeyDown: 38 do: aBlock;\x0a        whileKeyDown: 40 do: anotherBlock;\x0a        bindKeys\x0a\x0aI perform an action block on a key press, wait for 300 ms and then preform the same action block every `repeatInterval` milliseconds until the key is released.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "bindKeys",
protocol: 'binding',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._widget())._bindKeyDown_keyUp_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._handleKeyDown_(e);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._handleKeyUp();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bindKeys",{},$globals.HLRepeatedKeyDownHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "bindKeys\x0a\x09self widget \x0a\x09\x09bindKeyDown: [ :e | self handleKeyDown: e ] \x0a\x09\x09keyUp: [ :e | self handleKeyUp ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["bindKeyDown:keyUp:", "widget", "handleKeyDown:", "handleKeyUp"]
}),
$globals.HLRepeatedKeyDownHandler);

$core.addMethod(
$core.method({
selector: "defaultRepeatInterval",
protocol: 'defaults',
fn: function (){
var self=this;
return (70);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultRepeatInterval\x0a\x09^ 70",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLRepeatedKeyDownHandler);

$core.addMethod(
$core.method({
selector: "handleEvent:forKey:action:",
protocol: 'events handling',
fn: function (anEvent,anInteger,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($recv(anEvent)._which()).__eq(anInteger))._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._isKeyDown())._not();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if($core.assert($1)){
self._whileKeyDownDo_(aBlock);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleEvent:forKey:action:",{anEvent:anEvent,anInteger:anInteger,aBlock:aBlock},$globals.HLRepeatedKeyDownHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anEvent", "anInteger", "aBlock"],
source: "handleEvent: anEvent forKey: anInteger action: aBlock\x0a\x09(anEvent which = anInteger and: [ self isKeyDown not ])\x0a\x09\x09ifTrue: [ self whileKeyDownDo: aBlock ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "and:", "=", "which", "not", "isKeyDown", "whileKeyDownDo:"]
}),
$globals.HLRepeatedKeyDownHandler);

$core.addMethod(
$core.method({
selector: "handleKeyDown:",
protocol: 'events handling',
fn: function (anEvent){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._keyBindings())._keysAndValuesDo_((function(key,action){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._handleEvent_forKey_action_(anEvent,key,action);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({key:key,action:action},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleKeyDown:",{anEvent:anEvent},$globals.HLRepeatedKeyDownHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anEvent"],
source: "handleKeyDown: anEvent\x0a\x09self keyBindings keysAndValuesDo: [ :key :action | \x0a\x09\x09self handleEvent: anEvent forKey: key action: action ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["keysAndValuesDo:", "keyBindings", "handleEvent:forKey:action:"]
}),
$globals.HLRepeatedKeyDownHandler);

$core.addMethod(
$core.method({
selector: "handleKeyUp",
protocol: 'events handling',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$receiver;
$1=self._isKeyDown();
if($core.assert($1)){
self["@keyDown"]=false;
self["@keyDown"];
$2=self["@interval"];
if(($receiver = $2) == null || $receiver.isNil){
$2;
} else {
$recv(self["@interval"])._clearInterval();
};
$3=self["@delay"];
if(($receiver = $3) == null || $receiver.isNil){
$3;
} else {
$recv(self["@delay"])._clearTimeout();
};
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleKeyUp",{},$globals.HLRepeatedKeyDownHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "handleKeyUp\x0a\x09self isKeyDown ifTrue: [\x0a\x09\x09keyDown := false.\x0a\x09\x09interval ifNotNil: [ interval clearInterval ].\x0a\x09\x09delay ifNotNil: [ delay clearTimeout ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "isKeyDown", "ifNotNil:", "clearInterval", "clearTimeout"]
}),
$globals.HLRepeatedKeyDownHandler);

$core.addMethod(
$core.method({
selector: "isKeyDown",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@keyDown"];
if(($receiver = $2) == null || $receiver.isNil){
$1=false;
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isKeyDown",{},$globals.HLRepeatedKeyDownHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isKeyDown\x0a\x09^ keyDown ifNil: [ false ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.HLRepeatedKeyDownHandler);

$core.addMethod(
$core.method({
selector: "keyBindings",
protocol: 'accessing',
fn: function (){
var self=this;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@keyBindings"];
if(($receiver = $2) == null || $receiver.isNil){
self["@keyBindings"]=$recv($Dictionary())._new();
$1=self["@keyBindings"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"keyBindings",{},$globals.HLRepeatedKeyDownHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "keyBindings\x0a\x09^ keyBindings ifNil: [ keyBindings := Dictionary new ]",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.HLRepeatedKeyDownHandler);

$core.addMethod(
$core.method({
selector: "rebindKeys",
protocol: 'binding',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._unbindKeys();
$1=self._bindKeys();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rebindKeys",{},$globals.HLRepeatedKeyDownHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "rebindKeys\x0a\x09self \x0a\x09\x09unbindKeys;\x0a\x09\x09bindKeys",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["unbindKeys", "bindKeys"]
}),
$globals.HLRepeatedKeyDownHandler);

$core.addMethod(
$core.method({
selector: "repeatInterval",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@repeatInterval"];
if(($receiver = $2) == null || $receiver.isNil){
$1=self._defaultRepeatInterval();
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"repeatInterval",{},$globals.HLRepeatedKeyDownHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "repeatInterval\x0a\x09^ repeatInterval ifNil: [ self defaultRepeatInterval ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "defaultRepeatInterval"]
}),
$globals.HLRepeatedKeyDownHandler);

$core.addMethod(
$core.method({
selector: "repeatInterval:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
self["@repeatInterval"]=anInteger;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "repeatInterval: anInteger\x0a\x09repeatInterval := anInteger",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLRepeatedKeyDownHandler);

$core.addMethod(
$core.method({
selector: "startRepeatingAction:",
protocol: 'actions',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$1=$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(self._widget())._hasFocus();
if($core.assert($2)){
return $recv(aBlock)._value();
} else {
return self._handleKeyUp();
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._valueWithInterval_(self._repeatInterval());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"startRepeatingAction:",{aBlock:aBlock},$globals.HLRepeatedKeyDownHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "startRepeatingAction: aBlock\x0a\x09^ [ (self widget hasFocus)\x0a\x09\x09ifTrue: [ aBlock value ]\x0a\x09\x09ifFalse: [ self handleKeyUp ] ] valueWithInterval: self repeatInterval",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["valueWithInterval:", "ifTrue:ifFalse:", "hasFocus", "widget", "value", "handleKeyUp", "repeatInterval"]
}),
$globals.HLRepeatedKeyDownHandler);

$core.addMethod(
$core.method({
selector: "unbindKeys",
protocol: 'binding',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._widget())._unbindKeyDownKeyUp();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"unbindKeys",{},$globals.HLRepeatedKeyDownHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "unbindKeys\x0a\x09self widget unbindKeyDownKeyUp",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["unbindKeyDownKeyUp", "widget"]
}),
$globals.HLRepeatedKeyDownHandler);

$core.addMethod(
$core.method({
selector: "whileKeyDown:do:",
protocol: 'actions',
fn: function (aKey,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._keyBindings())._at_put_(aKey,aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"whileKeyDown:do:",{aKey:aKey,aBlock:aBlock},$globals.HLRepeatedKeyDownHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aBlock"],
source: "whileKeyDown: aKey do: aBlock\x0a\x09self keyBindings at: aKey put: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "keyBindings"]
}),
$globals.HLRepeatedKeyDownHandler);

$core.addMethod(
$core.method({
selector: "whileKeyDownDo:",
protocol: 'events handling',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@keyDown"]=true;
$recv(aBlock)._value();
self["@delay"]=$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self["@interval"]=self._startRepeatingAction_(aBlock);
return self["@interval"];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._valueWithTimeout_((300));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"whileKeyDownDo:",{aBlock:aBlock},$globals.HLRepeatedKeyDownHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "whileKeyDownDo: aBlock\x0a\x09keyDown := true.\x0a\x09aBlock value.\x0a\x09delay := [ interval := self startRepeatingAction: aBlock ] \x0a\x09\x09valueWithTimeout: 300",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value", "valueWithTimeout:", "startRepeatingAction:"]
}),
$globals.HLRepeatedKeyDownHandler);

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
$globals.HLRepeatedKeyDownHandler);

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
$globals.HLRepeatedKeyDownHandler);


$core.addMethod(
$core.method({
selector: "on:",
protocol: 'instance creation',
fn: function (aWidget){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._widget_(aWidget);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aWidget:aWidget},$globals.HLRepeatedKeyDownHandler.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aWidget"],
source: "on: aWidget\x0a\x09^ self new\x0a\x09\x09widget: aWidget;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["widget:", "new", "yourself"]
}),
$globals.HLRepeatedKeyDownHandler.klass);

});
