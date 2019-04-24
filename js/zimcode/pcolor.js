  var scaling = "fit";

var assets = ["plm.json","tab.png","racin.png", "plm.png","cubm.json","cubm.png","water.mp3"];
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
    stage.update();
 });
 fc.mov(stageW-(fc.width+40),-15)

 fc.drag({currentTarget:true,onTop:false})

 // Sprite
 var plante = new Sprite({json:frame.asset("plm.json")}).centerReg(fc);
 var cub = new Sprite({json:frame.asset("cubm.json")}).centerReg(cb)
 racin = frame.asset("racin.png").centerReg(fc).mov(18,170)
 racin.sca(0.7)
 plante.sca(2)

 cub.sca(2.2)
 fc.sca(1)

 label = new Label('ماء ملون').centerReg(cb)



//   traitment d'animation
var color=  colorPicker.currentValue
 cub.gotoAndStop(color)




 colorPicker.on("change", function() {
   color = colorPicker.currentValue;
   cub.gotoAndStop(colorPicker.currentValue)

    if (fc.hitTestRect(cub)) {

     plante.run(30000,color)
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
    plante.run(30000,color)
  frame.asset("water.mp3").play()

  stage.update()
  }

  })




fc.on("animation",()=>{
  fc.off("pressmove",prez)

})



btn1.on("click", function() {zgo("/plante_4.html");});


   stage.update();

}); // end of ready
