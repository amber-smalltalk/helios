define("helios/Helios-Workspace-Tests", ["amber/boot", "amber_core/SUnit"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Helios-Workspace-Tests');
$core.packages["Helios-Workspace-Tests"].transport = {"type":"amd","amdNamespace":"helios"};

$core.addClass('HLCodeWidgetTest', $globals.TestCase, [], 'Helios-Workspace-Tests');
$core.addMethod(
$core.method({
selector: "testKeyMap",
protocol: 'tests',
fn: function (){
var self=this;
function $HLCodeWidget(){return $globals.HLCodeWidget||(typeof HLCodeWidget=="undefined"?nil:HLCodeWidget)}
function $HashedCollection(){return $globals.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($HLCodeWidget())._pcKeyMap())._isKindOf_($HashedCollection());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isKindOf:"]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
self._assert_($recv($recv($HLCodeWidget())._macKeyMap())._isKindOf_($HashedCollection()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testKeyMap",{},$globals.HLCodeWidgetTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testKeyMap\x0a\x09\x22Key maps are a collection of associations.\x22\x0a\x09self assert: (HLCodeWidget pcKeyMap isKindOf: HashedCollection).\x0a\x09self assert: (HLCodeWidget macKeyMap isKindOf: HashedCollection)",
referencedClasses: ["HLCodeWidget", "HashedCollection"],
//>>excludeEnd("ide");
messageSends: ["assert:", "isKindOf:", "pcKeyMap", "macKeyMap"]
}),
$globals.HLCodeWidgetTest);


});
