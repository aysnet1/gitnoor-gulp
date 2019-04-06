 var scaling = "fit";

 var assets = ["battrey.png", "pil.png", "ll1.png", "lo1.png"];
 var path = "assets/images/circuit/";
 var width = 1024;
 var height = 768;


 var frame = new Frame(scaling, width, 768, null, null, assets, path);
 frame.on("ready", function() {


   var stage = frame.stage;
   var stageW = frame.width;
   var stageH = frame.height;
   frame.outerColor = "#444";
   frame.color = "#99c1ff";

   battry = frame.asset('battrey.png').addTo(stage).pos(100, 100).sca(0.5);
   pil = frame.asset("pil.png").addTo(stage).pos(100, 400).sca(0.6);
   lamp_light= frame.asset("lo1.png").pos(400, 200).sca(0.3);
   lamp = frame.asset("ll1.png").pos(100, 400).sca(0.3);

  function Aysser(obj,x,y,sca) {
     var current;
 	obj.on("mousedown", function(e) {
 		current = e.target;
 		current.copy = current.clone()
      .center()
      .sca(sca)
      .drag()
       .pos(x,y);

 		// 4. put the copy under the object we are dragging
 		stage.setChildIndex(current, stage.numChildren-1);
 		current.startX = copy.x = current.x;
 		current.startY = copy.y = current.y;
 		stage.update();
 	});
  }

    new Aysser(lamp,292,290,0.5)







   bbb = new List({
     width: 200,
     height: stageH,
     list: [
       battry, pil, lamp,lamp_light
     ],
     borderWidth: 4,
     borderColor:"black",
     backdropColor:"#ffffff",
     close: false,
     scrollBarColor:"red",
     currentSelected:true,
     swipe:false,
     vertical: true,
     spacing: 0,
     align: "center",
   }).addTo();

   // 1. make object


	// 3. on mousedown copy and set copy to drag


   stage.update();

 }); // end of ready
