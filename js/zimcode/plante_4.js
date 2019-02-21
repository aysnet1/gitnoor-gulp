var scaling = "fit"; // this will resize to fit inside the screen dimensions
var width = 1000;
var height = 1000;
var color = "rgb(119, 97, 113)"; // or any HTML color such as "violet" or "#333333"


var frame = new Frame(scaling, width, height, color);
frame.on("ready", function() {
	zog("ready from ZIM Frame");

	var stage = frame.stage;
	var stageW = frame.width;
	var stageH = frame.height;




	frame.loadAssets(["a1.jpg","ina2.png","plante1.png"],"assets/images/team/");
	frame.on("complete", function() {


  plante=frame.asset("plante1.png").addTo(stage).sca(0.33)

  ina=frame.asset("a1.jpg").addTo(stage).sca(0.5)
		var list = new List({
   list:[plante, ina],
			 titleBar:"            الادوات",
			 titleBarBackgroundColor:orange,
			 titleBarColor:white,
			 titleBarHeight:40,
			 scrollBarActive:false,
			 currentSelected:false,
			 indent:20,
			 height:700,
			 viewNum:13.5,
			 boundary:new Boundary(0,0,stageW-200,stageH-200),
			 borderWidth:-1,
			 shadowBlur:-1,
			 backdropColor:white,


}).center().pos(-1,0)



var dg = function drag_it(obj_item,current){

	obj_item.on("mousedown", function(e) {
			current = e.target;
			current.copy = current.clone()
				.addTo()
				.pos(200.200)
				.drag();

			// 4. put the copy under the object we are dragging
			stage.setChildIndex(current, stage.numChildren-1);
			current.startX = copy.x = current.x;
			current.startY = copy.y = current.y;
			stage.update()

		});

		// 5. on a pressup, swap the two objects
		obj_item.on("pressup", function(e) {
			current = e.currentTarget;
			// swap positions

			// swapProperties("x", current, current.copy);
			// swapProperties("y", current, current.copy);
			stage.update();
		});



		}
		dg(plante);
 dg(ina);

stage.update();
	});
	frame.on("resize", resize);
		function resize(e) {
			stageW = frame.width;
			stageH = frame.height;



			stage.update();
		}
		resize();

	stage.update();

}); // end of ready
