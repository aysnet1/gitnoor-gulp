
var scaling = "full"; // fit scales to fit the browser window while keeping the aspect ratio
var width = 800; // can go higher...
var height = 600;
var color = dark;
var outerColor = darker;
var assets = ["but.png", "f.png"];
var path = "assets/images/"
var frame = new Frame(scaling, width, height, color, outerColor, assets, path); // see docs for more options and info
frame.on("ready", function() {
	zog("ready from ZIM Frame");

	var stage = frame.stage;
	var stageW = frame.width;
	var stageH = frame.height;

	// the field is a bit bigger than the canvas (and made for 1024x768 not 800x600)
	// so we can pan the field as the butterfly moves from one side to the other
	// to start, we scale the field to the stage height and center it on the stage
	var field = frame.asset("f.png").scaleTo(stage, null, 100).center();

	// BUTTERFLY
	// we make a Sprite of the butterfly
	var butterfly = new Sprite({
		image:frame.asset("but.png"),
		cols:10, rows:4,
		// this spritesheet has transitional animations
		// and different directional loops due to the lighting
		// so frames 0-9 are the loop facing left, etc.
		animations:{left:[0,9], leftright:[30,39], rightleft:[20,29], right:[10,19]}
	})
		.centerReg(stage)
		// make the butterfly go up and down
		.animate({props:{regY:20}, time:1000, loop:true, rewind:true});

	// RUNNING THE SPRITE
	// normally we just run a sprite like so:
	// butterfly.run(500, "left");
	// but we want to run the transition animation if we change directions
	// and we want to wait until the current loop is at its end before we run the transition
	// so this makes it a little tricky ;-)
	// the technique is to use the loopCall to check to see if we want to change
	// newDir is being set in the setDirection function called by the controller "change" event
	// when we call swapDirection it runs the sprite which automatically stops the last running of the sprite
	// Note that we are running an animation series - so two animation objects
	// the second of which loops forever (or until run is called again and stops it)
	// we carefully called the animation series so that the lastDir+newDir will match the desired animation
	// We then make sure that we kickstart the swapDir by calling it

	var lastDir = "left";
	var newDir = "right";
	swapDir();
	function swapDir() {
		butterfly.run({label:[
			{time:400, label:lastDir+newDir},
			{time:500, label:newDir, loop:true, loopCall:function() {
				if (newDir != lastDir) swapDir();
			}}
		]});
		lastDir = newDir;
	}

	function setDirection(e) {
		if (e.dir == "right") newDir = "right";
		if (e.dir == "left") newDir = "left";
	};


	// CONTROLLERS
	// most of the time we will have a single controller
	// this example shows the types of controllers so we will store them in an array
	// and create them in a loop as we loop through the types of controllers
	var controllers = []; // stores the MotionController objects
	var controllerTypes = ["mousedown", "mousemove", "keydown", "gamebutton", "gamestick", "swipe"]
	var activeController; // store the active MotionController

	loop(controllerTypes, function(type, i) {
		// this is what a single controller would look like
		// just put the type you want (see the array above) as the type property value
		// target, type, speed, axis, boundary, map, diagonal, damp, flip, rotate, constant, firstPerson, turnSpeed, moveThreshold, stickThreshold, container, localBounds, mouseMoveOutside, mousedownIncludes, minPercentSpeed, maxPercentSpeed
		var controller = new MotionController({
			target:butterfly,
			type:type,
			speed:2,
			boundary:new Boundary(butterfly.width/2, butterfly.height/2, stageW-butterfly.width, stageH-butterfly.height),
			mousedownIncludes:field // to press on field if mousedown type
		});
		// set the mousemove controller to the activeController
		// and disable the rest (do not run multiple controllers at the same time)
		if (i==1) {
			activeController = controller;
		} else {
			controller.enabled = false;
		}
		// the setDirection will change the animation loop of the sprite
		controller.on("change", setDirection);
		controllers.push(controller);
	});

	// every once in a while, switch directions of the butterfly if we are not moving in the x
	// we do this by setting the newDir - and then the swapDir function will handle it
	function randomFly() {
		timeout(rand(1000, 8000), randomFly);
		if (!activeController.movingX) newDir = lastDir=="right"?"left":"right";
	}
	randomFly();


	// TABS
	// we set up tabs to switch between the MotionController objects
	// move the tabs down a little on the screen and put a black backing behind
	var topSpace = 20;
	var tabHeight = 40;
	var backing = new Rectangle(stageW, topSpace+tabHeight).addTo(stage);
	var tabs = new Tabs({
		width:stageW,
		height:tabHeight,
		tabs:controllerTypes,
		selectedBackgroundColor:brown,
		rollBackgroundColor:grey,
		backgroundColor:dark,
		selectedColor:dark,
		corner:25,
		inherit:{size:16} // pass along a size to Label
	}).pos(0, topSpace);
	tabs.selectedIndex = 1;

	// when we change we loop through and disable the controllers
	// we set the activeController to the tab's selectedIndex
	// we tell the new activeController to start at where ever the butterfly is
	// and we enable the activeController
	tabs.on("change", function(e) {
		loop(controllers, function(controller){controller.enabled = false;});
		activeController = controllers[tabs.selectedIndex];
		activeController.immediate(butterfly.x, butterfly.y);
		activeController.enabled = true;
	});


	// EXTRA
	// we make the butterfly smaller when it is higher up (farther away)
	// we also slow it down when it is smaller
	// and we shift the field as we move left and right
	// these all use ProportionDamp to map h the values with damping for smoothness
	// we set up the objects and then use their convert() method in a Ticker function
	var proportionSize = new ProportionDamp({
		baseMin:0, baseMax:stageH,
		targetMin:.5, targetMax:1
	});
	proportionSize.immediate(butterfly.y);
	var proportionSpeed = new ProportionDamp({
		baseMin:0, baseMax:stageH,
		targetMin:2, targetMax:5
	});
	proportionSpeed.immediate(butterfly.y);
	var proportionField = new ProportionDamp({
		baseMin:0, baseMax:stageW,
		targetMin:0, targetMax:-(field.width-stageW)
	});
	proportionField.immediate(butterfly.x);

	Ticker.add(function(){
		butterfly.sca(proportionSize.convert(butterfly.y));
		activeController.speed = proportionSpeed.convert(butterfly.y);
		field.x = proportionField.convert(butterfly.x);
	});
	frame.on("resize", resize);
	function resize(e) {
		stageW = frame.width;
		stageH = frame.height;

		// resize the layout
		layout.resize();

		stage.update();
	}
	resize(); // often want to call resize after page is made

}); // end of ready
