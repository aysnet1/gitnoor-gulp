var scaling = "full"; // this will resize to fit inside the screen dimensions
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
  frame.loadAssets(["bb.json", "bb.png", "bg1.png"], "assets/images/");
	frame.on("complete", function() {

		frame.asset("bg1.png",100).addTo(stage);

		var sprite = new Sprite({json:frame.asset("bb.json")})
			.center(stage)
			.sca(.5)
			.pos(-100, 180)
			.animate({
				props:{x:stageW},
				time:7000,
				loop:true,
				ease:"linear",

			})
			.run({time:1000, loop:true, id:"bb"});


		})


}); // end of ready
