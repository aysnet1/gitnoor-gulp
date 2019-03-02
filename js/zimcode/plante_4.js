var scaling = "full";

var assets = ["table.jpg","plante1.png"];
var path = "assets/images/plante/";



var frame = new Frame(scaling, null, null,null,null,assets,path);
frame.on("ready", function() {


  var stage = frame.stage;
  var stageW = frame.width;
  var stageH = frame.height;
  // container item one tube +support cadre
     table = frame.asset("table.jpg").sca(.5).centerReg(stage);
      table.pos(0,300);

      plante = frame.asset("plante1.png").sca(.2).centerReg(stage).drag({onTop:false});

      plante.pos(700, 70)
   tf = new Rectangle(234,279,"#fff0");

  	var bounds = new Boundary(100,80,700,400);
      t1 = new Shape();
    	t1.graphics.f().s("rgba(51,51,51,0.6)").ss(1,1,1).p("AK50EIAAdiIAAIpQAAB+iHAAIxiAAQiIAAAAh+Aq4JeIAA9i");
    	t1.setTransform(119.5001,196.703,0.9555,1.0252);

      t2 = new Shape();
      t2.graphics.f("rgba(102,102,102,0.588)").s().p("AoxUEQiHAAAAh9IAAopIAA9hIVxAAIAAdhIAAIpQAAB9iHAAg");
      t2.setTransform(119.5001,196.703,0.9555,1.0252);



    	t4 = new Shape();
    	t4.graphics.f().s("rgba(0,0,0,0.6)").ss(2.9,1,1).p("Ak1jMQEOBYFdhYIAAGZIprAAg");
    	t4.setTransform(119,43.5);

    	t5 = new Shape();
    	t5.graphics.f("rgba(51,51,51,0.498)").s().p("Ak1DNIAAmZQEOBYFdhYIAAGZg");
    	t5.setTransform(119,43.5);

  eau = new Rectangle({width:133, height:255, color:"rgba(0,0,255,0.588)", corner:[0, 0, 12,12]});
  eau.centerReg(tf)
  eau.x=52.45*2+15;
  eau.y=328;
  eau.regX= eau.width/2;
  eau.regY= eau.height;

  eau.scaleY = 1;
 var label= "جرب الان"
var  btn = new Button(300,100,label).addTo(stage).pos(1000,100)


plante.on("mousedown", function() {
		 tf.carry = false;
	});

	plante.on("pressup", function() {
		// 3. inside the function do a conditional for the hitTest
		if (plante.hitTestBounds(tf)) {
	    plante.x =tf.x
      plante.y= tf.y-50

      btn.on("mousedown",function () {
      eau.animate({props:{scaleY:0.5},ease:"linear",time:40000,set:{percentSpeed:1}})
    });


		}
stage.update();
	});



  // add tube to containe
  tf.addChild(eau,t1,t2 ,t4,t5)
  tf.sca(0.9)

tf.centerReg(stage).drag({boundary:bounds,currentTarget:true});
var border = new Rectangle(bounds.width+10+tf.width, bounds.height+10+tf.height, null, "#666", 1, 0, null, true)
		.pos(0, -1);
   slider = new Slider(1,10).pos(1000, 10);

    slider.on("change", function () {
      eau.percentSpeed= Math.floor(slider.currentValue*10)
      label.text=   "تسريع :" + Math.floor( slider.currentValue)

    });

    var label = new Label({
       text:"تسريع : "+1 ,
       size:20,
       font:"courier",
       color:"black",
       rollColor:"red",
       fontOptions:"italic bold",
     });
       label.pos(1000, 50);



 // tf.on("pressup", function(e) {
 //
 //
 //
 //     if (tf.hitTestReg(table)  ) {
 //       zog("hhhh")
 //
 //
 //
 //       var point = table.localToLocal(table.x, table.y, tf);
 //       tf.animate({x:point.x, y:point.y}, 100);
 //
 //       result = "done"
 //     } else {
 //       zog("bb")
 //
 //       result=""
 //     }
 //
 //   if (result == "done") return;
 //   zog("3")
 //
 //   // 9. if the object hits no targets then move the target back to the startX and startY
 //   tf.animate({x:tf.startX, y:tf.startY}, 300);
 // });

 // 10. optional highlight the target if they are eligable for drop - use a pressmove event


  // new list item
  // if add sup to list show the message §§
  // console.error() ===>width needs bounds set with setBounds()  "Cannot read property 'width' of undefined" ;
  // var list = new List({
  //   list: [sup],
  //   titleBar: "items",
	//
  //   viewNum: 3
	//
  // }).center().pos(-1, 0)


  // fn drag item list
  // var dg = function drag_it(obj_item, current) {
  //
  //   obj_item.on("mousedown", function(e) {
  //     current = e.target;
  //     current.copy = current.clone()
  //       .addTo()
  //       .pos(200.200)
  //       .transform()
  //       .drag()
  //
  //
  //     stage.setChildIndex(current, stage.numChildren - 1);
  //     current.startX = copy.x = current.x;
  //     current.startY = copy.y = current.y;
  //     stage.update()
  //
  //   });
  //
  //
  //   obj_item.on("pressup", function(e) {
  //     current = e.currentTarget;
  //
  //     stage.update();
  //   });
  //
  //
  //
  // }
  //dg(sup); // call fn drag(item)
  frame.on("resize", resize);
  	function resize(e) {
  		stageW = frame.width;
  		stageH = frame.height;



  		stage.update();
  	}
  	resize();




  stage.update();

}); // end of ready
