  var scaling = "fit";

var assets = ["pcfin.json","tab.png", "pcfin.png","cublast.json","cublast.png","water.mp3"];
var path = "assets/images/plante/";
var width = 1024;
var height = 768;
var pattern = pizzazz.makePattern({
        type:"slants",
        colors:makeSeries(["brown",  "grey"]),
        size:5,
        rows:20,
        cols:60,
        interval:500
    });
var bar = new ProgressBar({
        barType:"Rectangle",
        color:"dark",

        backing:pattern,

        percentage:true,

    });

var frame = new Frame(scaling, width, 768, null, null, assets, path,bar);
frame.on("ready", function() {
   zog("تم تصميمها من قبل الاستاذين أيسر وماهر")


  var stage = frame.stage;
  var stageW = frame.width;
  var stageH = frame.height;
  frame.outerColor = "#444";
  frame.color= "white" ;
  // table
  table=new Container().center(stage).mov({y:((stageH*0.91)/2)});
  img= frame.asset("tab.png").centerReg(table)

  btn1 = new Button({
    label:"اعادة التجربة",
    width:250,
    height:90,
    backgroundColor:"purple",
    rollBackgroundColor:"MediumOrchid",
    borderWidth:2,
    borderColor:"violet",
    gradient:.3,
    corner:1
  }).addTo();

new Label({text:'التعليمة قم بوضع باقة الازهار في الكاس ثم لاحظ',size:30}).center().mov(0,-350)



  // var physics = new Physics({borders:new Boundary(0,-stageH,stageW,stageH*2)});
  //  physics.remove(physics.borderTop);

 var s = 0.7;



     panel = new Panel({
       height: stageH/2 ,
       titleBar: "      زهرة القرنفل"
     }).addTo(stage)
     panel.pos(stageW - panel.width, 0)
    colorPicker = new ColorPicker({
		width:260,
		cols:4,
		spacing:5,
		colors:["red", "blue", "yellow", "green"],
		buttonBar:false,
		alphaPicker:false,
		greyPicker:false,
		shadowBlur:0,

	}).addTo(stage).pos(stageW - 260, stageH-200);

  fc = new Container().setBounds(0,0,179,361).addTo()
 var cb=new Container().setBounds(-80,0,179,361).centerReg(stage).mov({x:0,y:225}).sca(0.8).tap(function (e) {
    cub.run(2000,color);
    frame.asset("water.mp3").play()
    
 });
 fc.mov(stageW-fc.width,0)

 fc.drag({currentTarget:true,onTop:false})

 // Sprite
 var plante = new Sprite({json:frame.asset("pcfin.json")}).centerReg(fc);
 var cub = new Sprite({json:frame.asset("cublast.json")}).centerReg(cb)

 fc.sca(0.9)
 label = new Label('ماء ملون').centerReg(cb)



//   traitment d'animation
var color=  colorPicker.currentValue
 cub.gotoAndStop(color)


 colorPicker.on("change", function() {
   color = colorPicker.currentValue;
   cub.gotoAndStop(colorPicker.currentValue)
 if (fc.hitTestRect(cub)) {
    plante.run(30000)

}







 stage.update()})


  // var radioButtons = new RadioButtons(50, ["أزرق", "أخضر", "أححمر","أصفر"]);
  //    radioButtons.



 prez = fc.on("pressmove",function() {

  if (fc.hitTestRect(cub)) {
       fc.noDrag()
    fc.animate({
          props:{
            x:cb.x-100,
            y:cb.y-300
          },
          time:400,
          events:true

    })


    cub.run(2000,color)
    plante.run(30000)
    frame.asset("water.mp3").play()
    }
})





  // // غطاء القارورة-- Vial-top
  // t4 = new Shape();
  // t4.graphics.f().s("rgba(0,0,0,0.6)").ss(2.9, 1, 1).p("Ak1jMQEOBYFdhYIAAGZIprAAg");
  // t4.setTransform(119, 43.5);
  //
  // t5 = new Shape()
  // t5.graphics.f("rgba(51,51,51,0.498)").s().p("Ak1DNIAAmZQEOBYFdhYIAAGZg");
  // t5.setTransform(119, 43.5);
  // // stopper--

  // t6 = new Rectangle(54, 29).addTo(stage).drag({
  //   onTop: false
  // });
  // t7 = new Rectangle(27, 29, 'blue').addTo(t6);
  // t6.y = 250;
  // t6.x = 680
  // t6.regX = t6.width / 2;
  // t6.regY = t6.height;

  // الماء متحرك -- Water animated--

  // eau = new Rectangle({
  //   width: 133,
  //   height: 255,
  //   color: "rgba(0,0,255,0.588)",
  //   corner: [0, 0, 12, 12]
  // });
  // eau.centerReg(bout)
  // eau.x = 52.45 * 2 + 15;
  // eau.y = 328;
  // eau.regX = eau.width / 2;
  // eau.regY = eau.height;
  //
  // eau.scaleY = 1;

//
//
//
//
//
//     stage.update();
//
//
//
//
//
//
//
//   // bout.addChild(eau,   t4, t5).drag()
//   // bout1 = bout.clone()
//   //
//   // bout1.mov({y:10})
//   // // bout2.addChild(eau, t1, t2, t4, t5)
//   // // bout3.addChild(eau, t1, t2, t4, t5)
//   //
//   //
//   //
//   // // bout.centerReg(panel).drag({
//   // //   currentTarget: true
//   // // });
//   // bout.centerReg(stage)
//
//
//   bout.on("pressup", function() {
//
//     // if (bout.hitTestBounds(table)) {
//     //  boutc = bout.clone()
//     //  boutc.centerReg(table)
//     //
//     // }
//
//   });
//
//
//   plante.on("pressup", function() {
//
//    if (bout.hitTestBounds(table)  &  plante.hitTestBounds(bout) )
//      { eau.animate({
//         props: {
//           scaleY: 0.5
//         },
//
//         time: 6000,
//         wait:2000
//     })
//     }
//   });
//
//
// plante.sca(s)
//





//    var label = new Label({
//    text:"توقف",
//    size:40,
//    backgroundColor:"violet", //
//    fontOptions:"bold"
// });
// var btn = new Button({
//    label:label,
//    width:250,
//    height:90,
//    toggle:'جرب الان',
//    backgroundColor:"purple",
//    rollBackgroundColor:"MediumOrchid",
//    borderWidth:2,
//    borderColor:"violet",
//    gradient:.3,
//    corner:1
// });



btn1.on("click", function() {zgo("/plante_4.html");});


   stage.update();

}); // end of ready
