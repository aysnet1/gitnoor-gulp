

 var assets = ["battrey.png", "pil.png", "ll1.png", "lo1.png"];
 var path = "assets/images/circuit/";
 var width = 1024;
 var height = 768;


 var frame = new Frame("outside", 1024, 768, null, null, assets, path);
 frame.on("ready", function() {


   var stage = frame.stage;
   var stageW = frame.width;
   var stageH = frame.height;
   frame.outerColor = "#444";
   frame.color = "#99c1ff";

   battry = frame.asset('battrey.png').sca(0.5);
   pil = frame.asset("pil.png").pos(100, 400).sca(0.6);
   lamp_light = frame.asset("lo1.png").sca(0.3);
   lamp = frame.asset("ll1.png").pos(100, 400).sca(0.3);


   //   function Aysser(obj,x,y,sca) {
   //
   // kell= 	obj.on("mousedown", function (e) {
   //   current = e.target
   //   obj  =  current.copy = current.clone()
   //       .center()
   //       .sca(sca)
   //       .drag()
   //       .pos(x,y)
   //        obj.outline()
   //
   //
   //
   //
   //
   //  		// 4. put the copy under the object we are dragging
   //  		stage.setChildIndex(current, stage.numChildren-1);
   //  		current.startX = copy.x = current.x;
   //  		current.startY = copy.y = current.y;
   //  		stage.update();
   //
   //  	} );
   //   }
   //
   //    new Aysser(lamp,292,290,0.5)
   //     ad=  new Aysser(pil,400,290,0.8)
   //
   //
   // ar =new zim.Rectangle(300,400).center()
   // ar.gesture({
   //
   //
   //    minScale:.5,
   //    maxScale:3,
   //
   //
   // })








   list = new List({
     width: 200,
     height: stageH,
     list: [
       battry, pil, lamp
     ],
     borderWidth: 4,
     borderColor: "black",
     backdropColor: "#ffffff",
     close: false,
     scrollBarColor: "red",
     currentSelected: true,
     swipe: false,
     vertical: true,
     spacing: 0,
     align: "center",
   }).addTo();



   // function call => tap(call)

   fn = function(e) {
     curr = e.target
     curr.center(stage,1)

       .drag()


     stage.update();
   };

   battry.tap(fn)


   stage.update();

 }); // end of ready
