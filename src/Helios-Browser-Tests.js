define("helios/Helios-Browser-Tests", ["amber/boot", "amber_core/SUnit"], function($boot){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Helios-Browser-Tests');
$core.packages["Helios-Browser-Tests"].innerEval = function (expr) { return eval(expr); };
$core.packages["Helios-Browser-Tests"].transport = {"type":"amd","amdNamespace":"helios"};

$core.addClass('HLBrowserTest', $globals.TestCase, ['browser'], 'Helios-Browser-Tests');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLBrowserTest.comment="Test cases for the functionality of  `HLBrowserModel`";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "setUp",
protocol: 'tests',
fn: function (){
var self=this;
function $HLBrowserModel(){return $globals.HLBrowserModel||(typeof HLBrowserModel=="undefined"?nil:HLBrowserModel)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@browser"]=$recv($HLBrowserModel())._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setUp",{},$globals.HLBrowserTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setUp\x0a\x09browser := HLBrowserModel new.",
referencedClasses: ["HLBrowserModel"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.HLBrowserTest);

$core.addMethod(
$core.method({
selector: "testAllProtocolsSelectedWhenSelectingAClass",
protocol: 'tests',
fn: function (){
var self=this;
function $Object(){return $globals.Object||(typeof Object=="undefined"?nil:Object)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv(self["@browser"])._selectedProtocol();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selectedProtocol"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._isNil();
self._assert_($1);
$recv(self["@browser"])._selectedClass_($Object());
self._assert_equals_($recv(self["@browser"])._selectedProtocol(),$recv(self["@browser"])._allProtocol());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAllProtocolsSelectedWhenSelectingAClass",{},$globals.HLBrowserTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAllProtocolsSelectedWhenSelectingAClass\x0a\x09self assert: browser selectedProtocol isNil.\x0a\x09browser selectedClass: Object.\x0a\x09self assert: browser selectedProtocol equals: browser allProtocol.",
referencedClasses: ["Object"],
//>>excludeEnd("ide");
messageSends: ["assert:", "isNil", "selectedProtocol", "selectedClass:", "assert:equals:", "allProtocol"]
}),
$globals.HLBrowserTest);

$core.addMethod(
$core.method({
selector: "testProtocolSelectedWhenChangingClass",
protocol: 'tests',
fn: function (){
var self=this;
var protocolSelectedCalled;
function $HLProtocolSelected(){return $globals.HLProtocolSelected||(typeof HLProtocolSelected=="undefined"?nil:HLProtocolSelected)}
function $Object(){return $globals.Object||(typeof Object=="undefined"?nil:Object)}
function $ProtoObject(){return $globals.ProtoObject||(typeof ProtoObject=="undefined"?nil:ProtoObject)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
protocolSelectedCalled=(0);
$recv($recv(self["@browser"])._announcer())._on_do_for_($HLProtocolSelected(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
protocolSelectedCalled=$recv(protocolSelectedCalled).__plus((1));
return protocolSelectedCalled;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),self);
$recv(self["@browser"])._selectedClass_($Object());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selectedClass:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_(protocolSelectedCalled,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$recv(self["@browser"])._selectedClass_($ProtoObject());
self._assert_equals_(protocolSelectedCalled,(2));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testProtocolSelectedWhenChangingClass",{protocolSelectedCalled:protocolSelectedCalled},$globals.HLBrowserTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testProtocolSelectedWhenChangingClass\x0a\x09| protocolSelectedCalled |\x0a\x09protocolSelectedCalled := 0.\x0a\x09browser announcer on: HLProtocolSelected do: [protocolSelectedCalled := protocolSelectedCalled + 1] for: self.\x0a\x09browser selectedClass: Object.\x0a\x09self assert: protocolSelectedCalled equals: 1.\x0a\x09browser selectedClass: ProtoObject.\x0a\x09self assert: protocolSelectedCalled equals: 2.",
referencedClasses: ["HLProtocolSelected", "Object", "ProtoObject"],
//>>excludeEnd("ide");
messageSends: ["on:do:for:", "announcer", "+", "selectedClass:", "assert:equals:"]
}),
$globals.HLBrowserTest);


});
