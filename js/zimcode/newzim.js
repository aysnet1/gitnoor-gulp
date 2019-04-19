var scaling = "fit"; // this will resize to fit inside the screen dimensions
var width = 1000;
var height = 800;
var color = dark; // or any HTML color such as "violet" or "#333333"
var outerColor = light;

var frame = new Frame(scaling, width, height, color, outerColor);
frame.on("ready", function() {
	zog("ready from ZIM Frame");

	var stage = frame.stage;
	var stageW = frame.width;
	var stageH = frame.height;
	var physics = new Physics({borders:new Boundary(0,-stageH,stageW,stageH*2)});
	 physics.remove(physics.borderTop);


	 bp = new  Squiggle({
	      color:'#color',
	      thickness:null,
	      length:null,
	      allowToggle:null,
	      selectPoints:null,
	      editPoints:null,
	       	// more parameter...


	 }).center(stage)
  loop(5,(i)=>{
      bp.pointCircles[i].addPhysics()
			bp.pointControls[i].addPhysics()

	})
	Ticker.add(()=>{

 bp.update()

	})
	 stage.update()
 })
