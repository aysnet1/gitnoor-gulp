 var scaling = "fit";

var assets = ["table.jpg", "plante.png"];
var path = "assets/images/plante/";
var width = 1024;
var height = 768;
var pattern = pizzazz.makePattern({
        type:"slants",
        colors:makeSeries([frame.brown, frame.grey]),
        size:5,
        rows:20,
        cols:60,
        interval:500
    });
var bar = new ProgressBar({
        barType:"Rectangle",
        color:frame.dark,
        backingColor:frame.dark,
        backing:pattern,

        // corner:0,
        // borderColor:frame.blue,
        // borderWidth:10,
        // label:"LOADING",
        // labelPosition:"above",
        // padding:3,
        percentage:true,
        // fastClose:true
    });

var frame = new Frame(scaling, width, 768, null, null, assets, path,bar);
frame.on("ready", function() {


  var stage = frame.stage;
  var stageW = frame.width;
  var stageH = frame.height;
  frame.outerColor = "#444";
  frame.color= "white" ;

  // container item one tube +support cadre
  table = frame.asset("table.jpg").sca(.5).centerReg(stage);
  table.pos(0, 400);
  panel = new Panel({
    height: stageH,
    titleBar: "      أدوات التجربة"
  }).addTo(stage)
  panel.pos(stageW - panel.width, 0)

  plante = frame.asset("plante.png").sca(.2).centerReg(panel).drag({
    onTop: false
  });
  //
  plante.pos(50, 35)

  tf = new Rectangle(234, 279, "#fff0");

  // القارورة
  t1 = new Shape();
  t1.graphics.f().s("rgba(51,51,51,0.6)").ss(1, 1, 1).p("AK50EIAAdiIAAIpQAAB+iHAAIxiAAQiIAAAAh+Aq4JeIAA9i");
  t1.setTransform(119.5001, 196.703, 0.9555, 1.0252);

  t2 = new Shape();
  t2.graphics.f("rgba(102,102,102,0.588)").s().p("AoxUEQiHAAAAh9IAAopIAA9hIVxAAIAAdhIAAIpQAAB9iHAAg");
  t2.setTransform(119.5001, 196.703, 0.9555, 1.0252);


  // غطاء القارورة-- Vial-top
  t4 = new Shape();
  t4.graphics.f().s("rgba(0,0,0,0.6)").ss(2.9, 1, 1).p("Ak1jMQEOBYFdhYIAAGZIprAAg");
  t4.setTransform(119, 43.5);

  t5 = new Shape

  t5.graphics.f("rgba(51,51,51,0.498)").s().p("Ak1DNIAAmZQEOBYFdhYIAAGZg");
  t5.setTransform(119, 43.5);
  // stopper--

  // t6 = new Rectangle(54, 29).addTo(stage).drag({
  //   onTop: false
  // });
  // t7 = new Rectangle(27, 29, 'blue').addTo(t6);
  // t6.y = 250;
  // t6.x = 680
  // t6.regX = t6.width / 2;
  // t6.regY = t6.height;

  // الماء متحرك -- Water animated--

  eau = new Rectangle({
    width: 133,
    height: 255,
    color: "rgba(0,0,255,0.588)",
    corner: [0, 0, 12, 12]
  });
  eau.centerReg(tf)
  eau.x = 52.45 * 2 + 15;
  eau.y = 328;
  eau.regX = eau.width / 2;
  eau.regY = eau.height;

  eau.scaleY = 1;


  tmp1 = false;
  tmp2 = false;
  tmp3 = false;

  plante.on("pressup", function() {
    // 3. inside the function do a conditional for the hitTest
    if (plante.hitTestBounds(tf)) {
      tmp1 = true;

      plante.animate({
        props: {
          x: tf.x,
          y: tf.y - 60
        },
        ease: "linear",
        time: 400,
        set: {
          percentSpeed: 1
        }

      })
      plante.noDrag()

    }
    stage.update();
  });
  tf.on("pressup", function() {

    if (tf.hitTestBounds(table)) {
      tmp2 = true;
      tf.animate({
        props: {
          x: -(table.x + 150),
          y: table.y - tf.height
        },
        ease: "linear",
        time: 400,
        set: {
          percentSpeed: 1
        }
      })
      tf.noDrag()

    }
    stage.update();
  });
  // t6.on("pressup", function() {
  //
  //   if (t6.hitTestBounds(tf)) {
  //     tmp3 = true;
  //     t6.animate({
  //       props: {
  //         x: tf.x + 1.9,
  //         y: tf.y - 72
  //       },
  //       ease: "linear",
  //       time: 400,
  //       set: {
  //         percentSpeed: 1
  //       }
  //     })
  //
  //   }
  //   stage.update();
  // });



  // add vial to containe
  tf.addChild(eau, t1, t2, t4, t5)
  tf.sca(0.9)

  tf.centerReg(panel).drag({
    currentTarget: true
  });
  tf.pos(20, 250)
  if (plante.hitTestBounds(tf) == false || tf.hitTestBounds(table) == false) {
    tmp1 = tmp2 = false;

  }

  Ticker.add(function() {

    if (tmp1 & tmp2) {
      eau.animate({
        props: {
          scaleY: 0.5
        },
         events:true,
        dynamic:true,
        ease: "linear",
        time: 40000,

      })
    }

  });

  var label = new Label({
   text:"توقف",
   size:40,
   backgroundColor:"violet", //
   fontOptions:"bold"
});
var btn = new Button({
   label:label,
   width:250,
   height:90,
   toggle:'جرب الان',
   backgroundColor:"purple",
   rollBackgroundColor:"MediumOrchid",
   borderWidth:2,
   borderColor:"violet",
   gradient:.3,
   corner:1
});
 
 
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

btn1.on("click", function() {zgo("https://simz.netlify.com/plante_4.html");});

   stage.update();

}); // end of ready
