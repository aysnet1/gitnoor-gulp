  var scaling = "fit";

var assets = ["tab.png","supeau.png","plteau.png","water.mp3"];
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
   zog("تم تصميمها من قبل الاستاذين أيسر وماهر");
   zog("thank you Dan Zen")


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

qst = new Label({text:"التّعليمة: قم بوضع النبتة في الأنبوب ثم راقب",size:30}).center().mov(0,-350)



  // var physics = new Physics({borders:new Boundary(0,-stageH,stageW,stageH*2)});
  //  physics.remove(physics.borderTop);

 var s = 0.7;



     panel = new Panel({
       height: stageH/2+200 ,
       titleBar: "          النبتة"
     }).addTo(stage)
     panel.pos(stageW - panel.width, 0)


var   plt = new Container().setBounds(0,0,179,361).addTo().sca(0.8)
  plt.scaleY=1.2
 var sup=new Container().setBounds(0,0,210,600).centerReg(stage).mov({x:10,y:140}).sca(0.7).tap(function (e) {

    frame.asset("water.mp3").play()

 });
 plt.mov(stageW-(plt.width+40),-15)

 plt.drag({currentTarget:true,onTop:false})

 // Sprite
 var plante = frame.asset("plteau.png").centerReg(plt);
 var seau = frame.asset("supeau.png").centerReg(sup)



eau = new Rectangle(210,420,"#0033cc50")




eau.regX=eau.width/2
eau.regY=eau.height

eau.center(sup)
eau.mov(9,-64)

tp1= new Rectangle(108,50,"#133E52").addTo(sup).mov(7,20)

tp1.reg(tp1.width,tp1.height)

tp2= new Rectangle(108,50,"#133E52").addTo(sup)
tp2.x= sup.width+74
tp2.y=20
tp2.reg(0,tp1.height)



 prez = plt.on("pressmove",function() {

  if (plt.hitTestRect(sup)) {
      plt.noDrag()
    plt.animate({
          props:{
            x:sup.x-70,
            y:sup.y-350
          },

          time:400,
          events:true

    })

  frame.asset("water.mp3").play()


   tp1.animate({
         props:{
           rotation:180
         },
         wait:500,
         time:400,
         events:true

   })
   tp2.animate({
         props:{
           rotation:-180
         },
          wait:500,
         time:400,
         events:true

   })
   eau.animate({
         props:{
           scaleY:0.4
         },
          wait:2000,
         time:40000,
         events:true

   })

  }

  })




plt.on("animation",()=>{
  plt.off("pressmove",prez)

})



btn1.on("click", function() {zgo("/peau.html");});


   stage.update();

}); // end of ready
