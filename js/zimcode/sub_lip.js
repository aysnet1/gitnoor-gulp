(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Séquence_1_tube = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tube
	this.shape = new cjs.Shape();
	this.shape.graphics.f().rs(["#FFFFFF","#000000"],[0,1],0,-15.8,0,0,-15.8,122.6).ss(1,1,1).p("AFHyAQABANAAAPIAAeOQAACOhdBlQheBkiFAAIgPAAQiEAAhehkQhehlAAiOIAA+OQAAgPABgN");
	this.shape.setTransform(92.75,251.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(153,153,153,0.349)").s().p("AgISBQiEAAhdhlQhdhkAAiOIAA+PIABgbQFFFkFHlkIAAAbIAAePQAACOhdBkQhdBliFAAg");
	this.shape_1.setTransform(92.75,251.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Séquence_1_tube, null, null);


(lib.Séquence_1_Support = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Support
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#996633").s().p("Egl7ACnIAAlNIGVAAQAGAkARAjQAhBKBIAsQBJAuBQAAQBSgBBHguQBHguAihKQAJgUAGgWIAAAAIAJgaIJvAAQABA5AZA2QAiBJBIAtQBIAuBRAAQBRgBBIguQBHgvAhhJQAYgzABg5IMFAAQAEAvAVAsQAiBKBIAsQBIAuBRAAQBRgBBHguQBIguAhhKQAUgqAEguIIMAAQgBA+AbA7QAiBJBIAtQBIAuBRAAQBRgBBIguQBHgvAhhJQAag4gBg+IEMAAIAAFNg");
	this.shape.setTransform(267.25,359.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#996633").s().p("AhjMlIAA5JIDHAAIAAZJg");
	this.shape_1.setTransform(19.6135,242.0405,1.9576,1.667);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#996633").s().p("AhjMlIAA5JIDHAAIAAZJg");
	this.shape_2.setTransform(529.5135,242.0405,1.9576,1.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Séquence_1_Support, null, null);


(lib.Séquence_1_Calque_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#996633").s().p("AhjMlIAA5JIDHAAIAAZJg");
	this.shape.setTransform(281.638,203.6325,1.667,3.0153,90);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Séquence_1_Calque_3, null, null);


// stage content:
(lib.sub_lip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// Support_obj_
	this.Support = new lib.Séquence_1_Support();
	this.Support.name = "Support";
	this.Support.parent = this;
	this.Support.setTransform(274.6,242.1,1,1,0,0,0,274.6,242.1);
	this.Support.depth = 0;
	this.Support.isAttachedToCamera = 0
	this.Support.isAttachedToMask = 0
	this.Support.layerDepth = 0
	this.Support.layerIndex = 0
	this.Support.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Support).wait(1));

	// tube_obj_
	this.tube = new lib.Séquence_1_tube();
	this.tube.name = "tube";
	this.tube.parent = this;
	this.tube.setTransform(92.8,251.5,1,1,0,0,0,92.8,251.5);
	this.tube.depth = 0;
	this.tube.isAttachedToCamera = 0
	this.tube.isAttachedToMask = 0
	this.tube.layerDepth = 0
	this.tube.layerIndex = 1
	this.tube.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.tube).wait(1));

	// Calque_3_obj_
	this.Calque_3 = new lib.Séquence_1_Calque_3();
	this.Calque_3.name = "Calque_3";
	this.Calque_3.parent = this;
	this.Calque_3.setTransform(281.6,203.6,1,1,0,0,0,281.6,203.6);
	this.Calque_3.depth = 0;
	this.Calque_3.isAttachedToCamera = 0
	this.Calque_3.isAttachedToMask = 0
	this.Calque_3.layerDepth = 0
	this.Calque_3.layerIndex = 2
	this.Calque_3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Calque_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(275.1,307.9,274,68.40000000000003);
// library properties:
lib.properties = {
	id: 'BA8219413C0AAD49A563A946295F7058',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['BA8219413C0AAD49A563A946295F7058'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Layer depth API :

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
