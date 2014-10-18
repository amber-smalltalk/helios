define("helios/Helios-Transcript", ["amber/boot", "helios/Helios-Core", "amber_core/Kernel-Objects"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Helios-Transcript');
$core.packages["Helios-Transcript"].transport = {"type":"amd","amdNamespace":"helios"};

$core.addClass('HLTranscript', $globals.HLWidget, ['textarea'], 'Helios-Transcript');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLTranscript.comment="I am a widget responsible for displaying transcript contents.\x0a\x0a## Transcript API\x0a\x0a    Transcript \x0a        show: 'hello world';\x0a        cr;\x0a        show: anObject.\x0a\x0a    Transcript clear.\x0a\x0aSee the `Transcript` service class.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "clear",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(self["@textarea"])._asJQuery())._text_("");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"clear",{},$globals.HLTranscript)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "clear\x0a\x09textarea asJQuery text: ''",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["text:", "asJQuery"]
}),
$globals.HLTranscript);

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
$globals.HLTranscript.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._register();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.HLTranscript)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self register",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "register"]
}),
$globals.HLTranscript);

$core.addMethod(
$core.method({
selector: "register",
protocol: 'registration',
fn: function (){
var self=this;
function $HLTranscriptHandler(){return $globals.HLTranscriptHandler||(typeof HLTranscriptHandler=="undefined"?nil:HLTranscriptHandler)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($HLTranscriptHandler())._register_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"register",{},$globals.HLTranscript)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "register\x0a\x09HLTranscriptHandler register: self",
referencedClasses: ["HLTranscriptHandler"],
//>>excludeEnd("ide");
messageSends: ["register:"]
}),
$globals.HLTranscript);

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
$recv($1)._class_("transcript");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self["@textarea"]=$recv(html)._textarea();
return self["@textarea"];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.HLTranscript)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09html div\x0a\x09\x09class: 'transcript';\x0a\x09\x09with: [ textarea := html textarea ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "textarea"]
}),
$globals.HLTranscript);

$core.addMethod(
$core.method({
selector: "show:",
protocol: 'actions',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@textarea"];
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$recv($recv(self["@textarea"])._asJQuery())._append_($recv(aString)._asString());
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"show:",{aString:aString},$globals.HLTranscript)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "show: aString\x0a\x09textarea ifNotNil: [\x0a \x09\x09textarea asJQuery append: aString asString ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "append:", "asJQuery", "asString"]
}),
$globals.HLTranscript);

$core.addMethod(
$core.method({
selector: "unregister",
protocol: 'registration',
fn: function (){
var self=this;
function $HLTranscriptHandler(){return $globals.HLTranscriptHandler||(typeof HLTranscriptHandler=="undefined"?nil:HLTranscriptHandler)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.HLTranscript.superclass.fn.prototype._unregister.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv($HLTranscriptHandler())._unregister_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"unregister",{},$globals.HLTranscript)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "unregister\x0a\x09super unregister.\x0a\x09HLTranscriptHandler unregister: self",
referencedClasses: ["HLTranscriptHandler"],
//>>excludeEnd("ide");
messageSends: ["unregister", "unregister:"]
}),
$globals.HLTranscript);



$core.addClass('HLTranscriptHandler', $globals.Object, [], 'Helios-Transcript');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLTranscriptHandler.comment="I handle transcript events, dispatching them to all instances of `HLTranscript`.\x0a\x0a## API\x0a\x0aUse the class-side method `#register:` to add transcript instances.";
//>>excludeEnd("ide");

$globals.HLTranscriptHandler.klass.iVarNames = ['transcripts'];
$core.addMethod(
$core.method({
selector: "clear",
protocol: 'printing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._transcripts())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._clear();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"clear",{},$globals.HLTranscriptHandler.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "clear\x0a\x09self transcripts do: [ :each |\x0a\x09\x09each clear ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "transcripts", "clear"]
}),
$globals.HLTranscriptHandler.klass);

$core.addMethod(
$core.method({
selector: "cr",
protocol: 'printing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._transcripts())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._cr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cr",{},$globals.HLTranscriptHandler.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cr\x0a\x09self transcripts do: [ :each | each cr ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "transcripts", "cr"]
}),
$globals.HLTranscriptHandler.klass);

$core.addMethod(
$core.method({
selector: "register:",
protocol: 'registration',
fn: function (aTranscript){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._transcripts())._add_(aTranscript);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"register:",{aTranscript:aTranscript},$globals.HLTranscriptHandler.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTranscript"],
source: "register: aTranscript\x0a\x09self transcripts add: aTranscript",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "transcripts"]
}),
$globals.HLTranscriptHandler.klass);

$core.addMethod(
$core.method({
selector: "show:",
protocol: 'printing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._transcripts())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._show_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"show:",{aString:aString},$globals.HLTranscriptHandler.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "show: aString\x0a\x09self transcripts do: [ :each |\x0a\x09\x09each show: aString ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "transcripts", "show:"]
}),
$globals.HLTranscriptHandler.klass);

$core.addMethod(
$core.method({
selector: "transcripts",
protocol: 'accessing',
fn: function (){
var self=this;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@transcripts"];
if(($receiver = $2) == null || $receiver.isNil){
self["@transcripts"]=$recv($OrderedCollection())._new();
$1=self["@transcripts"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"transcripts",{},$globals.HLTranscriptHandler.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "transcripts\x0a\x09^ transcripts ifNil: [ transcripts := OrderedCollection new ]",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.HLTranscriptHandler.klass);

$core.addMethod(
$core.method({
selector: "unregister:",
protocol: 'registration',
fn: function (aTranscript){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._transcripts())._remove_(aTranscript);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"unregister:",{aTranscript:aTranscript},$globals.HLTranscriptHandler.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTranscript"],
source: "unregister: aTranscript\x0a\x09self transcripts remove: aTranscript",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove:", "transcripts"]
}),
$globals.HLTranscriptHandler.klass);

});
