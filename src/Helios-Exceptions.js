define("helios/Helios-Exceptions", ["amber/boot", "amber_core/Kernel-Exceptions"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Helios-Exceptions');
$core.packages["Helios-Exceptions"].transport = {"type":"amd","amdNamespace":"helios"};

$core.addClass('HLError', $globals.Error, [], 'Helios-Exceptions');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLError.comment="I am the abstract superclass of all Helios-specific errors.";
//>>excludeEnd("ide");


$core.addClass('HLChangeForbidden', $globals.HLError, [], 'Helios-Exceptions');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLChangeForbidden.comment="I get signaled when a (often user) requested change is forbidden. A confirmation message can then be displayed to the user.\x0a\x0aSee `HLModel >> withChangesDo:`.";
//>>excludeEnd("ide");


$core.addClass('HLListItemNotFound', $globals.HLError, [], 'Helios-Exceptions');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HLListItemNotFound.comment="I get signaled by a `HLListWidget` when a non-existing item in the list is activated.";
//>>excludeEnd("ide");

});
