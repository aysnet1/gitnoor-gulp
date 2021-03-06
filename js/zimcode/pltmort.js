﻿  var scaling = "fit";

var assets = ["tab.png","pltmort.json","pltmort.png","exp2.png","ter1.png","ter.png","pltmort1.json","pltmort1.png",
"put.png","putv.png","pltviv.png" ,"racin.png","ra.png",
"cup1.png","cup2.png","mira.png","pwat.json","pwat.png"];
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
    label:"التجربة التالية",
    width:200,
    height:80,
    backgroundColor:"#37d65f",
    rollBackgroundColor:"MediumOrchid",
    borderWidth:2,
    borderColor:"violet",
    gradient:.3,
    corner:1
  }).addTo();
  btn2 = new Button({
    label:"اعادة التجربة",
    width:200,
    height:80,
    backgroundColor:"purple",
    rollBackgroundColor:"MediumOrchid",
    borderWidth:2,
    borderColor:"violet",
    gradient:.3,
    corner:1
  }).addTo().mov(200,0);
  startb = new Button({
    label:"انطلق الأن !",
    width:250,
    height:90,
    backgroundColor:"#da258b",
    rollBackgroundColor:"MediumOrchid",
    gradient:.5,
    corner:3
  }).addTo().mov(340,200);
  startb.visible=false

  qst = frame.asset("exp2.png").addTo().mov(0,80)




  // var physics = new Physics({borders:new Boundary(0,-stageH,stageW,stageH*2)});
  //  physics.remove(physics.borderTop);

 var s = 0.7;



     panel = new Panel({
       height: stageH/2+200 ,
       titleBar: "          النبتة"
     }).addTo(stage)
     panel.pos(stageW - panel.width, 0)
boundary = new Boundary(0,0,stageW,stageH).contract(90)
bplt1 = new Boundary(0,200,stageW/2,stageH-200)
bplt2 = new Boundary(stageW/2,200,stageW/2,stageH-250)






plt = new Container().setBounds(0,0,100,100).centerReg().sca(2)
plt2 = new Container().setBounds(0,0,100,100).centerReg().sca(2)

plt.x=71.98664440734561
plt.y=640.0033388981636
plt2.x=512
plt2.y=500.2938230383972

plante = new Sprite({json:frame.asset("pltmort.json")})
p2 = new Sprite({json:frame.asset("pltmort1.json")}).centerReg(plt2)
plante.centerReg(plt);
plt.drag({currentTarget:true,onTop:false,boundary:bplt1})
plt2.drag({currentTarget:true,onTop:false,boundary:bplt2})
racin = frame.asset("racin.png")
ra =  frame.asset("ra.png").centerReg(plt2).mov(10,26).sca(0.4)
ra.alpha=0
racin.centerReg(plt).mov(10,26)
racin.sca(0.4)
ter = frame.asset("ter.png").centerReg().sca(0.09)
ter1 = frame.asset("ter1.png").centerReg().sca(0.09)
ter1.x=70.49708284714119
ter1.y=697.29844120185
ter.x=512
ter.y=698.4466190578314

var test1 = test = false;
brt = new Rectangle(50,50,'transparent').centerReg(plt).mov(28,-68)

br = new Rectangle(50,50,'transparent').centerReg(plt2).mov(28,-68)

putm=new Container().setBounds(0,0,300,400).centerReg(stage).mov({x:-250,y:250}).sca(0.35)
 putv=new Container().setBounds(0,0,300,400).centerReg(stage).mov({x:200,y:250}).sca(0.35)
     a1=  frame.asset("putv.png").centerReg(putm)
     a2=  frame.asset("put.png").centerReg(putv)


   mira = new Container().setBounds(0,0,150,214).centerReg(stage)
   .drag({currentTarget:true,boundary:boundary})

m  = frame.asset("mira.png").centerReg(mira).sca(0.5)
pw =  new Sprite({json:frame.asset("pwat.json")}).sca(0.5).centerReg(mira).mov(-130,0)

   mira.x=921.8389731621937
   mira.y=650.4550758459743

pw.visible=false
mira.on("pressup",()=>{
 if ((plt.x==putm.x-15)  && (plt2.x==putv.x-15) && (ter.x==putv.x-20) && (ter1.x==putm.x-20)) {

   Ticker.add(()=>{
  if (mira.hitTestRect(brt) || mira.hitTestRect(br)){

mira.animate({
   props:{rotation:-45},
   time:100

})
pw.visible=true
pw.play()

rty=false;

}
else{
  mira.animate({
     props:{rotation:0},
     time:100

  })

  pw.visible=false


}
if (mira.hitTestRect(plt2)){
   test=true
}
if (mira.hitTestRect(plt)) {
  test1=true
}

if (test==test1) {
  startb.visible=true
 }

})

 }

});


// a one b : two , c : run Sprite
function lotme(a,b,c,x,y,t) {


   this.prez = a.on("pressmove",function() {
  if (a==plt2){
   if (a.hitTestBounds(b) ) {
        a.noDrag()
       a.animate({
            props:{
              x:x,
              y:y
            },

            time:t,
            events:true

      })
 c.drag({onTop:false,boundary:bplt2})

}
  } else {


  if (a.hitTestRect(b) ) {
      a.noDrag()
     a.animate({
          props:{
            x:x,
            y:y
          },

          time:t,
          events:true

    })
    if ((c == ter) || (c == ter1)){
     c.drag({onTop:false,boundary:bplt1})
   }

  }

}

  })

  this.cap = a.on("animation",()=>{
    a.off("pressmove",this.prez)

  })
}

bb2   =   new lotme(plt,putm,ter1,putm.x-15,putm.y-100,400)
bb3   =   new lotme(plt2,putv,ter,putv.x-15,putv.y-100,400)
tera1 =   new lotme(ter,putv,p2,putv.x-20,putv.y-48,400)
tera2 =   new lotme(ter1,putm,p2,putm.x-20,putm.y-48,400)



startb.on("click", function() {
p2.run({time:30000})
startb.animate({props:{alpha:0},time:5000})
 });

 btn1.on("click", function() {zgo("/pcolor.html");});
 btn2.on("click", function() {zgo("/pltmort.html");});

   stage.update();

}); // end of ready
