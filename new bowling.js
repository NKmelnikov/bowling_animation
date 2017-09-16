(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 800,
	height: 600,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/Bowling.mp3", id:"Bowling"}
	]
};



lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Symbol1new = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgeCEQgQgQAAgVQAAgWAQgPQAPgQAUAAQAVAAAQAQQAPAPAAAWQAAAVgPAQQgQAPgVAAQgUAAgPgPgABJg5QgQgPAAgWQAAgVAQgQQAPgPAWAAQAMAAALAFQAHAEAHAGQAPAQAAAVQAAAWgPAPQgHAHgHAEQgLAFgMAAQgWAAgPgQgAiHgwQgGgEgFgFQgPgPAAgWQAAgVAPgQQAFgFAGgDQAMgHAOAAQAWAAAPAPQAQAQAAAVQAAAWgQAPQgPAQgWAAQgOAAgMgHg");
	this.shape.setTransform(40.3,28.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066CC").s().p("AkiEjQh5h5AAiqQAAipB5h5QB5h5CpAAQCqAAB5B5QB5B5AACpQAACqh5B5Qh5B5iqAAQipAAh5h5gAgohGQgPAQgBAWQABAVAPAOQAQAPAVAAQAUAAAPgPQAQgOAAgVQAAgWgQgQQgPgPgUAAQgVAAgQAPgAA/kEQgPAPAAAWQAAAVAPAQQAPAPAWAAQANAAAKgEQAIgFAGgGQAPgQAAgVQAAgWgPgPQgGgHgIgDQgKgGgNABQgWAAgPAPgAiRkNQgFAEgFAFQgQAPAAAWQAAAVAQAQQAFAFAFADQAMAIAOgBQAWAAAPgPQAQgQAAgVQAAgWgQgPQgPgPgWAAQgOAAgMAGg");
	this.shape_1.setTransform(41.3,41.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,82.5,82.5);


(lib.Symbol_skittle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AgyhLIB2AGIAbCRIi9gEg");
	this.shape.setTransform(14.3,29.8,0.864,0.795);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AheBIIAsiTIB2AFIAbCSg");
	this.shape_1.setTransform(14.3,29.8,0.864,0.795);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAHhNQABADgCAEQgDAEAAACQAAACABAHQABAFgCADQAFAKAAAJQAAAHgBANQABAIADAOQAEAQAAAIIAAAQQABACAEAMQACAJgBAGQgBAFAAABQAAABACAEQACAHgFAFQgFAFgGgEQgEgCgDgFQgGgQgEgTQgDABgDgEQgCgDgBgFQgEgSADgkQAAgHAEgEQgGgCAAgLQgBgGACgJQACgIABgFQAAgDgBgJQgBgHABgFQAFgJABgFQAAgEABgCQAAgEACgDQACgDAFgBQADgBADADQAFAGgDAKQgBAFAAABg");
	this.shape_2.setTransform(19.1,21.3,0.864,0.795);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAIBrQgEgCgDgFQgGgQgEgTQgDABgDgEQgCgDgBgFQgEgSADgkQAAgHAEgEQgGgCAAgLQgBgGACgJIADgNIgBgMQgBgHABgFQAFgJABgFIABgGIACgHQACgDAFgBQADgBADADQAFAGgDAKIgBAGIACAGQABADgCAEIgDAGIABAJQABAFgCADQAFAKAAAJIgBAUQABAIADAOQAEAQAAAIIAAAQIAFAOQACAJgBAGIgBAGIACAFQACAHgFAFQgDADgDAAIgFgCg");
	this.shape_3.setTransform(19.1,21.3,0.864,0.795);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1,1,1).p("AALAwQgFgLADgMQgFABgEgCQgEgDgCgFQgEABgFgGIgMgMQgFgJAAgBQgCgGAEgFIADgCQABgCAAgEQAAgBABgLQABgGACgDQABgEAFgCQAFgBAGAEQACACADAIIAYAtQAGANgCAQQAAAGABABQAAACAEAEQADAGgFAFQgEAFgHgCQgFgCgEgHg");
	this.shape_4.setTransform(19.2,29.8,0.864,0.795);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAUA5QgFgCgEgHQgFgLADgMQgFABgEgCQgEgDgCgFQgEABgFgGIgMgMIgFgKQgCgGAEgFIADgCIABgGIABgMIADgJQABgEAFgCQAFgBAGAEQACACADAIIAYAtQAGANgCAQIABAHQAAACAEAEQADAGgFAFQgDAEgEAAIgEgBg");
	this.shape_5.setTransform(19.2,29.8,0.864,0.795);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAKhIQAGgDAFAFQACADABAKQAAAFACAIQAAAMgJAXQgJAVACAMQAHgBADAIQABAGgDAFQgEALgOAOIgFAFQgHADgEgBQgHgCgBgGQgBgDADgKIANgiIABgJQAAgEADgJIAFgOQAGgRgBgHQgCgLAAgGQgBgLAIgDg");
	this.shape_6.setTransform(9.7,26.9,0.864,0.795);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQBKQgHgCgBgGQgBgDADgKIANgiIABgJIADgNIAFgOQAGgRgBgHIgCgRQgBgLAIgDQAGgDAFAFQACADABAKIACANQAAAMgJAXQgJAVACAMQAHgBADAIQABAGgDAFQgEALgOAOIgFAFQgFACgDAAIgDAAg");
	this.shape_7.setTransform(9.7,26.9,0.864,0.795);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgGgEIAAgZQgFgYAAgLQgBgGADgEQACgEAEAAQADgBACADQAEACABAHIABAMIADAPQABAFAAAJQAAAEAAAKIACAXQABAQgDAKQgDAKAAABQgBAFAAAKQgCAKgFAEQgBADgFAAQgEAAgCgDQgEgEACgHIAHgfQACgLAAgJQgBgOgBgFg");
	this.shape_8.setTransform(11.3,24.3,0.864,0.795);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgLBNQgEgEACgHIAHgfQACgLAAgJIgCgTIAAgZQgFgYAAgLQgBgGADgEQACgEAEAAQADgBACADQAEACABAHIABAMIADAPIABAOIAAAOIACAXQABAQgDAKIgDALIgBAPQgCAKgFAEQgBADgFAAQgEAAgCgDg");
	this.shape_9.setTransform(11.3,24.3,0.864,0.795);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgGgEQABgCACgBQABgBACAAQAAAAAAAAQAGAAACAFIABADQAAACgBACIgBACQgDAEgEgBQgFAAgDgGQgBgDADgEg");
	this.shape_10.setTransform(10.8,16.8,0.864,0.795);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAAAJQgFAAgDgGQgBgDADgEQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAIADgBIAAAAQAGAAACAFIABADIgBAEIgBACQgDADgEAAIAAAAg");
	this.shape_11.setTransform(10.8,16.8,0.864,0.795);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(1,1,1).p("AATgQQAAACgHAIQgIAHgDALQgBAIAAABQgBAGgEABQgDACgEgDQgEgCgBgEQgCgFADgKQACgHAJgQIAFgHQAFgGAHADQAEABACADQACADgBAEg");
	this.shape_12.setTransform(11.9,16.2,0.864,0.795);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgMAbQgEgCgBgEQgCgFADgKQACgHAJgQIAFgHQAFgGAHADQAEABACADQACADgBAEQAAACgHAIQgIAHgDALIgBAJQgBAGgEABIgDABIgEgCg");
	this.shape_13.setTransform(11.9,16.2,0.864,0.795);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAEAtQgBAEAAAHQgDAHgGABQgIAAgCgIIABgHIACgKQADgNAAgOIACgUIAHgrQAAgFABgDQADgFAFABQAGABACAEQACAEgBAIIgLBSg");
	this.shape_14.setTransform(16.3,18.5,0.864,0.795);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgQA4IABgHIACgKQADgNAAgOIACgUIAHgrQAAgFABgDQADgFAFABQAGABACAEQACAEgBAIIgLBSIgCAJIgBALQgDAHgGABQgIAAgCgIg");
	this.shape_15.setTransform(16.3,18.5,0.864,0.795);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAFgjIAOBAIABAJIgCATIgCAGQgCAEgEABQgEACgDgCQgEgEABgJQAAgJAAgEIgCgXQgEgagJgkIgEgMQgBgFADgFQAFgEAFABQAGACABAJQACAHADAPg");
	this.shape_16.setTransform(16,20.4,0.864,0.795);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AADBEQgEgEABgJIAAgNIgCgXQgEgagJgkIgEgMQgBgFADgFQAFgEAFABQAGACABAJIAFAWIAOBAIABAJIgCATIgCAGQgCAEgEABIgDABIgEgBg");
	this.shape_17.setTransform(16,20.4,0.864,0.795);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgChZQACACABAGIABAKQAAAGADALQABADABARQABBFAJAjQADAOgFAFQgCACgEAAQgEAAgCgCQgDgDAAgGQgGgZgCgiQgCgOgBgsQgBgQgCgHQgDgLAAgCQgBgIAEgFQAFgHAHAEg");
	this.shape_18.setTransform(15.6,22.3,0.864,0.795);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AADBZQgDgDAAgGQgGgZgCgiQgCgOgBgsIgDgXIgDgNQgBgIAEgFQAFgHAHAEQACACABAGIABAKIADARIACAUQABBFAJAjQADAOgFAFQgCACgEAAQgEAAgCgCg");
	this.shape_19.setTransform(15.6,22.3,0.864,0.795);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAVAvQABAlgFAQQgGANgIgCQgDgBgBgDQgCgEABgEQAAgDACgMQACgIAAgSQABgwgDgXQgCgogOgdQgFgMABgEQAAgFADgDQADgEAEAAQAFABADAFQABACABAIIAHARQAFAOAEAZIAFAgQAAAGAAAvg");
	this.shape_20.setTransform(14.6,24.4,0.864,0.795);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AADBvQgDgBgBgDQgCgEABgEQAAgDACgMQACgIAAgSQABgwgDgXQgCgogOgdQgFgMABgEQAAgFADgDQADgEAEAAQAFABADAFIACAKIAHARQAFAOAEAZIAFAgIAAA1QABAlgFAQQgFALgHAAIgCAAg");
	this.shape_21.setTransform(14.6,24.4,0.864,0.795);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAFhzQAFABABAFQACADAAAHQACAngBAZQgBASgFAjQgCAcgBAjQAAAMAAACQACAJAAABQAAAGgEADQgDACgCgBQgEgBgDgDQgDgEgBgLQgBgKABgJQAAgXAEguQAEgdABgRQABgTgCgmQgBgJACgEQADgIAGABg");
	this.shape_22.setTransform(16.9,22.8,0.864,0.795);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgCBzQgEgBgDgDQgDgEgBgLIAAgTQAAgXAEguQAEgdABgRQABgTgCgmQgBgJACgEQADgIAGABQAFABABAFQACADAAAHQACAngBAZIgGA1QgCAcgBAjIAAAOIACAKQAAAGgEADIgDACIgCgBg");
	this.shape_23.setTransform(16.9,22.8,0.864,0.795);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAQBtQAAAIgCADQgDAHgGAAQgFgCgBgGQgBgDAAgJQABgRgBghIgBglQgCgmgBgUQgCgggHgkQgCgNAFgEQACgDAEAAQAEAAACADQABACACAIQAGAnADAuIAEBUQABApgBAMg");
	this.shape_24.setTransform(13.8,24.7,0.864,0.795);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgBB2QgBgCAAgJQABgRgBggIgBgnIgDg4QgCghgHgkQgCgNAFgEQACgCAEgBQAEABACACQABACACAJQAGAmADAuIAEBUIAAA0QAAAJgCADQgDAHgGgBQgFAAgBgIg");
	this.shape_25.setTransform(13.8,24.7,0.864,0.795);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAJhNQACANAEASQACALAEAUQAHAkgEAZQgBAJgFARQgDAOABALQABAMgCADQgCAEgFABQgFAAgDgDQgCgEAAgLQAAgMABgHQABgHABgNQADgOABgGQADgWgGgfQgKg2AAgBQgCgNgCgDQgBgCgGgHQgEgFgBgEQgBgHADgDQADgGAGACQAEABADAEQACACADAGQABAEAGAIQACAEABAKg");
	this.shape_26.setTransform(11.9,23.7,0.864,0.795);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAAByQgCgEAAgLIABgTIACgUIAEgUQADgWgGgfIgKg3QgCgNgCgDIgHgJQgEgFgBgEQgBgHADgDQADgGAGACQAEABADAEIAFAIIAHAMQACAEABAKIAGAfIAGAfQAHAkgEAZIgGAaQgDAOABALQABAMgCADQgCAEgFABIgBAAQgEAAgDgDg");
	this.shape_27.setTransform(11.9,23.7,0.864,0.795);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgPgGIAUgBQAGAAAHgCQAFgCACgBQACgBAGgBQACgBAFgFQAEgEADgBQAEgBAEABQAEACACAEQACADgBAFQgBAGgHAFQgCADgBABIgFAFIgJAHQgOAIgFABQgFACgJAAIghAAQgKgBgCgCQgDgBgEgEQgKgLgCgHQgBgBAAgHQAAgGACgDQADgFAGABQAHACABAFQAFACAKAFQACAAAKAAg");
	this.shape_28.setTransform(14.8,13.6,0.864,0.795);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgdAbQgKgBgCgCQgDgBgEgEQgKgLgCgHIgBgIQAAgGACgDQADgFAGABQAHACABAFIAPAHIAMAAIAUgBIANgCIAHgDIAIgCQACgBAFgFQAEgEADgBQAEgBAEABQAEACACAEQACADgBAFQgBAGgHAFIgDAEIgFAFIgJAHQgOAIgFABQgFACgJAAg");
	this.shape_29.setTransform(14.8,13.6,0.864,0.795);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgWjlQgMAWAJAUQAKAWAAABQgDASgFAWQgEATgBAXQgCBBAQBQQAIAjAKA8QALAvAPAZ");
	this.shape_30.setTransform(22.2,22.9,0.864,0.795);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgUjiQgMAXAFAUIAGAZQgDARgFAXQgEATgBAWQgCA3AAAKQACApAOAnQAMAhAPA5QAPAuAPAX");
	this.shape_31.setTransform(6.9,22.9,0.864,0.795,0,0,180);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AhFHCQgFgGgEgIIgDgEIgBgDIgCgBQgIgPgIgRIgEgKQgmhcAAiBQABiFAohdIABgDQAmhVAzgJIALgBQA7AAApBfQAqBeABCHQgBCAglBdIgDAGIgCAEIgHAPIgIARIgBABIgCADIgDAEQgEAIgFAGgAADkyQgbAAgTgVQgPgOgEgUQgBgIAAgIIAAgDQAAgPAGgNQAEgKAKgKQATgVAbAAIAEAAQAaACAUATQATAUABAcIAAADQgBAegTAUQgUAUgaABIgEAAg");
	this.shape_32.setTransform(14.3,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.6,90.1);


// stage content:
(lib.newbowling = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("Bowling");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(90));

	// Layer 3
	this.instance = new lib.Symbol_skittle();
	this.instance.parent = this;
	this.instance.setTransform(123.5,31.3,1,1,0,0,0,14.3,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

	// Шар
	this.instance_1 = new lib.Symbol1new();
	this.instance_1.parent = this;
	this.instance_1.setTransform(733.2,44.5,1,1,-1,0,0,40.2,41.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:41.3,regY:41.3,rotation:-10,x:723.1,y:43.8},0).wait(1).to({rotation:-19.1,x:711.9,y:43.7},0).wait(1).to({rotation:-28.1,x:700.6,y:43.5},0).wait(1).to({rotation:-37.2,x:689.3,y:43.3},0).wait(1).to({rotation:-46.2,x:678,y:43.2},0).wait(1).to({rotation:-55.3,x:666.8,y:43.1},0).wait(1).to({rotation:-64.3,x:655.4,y:43},0).wait(1).to({rotation:-73.4,x:644.2,y:42.9},0).wait(1).to({rotation:-82.4,x:632.9},0).wait(1).to({rotation:-91.4,x:621.6},0).wait(1).to({rotation:-100.5,x:610.3},0).wait(1).to({rotation:-109.5,x:599,y:43},0).wait(1).to({rotation:-118.6,x:587.7,y:43.1},0).wait(1).to({rotation:-127.6,x:576.5,y:43.2},0).wait(1).to({rotation:-136.7,x:565.3},0).wait(1).to({rotation:-145.7,x:554.1,y:43.4},0).wait(1).to({rotation:-154.8,x:543,y:43.5},0).wait(1).to({rotation:-163.8,x:531.9,y:43.7},0).wait(1).to({rotation:-172.8,x:520.7},0).wait(1).to({rotation:-181.9,x:509.7,y:43.9},0).wait(1).to({rotation:-190.9,x:498.6,y:44},0).wait(1).to({rotation:-200,x:487.7,y:44.1},0).wait(1).to({rotation:-209,x:476.7,y:44.2},0).wait(1).to({rotation:-218.1,x:465.7},0).wait(1).to({rotation:-227.1,x:454.8,y:44.3},0).wait(1).to({rotation:-236.2,x:443.8},0).wait(1).to({rotation:-245.2,x:432.9},0).wait(1).to({rotation:-254.2,x:421.9,y:44.2},0).wait(1).to({rotation:-263.3,x:411,y:44.1},0).wait(1).to({rotation:-272.3,x:400.1,y:44},0).wait(1).to({rotation:-281.4,x:389.1,y:43.9},0).wait(1).to({rotation:-290.4,x:378.1,y:43.8},0).wait(1).to({rotation:-299.5,x:367.1,y:43.6},0).wait(1).to({rotation:-308.5,x:356.1,y:43.4},0).wait(1).to({rotation:-317.6,x:345.1,y:43.2},0).wait(1).to({rotation:-326.6,x:334,y:43},0).wait(1).to({rotation:-335.6,x:322.9,y:42.7},0).wait(1).to({rotation:-344.7,x:311.8,y:42.5},0).wait(1).to({rotation:-353.7,x:300.6,y:42.2},0).wait(1).to({rotation:-362.8,x:289.4,y:42},0).wait(1).to({rotation:-371.8,x:278.2,y:41.7},0).wait(1).to({rotation:-380.9,x:267,y:41.6},0).wait(1).to({rotation:-389.9,x:255.8,y:41.4},0).wait(1).to({rotation:-399,x:244.4,y:41.2},0).wait(1).to({rotation:-408,x:233.2,y:41.1},0).wait(1).to({rotation:-417,x:221.8,y:41},0).wait(1).to({rotation:-426.1,x:210.4,y:40.9},0).wait(1).to({rotation:-435.1,x:198,y:40.8},0).wait(1).to({rotation:-444.2,x:189.6},0).wait(1).to({rotation:-453.2,x:177.1,y:40.9},0).wait(1).to({rotation:-462.3,x:165.6},0).wait(1).to({rotation:-471.3,x:154.3,y:41},0).wait(1).to({rotation:-480.4,x:143.1,y:41.1},0).wait(1).to({rotation:-487,x:131.8,y:41.2},0).wait(1).to({rotation:-493.7,x:120.6,y:41.4},0).wait(1).to({rotation:-500.3,x:109.4},0).wait(1).to({rotation:-507,x:98.2,y:41.5},0).wait(1).to({rotation:-513.6,x:87.1,y:41.6},0).wait(1).to({rotation:-520.3,x:75.9,y:41.8},0).wait(1).to({rotation:-527,x:64.8,y:41.9},0).wait(1).to({rotation:-533.6,x:53.8,y:42},0).wait(1).to({rotation:-540.3,x:42.7,y:42.1},0).wait(1).to({rotation:-546.9,x:31.6,y:42.2},0).wait(1).to({rotation:-553.6,x:20.6,y:42.3},0).wait(1).to({rotation:-560.2,x:9.5,y:42.4},0).wait(1).to({rotation:-566.9,x:-1.6},0).wait(1).to({rotation:-573.6,x:-12.5,y:42.5},0).wait(1).to({rotation:-580.2,x:-23.5},0).wait(1).to({rotation:-586.9,x:-34.6,y:42.6},0).wait(1).to({rotation:-593.5,x:-45.5},0).wait(1).to({rotation:-600.2,x:-56.5},0).wait(1).to({rotation:-606.8,x:-67.5},0).wait(1).to({rotation:-613.5,x:-78.5},0).wait(1).to({rotation:-620.1,x:-89.4},0).wait(1).to({rotation:-626.8,x:-100.4,y:42.5},0).wait(1).to({rotation:-633.5,x:-111.4,y:42.4},0).wait(1).to({rotation:-640.1,x:-122.4},0).wait(1).to({rotation:-646.8,x:-133.5,y:42.3},0).wait(1).to({rotation:-653.4,x:-144.5,y:42.2},0).wait(1).to({rotation:-660.1,x:-155.5,y:42.1},0).wait(1).to({rotation:-666.7,x:-166.5,y:41.9},0).wait(1).to({rotation:-673.4,x:-177.6,y:41.8},0).wait(1).to({rotation:-680.1,x:-188.7,y:41.6},0).wait(1).to({rotation:-686.7,x:-199.7,y:41.4},0).wait(1).to({rotation:-693.4,x:-210.8,y:41.3},0).wait(1).to({rotation:-700,x:-222,y:41.1},0).wait(1).to({rotation:-706.7,x:-233.1,y:41},0).wait(1).to({rotation:-713.3,x:-244.4,y:40.8},0).wait(1).to({rotation:-720,x:-255.3,y:40.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(509.2,286.3,667,99.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;