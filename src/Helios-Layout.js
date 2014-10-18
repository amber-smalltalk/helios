define("helios/Helios-Layout", ["amber/boot", "helios/Helios-Core", "amber_core/Web", "amber_core/Kernel-Objects"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Helios-Layout');
$core.packages["Helios-Layout"].transport = {"type":"amd","amdNamespace":"helios"};

$core.addClass('HLContainer', $globals.HLWidget, ['splitter'], 'Helios-Layout');
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
$recv($1)._class_("tool_container");
$2=$recv($1)._with_(self._splitter());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.HLContainer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09html div \x0a    \x09class: 'tool_container'; \x0a        with: self splitter",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "splitter"]
}),
$globals.HLContainer);

$core.addMethod(
$core.method({
selector: "splitter",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@splitter"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "splitter\x0a\x09^ splitter",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLContainer);

$core.addMethod(
$core.method({
selector: "splitter:",
protocol: 'accessing',
fn: function (aSplitter){
var self=this;
self["@splitter"]=aSplitter;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSplitter"],
source: "splitter: aSplitter\x0a\x09splitter := aSplitter",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLContainer);


$core.addMethod(
$core.method({
selector: "with:",
protocol: 'instance creation',
fn: function (aSplitter){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._splitter_(aSplitter);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"with:",{aSplitter:aSplitter},$globals.HLContainer.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSplitter"],
source: "with: aSplitter\x0a\x09^ self new \x0a    \x09splitter: aSplitter; \x0a        yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["splitter:", "new", "yourself"]
}),
$globals.HLContainer.klass);


$core.addClass('HLSplitter', $globals.Widget, ['firstWidget', 'secondWidget', 'firstPane', 'secondPane', 'splitter'], 'Helios-Layout');
$core.addMethod(
$core.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "splitter";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cssClass\x0a\x09^ 'splitter'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLSplitter);

$core.addMethod(
$core.method({
selector: "firstWidget",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@firstWidget"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "firstWidget\x0a\x09^ firstWidget",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLSplitter);

$core.addMethod(
$core.method({
selector: "firstWidget:",
protocol: 'accessing',
fn: function (aWidget){
var self=this;
self["@firstWidget"]=aWidget;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aWidget"],
source: "firstWidget: aWidget\x0a\x09firstWidget := aWidget",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLSplitter);

$core.addMethod(
$core.method({
selector: "isHeliosSplitter",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isHeliosSplitter\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLSplitter);

$core.addMethod(
$core.method({
selector: "panesCssClass",
protocol: 'rendering',
fn: function (){
var self=this;
return "panes";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "panesCssClass\x0a\x09^ 'panes'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLSplitter);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$4,$5,$6,$7,$2;
$1=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["div"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_(self._panesCssClass());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["div"]=2;
//>>excludeEnd("ctx");
$recv($3)._class_("pane");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=2;
//>>excludeEnd("ctx");
$4=$recv($3)._with_(self._firstWidget());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
self["@firstPane"]=$4;
self["@firstPane"];
$5=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["div"]=3;
//>>excludeEnd("ctx");
self["@splitter"]=$recv($5)._class_(self._cssClass());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=3;
//>>excludeEnd("ctx");
self["@splitter"];
$6=$recv(html)._div();
$recv($6)._class_("pane");
$7=$recv($6)._with_(self._secondWidget());
self["@secondPane"]=$7;
return self["@secondPane"];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
self._setupSplitter();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.HLSplitter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09html div class: self panesCssClass; with: [\x0a\x09\x09firstPane := html div class: 'pane'; with: self firstWidget.\x0a    \x09splitter := html div class: self cssClass.\x0a    \x09secondPane := html div class: 'pane'; with: self secondWidget ].\x0a        \x0a\x09self setupSplitter",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "panesCssClass", "with:", "firstWidget", "cssClass", "secondWidget", "setupSplitter"]
}),
$globals.HLSplitter);

$core.addMethod(
$core.method({
selector: "resize",
protocol: 'rendering',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "resize",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLSplitter);

$core.addMethod(
$core.method({
selector: "secondWidget",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@secondWidget"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "secondWidget\x0a\x09^ secondWidget",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLSplitter);

$core.addMethod(
$core.method({
selector: "secondWidget:",
protocol: 'accessing',
fn: function (aWidget){
var self=this;
self["@secondWidget"]=aWidget;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aWidget"],
source: "secondWidget: aWidget\x0a\x09secondWidget := aWidget",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLSplitter);

$core.addMethod(
$core.method({
selector: "setupSplitter",
protocol: 'rendering',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupSplitter",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HLSplitter);


$core.addMethod(
$core.method({
selector: "with:with:",
protocol: 'instance creation',
fn: function (aWidget,anotherWidget){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._firstWidget_(aWidget);
$recv($2)._secondWidget_(anotherWidget);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"with:with:",{aWidget:aWidget,anotherWidget:anotherWidget},$globals.HLSplitter.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aWidget", "anotherWidget"],
source: "with: aWidget with: anotherWidget\x0a\x09^ self new\x0a    \x09\x09firstWidget: aWidget;\x0a            secondWidget: anotherWidget;\x0a            yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["firstWidget:", "new", "secondWidget:", "yourself"]
}),
$globals.HLSplitter.klass);


$core.addClass('HLHorizontalSplitter', $globals.HLSplitter, [], 'Helios-Layout');
$core.addMethod(
$core.method({
selector: "cssClass",
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
$globals.HLHorizontalSplitter.superclass.fn.prototype._cssClass.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=$recv($2).__comma(" horizontal");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},$globals.HLHorizontalSplitter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cssClass\x0a\x09^ super cssClass, ' horizontal'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "cssClass"]
}),
$globals.HLHorizontalSplitter);

$core.addMethod(
$core.method({
selector: "panesCssClass",
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
$globals.HLHorizontalSplitter.superclass.fn.prototype._panesCssClass.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=$recv($2).__comma(" horizontal");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"panesCssClass",{},$globals.HLHorizontalSplitter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "panesCssClass\x0a\x09^ super panesCssClass, ' horizontal'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "panesCssClass"]
}),
$globals.HLHorizontalSplitter);

$core.addMethod(
$core.method({
selector: "resize",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._resize_($recv($recv(self["@splitter"])._asJQuery())._css_("top"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"resize",{},$globals.HLHorizontalSplitter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "resize\x0a\x09self resize: (splitter asJQuery css: 'top')",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["resize:", "css:", "asJQuery"]
}),
$globals.HLHorizontalSplitter);

$core.addMethod(
$core.method({
selector: "resize:",
protocol: 'actions',
fn: function (anInteger){
var self=this;
var container,size,offset,percentage;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$2,$6,$7,$5,$4,$8,$10,$9,$11,$14,$13,$12;
$1=$recv(self["@firstPane"])._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
container=$recv($1)._parent();
$3=$recv(self["@firstPane"])._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=2;
//>>excludeEnd("ctx");
$2=$recv($3)._offset();
offset=$recv($2)._top();
size=$recv(container)._height();
$6=size;
$7=$recv(anInteger).__minus(offset);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=2;
//>>excludeEnd("ctx");
$5=$recv($6).__minus($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$4=$recv($5).__slash(size);
percentage=$recv($4).__star((100));
percentage=(80)._min_($recv(percentage)._max_((20)));
$8=$recv(self["@firstPane"])._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=3;
//>>excludeEnd("ctx");
$10=$recv(percentage)._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asString"]=1;
//>>excludeEnd("ctx");
$9=$recv($10).__comma("%");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($8)._css_put_("bottom",$9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["css:put:"]=1;
//>>excludeEnd("ctx");
$11=$recv(self["@splitter"])._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=4;
//>>excludeEnd("ctx");
$14=(100).__minus(percentage);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=3;
//>>excludeEnd("ctx");
$13=$recv($14)._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asString"]=2;
//>>excludeEnd("ctx");
$12=$recv($13).__comma("%");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$recv($11)._css_put_("top",$12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["css:put:"]=2;
//>>excludeEnd("ctx");
$recv($recv(self["@secondPane"])._asJQuery())._css_put_("top",$recv($recv((100).__minus(percentage))._asString()).__comma("%"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"resize:",{anInteger:anInteger,container:container,size:size,offset:offset,percentage:percentage},$globals.HLHorizontalSplitter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "resize: anInteger\x0a\x09| container size offset percentage |\x0a    \x0a    container := firstPane asJQuery parent.\x0a\x09offset := firstPane asJQuery offset top.\x0a    size := container height.\x0a\x09\x0a\x09percentage := (size - (anInteger - offset)) / size * 100.\x0a\x09percentage := 80 min: (percentage max: 20).\x0a\x09\x0a    firstPane asJQuery css: 'bottom' put: percentage asString, '%'.\x0a\x09\x0a\x09splitter asJQuery css: 'top' put: (100 - percentage) asString, '%'.\x0a\x09secondPane asJQuery css: 'top' put: (100 - percentage) asString, '%'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["parent", "asJQuery", "top", "offset", "height", "*", "/", "-", "min:", "max:", "css:put:", ",", "asString"]
}),
$globals.HLHorizontalSplitter);

$core.addMethod(
$core.method({
selector: "setupSplitter",
protocol: 'rendering',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@splitter"])._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($1)._draggable_($globals.HashedCollection._newFromPairs_(["axis","y","containment",$recv($recv(self["@splitter"])._asJQuery())._parent(),"helper","clone","start",(function(e,ui){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._startResizing_($recv(ui)._helper());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e,ui:ui},$ctx1,1)});
//>>excludeEnd("ctx");
}),"drag",(function(e,ui){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._resize_($recv($recv(ui)._offset())._top());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e,ui:ui},$ctx1,2)});
//>>excludeEnd("ctx");
})]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupSplitter",{},$globals.HLHorizontalSplitter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupSplitter\x0a\x09splitter asJQuery draggable: #{ \x0a    \x09'axis' -> 'y'. \x0a        'containment' -> splitter asJQuery parent.\x0a        'helper' -> 'clone'.\x0a        'start' -> [ :e :ui | self startResizing: ui helper ].\x0a        'drag' -> [ :e :ui | self resize: ui offset top ] }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["draggable:", "asJQuery", "parent", "startResizing:", "helper", "resize:", "top", "offset"]
}),
$globals.HLHorizontalSplitter);

$core.addMethod(
$core.method({
selector: "startResizing:",
protocol: 'actions',
fn: function (aSplitter){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(aSplitter)._width_($recv($recv(self["@splitter"])._asJQuery())._width());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"startResizing:",{aSplitter:aSplitter},$globals.HLHorizontalSplitter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSplitter"],
source: "startResizing: aSplitter\x0a\x09aSplitter width: splitter asJQuery width",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["width:", "width", "asJQuery"]
}),
$globals.HLHorizontalSplitter);



$core.addClass('HLVerticalSplitter', $globals.HLSplitter, [], 'Helios-Layout');
$core.addMethod(
$core.method({
selector: "cssClass",
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
$globals.HLVerticalSplitter.superclass.fn.prototype._cssClass.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=$recv($2).__comma(" vertical");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},$globals.HLVerticalSplitter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cssClass\x0a\x09^ super cssClass, ' vertical'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "cssClass"]
}),
$globals.HLVerticalSplitter);

$core.addMethod(
$core.method({
selector: "panesCssClass",
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
$globals.HLVerticalSplitter.superclass.fn.prototype._panesCssClass.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=$recv($2).__comma(" vertical");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"panesCssClass",{},$globals.HLVerticalSplitter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "panesCssClass\x0a\x09^ super panesCssClass, ' vertical'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "panesCssClass"]
}),
$globals.HLVerticalSplitter);

$core.addMethod(
$core.method({
selector: "resize",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._resize_($recv($recv(self["@splitter"])._asJQuery())._css_("left"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"resize",{},$globals.HLVerticalSplitter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "resize\x0a\x09self resize: (splitter asJQuery css: 'left')",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["resize:", "css:", "asJQuery"]
}),
$globals.HLVerticalSplitter);

$core.addMethod(
$core.method({
selector: "resize:",
protocol: 'actions',
fn: function (anInteger){
var self=this;
var container,size,offset,percentage;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$2,$6,$7,$5,$4,$8,$10,$9,$11,$14,$13,$12;
$1=$recv(self["@firstPane"])._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
container=$recv($1)._parent();
$3=$recv(self["@firstPane"])._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=2;
//>>excludeEnd("ctx");
$2=$recv($3)._offset();
offset=$recv($2)._left();
size=$recv(container)._width();
$6=size;
$7=$recv(anInteger).__minus(offset);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=2;
//>>excludeEnd("ctx");
$5=$recv($6).__minus($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$4=$recv($5).__slash(size);
percentage=$recv($4).__star((100));
percentage=(80)._min_($recv(percentage)._max_((20)));
$8=$recv(self["@firstPane"])._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=3;
//>>excludeEnd("ctx");
$10=$recv(percentage)._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asString"]=1;
//>>excludeEnd("ctx");
$9=$recv($10).__comma("%");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($8)._css_put_("right",$9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["css:put:"]=1;
//>>excludeEnd("ctx");
$11=$recv(self["@splitter"])._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=4;
//>>excludeEnd("ctx");
$14=(100).__minus(percentage);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=3;
//>>excludeEnd("ctx");
$13=$recv($14)._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asString"]=2;
//>>excludeEnd("ctx");
$12=$recv($13).__comma("%");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$recv($11)._css_put_("left",$12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["css:put:"]=2;
//>>excludeEnd("ctx");
$recv($recv(self["@secondPane"])._asJQuery())._css_put_("left",$recv($recv((100).__minus(percentage))._asString()).__comma("%"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"resize:",{anInteger:anInteger,container:container,size:size,offset:offset,percentage:percentage},$globals.HLVerticalSplitter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "resize: anInteger\x0a\x09| container size offset percentage |\x0a    \x0a    container := firstPane asJQuery parent.\x0a\x09offset := firstPane asJQuery offset left.\x0a    size := container width.\x0a\x09\x0a\x09percentage := (size - (anInteger - offset)) / size * 100.\x0a\x09percentage := 80 min: (percentage max: 20).\x0a\x09\x0a    firstPane asJQuery css: 'right' put: percentage asString, '%'.\x0a\x09\x0a\x09splitter asJQuery css: 'left' put: (100 - percentage) asString, '%'.\x0a\x09secondPane asJQuery css: 'left' put: (100 - percentage) asString, '%'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["parent", "asJQuery", "left", "offset", "width", "*", "/", "-", "min:", "max:", "css:put:", ",", "asString"]
}),
$globals.HLVerticalSplitter);

$core.addMethod(
$core.method({
selector: "setupSplitter",
protocol: 'rendering',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@splitter"])._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($1)._draggable_($globals.HashedCollection._newFromPairs_(["axis","x","containment",$recv($recv(self["@splitter"])._asJQuery())._parent(),"helper","clone","start",(function(e,ui){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._startResizing_($recv(ui)._helper());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e,ui:ui},$ctx1,1)});
//>>excludeEnd("ctx");
}),"drag",(function(e,ui){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._resize_($recv($recv(ui)._offset())._left());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e,ui:ui},$ctx1,2)});
//>>excludeEnd("ctx");
})]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupSplitter",{},$globals.HLVerticalSplitter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupSplitter\x0a\x09splitter asJQuery draggable: #{ \x0a    \x09'axis' -> 'x'. \x0a        'containment' -> splitter asJQuery parent.\x0a        'helper' -> 'clone'.\x0a        'start' -> [ :e :ui | self startResizing: ui helper ].\x0a        'drag' -> [ :e :ui | self resize: (ui offset left) ] }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["draggable:", "asJQuery", "parent", "startResizing:", "helper", "resize:", "left", "offset"]
}),
$globals.HLVerticalSplitter);

$core.addMethod(
$core.method({
selector: "startResizing:",
protocol: 'actions',
fn: function (aSplitter){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(aSplitter)._height_($recv($recv(self["@splitter"])._asJQuery())._height());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"startResizing:",{aSplitter:aSplitter},$globals.HLVerticalSplitter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSplitter"],
source: "startResizing: aSplitter\x0a\x09aSplitter height: splitter asJQuery height",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["height:", "height", "asJQuery"]
}),
$globals.HLVerticalSplitter);


$core.addMethod(
$core.method({
selector: "isHeliosSplitter",
protocol: '*Helios-Layout',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isHeliosSplitter\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Object);

});
